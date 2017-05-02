---
title: Simple HTML Formatting in Sublime Text
categories:
  - Development
permalink: simple-html-formatting-in-sublime-text
id: 730
updated: '2013-02-27 05:17:35'
date: 2013-02-27 06:00:16
---

One common questions I've asked and seen asked quite a bit about Sublime Text is how to quickly and easily format HTML while editing.  There isn't a default key binding for this, but if you select all text and then go to:
<pre class="lang:default decode:true">Edit -&gt; Lines -&gt; Reindent</pre>
Want to create your own keybinding?  Go to Preferences, Key Bindings - User and add this line:
<pre class="wrap:true lang:js decode:true">{ "keys": ["ctrl+shift+r"], "command": "reindent" , "args": {"single_line": false}}</pre>
Enjoy!