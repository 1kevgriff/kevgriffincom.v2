---
title: Why should ASP.NET developers consider SignalR for ALL projects?
tags: |-

  - ASP.NET
  - c#
  - javascript
  - real time
  - signalr
permalink: why-should-asp-net-developers-consider-signalr-for-all-projects
id: 711
updated: '2015-05-21 10:14:05'
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

<style>
._form {
position:relative;
background:#fff;
width:400px;/*F*/
padding:0!important;
text-align:left;
margin-left: auto;
margin-right: auto;
}
._form em {
color:#9a9a9a;
}
._form a {
margin-left:3px;
}
._form ._field,
._form ._field ._label,
._form ._type_radio,
._form ._type_checkbox,
._form ._type_captcha,
._form ._field table {
background:none;
}
._form ._field {
position:relative;
width:100%;
cursor:move;
font-style:normal;
margin:1.2em 0;
padding:0;
overflow:hidden;
}
._form ._field input[type="text"] {
width:95%;
padding:8px;
font-size:16px;
border:1px solid #b6b6b6;
}
._form ._field ._label {
display:block;
margin:0 0 0.5em;
padding:0!important;
font-size:15px;
}
._form ._field ._option input[type="checkbox"],
._form ._field ._option input[type="radio"] {
position:relative;
width:13px;
height:13px;
margin:-4px 0 0 1px;
cursor:pointer;
vertical-align:middle;
}
._form ._field ._option input[type="submit"],
._form ._field ._option input[type="button"] {
margin:0;
cursor:pointer;
height:35px;
width:auto;
font-size:15px;
}
._form ._field ._option select {
display:block;
margin:0;
padding:0;
width:auto;
font-size:15px;
border:1px solid #b6b6b6;
}
._form ._type_radio ._option,
._form ._type_checkbox ._option {
font-size:13px;
font-weight:normal;
line-height:1.8;
}
._form ._type_date ._option input[type="text"] {
float:left;
width:100px;
}
._form ._type_date ._option input[type="button"] {
width:37px;
height:36px;
margin-left:5px;
padding:20px;
background:url(http://kevingriffin.activehosted.com/admin/css/../images/icon_calendar.gif) no-repeat 0 0;
border:none;
outline:none;
text-indent:-9999px;
}
._form ._type_captcha img {
float:left;
margin:0 6px 0 0;
width:70px;
height:33px;
border:1px solid #b6b6b6;
}
._form ._type_captcha input[type="text"] {
margin:-14px 0 0 0!important;
width:25%;
}
._form ._field table {
width:100%!important;
}
._form ._field table tbody tr td {
width:50%!important;
font-size:15px;
}
._form {
width:400px;/*F*/
padding:16px!important;
background:#eff9fd;
color:#2c2c2c;
font-weight:normal;
border:1px solid #c4d5da;
-webkit-border-radius:4px;
-moz-border-radius:4px;
border-radius:4px;
}
._form #notice {
margin:10px 0 0 -3px!important;
padding:0;
color:#959c9f;
font-size:11px;
font-family:helvetica,arial,sans-serif;
}
._form #notice a, ._form #notice a:visited {
color:#959c9f;
text-decoration:underline;
}
._form ._field,
._form ._field ._label,
._form ._type_radio,
._form ._type_checkbox,
._form ._type_captcha,
._form ._field table {
background:none;
}
._form ._field {
position:relative;
width:100%;
cursor:default;
font-style:normal;
margin:0 0 16px!important;
padding:0!important;
overflow:hidden;
}
._form ._field input[type="text"],
._form ._field input[type="email"] {
width:97%;
margin:0!important;
padding:4px!important;
font-size:16px;
border:1px solid #b4c5cb;
border-top:1px solid #a5b4b9;
-webkit-border-radius:3px;
-moz-border-radius:3px;
border-radius:3px;
}
._form ._field ._label {
margin:0 0 0.3em!important;
color:#546f79;
font-size:14px;
font-family:helvetica,arial,sans-serif;
font-weight:700;
}
._form ._field ._option {
margin:0;
padding:0;
color:#546f79;
font-size:13px;
font-family:helvetica,arial,sans-serif;
font-weight:normal;
line-height:20px;
}
._form ._type_header ._label {
width:100%;
font-style:normal;
font-size:20px!important;
line-height:24px;
color:#546f79;
margin:0 0 5px!important;
padding:0 0 10px!important;
overflow:hidden;
border-bottom:1px solid #e0e0e0;
}
._form ._type_input ._option textarea{
width:97%!important;
background:#fafafa;
border:1px solid #b4c5cb;
border-top:1px solid #a5b4b9;
-webkit-border-radius:3px;
-moz-border-radius:3px;
border-radius:3px;
}
._form ._field ._option input[type="submit"],
._form ._field ._option input[type="button"] {
width:auto;
margin:10px 0 0!important;
padding:8px 15px!important;
cursor:pointer;
font-family:helvetica,arial,sans-serif;
font-weight:700;
font-size:16px;
color:#ffffff;
background:#82aebe;
border:1px solid #6a9eb0;
border-bottom:1px solid #5f8e9f;
-webkit-border-radius:4px;
-moz-border-radius:4px;
border-radius:4px;
text-shadow:0px 1px 1px #5f8e9f!important;
}
._form ._type_input ._option input[type="submit"]:hover,
._form ._type_input ._option input[type="button"]:hover {
background:#6494a6;
}
._form ._type_radio ._option label {
display:inline;
font-size:16px;
font-weight:normal;
line-height:18px;
}
._form ._type_radio ._option label input[type="radio"] {
position:relative;
width:13px;
height:13px;
margin:-4px 0 0 1px!important;
cursor:pointer;
vertical-align:middle;
border:none;
line-height:18px;
}
._form ._type_date ._option input[type="text"] {
float:left;
width:100px;
}
._form ._type_date ._option input[type="button"] {
float:left;
width:24px;
height:24px;
margin:2px 0 0 5px!important;
padding:0;
background:url(http://kevingriffin.activehosted.com/admin/templates/form-themes/simple-blue/images/icon_calendar.gif) no-repeat;
border:none;
outline:none;
text-indent:-9999px;
}
._form ._field ._option select {
display:block;
margin:0;
padding:0;
width:auto;
font-size:16px;
border:1px solid #cce0e7;
}
._form ._type_captcha img {
float:left;
width:88px;
height:44px;
margin:0 6px 0 0;
border:1px solid #cce0e7;
}
._form ._type_captcha input[type="text"] {
margin:0!important;
width:40%;
font-size:16px;
}
._form ._field table {
margin:0;
padding:0;
border-collapse:collapse;
width:100%!important;
table-layout:fixed;
margin-bottom:18px;
font-size:13px!important;
border-collapse:collapse;
border-spacing:0;
}
._form ._field table td {
padding:0 10px 0 0!important;
line-height:18px;
text-align:left;
font-size:13px!important;
color:#606060;
}
._form ._type_input ._option table tbody#_forward_rcpt input {margin:0 0 5px 0!important; width:96%!important;}
._form ._type_input ._option table tbody#_forward_rcpt img.image_addrcpt {cursor:pointer;}
.form_errors{
text-align:center;
font-size:15px;
margin:10px;
color:#900;
font-family:Arial, Helvetica, sans-serif;
font-weight:bold;
margin-bottom:20px;
}
</style>
<form action='//kevingriffin.activehosted.com/proc.php' method='post' id='_form_1025' accept-charset='utf-8' enctype='multipart/form-data'>
<input type='hidden' name='f' value='1025'>
<input type='hidden' name='s' value=''>
<input type='hidden' name='c' value='0'>
<input type='hidden' name='m' value='0'>
<input type='hidden' name='act' value='sub'>
<input type='hidden' name='nlbox[]' value='2'>
<div class='_form'>
<div class='formwrapper'>
<div id='_field88'>
<div id='compile88' class='_field _type_input'>
<div class='_option'>
<p>
I really hope you enjoyed this post, and I especially hope you learned something new today because of it.  
</p>
<p>
If you don't mind, I would love to send you more great knowledge packed emails (promise no more than 1 per week!). 
</p>
<p>
<strong>
Sign up below!
</strong>
</p>
</div>
</div>
</div>
<div id='_field86'>
<div id='compile86' class='_field _type_input'>
<div class='_label '>
Full Name
</div>
<div class='_option'>
<input type='text' name='fullname' >
</div>
</div>
</div>
<div id='_field78'>
<div id='compile78' class='_field _type_input'>
<div class='_label '>
Email *
</div>
<div class='_option'>
<input type='email' name='email' >
</div>
</div>
</div>
<div id='_field79'>
<div id='compile79' class='_field _type_input'>
<div class='_option'>
<input type='submit' value="Subscribe">
</div>
</div>
</div>
</div>
<div class="preview_part">
<div id="notice">
<a href="http://www.activecampaign.com/" title="email marketing" target="_blank">email marketing</a>
by activecampaign
</div>
</div>
</div>
</form>