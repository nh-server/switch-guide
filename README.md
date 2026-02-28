# Switch Hacks Guide

A collaboration from Nintendo Homebrew's Discord community, getting you from a stock Switch to Atmosphère.

[![Website Badge](https://img.shields.io/badge/website-switch.hacks.guide-E60012?logo=vitepress&logoColor=FFFFFF)](https://switch.hacks.guide/)
[![Discord Server](https://img.shields.io/badge/chat-nintendo%20homebrew-7289DA?logo=discord&logoColor=FFFFFF)](https://discord.gg/C29hYvh)
[![Last Commit Badge](https://img.shields.io/github/last-commit/nh-server/switch-guide)](https://github.com/nh-server/switch-guide/commits/master/)
[![ISC License](https://img.shields.io/badge/license-ISC-0081C5)](https://github.com/nh-server/switch-guide/blob/master/LICENSE.md)

## Running the site locally

This requires the following installed on your system:

* [node.js](https://nodejs.org/en)

To test the website locally, clone the source code:

```shell
git clone https://github.com/nh-server/switch-guide.git --recurse-submodules
cd switch-guide
```

Then simply run the following commands:

```shell
npm ci
npm run docs:dev
```

> [!TIP]
> If you choose to run multiple web servers at once, they will begin running at the next highest usable port (e.g. :5174, :5175, and so on).

The website should now be running on <http://127.0.0.1:5173/> (or whatever port is shown on the terminal).
