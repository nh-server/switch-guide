import{_ as o,c as t,a1 as s,o as a}from"./chunks/framework.DdzuDVQG.js";const u=JSON.parse('{"title":"sys-botbase","description":"","frontmatter":{},"headers":[],"relativePath":"homebrew/sys-botbase.md","filePath":"homebrew/sys-botbase.md"}'),i={name:"homebrew/sys-botbase.md"};function r(l,e,n,c,h,b){return a(),t("div",null,e[0]||(e[0]=[s('<h1 id="sys-botbase" tabindex="-1">sys-botbase <a class="header-anchor" href="#sys-botbase" aria-label="Permalink to &quot;sys-botbase&quot;">​</a></h1><p>sys-botbase is an advanced <a href="./index.html#terminologies">sysmodule</a> that allows users to interact with their Switch remotely, to &quot;remote control&quot; their Switch. This remote control allows users to create automated tasks, simulate button presses, simulate touchscreen input and read/write to the memory of the Switch while in-game.</p><h3 id="common-use-cases-for-sys-botbase" tabindex="-1">Common use cases for sys-botbase: <a class="header-anchor" href="#common-use-cases-for-sys-botbase" aria-label="Permalink to &quot;Common use cases for sys-botbase:&quot;">​</a></h3><ul><li>Use ACNHPokerCore in combination with ACNH</li><li>Controlling a game remotely</li><li>Automation</li></ul><h2 id="installation-requirements" tabindex="-1">Installation requirements: <a class="header-anchor" href="#installation-requirements" aria-label="Permalink to &quot;Installation requirements:&quot;">​</a></h2><ul><li>An archive manager like <a href="https://www.7-zip.org/" target="_blank" rel="noreferrer">7-Zip</a></li><li>The latest release of <a href="https://github.com/olliz0r/sys-botbase/releases" target="_blank" rel="noreferrer">sys-botbase</a> (the <code>sys-botbase(version).zip</code> file)</li></ul><h2 id="installation-instructions" tabindex="-1">Installation instructions: <a class="header-anchor" href="#installation-instructions" aria-label="Permalink to &quot;Installation instructions:&quot;">​</a></h2><ol><li>Boot into Hekate and go to <code>Tools</code> &gt; <code>USB Tools</code> &gt; <code>SD Card</code>, then plug your Switch into your PC via USB.</li><li>Your microSD card should now be accessible on your PC, open it.</li><li>Extract the <code>.zip</code> file to a location on your computer. <ul><li>If your archive manager allows for it, you can also simply open the <code>.zip</code> file directly.</li></ul></li><li>Copy the <em>contents</em> of each (extracted) <code>.zip</code> file to the root of your microSD card. <ul><li><strong>Optional:</strong> You can verify if you&#39;ve installed sys-botbase correctly, you should have a folder called <code>430000000000000B</code> (sys-botbase) in <code>sd:/atmosphere/contents</code>.</li></ul></li><li>Boot into CFW.</li></ol><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-label="Permalink to &quot;Troubleshooting&quot;">​</a></h2><h3 id="my-switch-crashes-on-boot-after-i-installed-sys-botbase" tabindex="-1">My Switch crashes on boot after I installed sys-botbase!: <a class="header-anchor" href="#my-switch-crashes-on-boot-after-i-installed-sys-botbase" aria-label="Permalink to &quot;My Switch crashes on boot after I installed sys-botbase!:&quot;">​</a></h3><p><strong>Cause:</strong> While it&#39;s almost impossible for this to happen, if your Switch crashes with Error <code>2001-0123 (0xf601)</code> and Title ID <code>430000000000000B</code>, you&#39;re using a version of sys-botbase that&#39;s incompatible with your Atmosphere version.</p><ul><li><strong>Note:</strong> sys-botbase will almost never crash unless something is fundamentally wrong with the contents of your microSD card. If it does crash and need an update, an updated release will be mentioned here.</li></ul><h3 id="sys-botbase-isn-t-working" tabindex="-1">sys-botbase isn&#39;t working!: <a class="header-anchor" href="#sys-botbase-isn-t-working" aria-label="Permalink to &quot;sys-botbase isn&#39;t working!:&quot;">​</a></h3><p>Assuming you&#39;ve followed the installation instructions successfully, this is probably due to the archive bit being set on one or more folders/files on your microSD card. This is usually the result of copying files to a microSD card via a Mac. If you are experiencing this issue, try running the archive bit fixer utility via Hekate for all files.</p><p>This can be done by booting into Hekate and going to <code>Tools</code> &gt; <code>Arch bit • RCM Touch • Pkg1/2</code> &gt; <code>Fix Archive Bit</code>.</p>',15)]))}const m=o(i,[["render",r]]);export{u as __pageData,m as default};