---
title: Building better ConnectionStrings with ConnectionStringBuilder
tags: |-

  - connection string
  - entity framework
  - oledb
  - sql
  - stringbuilder
permalink: building-better-connectionstrings-with-connectionstringbuilder
id: 691
updated: '2011-02-14 05:00:02'
date: 2011-02-14 05:00:02
---

Okay, I never admitted to being a .NET guru or anything, and that’s why I get so excited whenever I run across a gem in the framework that allows me to do something easier and with fewer issues.

ConnectionStrings has always been one of those things I did the hard way.  For example, I would have a line of code that was like so:

<pre lang="csharp">
string connectionString =  "Data Source={0};Initial Catalog={1};User Id={2};Password={3};";
string.Format(connectionString, serverName, databaseName, userName, password);
</pre>

This seemed like a logical way to build my connection strings.  However, it wasn’t very flexible.  That was until I discovered the suite of ConnectionStringBuilder classes.

Let’s take the above OleDb connection string and use the OleDbConnectionStringBuilder to build it.

<pre lang="csharp">
System.Data.OleDb.OleDbConnectionStringBuilder oleDbConnectionStringBuilder  =
            new OleDbConnectionStringBuilder();
oleDbConnectionStringBuilder.DataSource = "myServer";
oleDbConnectionStringBuilder.FileName = "myAccessFile.mdb";
oleDbConnectionStringBuilder.ToString();
</pre>

Look at how much cleaner that is!  Maybe you’re working with a SQL Server database:

<pre lang="csharp">
System.Data.SqlClient.SqlConnectionStringBuilder connectionStringBuilder =
                new SqlConnectionStringBuilder();
connectionStringBuilder.DataSource = "myServer";
connectionStringBuilder.InitialCatalog = "databaseName";
connectionStringBuilder.UserID = "userName";
connectionStringBuilder.Password = "password";
connectionStringBuilder.ToString();
</pre>

Isn’t that awesome?!  Now, finally, let’s imagine you’re doing all this with Entity Framework:

<pre lang="csharp">
System.Data.EntityClient.EntityConnectionStringBuilder entityConnectionStringBuilder =
                new EntityConnectionStringBuilder();
entityConnectionStringBuilder.ProviderConnectionString = connectionStringBuilder.ToString();
entityConnectionStringBuilder.Metadata = "(entity framework metadata here)";
entityConnectionStringBuilder.ToString();
</pre>

There you go!  Instead of hand writing your connection strings, take a look to see if there is a StringBuilder class that’ll do the work for you.