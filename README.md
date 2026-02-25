# Switch Guide

[The guide can be found here!](https://switch.hacks.guide)

Nintendo Switch homebrew guide written by staff members of the Nintendo Homebrew Discord server.

## AI (Artificial Intelligence) Policy

As a community largely composed of passionate developers and reverse engineers, we've seen the rise of AI impact the homebrew scene. We would prefer if fully or near-fully AI generated code and/or projects be kept away from our project. However, you are welcome to use a minor amount of AI "assistance" provided you are able to maintain your contributions.

## Running the site locally

This requires the following installed on your system:

* [node.js](https://nodejs.org/en)

To test the website locally, clone the source code:

```bash
git clone https://github.com/nh-server/switch-guide.git --recurse-submodules
cd switch-guide
```

Then simply run the following commands:

```bash
npm ci
npm run docs:dev
```

The website should now be running on http://127.0.0.1:5173/ (or a port shown on the terminal). Any edits you make should appear live!
