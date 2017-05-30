---
title: 'Exploring C# 7.0: Out Variables'
permalink: exploring-csharp70-out-variables
categories:
  - "Development - C#"
date: 2016-11-08 18:41:48
---

_In this series, I want to explore a couple of the new C# 7.0 features coming down the pipeline.  As with most things, I am working with preview bits, so these features are not guaranteed to work the same way in production._

Using the out keyword within C# is nothing new. If you declare a variable within a method called with **out**, you are instructing the compile that you are expecting the method to set the values of those at runtime.

<script src="https://gist.github.com/1kevgriff/5beb9283714ed97ef5f16999c55b7afd.js"></script>

Commonly the problem is that you have to declare the variable before the method call using out. In C# 7.0, there is the concept of out variables, which will save you a couple keystrokes by allowing you to declare the variable inline.

The above example can be quickly refactored:

<script src="https://gist.github.com/1kevgriff/b688355a8085c648a50d91d1d09020d6.js"></script>
