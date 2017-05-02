---
title: Why should ASP.NET developers consider SignalR for ALL projects?
categories:
    - Development
permalink: why-should-asp-net-developers-consider-signalr-for-all-projects
date: 2012-07-09 07:00:07
---

The concept of the “static” web went away a long time ago.  When web developers started looking towards jQuery to build “ajax” web applications, we hit a wall where an instance of a page was a dynamic object to be manipulated.

This turned even more when the first HTML5 specs came down the line, and we were introduced to WebSockets.  An amazing idea: a client application being able to connect directly to a server for communication purposes.  I’ve said it before: <em>software development works in a circle.</em>  If you’ve ever written a client-server application, you know what I mean.  In my 9th grade computer science class, I wrote a version of Battleship that used Berkley sockets to communicate peer to peer with a computer over the network.  Fourteen years later, I’m doing the same thing again but on the web.

The problem we face when dealing with technologies like WebSockets is that it’s not universally supported across all browser and server stacks.  If we focus on .NET developers, the majority of us are running web applications on IIS version 6 or 7.  WebSockets are only officially supported on IIS version 8.

If your users are using IE6-9, you’re also at a loss.  Internet Explorer 10 is the only Microsoft browser to support WebSockets out of the box.  Chrome, Firefox, Safari, and Opera users don’t need to worry – they’re covered.

So if we can’t have WebSockets, can we still have a rich peer to peer communication stack like WebSockets? <strong>YES.</strong>

There are various ways to implement solutions.  For example, a long time ago I used to implement ‘Interval Polling’ on my applications.  On a standard interval, say 60 seconds, I would go to the server and request new data.  If the server has data to return, that was the time to do it.  If not, the cycles are wasted.  Obviously, this is a huge bandwidth drain and the overhead of each call is cumbersome.

Other solutions include long polling, which is the same as interval polling, except the request remains open until the server decides to return data or until the connection times out.  Then there is Server Sent Events, which don’t even ask me about.  I understand it’s based off some old Netscape technology, but that’s about it.

There are a lot of solutions.  Some only work on newer browsers.  It’s a chore: how do you support multiple clients without tons of code rewrite?

<strong>The answer my friends, is SignalR</strong>

SignalR is a framework for building asynchronous applications.  For web developers, that means I can build applications that break the request-&gt;response cycle of the web and move to more of a one-on-one connection that old client server architectures used to offer.

The mistake a lot of developers make is assuming that SignalR is strictly for web.  That’s incorrect.  For you server infrastructure, ASP.NET is the most common way to building your applications.  However, you can also self host SignalR and also host using the OWIN standard.

As far as clients are concerned, JavaScript is the main way.  In fact, when I demo SignalR it’s 100% all JavaScript.  I do make a point of touching on the fact that SignalR is also support in Silverlight, Windows Phone, iOS, OSX, and even in regular ol’ C#.  If you have a single server implementation, you can use multiple clients to connect to it.

<strong>Ok, Griff.  This must complicated to code, right?</strong>

I would be a bad blogger if I just left you hanging.  Here’s my 5 minute SignalR demo for you:

[tube]http://www.youtube.com/watch?v=tEBaDo_sFfA[/tube]

The video does a really good job of showing you all the steps.  There are two parts to a basic SignalR application.  First is the server side, which we build a construct called a <strong>Hub</strong>.  Think of a Hub as a central location for all connections for your application.

Like code?  Here is ALL the C# I write to implement a server-side function:
<pre>public class ChatHub : SignalR.Hubs.Hub
    {
        public void BroadcastMessage(string message)
        {
            // rebroadcast the message to all the connected clients
            Clients.writeMessage(message);
        }
    }</pre>
The most confusing thing here might be this mysterious <em>Clients</em> object.  The Clients object is dynamic, meaning you can set properties or call methods on it that might not really exist physically.  SignalR will take all those calls and translate them into messages that are sent to each client currently connected to the hub.

Here’s a look at the code over on the client:
<pre>&lt;script type="text/javascript" src="~/Scripts/jquery.signalR-0.5.2.js"&gt;&lt;/script&gt;
    &lt;script type="text/javascript" src="SignalR/Hubs"&gt;&lt;/script&gt;
    &lt;script type="text/javascript"&gt;
        $(document).ready(function () {
            var chat = $.connection.chatHub;
            chat.writeMessage = function (msg) {
                $("#messages").append("&lt;li&gt;" + msg + "&lt;/li&gt;");
            }

            $("#buttonSubmit").click(function () {
                chat.broadcastMessage($("#txtInput").val());
            });

            $.connection.hub.start();
        });
    &lt;/script&gt;</pre>
The request to the SignalR JavaScript file is straight forward, but then there is this magical request to <em>SignalR/Hubs</em> that you might be wondering about.  This file is dynamically generated by SignalR.  It gives your page all the information it needs to talk back to any Hubs you might have created.  Because of this, I can use the object <em>$.connection.chatHub</em> and JavaScript doesn’t throw a fit.  It’s a real object!

I use the chatHub object in two different ways.  First, I create a new function off of it called writeMessage.  This is called <strong>from the server</strong>.  WAT?  Yes!  If you look at the hub code above, I’m calling <em>Clients.writeMessage<strong> </strong></em>and the client has a method called <em>writeMessage</em>!

Just below that is a call to<em> chat.broadcastMessage.  </em>Look back at the hub, the method broadcastMessage is defined!  The circle of life is complete.

Ok.  LASTLY, there is this call to <em>$.connection.hub.start()<strong>.  </strong></em>This method kicks off the transport negotiation between your server and client.  Websockets?  Long pollings?  Blah blah blah.  You can override all this stuff, but just let SignalR do what it does best.

<strong>And there you have it!</strong>

SignalR is extremely easy to use, and I’m definitely recommending it as a replacement for 90% of the .NET AJAX work I’m seeing done in the community.  Take a couple minutes, download the package via NuGet and try it out for yourself.  You won’t be disappointed.

Feel free to ask any questions, and hit me up on the Twitters <a href="http://twitter.com/1kevgriff">@1kevgriff</a>.