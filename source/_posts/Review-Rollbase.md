---
title: 'Review: Rollbase'
categories:
  - Reviews
permalink: rollbase
id: 756
updated: '2014-11-05 11:45:08'
date: 2014-10-26 23:00:23
---

> Disclaimer: For this review, I was paid a fee for my time to review Progress Rollbase.  I performed this review using the standard 30-day trial, which is available to anyone that wishes to take advantage of it.

[Progress Rollbase](https://www.progress.com/products/rollbase)  is the next evolution of rapid application development (RAD) by Progress Software. Instead of releasing a traditional client-side package, Rollbase provides RAD tools in the form of a Platform-as-a-Service (PaaS). Rollbase provides cloud-based development, deployment and runtime support for both web and mobile applications. Applications can be developed and deployed on a public cloud, private cloud (on-premise) or hybrid model. Rollbase is free to try for 30 days, with no features disabled. I definitely recommend you give it a try to see if it meets your needs.

## Registration
The signup process is quick and easy.  I provided a little bit of personal information, but nothing like credit card information.  While I was trying out only Rollbase, when you create an account, you are registering for the full Progress Pacific package.  This gives you the opportunity to trial, and later pay for the other tools in the suite: DataDirect Cloud and Easyl.  

> From Progress Software:  DataDirect Cloud is a tool which enables simple, fast connections to cloud and on-premise data regardless of the source.  Easyl is a data analysis tool that dramatically simplifies the process of accessing, blending, and reporting on your organizational data.

The screenshot below is a preview of the easy-to-use registration page.

![Try Progress Rollbase and other tools for 30 days](https://griffcdn.blob.core.windows.net/kevgriffinpublic/rollbase_1.png) 

The first major hiccup I had during with review process was during registration.  After filling in all my information, I was told I needed to check my email and click an activation link.  This is not out of the ordinary, so I waited by my email intently waiting.  No email showed up.  During this time, you are not able to use the application.

Within 2-3 days, I received an email from Rollbase, but not for my activation.  The email was a reminder that I needed to activate and provided a way to re-send the activation email.  Same issue as before: no activation emails.  Eventually, I had to contact someone with Progress Software to activate my account and they were able to quickly take care of the issue.  Representatives with Progress assure me that this experience was out of the ordinary.

## The Process of Creating an Application  
The process of creating an application is pretty straightforward.  Rollbase uses a wizard to guide you through the initial process.  For testing out Rollbase, I decided to use one of my tried and true scenarios: a help desk system.

The first step in the application creation process is to name your application and give it a description.  Be sure to make it good!  One option you have later is to list your application in a public marketplace and the data from Step 1 is used to feed that listing.

![Step 1 for a new application, name it!](https://griffcdn.blob.core.windows.net/kevgriffinpublic/rollbase_2.png) 

Steps 2 and 3 allow you to define high-level objects within your application.  For my help desk app, I wanted to create Customers, Technicians, Tickets, and other supporting objects.  The screenshot below shows the object creation.

![Step 2, defining all your objects](https://griffcdn.blob.core.windows.net/kevgriffinpublic/rollbase_3.png) 

Whatever type of object you’re creating, you can set several pre-defined attributes.  For example, in Customers, I gave it the attributes for a “Contact”.  This added First Name, Last Name, Email Address, etc.  

In step 3, you are able to add additional fields to your objects for further customization.  A hang up I had during this process was that Rollbase didn’t make it clear which fields it auto-added based off my choices in step 2.  I accidentally created two email address fields.
 
![Step 3, give your objects some properties](https://griffcdn.blob.core.windows.net/kevgriffinpublic/rollbase_4.png) 

The final step in the creation process is to configure the relationships between all of the objects.  One ticket has one customer, but one customer can have many tickets.  A ticket can be assigned to many technicians.  Rollbase provides you with a couple simple graphics that explain the various relationship types.  The screenshot below shows an example.
 
![Step 4, define the relationships between your objects](https://griffcdn.blob.core.windows.net/kevgriffinpublic/rollbase_5.png) 


When you’re done, Rollbase congratulates you and provides you with an overview of your application.  The next screenshot provides an example. If you need to make any changes using the wizard, Rollbase will gladly take you back.  If you’re finished with your changes, Rollbase will automatically create several default views such as details, creation pages, and editors.

![Way to go!  You built an application!](https://griffcdn.blob.core.windows.net/kevgriffinpublic/rollbase_6.png) 

Once you’re ready to finally jump into your new application, you’re sent to your new application dashboard.  The next screenshot shows an example of what the “Griff Help Desk” application looks.

![Initial view of the new application post-wizard.](https://griffcdn.blob.core.windows.net/kevgriffinpublic/rollbase_7.png) 

You can see across the top that Rollbase created a tab for each of the objects that I generated within the creation wizard.
  
## What I Liked ##
### Flexible View Customizations
Every view within Rollbase is customizable.  In the next screenshot, you will see an example of my “New Ticket” screen.  This view was generated for me based off the criteria from the application creation wizard.  However, it is not ideal for how I’d like to see this view used by my users.  Rollbase allows me to quickly move areas of the screen around.

A view is defined by sections, and section can have up to three columns.  By simply clicking and dragging, a view can transform into what you need it to be.  Each field on the view can also have several options set on it.  Does the “Date Created” need to be a required field?  Select the “required field” option from within the field properties.  
 
![Create New Ticket view](https://griffcdn.blob.core.windows.net/kevgriffinpublic/rollbase_8.png) 

### User and Permissions Management
I spent a little bit of time with this feature.  Ideally, you’re not going to build an application that only you are going use.  Within my Organization, I can create multiple users.  For each of these users, I was able to give them certain application rights.  In one application they might be an administrator, but in another they are a read-only user.

Rollbase can be granular with the level of permission you can give to a user or user role.  The UI will automatically adapt to reflect the effective permissions.
There are several different options for authenticating a user.  By default, you can use Rollbase’s built-in authentication scheme.  Additionally, you can authenticate via LDAP, HTTP POST, HTTP GET, or using the OpenEdge AppServer.

### Application Store
Imagine you’ve spent a serious amount of time working on an application within Rollbase, and you’d like to provide the framework to other users.  At any time, you can set your application up as a published app within the Rollbase Application Store.  All your personal and corporate information is removed from the application before it’s published to the Store.

The Store is also a great place to look for an application that is already designed to meet your needs.  At the time of this review, the Store had less than 20 applications in it.  I’m sure as the platform matures, this number will grow significantly.  

One of the sample applications I installed was a Bug Tracker development by the Rollbase team.  It provided a simple interface for managing products and bugs associated with the products.  At a minimum, it serves as a great tool for learning what Rollbase is capable of.

### Mobile Applications
Even though the beginning of this review discussed how to build a web application using Rollbase, it is important to note that you can also design mobile web applications as well.

Wow!  The mobile design experience far exceeds that of the web application designer.  The entire interface is drag and drop, and the canvas is designed to reflect the mobile environment you’re targeting.  You have a choice between phone and tablet, and the built-in preview mode (example below) shows you want an application looks like.
 
![Point and Click Mobile Apps](https://griffcdn.blob.core.windows.net/kevgriffinpublic/rollbase_9.png) 

I didn’t feel though that the mobile application development experience made the object creation and relationship management aspects of the platform as easy.  In fact, I wasn’t able to figure out how to port Griff Help Desk to a mobile environment (even though there is an option to create the mobile app based off an existing application).
   
After some discussion with representatives at Progress, it was brought to my attention that the mobile designer will automatically generate the backend services for your objects.  This leaves you with only needing to design and wire up the views.  Rollbase takes care of the rest.
When you’re done, your application can be ported to Android, iOS, or a mobile web application.

## What I Didn’t Like
### Object Pluralization  
This is a nitpick and I contribute it to user error, but one of the object types I created was “TicketEvents” because I was imagining a collection of events associated with the ticket.  Rollbase automatically pluralizes the objects that you create, so my collection of TicketEvents become “TicketEventss” (note the additional s).  The pluralization wasn’t obvious during the creation wizard, and I had to make adjustments manually afterwards.

### User Experience Leap
There is a huge divide in the user experience between creating the application to fine tuning the application.  As I described above, the process of creating an application is executed very well.  The user is guided step by step through the process.  You don’t feel lost in the wizard.

However, after the application is generated, you’re provided with the ability to change pretty much whatever you want.  I felt these options weren’t presented as elegantly as the wizard was. 

As the next screenshot demonstrates, the view for editing an object type (in this case, the Ticket object) is a dump of every option possible to configure.  The screenshot is only able to show you 1/5th of my screen, as the options continue much further down.
 
![A lot of properties to configure](https://griffcdn.blob.core.windows.net/kevgriffinpublic/rollbase_10.png) 


I applaud Rollbase for providing so much flexibility, but to a novice user this is a tidal wave of information.  

### Conclusions
Progress Rollbase provides a stable platform to build your next form-based application on top of.  The process of creating a new application is well designed, and provides the user with step-by-step information about how the bits and pieces of the application come together.

I’m impressed by the sheer amount of customization that Rollbase offers. The tools allow you to build forms and views that reflect how you’d like the application experience to act. To a new or novice user, this will feel like a lot of noise to find the options they care about.  
User management and permission enforcement is a powerful feature.  I do wish it were possible to design or deploy the application without the Rollbase or Progress Pacific branding.  I sense that if I had multiple users of Griff Help Desk, there would be confusion of what Griff Help Desk was, what Rollbase was, and what Progress Pacific was.  

> Note: During a followup with Progress representatives, I was told that if you purchase an ISV license for Rollbase, it includes the ability to white-label any of your applications.  This removes all branding for Rollbase and Progress Pacific.

Rollbase provides expansive documentation on all its features and even some tutorial videos for some of the more basic use cases.   

You can learn more about Progress Rollbase at [http://www.progress.com/rollbase](http://www.progress.com/rollbase).

