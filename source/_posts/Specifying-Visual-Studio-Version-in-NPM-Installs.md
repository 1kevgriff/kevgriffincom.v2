---
title: Specifying Visual Studio Version in NPM Installs
categories:
  - Development
permalink: specifying-visual-studio-version-in-npm-installs
date: 2013-05-14 06:34:08
---

Sometimes when you install a NPM package, you'll run into an issue like this:
<blockquote>C:\Program Files (x86)\MSBuild\Microsoft.Cpp\v4.0\V110\Microsoft.Cpp.Platform.targets(35,5): error MSB8020: The builds tools for Visual Studio 2010 (Platform Toolset = 'v100') cannot be found. To build using the v100 build tools, either click the Project menu or right-click the solution, and then select "Update VC++ Projects...". Install Visual Studio 2010 to build using the Visual Studio 2010 build tools.</blockquote>
Normally you'll get this if you're only running VS2012 and it wants VS2010/VS2008.  You can ask NPM to use Visual Studio 2012 instead by using with "--msvs_version=2012" command.

Example:
<blockquote>npm install socket.io --msvs_version=2012</blockquote>
Tada.  This should work almost every time.