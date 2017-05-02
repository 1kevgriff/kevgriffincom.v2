---
title: Non-Tech Factors to Consider When Choosing Your Tech Stack
categories:
  - Deep Thoughts
permalink: non-tech-factors-to-consider-when-choosing-your-tech-stack
date: 2016-05-10 21:33:01
---

Greenfield projects are typically a great deal of fun. It is something new and exciting! No legacy code that will bog down or needlessly frustrate the team. *We will finally get to do things the RIGHT way this time.*

There is a flip side to this excitement, however. The fun and flexibility of a new Greenfield project also comes with the unparalleled responsibility of making hard, up front, technical decisions.

Ask any developer who has worked on a long-term project and they will tell you that there are some things you cannot simply change halfway through the development of a project. At least not without hundreds of man-hours of effort to remedy. Should we use an ORM or write ADO.NET by hand? ASP.NET Core 1.0 or go with tried-and-true ASP.NET 4.6. MVC or
WebForms? The hard technical decisions you make at the beginning of the project can echo for years!

>For some guidance on how to select your ASP.NET tech stack, watch this
on-demand webinar on [*Choosing the Right Tech Stack*](http://www.telerik.com/campaigns/devcraft/choosing-the-right-tech-stack?utm_medium=external&utm_source=kgriffin&utm_campaign=dt-devcraft-apr16-webinar&utm_content=article) - (sponsored).

Because it is so challenging, many developers will concentrate on the technical aspects of selecting a stack while completely ignoring the developers themselves. If you are the technical director of a project, you cannot proclaim “this is the stack we will use” without a firm understanding of how that will be accepted by the team or even simply the knowledge of what the needs of the project will be.

##Being on the Cutting Edge
There is a poem by Robert Frost that every high school kid in the US had to memorize. Two roads diverged in a yellow wood, and sorry I could not travel both.* Your tech stack is the same. There are two paths: one that is well worn and one that is thick with undergrowth.

Which one do you select?

First, we can examine the well-worn path. ASP.NET WebForms has been around for over fifteen years. There are a million different blog posts on various aspects of WebForms. As it has matured over the years, most of the documentation has stayed relevant. Try Googling for “(something) webforms” and you will be rewarded with thousands of results. All of which are probably still good to examine and use!

ASP.NET MVC 5 is an in-between of tried and true and cutting edge. With the onset of ASP.NET Core 1.0, using MVC 5 on ASP.NET 4.6 is a bit like buying a car one model year older when the new ones are shipping next week. However, as with cars, the documentation and trailblazing has already happened. You benefit from all the hard work of previous
early-adopters. 

ASP.NET Core 1.0 is the overgrown road. If you were to glance down it, you would see developers who have tripped and fallen. Some might be stuck in holes. The end of the road is a mystery because it isn’t visible from where you are. Ask yourself, "How adventurous do I feel?”

Projects with strict budgets and deadlines would not be appropriate for cutting edge. That conversation doesn’t go well. 

>“Are we all set with the launch next week?”
>
>“No. Turns out ASP.NET Core doesn’t support SmtpClient yet so we have to push a few weeks.”

On a personal note, I like to stay on in the middle leaning towards cutting edge. My job dictates that I solve business problems and doesn’t require a specific tech stack. For a current client project, I’m adventuring into ASP.NET Core and I’m hitting far more roadblocks than what I was expecting.

Trailblazers need to be aware and take their time. Through their efforts, the path will be clearer for other developers who follow. 

## Developer Ability to Learn Quickly

When I used to hire developers, our metrics did not put too much concern about what a person knew but how quickly he or she could learn it. 

When choosing a stack, it is important to gauge the team responsible for implementing the stack. A developer fixated with developing for WebForms might have a difficult time moving to the more complex patterns exposed by ASP.NET MVC or WebAPI.

A colleague of mine has told a story about one of his old bosses who had a deprecated background in software development. In the story, the boss had been spending months trying to learn how C\# worked and he was attempting to cobble together a WinForms application based off knowledge he copied from books and online tutorials. One day, the boss called my colleague into his office and asked him to explain what a class was.

Our goal isn’t to alienate developers. Everyone learns in different manners and at different rates. When selecting a tech stack, we need to remain conscious of who will be implementing the solutions and if they mentally can handle the pressure of being towards the cutting edge.

What’s better? A complete solution in an older technology or an incomplete solution that is on the cutting edge.

## What does the project need?

All projects are unique snowflakes. Client needs will vary from “I just need something better than this Excel spreadsheet” to “I want something like Facebook”.

Simple “forms over data” applications do not need to be single page applications built with Angular 2 or React. A complex solution that would take a small team of developers to implement over a couple weeks can easily be accomplished by one developer within a couple hours with WebForms.

Large monolithic web applications have a different set of needs. You are expecting these projects to launch with minimum features, but eventually will balloon in size and complexity. The time invested in more cutting edge approaches will pay dividends in the future. 

Your goal as a decision maker is to weigh the needs of the project with the tools available – and even in some cases, looking at the tools on the horizon. If your project is simply forms over data, maybe stick with something simple like ASP.NET WebForms. If you foresee the project growing in complexity over time, maybe start with an ASP.NET MVC and WebAPI stack that could later integrate front-end frameworks like Angular or React.

## Team Size and Scalability

Another important factor to think about in your quest for the perfect tech stack is the size of the team that will construct the project.

I have had the pleasure of working in both small, one to two person teams and additionally been part of larger teams that have spanned multiple people around the world.

As the CTO for a startup, our team brushed up against the most bleeding edge technology we could get our hands on. During the course of a day, we would deploy a dozen times to production. There was a mutual agreement and respect for the project, and our team cohesion allowed flexibility to make fast, uncalculated decisions on tools, libraries, or
frameworks. If the tool didn’t work, no big deal – toss it out and try another.

If I were to travel the startup road again, I would guide my team toward adopting ASP.NET Core. Even in its infancy, there is potential for this platform to allow us more agility than previous versions of ASP.NET.

The first major development team I worked with out of college was for a large security company developing components for anti-virus software. This team moved at a much slower pace. Our requirements called for a deployment every quarter, and our software was supported across a dozen operating systems. Changes in the tools and frameworks we used impacted dozens of developers across the world.

If change was enacted, our teams needed to also prepare for the blowback. What happens when you have not considered every angle? What is plan B if you hit a roadblock? Who makes the decision of how to navigate roadblocks?

Please don’t misunderstand; there are large teams that are perfectly capable of quick deployments and rapidly changing direction when the project calls for it. My argument is that the majority of larger teams I’ve been with absolutely cannot work in this capacity. If you have a 30-person team, and you tell them to use ASP.NET Core 1.0, which is the
bleeding edge of what ASP.NET developers can use, then you need to expect them to adjust for API-breaking changes every couple weeks. It is rare to find a large team able to do that without going insane or ultimately pushing back the schedule.

## Conclusions


Sometimes we wish decisions could simply be a matter of bits and bytes, but there are many human factors that need to be taken into account.

The best advice that can be given is to discuss the pros and cons of every choice available within your teams. If teams are completely involved in the process of making technical decisions, the product outcome will be better because of it.

> What tools are available in the ASP.NET stack then? Jeremy Likness has an [excellent
article](http://developer.telerik.com/featured/how-to-web-asp-net/?utm_medium=external&utm_source=kgriffin&utm_campaign=dt-devcraft-apr16-webinar&utm_content=article) on the current state of ASP.NET development tools. Use the tools discussed in Jeremy’s article to start a dialog with your team. (sponsored) 

A great team, when given flexibility, will always produce a solid product.