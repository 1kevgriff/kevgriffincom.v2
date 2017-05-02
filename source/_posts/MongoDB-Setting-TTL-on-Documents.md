---
title: 'MongoDB: Setting TTL on Documents'
permalink: mongodb-setting-ttl-on-documents
date: 2014-10-13 14:08:05
categories:
  - Development
---

On some recent work I was doing with [Winsitter](http://winsitter.com), I needed an approach that would systematically remove documents after a specified period of time within MongoDB.

Previously, I would have written cron jobs or helpers to clean up the old data.  No longer!

Come to discover, this feature [already exists](http://docs.mongodb.org/manual/tutorial/expire-data/) inside of MongoDB.  It is called setting the TTL or Time to Live of a document.

The process involves creating an index on the date object you'd like to watch.  In the example below, I am providing a property on my document called `auditDate`.  I want the document associated with that property to automatically remove itself after 5 days or *432000000* miliseconds.

```
dbConnection
.collection("audit")
.ensureIndex({
	"auditDate": 1
}, {
	expireAfterSeconds: 432000000 // 5 days
}, function(indexErr) {
	if (indexErr) {
		console.log("error creating index");
		console.log(indexErr);
	}
});
```

In the example, I'm using the MongoDB node.js library to ensure an index exists.  If the index doesn't exist, MongoDB will create it.

The `expireAfterSeconds` options tells MongoDB that after a specified amount of time, the document should automatically remove itself.

This quick fix has saved me a ton of time, and I am hoping it saves a ton for you too!