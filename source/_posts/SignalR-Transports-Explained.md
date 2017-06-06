---
title: SignalR Transports Explained
categories:
  - Development - ASP.NET
permalink: signalr-transports-explained
date: 2015-08-17 21:52:00
---

When I sit down to talk to people about SignalR, a common discussion we have is around transports and what the difference between them are.  While SignalR gives you the flexibility to choose your own transport, it is often a better bet to simply allow the library to choose for you.

## How does SignalR determine which transport to use?

There are two pieces of the puzzle that need to be evaluated before a transport is chosen.  The **client** and the **server**.  Keep in mind, a SignalR client can be something other than JavaScript.. and the server can be something not running on IIS.  

If you [head over to SignalR documentation](http://www.asp.net/signalr/overview/getting-started/introduction-to-signalr#transports), they provide a really great overview on how SignalR chooses a transport.

A simple way to explain the process is this:  

1. If you're using legacy browser (IE8 or later.. *cough*)... use Long Polling.  
2. Do you need JSONP support?  Yes?  Long polling, for you.
3. Okay okay.  Let's try Websockets!  This works well IF:
    * You're not doing JSONP
    * You're not going cross-domain
    * You ARE going cross-domain AND client supports CORS (Cross-Origin Resource Sharing).
    * Client supports WebSockets **(IE10+, Chrome, Firefox, Safari, etc)**
    * Server supports WebSockets **(IIS 8.0+ or self-hosted SignalR)**
4. No WebSockets?  Sorry.  Give Server Sent Events a try (most likely on non-IE browsers).
5. No SSE?  Try Forever Frame (IE browsers).
6. No FF? MORE LONG POLLING!

## What are the pros and cons of each transport type?
Excellent question!  Let's walk through the list worse-case to best-case.

### Long Polling
Long polling is a game of hurry up and wait.  During this process, you are opening up a pipe (AJAX call) for the server to use for possible future communication.  Anytime the server needs to send a message, the existing connection can be used.

However, when a connection is used, the connection is closed.  In order to continue communicating with the server, a client will need to reestablish the connection.  In a best case scenario, the server is continuously sending data, so a connection is always reestablishing.  Worse case, the connection stands open for up to two minutes (default timeout on most browsers).  The process of continuously opening and closing connections can be a bit of a strain on the server.

Long polling works well on old browsers, including some browsers which should have died ten years ago.  This is the final fallback position if no other acceptable transport can be used.

### Forever Frame
Warning: Forever Frame (FF) is Internet Explorer only, but it's really interesting how this process works.  When a connection is established with FF, a hidden Iframe is created on the page.  However, the page loaded into the Iframe is special.  The connection will never closed.

Since the connection remains open forever, the server can use it to continuously send new script.  These scripts are loaded and executed on the parent page.  

Any client to server communication needs to be done the traditional way, via AJAX calls.

### Server Sent Events
Some technologies stand the test of time, and Server Sent Events (SSE) is a great example.  SSE is a server to client communication protocol developed in the Netscape days.  It creates an object called an EventSource, which is a pipe from the server to the client.  Anytime the server needs to send data, the EventSource pipe can be used.  

SSE is supported on all browsers, except Internet Explorer (sorry, but you have Forever Frame).  Just as Forever Frame, if the client needs to communicate back with the server, a traditional AJAX call will need to be made.

### WebSockets
Holy.  Grail.  Seriously.  There is nothing better than WebSockets.  When a WebSocket connection is made, there is a one-to-one connection between the client and server.  Both are capable of communicating on the existing pipe.  

Of course, you are technically limited by the browser and server being used for a connection.  Internet Explorer 9 and older need not apply (IE10+ are the only versions with WebSockets support).  Firefox, Chrome, and Safari generally have no problems.

For .NET folks deploying to IIS, you better be sure you are using IIS version 8 (or greater).  IIS7 did not have support for WebSockets.

## Pulling It All Together
As you look at the various transports available, you should start to appreciate what SignalR is doing for you underneath the scenes.  What would happen if you had to implement all these different scenarios yourself?