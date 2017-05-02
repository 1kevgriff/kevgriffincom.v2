---
title: My Attempt at LINQ Pagination
categories:
  - Development
permalink: my-attempt-at-linq-pagination
date: 2009-10-16 06:00:10
---

<p>Today I’ve been diving into an easy way to paginate record sets in my applications.&#160; Searching around the internet yielded several good walkthroughs on how to do this.&#160; My favorite way came from my friend, <a href="http://www.gotnet.biz/Blog/post/Efficient-Paging-in-SQL-Server-via-LINQ.aspx">Kevin Hazzard</a>, He discussed using the Skip() and Take() extension methods to form fit LINQ into building a SQL statement that’ll do all the heavy lifting for you.</p>  <p>Copying from Kevin’s example, I built the following code snippet:</p>  <pre lang="csharp">int pageNumber = 1;
int pageSize = 20;

using (var entity = new Entities())
{
	var recordSet = (from r in entity.SomeTable
			orderby r.SomeID
			select r);
	recordSet = recordSet.Skip((pageNumber - 1) * pageSize).Take(pageSize);

	return recordSet;
}</pre>

<p>What’s nice about the following code is that since LINQ is lazy loading, the SQL built doesn’t actually execute until we need it too.&#160; The days of returning full datasets are done (yes, we’re still doing that on some projects).&#160; </p>

<p>I went the next step to see if I could build an extension method of my own that did all of the above for me automatically.&#160; Here was the result I came up with:</p>

<pre lang="csharp">public static class ExtensionMethods
{
	public static IQueryable<t> Paginate<t>(this IQueryable<t> content, int pageNumber, int pageSize)
        {
            return content.Skip((pageNumber - 1)*pageSize).Take(pageSize);
        }
}</pre>

<p>This extension method takes the query returned from LINQ (an IQueryable), and applies the additional constraints to it.&#160; Here is the first example using my new extension method:</p>

<pre lang="csharp">int pageNumber = 1;
int pageSize = 20;

using (var entity = new Entities())
{
	var recordSet = (from r in entity.SomeTable
			orderby r.SomeID
			select r);
	recordSet = recordSet.Paginate(pageNumber, pageSize);

	return recordSet;
}</pre>

<p>&#160;</p>

<p>Ta da!&#160; Hopefully that makes sense.&#160; I’m open to other suggestions and comments.&#160; I’m learning that if I take about my thought processes on certain problems, that I receive a ton of great feedback from those who listen.</p>