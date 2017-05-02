---
title: 'Review: Everleap'
categories:
  - Reviews
permalink: everleap
date: 2014-10-20 17:43:01
---

*For this review, I am being provided a free account at Everleap for hosting my user group, the Hampton Roads .NET Users Group. If you are interested in a place to host your own group’s site, please talk to the folks at Everleap!*

*This review is also cross-posted at http://www.codeproject.com/Articles/827619/Review-Everleap*

*Interested in trying Everleap out for yourself?  Head [here](http://www.everleap.com/a/kevgriffin).*

Something I haven't had to do in a while is shop around for a hosting provider. To be perfectly honest, since Windows Azure starting offering Websites, there has been little need for me to look elsewhere.  With our user group, it has been a hassle to host the site with my personal Azure account.  It was natural for us to start looking at alternatives that didn’t tie the group site to me.

## What is Everleap? ##
Everleap is a hosting service by the good folks who brought us DiscountASP.NET. It is promoted as a reliable, scalable, and affordable hosting platform built on top of the Windows Azure Pack.  

The Windows Azure Pack is a framework that allows hosting providers to leverage the same technology behind the Windows Azure platform.  

With traditional hosting, you are normally locked into a plan with limited resources. If you were to use more than the resources you were provided, either your site would be taken offline or you would be charged for the overages.

Cloud services revolutionized the industry by giving us the opportunity to deploy applications once and scale the resources depending on our use cases. If you need more resources, scale up. If you need fewer resources, scale down. Pay for what you use!

Everleap offers all of the above, but at a low, fixed monthly rate. Need extra resources? Everleap offers the "power pack" which gives you a bump in resources without breaking the bank.

## Setting up an account ##
Sign up is painless. Give your name, email, and credit card information and select the type of plan you want to sign up for.

For my review, I was provided with a complementary license for Everleap’s “Cloud Websites” offering.  This option provides me with one website, scalable across 2 servers.  There is also an option for “Mulit-Domain Cloud” which gives you the ability to manage up to five websites across two servers.  Resources and bandwidth limitations still apply for both, but the limits are not unreasonable.

One of my largest gripes is that Everleap doesn't let you choose a login name for yourself. After you sign up and confirm all your information, you're left with just a login prompt.
 
To get a username, you are supposed to check your email where you realize you have been assigned a random username.  I’ve been told by Everleap associates that this is on the product backlog to correct.
 
![Everleap Welcome Email](https://griffcdn.blob.core.windows.net/kevgriffinpublic/everleap-1.png)

## Exploring the Control Panel ##

A great way to describe the control panel for Everleap is "clean".
 
![Hosting Overview](https://griffcdn.blob.core.windows.net/kevgriffinpublic/everleap-2.png)
 
![Cloud Website Overview](https://griffcdn.blob.core.windows.net/kevgriffinpublic/everleap-3.png)

Everleap does a great job of giving you "at a glance" information about your sites. How much hard drive space is it taking up? How much bandwidth have you used this month?
 
![Site tools](https://griffcdn.blob.core.windows.net/kevgriffinpublic/everleap-4.png)

Do you need to take the site down or want to recycle the process? Easy use buttons are on the right of the screen, ready to serve you.
Over in site settings, I had a bit of a weird déjà vu feeling. Going through each section, the settings available to me were identical to those your get in Windows Azure. This is great though! It is a huge benefit of Everleap being built on top of the Azure Pack.
 
![General settings](https://griffcdn.blob.core.windows.net/kevgriffinpublic/everleap-5.png)

The settings also give away a couple hints about the type of applications we can deploy to Everleap. On one screen, there is an option for PHP and for Classic ASP. You are not tied to just building ASP.NET applications.

Most exciting for me is the App Settings screen where one of the options is WEBSITE\_NODE\_DEFAULT_VERSION. A quick double check of https://www.everleap.com/cloud-hosting/web-sites/overview/ shows that node.js is supported and encouraged!

## Deploying an Application ##
Everleap provides three ways to deploy your application.
  
●	FTP  
●	Web Deploy  
●	Git  

For FTP and WebDeploy, Everleap provides you with a publish profile to use within Visual Studio. Simply click "Download" next to either option, and save the file somewhere safe.
 
![FTP and Web Deploy](https://griffcdn.blob.core.windows.net/kevgriffinpublic/everleap-6.png)

Setting up web deploy in Visual Studio is painless. Right click on your web project, and select Publish.

![Publish options are in Visual Studio](https://griffcdn.blob.core.windows.net/kevgriffinpublic/everleap-7.png)
 
![The Publish Web Dialog will import settings from Everleap](https://griffcdn.blob.core.windows.net/kevgriffinpublic/everleap-8.png)

If you've never published this project before, you will want to "Import" a publish profile. Select the publish profile you downloaded earlier, and Visual Studio will pre-fill all the options with settings from Everleap.

Press "Publish" and Visual Studio will connect to Everleap, upload all your files, and perform any additional configuration needed (such as setting database strings, etc).

## Scaling ##
Depending on the popularity of your application, you might have the need to scale. With traditional hosting platforms, this is where you can hit a wall. With Everleap, scaling is as easy as saying you need "2" cloud servers instead of "1".
 
![One server, or two](https://griffcdn.blob.core.windows.net/kevgriffinpublic/everleap-9.png)

This change doesn’t happen instantly, and Everleap does not communicate the progress between moving from 1 to 2 servers.  When I started performance testing, I had to wait about 5 minutes after pressing “Update” until the second server was allocated for me. 
Everleap associates made me aware of a backlog issue to implement a system-wide notification system, which would easily correct the issue I had above.

## Performance ##
When testing a hosting solution, I like to see how it performs under stress. To test Everleap, I created two different tests.  These tests are not meant to be exhaustive.  My goal is to see how Everleap handles a decent amount of load over time.  The site deployed for this test is the sample ASP.NET application Visual Studio generates.  

### Test 1: 0 to 1000 clients over 1 minute ###

This is a test I like to run in order to see how well my site will perform as more and more people start connecting to it.

![Load of 1000 clients over 1 minute](https://griffcdn.blob.core.windows.net/kevgriffinpublic/everleap-10.png)

This test did very well.  The spike in response time at the beginning of the test is due to ASP.NET warm up, but afterwards the response time does a good job of saying underneath 250ms.  Our average for this test was 134ms, is nothing to scoff at.  The server was performing as expected!

### Test 2: 5000 clients per second over 1 minute ###
 
![One server, 5000 connections per second over one minute](https://griffcdn.blob.core.windows.net/kevgriffinpublic/everleap-11.png)

This test sent a constant load of 5,000 client connections to the server over a 1 minute period. Imagine your website being posted on Reddit, Slashdot, or Good Morning America. The demand for your page would be immediate over a short period of time. In fact, when I discuss performance with clients, this is a use case we always imagine. You never want your site to error when it is hitting critical mass.

The average response time hovered around 133ms, which is really good!

There were 280k successful requests made, and 19k errors (500 status). The error rate of 6.4% should be concerning, but not unwarranted. We are throwing a lot of traffic at one server, and there is only so much traffic a server can take.

The second part of the test was to scale the environment to 2 servers.

![Two server, 5000 connections per second over one minute](https://griffcdn.blob.core.windows.net/kevgriffinpublic/everleap-12.png)

The response time went from 133ms average to 73ms average and we eliminated all of the errors we were receiving before. Everleap did a great job dealing with the traffic.

## Conclusions ##

Everleap did a great job of giving me what I want from a hosting provider.

●	Quick, easy registration  
●	Multiple, dependable methods of deployment  
●	Configuration options  
●	Scalable  
●	Performant  

During the process of evaluating Everleap, I had coffee with a friend of mine who is a fellow consultant. We discussed the differences between traditional hosting, cloud providers, and then Everleap.

Everleap popped out as an excellent alternative for him over Windows Azure, since his clients react better to fixed pricing than having to deal with usage scenarios.

If you're looking for the power and flexibility of Windows Azure and you need the pocket friendliness of a monthly fixed price, then you shouldn't look any farther than Everleap.

You can visit their site to find out more about the [Everleap](http://www.everleap.com/a/kevgriffin) Cloud.
