---
title: 'Review: NCache by Alachisoft'
tags: |-

  - ncache
  - review
  - .NET
  - c#
  - cache
  - caching
permalink: review-ncache
id: 791
updated: '2016-08-24 12:12:41'
date: 2016-08-22 18:44:15
---

As a consultant, I will typically walk into situations I refer to as “application triage”. The issues are many, but there are recurring issues that tend to stick out.

*“Pages take too long to load.”*

*“We are seeing database timeouts.”*

*“We are afraid to scale with more users because we can’t guarantee the application won’t crash.”*

Are any of these hitting a nerve? Maybe even making your eye twitch a little? The reason, of course, are these are common issues developers face in applications. It does not matter if you are serving 100 users or 10,000.

I once had a client who came to me with the “page takes too long to load” scenario. Luckily, only a couple of the views were affected by slowdowns. That being said, it was apparent that not only did the page take too long to load, but it was possible that the entire application would freeze while a transaction was in progress. Additional requests would queue up, causing the server to struggle while fulfilling all of the new traffic. Peak times during the day were a constant nightmare because paying customers physically could not use the site!

What did we do to solve the issue? After some heavy research, it was discovered that the root cause of our problem was a slow SQL query. The quick answer was to add a layer of caching to the application. Since our query results didn’t change all that often, except maybe a couple times per day, it made sense to cache the results of the heavy queries. This dramatically reduced the timeouts and slowdowns of our system.

While our solution was custom built, we could have been better served by implementing an off-the-shelf caching solution.

Introducing NCache
==================

