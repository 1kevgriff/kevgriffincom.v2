---
title: Preloading Multiple Audio Tags in Internet Explorer 9
tags: |-

  - audio
  - chrome
  - html5
  - ie
  - internet explorer
permalink: preloading-multiple-audio-tags-in-internet-explorer-9
id: 717
updated: '2012-11-01 17:48:12'
date: 2012-11-02 06:00:59
---

I had a unique problem.  I have an app I'm working on where I needed to preload about 50 audio files for use during the page's lifetime.  If you're up on your HTML5-fu, this is a simple task:

<pre>
&lt;audio id="myAudio" controls preload="auto"&gt;
     &lt;source src="/my-podcast.mp3" /&gt;
     &lt;source src="/my-podcast.ogg" /&gt;
&lt;/audio&gt;
</pre>

In Chrome, this works PERFECTLY (as it should).

In Internet Explorer, several (if not all) files will fail to preload.  Here's how to figure it:

<pre lang="javascript">
var audioElement = document.getElementById("myAudio");
console.log(audioElement.networkState);
</pre>

Network state can have 3 options: <strong>NETWORK_EMPTY, NETWORK_IDLE, NETWORK_LOADING, NETWORK_NO_SOURCE.</strong>

You "want" it to be IDLE, because that means the file is loaded.  Typically, you'll get NO_SOURCE with Internet Explorer.

What's a quick fix?  First, make sure there is no preload attribute, and then do this:

<pre lang="javascript">
var audioElement = document.getElementById("myAudio");
audioElement.load(); // kicks off the load
</pre>

This has worked for me in 100% of the tests I've done tonight.  Feel free to comment on other solutions.  I haven't tested in IE10 yet, so I cannot be certain of how it works.