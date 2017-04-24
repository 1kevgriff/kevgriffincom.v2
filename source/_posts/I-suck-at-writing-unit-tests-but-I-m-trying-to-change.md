---
title: 'I suck at writing unit tests, but I''m trying to change'
permalink: i-suck-at-writing-unit-tests
id: 766
updated: '2015-02-26 22:32:23'
date: 2015-02-26 22:25:55
tags:
---

*65 tests*

I have just hit a personal record when it comes to writing unit tests.  A measly 65 unit tests.  I've always noticed that there are three types of developers:  those that never test, those that are pragmatic about testing, and then those that say TEST ALL THE THINGS.

Most of my career has been in the first camp.  I never tested my code.  That's what QA departments were for. The team would write a feature, and ship it off for testing.  Most of the times it would get a thumbs up, or it would get rejected because if you held the 'T' key while jumping up and down and patting your head, the computer would explode.

>... those who are out there doing "Unit Testing 101" talks really suck at them.

*68 tests*

Within the past five years, I've grown to really appreciate the **WHY** you should unit test - but the **HOW** had left me in stitches.  And let's be honest about it: those who are out there doing "Unit Testing 101" talks really suck at them.  Not that the material is bad, but the concepts are too simplified.

*Today, we're going to create unit tests for our calculator service.  If I Add 5 and 5, I should get 10.  Yay green!*

*Today, we're going to create unit tests for our bowling score tracker.  If I bowl a strike, but then a 7, I should get a 17 in the first frame.*

No no no.  I live in a world where I talk to external dependencies like databases, web services, etc.  In .NET land, that's why you start learning about great things like Dependency Injection.  *"Oh Kevin, your tests shouldn't talk to a database.  Instead, you should have an interface for talking to a datasource and then write a mock implementation of that."*  But.. but.. my applications talks to a database.

I worked on a small project where I wrote a bunch of tests based around mocks only to determine that I wasn't testing any of the freakin' code.  My fake code was tested fabulously!

*72 tests*

**Seeing the light**  
I had this amazing revelation during a 7 hour car ride with my friend, [Kendall Miller](https://twitter.com/kendallmiller).  In a nutshell, he said, "We just stand up the database."  Mind.  Blown.  Imagine this concept: being able to stage your entire application in a couple seconds.  Not only are you testing that you're able to insert or update records, but you're continuously testing if your database creation scripts are up to date.

**It's all baby steps**  
For a new client, I have pushed myself really hard to make sure that most aspects of the business and data layers have testing around them.  All new features get a series of tests.  This is well before I start implementation in the UI.  As a result, I'm gradually ensuring that my application works the way that I expect it too.

A lot of code is written to support the tests.  For example, between each test I want to wipe the database clean and start with good data.  I am testing a "unit", aren't I?  No two tests are dependent on each other.

**Keep on moving**  
I feel really good about this code.  There isn't anymore of this ridiculous writing of fake implementations.  I'm finding that with every test I write, I'm learning something new.  If you find yourself in a similar place as me: wanting to write tests, but it has always seemed too impractical or too complex, I want to offer you some advice.  

Just do it.  Write one test.  Is the code you want to test too complicated or too involved?  That is a great excuse to break it up and refactor.  Find someone who really knows or really enjoys writing tests and ASK them for feedback and guidance.  They might hurt your feelings, but that's okay.  Don't forget why you're doing this!  Your code will get better.  Your code will stay better.    Practice makes perfect!

Now get out there and write some tests!
