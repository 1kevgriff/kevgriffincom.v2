---
title: 'Node.js: Using require to load your own files'
tags: |-

  - javascript
  - node.js
  - npm
  - require
permalink: node-js-using-require-to-load-your-own-files
id: 724
updated: '2012-12-29 18:50:28'
date: 2012-12-31 06:00:31
---

For a lot of JavaScript developers that are moving over from traditional "browser" development to node.js, they might be casually aware of the require keyword that node.js provides you.

If you're wondering what I'm talking about, allow me to explain.  In node.js, you can use the node package manager (NPM) to install packages that your application can use.  <a href="http://expressjs.com/" target="_blank">Express</a>, for example,<a href="http://expressjs.com/" target="_blank"> </a>is a great framework for serving up web applications, and you can grab it via NPM.

To load Express into your application, you tell node.js that you "require" it be loading into memory.
<pre lang="javascript">var express = require("express");</pre>
Node follows a couple rules to find modules.  First, you can ask for a module by <strong>name </strong>or by <strong>folder.  </strong>Let's look at Express more closely.  If you were to download Express via NPM, you'd find there is no <em>express.js</em> file in the root directly of the /node_modules/express folder.  However, there is a <em>package.json</em> file that defines the main executable file for express (for fun, go look it up).

Now, if packages.json doesn't exist or the main executable isn't present, node will resort to looking for your filename with either a <strong>.js</strong>, <strong>.json</strong>, or <strong>.node</strong> extension (unless you've specified).
<h2>Where's this going?</h2>
I know, I know... the point.

Let's say you want to abstract out a piece of your application into another file.
<pre lang="javascript">var userRepository = function (){
   var self = this;
   self.addUser = function (...){
   };
   self.get = function (...){
   }
};

module.exports = userRepository;</pre>
Add this to a file called <strong>userRepository.js</strong>. The last line is VERY IMPORTANT! It tells node.js what you'd like to export from this file. This should make more since if you try to use the file.

In your main.js or wherever you'd like to use userRepository:
<pre lang="javascript">var userRepository = require("userRepository.js");

var userRepositoryInstance = new userRepository();
userRepositoryInstance.addUser({...});
userRepositoryInstance.get(...);</pre>
Looks simple doesn't it? Pretty much whatever you assign to <strong>module.exports</strong> will be passed into the variable that calls require().

Use this to keep your code clean and uncluttered.  This is only the basics of using require for your own projects, but I think it's a great starting point for developers building their knowledge of node.js.  In the future, I'd like to expand on this topic and show you how you can take this even farther.