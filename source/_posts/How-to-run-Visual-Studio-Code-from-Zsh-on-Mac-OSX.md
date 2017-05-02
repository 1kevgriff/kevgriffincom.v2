---
title: How to run Visual Studio Code from Zsh on Mac OSX
categories:
  - Development
permalink: how-to-run-visual-studio-code-from-zsh-on-mac-osx
date: 2015-05-07 13:27:04
---

**EDIT:** [You can just do this from Visual Studio Code now.](https://code.visualstudio.com/docs/setup/osx)

Using [Visual Studio Code](https://code.visualstudio.com) on your Mac, but can't call it from Zsh?

Using Terminal?  [Go here](http://kevgriffin.com/how-to-run-visual-studio-code-from-terminal-on-mac-osx/)

Currently, there isn't an automatic method for doing this, but with a little code in your `.zshrc` file, you can configure it.

```
function code {
    if [[ $# = 0 ]]
    then
        open -a "Visual Studio Code"
    else
        local argPath="$1"
        [[ $1 = /* ]] && argPath="$1" || argPath="$PWD/${1#./}"
        open -a "Visual Studio Code" "$argPath"
    fi
}
```
Then from Terminal you can type:

`code`  -- opens Visual Studio Code  
`code .` -- opens current directory in Visual Studio Code  
`code somefile` -- opens somefile in Visual Studio Code  