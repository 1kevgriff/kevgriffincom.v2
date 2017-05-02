---
title: Maintaining SignalR ConnectionId&rsquo;s Across Page Instances
categories:
  - Development
permalink: maintaining-signalr-connectionids-across-page-instances
date: 2012-02-15 10:00:52
---

<strong> 2/28/2013 - With the 1.0 release of SignalR, I can't guarantee the solution below will work the same.  The big problem with this solution is that ConnectionIds are reused across tabs and browser windows since it's cookie based.  You might not have the results you're expecting.  The SignalR team doesn't recommend this action, and I can agree.  I didn't see it when I wrote the post.  This is a decent guide for overriding the connection id factory, so I'll leave it up for archival purposes.</strong>

I’m a huge fan of SignalR, and today I was looking at a particular <em>problem</em>.  I would think it’s more of a feature, but in certain use cases it can be considered a bug.

When you start a connection to SignalR for the first time, you are assigned a ConnectionId.  SignalR uses this to determine what messages should go to you, and allows the server to direct messaging at a particular user.

If you were to refresh the page, SignalR will assign you a NEW ConnectionId.  This could be good or bad… but if you’re trying to maintain some sense of state between your clients and the hub, it’s bad.

So I looked into how to make SignalR reuse ConnectionIds in the case of a page refresh.  There are really two steps involved.
<h2>1) Set a cookie on the client</h2>
When you start() a new connection, SignalR will return a ConnectionId.  You’ll want to set a cookie with that ConnectionId in it.
<pre>    $.connection.hub.start().done(function () {
        alert("Connected!");
        var myClientId = $.connection.hub.id;
        setCookie("srconnectionid", myClientId);
    });

    function setCookie(cName, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = cName + "=" + c_value;
    }</pre>
As you can see, this gets the ConnectionId from the hub connection and stores it in a cookie.

2) Use your own IConnectionIdFactory

This might be scary territory for you, but it’s actually pretty simple.  We want to create our own version of the IConnectionIdFactory interface for SignalR to use.
<pre>    public class MyConnectionFactory : IConnectionIdFactory
    {
        public string CreateConnectionId(IRequest request)
        {
            if (request.Cookies["srconnectionid"] != null)
            {
                return request.Cookies["srconnectionid"];
            }

            return Guid.NewGuid().ToString();
        }
    }</pre>
This does two things.  First, it’ll check your cookie for a ConnectionId it should use.  If it exists, we’ll simply return that ConnectionId and all will be good in the world.

If the cookie does NOT exist, we need to generate one.  By default, SignalR uses a GUID, so we’ll just repeat that functionality.  You can use any value you want, but make sure it’s unique.

Don’t forget to wire it up!  Add this to you Global.asax file under Application_Start().
<pre>AspNetHost.DependencyResolver.Register(typeof(IConnectionIdFactory), () =&gt; new MyConnectionFactory());</pre>
And you’re all set!  SignalR will now use your new ConnectionIdFactory to generate or reuse ConnectionIds.

Enjoy!