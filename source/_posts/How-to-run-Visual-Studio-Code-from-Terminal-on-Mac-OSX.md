---
title: How to run Visual Studio Code from Terminal on Mac OSX
categories:
  - Development
permalink: how-to-run-visual-studio-code-from-terminal-on-mac-osx
date: 2015-05-07 13:20:28
---

**Edit 06/24/2016:** [You can just do this from Visual Studio Code now.](https://code.visualstudio.com/docs/setup/osx)

*Edit 12/10/2015: Thanks for commenter on letting know that latest release of Code broke original post.  Updated with code from [documentation](https://code.visualstudio.com/Docs/editor/setup).*

Using [Visual Studio Code](https://code.visualstudio.com) on your Mac, but you want to use it in Terminal? 

Using Zsh?  [Go here](http://kevgriffin.com/how-to-run-visual-studio-code-from-zsh-on-mac-osx/)

Currently, there isn't an automatic method for doing this, but with a little code in your `~/.bash_profile` file, you can configure it.

```
code () { VSCODE_CWD="$PWD" open -n -b "com.microsoft.VSCode" --args $* ;}
```

Then from Terminal you can type:

`code`  -- opens Visual Studio Code  
`code .` -- opens current directory in Visual Studio Code  
`code somefile` -- opens somefile in Visual Studio Code  