NCache by Alachisoft is a distributed cache solution for .NET and Java. It comes in three flavors: “Open Source”, “Professional”, and “Enterprise”. For this review, I worked with the Enterprise edition of the suite. It is worth reviewing [Alachisoft’s edition comparison page] (http://www.alachisoft.com/ncache/edition-comparison.html) to ensure that you are using the right edition for your uses.

What is “distributed” cache? This is a bit of a loaded question, and your head might begin to hurt a little trying to interpret all the moving parts. Think about it like this: In a cloud-centric world, we have the ability to infinitely scale machines up or down depending on the traffic requirements of our applications. As my traffic increases, my resource demands increase and my application can compensate. Historically speaking, however, trying to scale something such as SQL Server is easier said than done.

What if we did something different? Instead of trying to scale the data source itself, what if we could take several lower-end machines, sync them together, and have quick access to the results of our queries without having to bombard the source? I’m making a complex topic sound trivial, but this is the exact scenario where NCache excels.

NCache provides several configurations for clustered caches designed to give you flexibility. It is beyond the scope of this review to explain them all to you, but I recommend you watch some of the [overview videos on Alachisoft’s website] (http://www.alachisoft.com/resources/product-videos.html) to educate yourself.

Setup and Configuration
=======================

With a review such as this, it is always best to start with the installation and configuration process. Admittedly, I did run into a small hiccup here. The installation process required elevated rights in order to properly install the license. The installer, I came to discover, did not throw an error and allowed me to continue forward to an “installation successful” screen. The issue didn’t become apparent until I tried to create my first cache, and NCache told me I did not have a valid license.

Thankfully though, the support staff at Alachisoft were simply amazing. Within a couple hours, they got me back on track with a good license and I was able to start exploring NCache.

After a successful installation, you will notice NCache dumps a lot of tools inside of your Start menu. Many of these are simply shortcuts to specific utilities for starting or stopping services, adding or removing clients, etc. A couple of these tools worth noting:

NCache Manager
--------------

This is NCache’s management GUI. Coming from the perspective of someone who has never used NCache previously, it was welcoming to have a GUI for navigation.

>Note: if you are a command line junkie, command line commands are available, and can accomplish the same tasks as the GUI.

For most developers, this will be your starting point for creating your first clustered cache or local cache. In both scenarios, there is a wizard-driven interface to help you decide the type of cache you want to create. When I attempted to create my first clustered cache instance, it took only a couple seconds to configure across multiple servers.

>Fun note: there is a Visual Studio add-on that will do essentially the same thing. If you live in Visual Studio, this is a must have.

StressTest Tool
---------------

Sometimes the hardest question to answer after spending time configuring your tools is: “will this work?”. For other types of solutions, you would not know until you had written code to use against the server.

NCache comes with a stress testing tool designed to answer the “does it work?” question and also the question of what kind of throughput should you expect from your new cache solution.

NCache Monitor
--------------

Getting into the gritty details of performance tweaking often means absorbing yourself into performance counters. NCache comes with its share of counters that will measure all aspects of your cache architecture.

NCache Monitor will give you a simple interface for watching these counters.

NCache as a Cache Solution
==========================

It is worth taking a look at how NCache actually works as a caching solution. I went into the review with a set of expectations, but NCache managed to wow me with several features I had never considered.

When building out a caching strategy, it is important to take into account the process of expiring data. For example, something like employee data might only change every few months. ASP.NET Session state should expire with a couple of minutes of inactivity, but it could last for hours or even days. NCache has several options for setting the properties of when cache objects should expire. Some can expire on an absolute timespan; others can have a sliding expiration based on the last time they were updated.

Wouldn’t it be cool if you didn’t really need to invalidate the cache though? NCache provides several features to tap NCache directly into the databases where data is persisted. This means NCache can update objects in the cache from the database when it detects changes have occurred. On top of that, you could safely use NCache as your primary means of data access. If NCache doesn’t immediately have access to the object in cache, it can quickly retrieve the correct object from the database. This persistence can even be two-way! If you update an object in the cache, NCache can automatically commit the update to the database on your behalf.

Lastly, NCache also adopts an easy to use locking mechanic to protect data from dirty reads or writes. Any key in the cache can be locked, preventing other parts of the application to read or write data to the cache.

Coding Against NCache
=====================

I have worked with other types of caching solutions in the past, and they all use a similar key/value store mechanism. It is good to remember that a cache isn’t meant to be like a SQL query that requires hundreds or thousands of operations to determine the correct output.

A cache is supposed to act more like a reflex. If I ask “give me details for employee 757”, then the cache should just spit out the value associated with “employee:757” or whatever key format you use. No querying should be required.

NCache takes this approach, and extends it immensely. Two features I explored in particular were tags and groups.

Tagging works like this: If I have an object in cache, I can add tags or relatable information to it. For example, if I was working with a data store of events, each event had a tag for the year it occurred, the type of event it was (arts, concert, sports, etc), and the city and state it was being held in. You might see the correlation. I could tag on the properties that I would commonly have to query the database for.

Once the appropriate tags are in place, I can ask NCache to give me all events with the tags “2016”, “Concert”, and “Norfolk, VA”.

In addition to tagging, there is a similar concept for grouping cached items. Grouping provides a hierarchy over data stored in your cache. If we grouped events by their types (concert, sports, etc), it is easy for us to quickly pull the corresponding objects out of the cache. You can optionally subgroup your data too. If I have a groups of “concerts”, it is understandable that I could subgroup them further by “rock”, “country”, or “rap”.

NCache’s goal is to help you quickly move data in and out of your cache.

As a long time .NET developer, it was nice to see that NCache is easily injectable into your application via a package in NuGet.

The development interfaces for programming against NCache could use a little bit of modernization. For example, in the various calls to the NCache server you are transferring data in terms of serializable objects. This causes you to spend time casting to and from the appropriate data types. In .NET, it would be preferable for there to be generic versions of the standard Get, Add, and Insert commands. The syntactic sugar provided by generics would make the APIs much easier to work against.

I was very happy to see there was support for asynchronous operations within NCache. However, NCache does not use the typical async/await workflow that .NET developers have become accustomed to over the past several years. Instead, NCache uses an event-based callback workflow that is similar to how async was done in .NET ten years ago. It gets the job done, but it is not how I want to build asynchronous applications.

Plug and Play
=============

If you do not have the resources available to rewrite significant portions of your application, you would do well to investigate a couple of the plug and play features provided by NCache.

I have a presentation that I will commonly give on the top performance tweaks to make within ASP.NET applications. I always have to mention Session State, View State, and Output Caching.

First of all, my standard advice is you should not use session state or view state within your greenfield applications. From an architectural standpoint, they are outdated techniques and essentially go against how web applications should work. From a performance standpoint, they severely limit your ability to scale your web applications.

I will always caveat this point by saying, if you have to use either session state or view state in your applications, it is important to move it outside of the ASP.NET process. NCache luckily comes with a built-in provider which will maintain session state and view session instances within cache. No code required! For a brownfield application, the playing field has grown considerably.

Lastly, it is good practice to implement ASP.NET Output Caching on all of your views in your application. Even on views that are highly volatile and subject to changes, having a 1 or 2 seconds cache can pose amazing performance results. In highly active web applications, simply yanking content out of cache is faster than trying to re-render the same view hundreds of times. NCache also has plug and play support for Output Cache. A couple lines edited in your web.config and everything is ready to go.

Conclusion
==========

As a consultant, I am always looking at ways to improve my clients’ projects without requiring a massive amount of time and effort to deploy. Some applications are ten-year-old legacy apps that need a helping hand. In contrast, there are others that are brand new greenfield architectures that need to be built to survive the next ten years. Caching is progressively becoming an important part of any tech stack.

NCache provides an excellent enterprise-level caching solution that would greatly enhance any application it was paired with. Download the trial version of NCache at <http://alachisoft.com> and try it for yourself!

*Disclaimer: For this review, I was paid a fee for my time to review NCache. I performed this review using an evaluation copy of NCache enterprise, which is available to anyone who wishes to take advantage of it. Download your trial at http://www.alachisoft.com.*