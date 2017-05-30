---
title: Enable SignalR Logging with One Simple Line
categories:
  - "Development - ASP.NET"
permalink: signalr-logging
date: 2015-08-28 23:26:42
---

It is easy to think that SignalR works within a black box, but if you are deploying JavaScript clients, here is an EASY trick to learning what is happening underneath the scenes.

Before you start your connection, add this ONE line of code:

```javascript
$.connection.hub.logging = true;
$.connection.hub.start();
```

Tada!  You have logging in your browser console:

![](https://griffcdn.blob.core.windows.net/kevgriffinpublic/signalr-logging/logging_preview.png)