---
title: Wildcard search with LINQ
tags: |-

  - linq
  - wildcard
permalink: wildcard-search-with-linq
id: 596
updated: '2009-04-21 09:17:26'
date: 2009-04-21 09:17:26
---

I just a situation where I needed to perform a wildcard search on a table in my database.  When I used to do ADO.NET, I would simply write my SELECT statements with LIKE keywords to do wildcard searches.

However, in this project, I'm using LINQ to Entities and the solution didn't work the same way as it did back in SQL land.  My alternative was to use the .Contains() method.

For example:
<pre lang="csharp">var userList = from u in entity.Users
where u.FirstName.Contains(searchParameter) ||
u.LastName.Contains(searchParameter)
select u;</pre>

Hope this helps if you ever run into this problem.