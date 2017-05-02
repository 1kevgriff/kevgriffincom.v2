---
title: Using Unity for Dependency Injection with SignalR
categories:
    - Development
permalink: using-unity-for-dependency-injection-with-signalr
date: 2013-01-08 06:00:31
---

I've had bit of a day, and a large part of it was learning how to wrangle SignalR into using my dependency injection provider (in this case, being Unity).  There are a couple thoughts, that I'd like to communicate to you all in case you're looking to do the same thing.  Also, if you have suggestions on what I could do differently, I'm more than open to hearing.  This is solution that worked for me, and I'm hoping it'll work for you.

<strong>NOTE: This is built using SignalR v1.0-RC, which is a Prerelease NuGet package.  I'll try to update if this changes after release.</strong>

First, what do we want to do?
<pre lang="csharp">public class MyHub : Hub
{
   public MyHub(ISomeInterface interface)
   {
      // handle constructor injection here
   }
}</pre>
There's a hub, but it doesn't have a default constructor.  I'd like to be able to have SignalR automatically INJECT the constructor requirements when we load a new instance of the Hub.

There are TWO things we need to do.  First, we need to build our container (with Unity) and tell SignalR to use it.
<pre lang="csharp">        public static void Initialise() // this isn't my misspelling, it's in the Unity.MVC NuGet package.
        {
            var container = BuildUnityContainer();

            var unityDependencyResolver = new UnityDependencyResolver(container);

            // used for MVC
            DependencyResolver.SetResolver(unityDependencyResolver);
            // used for WebAPI
            GlobalConfiguration.Configuration.DependencyResolver = new Unity.WebApi.UnityDependencyResolver(container);
            // used for SignalR
            GlobalHost.DependencyResolver = new SignalRUnityDependencyResolver(container);
        }

        private static IUnityContainer BuildUnityContainer()
        {
            var container = new UnityContainer();

            // register all your dependencies here.
            container.RegisterType&lt;ISomeInterface, SomeInterface&gt;();

            return container;
        }</pre>
Simple enough. You might want to know what SignalRUnityDependencyResolver looks like:
<pre lang="csharp">public class SignalRUnityDependencyResolver : DefaultDependencyResolver
    {
        private IUnityContainer _container;

        public SignalRUnityDependencyResolver(IUnityContainer container)
        {
            _container = container;
        }

        public override object GetService(Type serviceType)
        {
            if (_container.IsRegistered(serviceType)) return _container.Resolve(serviceType);
            else return base.GetService(serviceType);
        }

        public override IEnumerable&lt;object&gt; GetServices(Type serviceType)
        {
            if (_container.IsRegistered(serviceType)) return _container.ResolveAll(serviceType);
            else return base.GetServices(serviceType);
        }

    }</pre>
What's going on here? We're creating a new SignalR dependency resolver, and inheriting from the default dependency resolver that SignalR uses. When SignalR goes to resolve a dependency, we're first going to ask Unity if it has an existing implementation. If it does not, we pass the request on to SignalR to get its default (if one is available).

Why do we have do this? First, you can just replace the IoC container altogether, but I have had no luck registering all the various types that SignalR uses. This was by far an easier approach.

You'd like to think everything will just work now, right? Wrong. The dependencies in your hub still will not injected. My understanding is that this is by design, so here's how to work with it.
<pre lang="csharp" class="crayon-selected">private static IUnityContainer BuildUnityContainer()
        {
            var container = new UnityContainer();

            container.RegisterType&lt;ISomeInterface, SomeInterface&gt;();
            container.RegisterType&lt;MyHub&gt;(new InjectionFactory(CreateMyHub));

            return container;
        }

        private static object CreateMyHub(IUnityContainer p)
        {
            var myHub= new MyHub(p.Resolve&lt;ISomeInterface&gt;());

            return myHub;
        }</pre>
This should be simple to follow. I'm registering a new type: MyHub, and telling Unity how to create a new instance of it. Creating it involves resolving the interface myself, and creating the new instance. This instance gets routed through SignalR and eventually executed.

I'm also a user of StructureMap and Ninject, and I need to sit down to figure out this same process with those frameworks (if I even need to).  If you already have experience with them, let me know what you did.