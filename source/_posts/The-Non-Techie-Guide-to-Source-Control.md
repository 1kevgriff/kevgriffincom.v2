---
title: The Non-Techie Guide to Source Control
permalink: the-non-techie-guide-to-source-control
categories:
  - Deep Thoughts
date: 2014-10-30 16:45:19
---

_Update 1: Brandon pointed out a mistake in my math.  Adjusted to reflect his comments._

This is one of those posts that I have been meaning to write for a long time.

As a consultant, I often find myself in a situation where I need to introduce a client to the concept of source control and why it is important for the long term success of the project.  This post is meant to serve that purpose for a long time going forward, and also to help anyone else that might have a need in the future.

> For technology friends: please use this post.  Please suggest changes.  Let's make it better for everyone!

##The Problem I'm Seeing
Recently, I walked onto a project where I was asked to review some source code and see if I could suggest some changes.  I had complete access to the original developer, so I asked her if it would be possible for me to get access to source control.

Ten minutes later, I received a FTP address with username and password.  I could have easily taken down the whole system with a keystroke!  Hundred of man hours would have gone down the drain!

This is **NOT** acceptable.  Protection is easy and low cost.

##What is source control?
This should be an easy one.  Source control is a mechanism that allows a development team to track individual changes of files in a project over time.

Have you ever used "Change Tracking" feature inside a Microsoft Word file?  As you type, Word will track what you write, what you delete, and other assorted changes that you make.  You are able to comment on each change, and later accept or reject them.

Source control works the same.  As you work on a project that probably contains tens to hundreds of files, the source control system manages what is happening. You can audit the changes, and even rollback changes if they are not acceptable. 

##Why source control?
There are several great reasons why you want to implement source control into your project.

### It prevents against hardware and software malfunction

Sometimes hard drives go bad.  I have lost count of the number of systems I have walked into where the company stored all their code on a server with no protection.

How many man hours of time have gone into the production code that is running your business?  The largest team I have worked on as a professional was about 6-9 people.  The project had been in existence for about 10 years.  Let us say that one member of the team contributed 2000 hours a year to the project (40 hours per week times 52 weeks, and then adjust for vacation and sick time).

2000 man hours * 6 employees = 12,000 man hours  
12,000 man hours * 10 years = 120,000 man hours  
120,000 man hours = 60 man years  

Average salary of a software developer = $75,000 per year (can vary, but bear with me)  
  
Total replacement cost of software = $75,000 * 13.9 years = **$4,500,000** 

That is a lot of math to do, but the result is realistic.   If you bought a car worth 1 million dollars, do you think you would leave it out in the snow, wind, and rain?  Why are you leaving the code that runs your business unprotected on hard drives whose chance of failure goes up daily.

### It prevents human error

Developers are human.  We make mistakes.

Once I was called by a developer to help assist with an issue in a web application he was prototyping.  The issue he was having was complicated, and seemingly happened *by accident*.  His project had no source control, which means that there was no way to determine *what* he did.  Even worse, there was no easy way to know *how to fix it*.

Luckily in his situation, we were able to figure out the problem and correct it.  This was after wasting 3 man hours of time on a problem that could have been solved within 10 minutes.

Source control would have told the young developer what he changed, and provide a simple way to undo the changes.

### It allows safe experimentation

When your software is built like a house of cards, you are less likely to want to make sweeping changes.  

What if we spend 40 hours and build "feature X" which our customers would love?  Lets say that 13 hours into the development we discover that a critical bug is preventing users from paying with their credit cards.  What do you do?

Option one is undo all 13 hours of work we've invested, fix the issue, and push it out live again.

Option two is to fix the issue, and push it live with the half-done "feature X".  

Option three is to postpone implementing the fix until "feature X" is completed.

Option four, if you had source control, is to stash the changes to "feature X" and fix your issue.  Later, you can come back to "feature X" and pick up where you left off.  

Source control gives you the ability to make changes without worrying about the stability of your software.  Fix issues as they pop up, but keep pressing forward on new, exciting features!

## But We Have Backups
Awesome!  You should definitely have backups.  Disaster recovery is a  real problem, and I hope you never have to use it.  

Imagine my customer from earlier.  They had backups.  If I took down the system, they could call their hosting provider and ask to restore from backups.

How long do you think this process would take?  Minutes?  Hours?  _DAYS?_  Can your business survive an outage of unknown time?

Source control doesn't replace disaster recovery.  Instead, consider it a supporting tool.  If I maintain a history and backup of the software over time, I can quickly redeploy it instead of waiting for the recovery process to occur.

## Recommendation for Source Control
There are many options when it comes to source control.  Your first decision is on your source control language (git, mercurial, tfs, svn) but I think **git** is the way to go. It works great in 99% of cases, it's open source and actively developed, and is designed for the modern way we work: disparate team members inside and out of your firewall that may have multiple dev boxes and need online/offline abilities.

Next is how/where you will host your source control. Here's some options I think are best. 

### GitHub

[GitHub](http://github.com) is starting to become the defacto standard for all new software projects.  In fact, I recommend it to all my clients.  You have the option of using GitHub for free, if you don't mind all your source control being publicly available.  If that's NOT an option for you (and it's okay), then you have the option to pay for "private repositories".

For any repositories that you host, you're able to control who has access to it.  There is no limit on the number of users you can add to a repository.

Plans for individual user private repositories start as low as $7/month. For organizations with multiple users, private repository plans start as low as $25/month.

### Bitbucket

[Bitbucket](https://bitbucket.org/) is another great provider of source control.  They currently support unlimited private repositories for free (up to 5 users).  Additional plans start as low as $10/month.

### Private On-Prem

Don't want your source code to leave your private network? That's fine, git can do that too. 

Github has a [Enterprise install](https://enterprise.github.com) that you can run inside your network.

There are open source ways to do this as well, where you have a self-hosted server that stores your code repos and maybe provides a web interface. [Digital Ocean has a good writeup](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-private-git-server-on-a-vps) on this.

## Conclusions
Billions of dollars is spent each year on software development and maintenance.  We live in a world of bits and bytes.  Changes are easy to make, but even the simplest change can be catastrophic.  

Source control systems have existed for over 30 years.  They continue to become more sophisticated.  Developers around the world trust them with their codebases because they know mistakes will happen.  Make sure you're protecting your code.

> Do you need assistance moving your projects forward?  Let me know!  Feel free to shoot me an [email](mailto:contact@consultwithgriff.com) and we can discuss options for your project.