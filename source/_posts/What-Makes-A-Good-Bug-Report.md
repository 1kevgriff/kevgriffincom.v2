---
title: What Makes A Good Bug Report?
tags: |-

  - bug
  - expectations
  - reports
permalink: what-makes-a-good-bug-report
id: 618
updated: '2009-09-23 06:00:39'
date: 2009-09-23 06:00:39
---

As developers, we understand one fundamental truth: our software is going to break.  It's not a matter of if, it's a matter of when.  Hopefully on your team, you have a dedicated testing staff.  Other teams are not quite as lucky.  Their testers might be the project manager, or a single person who's responsible for testing all software produced by your company.

Developers are terrible at testing their own software.  I'm my own worst tester, and that's because I have a large understanding of how it works.  Without trying, I can make the software work flawlessly each and every time.  On my teams, I state that I want others using my code as much as possible.  But what happens if something breaks?

Hopefully your company employs a bug track of some sort.  For example, my company uses FogBugz for all of our bug tracking.  However, not many people in my company understand how to write a useful bug report.  My goal is to outline some of the minor things that can be done to make a bug report more helpful to the developer who's going to be using it.
<h1>1. Use descriptive titles</h1>
Whenever I see a bug with a title like "Got an error in (name a section of the app)", I die a little inside.  I also see bug titles every day where it's just the name of the section of the app, for example "Order Screen" or "Customer Profile".  Imagine you're a developer who's going through a bug list.  I tend to put these bugs off until later because in order to figure out what I need to do, I have to open the bug.

Instead, let's try for bug titles like this: "Error 'unable to save user information' when on the user profile screen".  I know what the error is, and where it is.  That's helpful!  Or "Order Confirmation: Clicking OK doesn't respond".  Again, very helpful.  As the developer, I don't have to guess what the problem is.
<h1>2. Steps to reproduce</h1>
For the past few weeks, we've had this intermittent problem when saving a user's profile.  Every single time it's occurred, I'm nowhere near the tester.  I've been unable to reproduce it.  Every time it happens, I ask "what was the input?" and I'm constantly answered with "I don't know".  Without a details list of steps for reproducing the bug, I cannot guarantee that I'll be able to fix the bug.  When using guideline #3, you can save a lot of time.
<h1>3. Screen shots, screen shots, screen shots</h1>
A picture is worth a 1,000 words.  If you're having trouble verbalizing what the problem is, take a screen shot.  Please make sure that a screen shot is worthwhile though.  If you're working on a web application, and it renders correctly in Firefox, but not in IE, take a screen shot!  If you've filled out a 15 field form, and it errors out, take a screen shot!  When used in combination with guideline #2, you don't have to write out all the information typed into the form.
<h1>4. Prioritize correctly</h1>
When you're adding a bug to the system, take into consideration how important fixing the bug is to the current or next release.  If there is a misspelled word, I wouldn't classify it as a "MUST FIX!".  Instead, you should be giving it a lower priority, such as a "Medium" or "When there is time".  If the system is unable to process customer orders, which is the sole reason for using the system, then you might want to mark that as a "MUST FIX!".

This guideline is subjective though.  The person in charge of the next release, a project manager or lead developer, should have final say over what priority a bug is.
<h1>5. Expectations</h1>
If the system did something you didn't quite expect to happen, let the developer know.  In many cases, whatever happened was the product working as designed.  This is a perfect opportunity to discuss flow of application.  One person's design might not make sense to someone else.

For example, if the app allows you to hand type in dates, but only in the DD/MM/YYYY format and you typed in MM/DD/YYYY format, the system will fail.  That's not exactly a bug, because the system is set up to only accept dates in a certain format, but it is a bug in terms that the system didn't do what you expected.
<h1>6. One Issue Per Bug Report</h1>
I can understand how tedious it must be to create a bug report.  Seriously, what is it?  Two, maybe three clicks?  When creating a bug report, make sure you're only referencing one issue.  That way individual issues can be prioritized and worked on solely by themselves.  Verification can be done on a single issue, and not a group.  When you list multiple items in a bug, you're risking that one item might be missed.  Additionally, if I'm the developer on the bug, I can't close it out until all items in the bug have been satisfied.  I might be able to fix all but one item, and the bug will remain in the tracker until I have time or resources to fix it.  If the bugs were individual, I could close out all the fixed issues and they could be evaluated again.

<hr />When writing your next bug report, please take these guidelines into account and make it easier on your developers.

I welcome any question or comments!  What do you think?  Anything you would add to the list?  Remove?  Let me know in the comments!