---
layout: home
title: "NH Switch Guide"
hero:
  text: "NH Switch Guide"
  tagline: "A collaboration from Nintendo Homebrew's Discord community, getting you from a stock Switch to Atmosphère."
  image:
    src: "/img/home-page-feature.jpg"
---

::: tip

<span style="font-size: 16px;">:clock1: **Estimated Completion Time: 1 Hour**</span>

Prepare to set aside a minimum of one hour to follow this guide. This is specifically for you to carefully read and understand each page, which will allow you to safely execute the guide instructions and preserve the safety and longevity of your Switch console.

Some required device backups can also take around ten to thirty minutes to create, depending on your Switch model and your microSD card specifications.

:::

::: warning

Before starting, we would advise users NOT to use video guides for a variety of reasons. These reasons include:

* Uploaders typically do not edit their guides after uploading, even if there are mistakes. This can result in the guide becoming outdated as information develops.
* Video guides are difficult to give assistance with on our server, and will not be supported if seeking assistance.
* Videos typically refer users to a pre-packaged download, which can be poorly organized, outdated, or potentially even incorrect.

Additionally, we are not currently, historically, or will ever be, associated with Anton Retro, sthetix, Ely M., or other derivative or YouTube/TikTok guide publishers, especially any that claim relation to us. We resent any implication to the contrary.

:::

::: danger

<span style="font-size: 30px;">**Important Notice**</span>

As of January 26th, 2026, the sole maintainer of Atmosphère, SciresM, has announced that they are [retiring from the public hacking scene](https://gist.github.com/SciresM/e760b192d873af67ce8f0f5c7000a651). Since they have retired, Atmosphère updates will likely take longer to release when future Nintendo Switch firmware updates arrive. What this means is that, currently, firmware version `21.2.0` is the latest (officially) supported firmware, without any potential uncertainty.

Users should be cautious when considering updating past firmware version `21.2.0`. Atmosphère may not function on newer firmware versions if Nintendo implements any major changes.

In addition, due to the longer duration between updates, there is a large likelihood of **potentially dangerous** Atmosphère forks coming into existence. Users are advised **NOT** to use these forks, and should wait for proper Atmosphère updates from team members that are trusted and knowledgeable.

:::

## What do I need to know before starting?

This page will explore:

* Important terms used in the context of this guide, as well as in the Switch hacking scene in general
* What this guide does to your Switch, and what we plan to install
* What you can do with a hacked Switch
* What you need to hack your Switch
* Other important notices before proceeding

## What do the terms on this guide mean?

The primary terms used on this guide are explained in various sections below.

### What is Custom FirmWare?

Custom FirmWare (“CFW”) is complex software that modifies the function of a device's operating system, also known as a system firmware. Atmosphère, for example, patches the Switch OS (named Horizon) on the fly.

Custom firmware can be considered the "holy grail" in terms of device modding, as it allows nearly limitless control and freedoms than you would get with more primitive "userland" access.

### What is homebrew?

Homebrew refers to unofficial software written by hobbyists for locked down systems, like the Nintendo Switch. Homebrew can include original games, emulators, save-editing tools, and much, much more!

On the Switch in particular, you need CFW to run almost all available homebrew. Some first-gen ("V1") consoles can run homebrew for free, while all other ("patched") consoles require specialized hardware installation beforehand.

### What is a custom operating system (OS)?

Custom operating systems are alternative system software installations, like Android or Linux, that install alongside the default Switch OS. These are great for power users who want to extend the functionality of their console beyond what is normally allowed, transforming the Nintendo Switch to a full-fledged hybrid tablet or desktop. These custom OSes run completely independent of the Switch OS, meaning that anything you do in a custom OS cannot be reported back to Nintendo. Custom operating systems are not "emulated"; they run natively on the Switch's Tegra X1 SoC.

This guide will give you the opportunity to set aside space on your microSD card to install these custom OSes onto your console, if you desire. It is important to note that these installations are optional; you do not need to install any custom OS in order to complete this guide and install Atmosphère. However, it is recommended to decide before starting the guide, as the installation process involves formatting your microSD card.

## What does this guide install?

This guide has the end-goal of taking a completely unmodified Switch from stock firmware to a custom firmware named Atmosphère. Upon completion, you should not lose any data. Your games, Nintendo Account, save data, etc. will be preserved. The functionality of your console will be enhanced, and you will be able to accomplish tasks like the below (and more)!

fusee-gelee is currently the most widespread software entrypoint of launching custom firmware. It utilizes a vulnerability in the bootROM of the first-generation Switch systems, allowing us to boot the console via any payload we choose (instead of just approved payloads from Nvidia and Nintendo). The result allows full bare-metal control over your console, including system storage backups, recovery, custom firmware, and custom operating systems.

More information about the fusee-gelee vulnerability can be found in its vulnerability disclosure, which can be viewed on a [dedicated guide page](fusee_gelee) or [PDF](files/extras/fusee_gelee_nvidia.pdf).

## What can I do with custom firmware?

* Customize your HOME Menu with user-created themes and splash screens.
* Running game modifications on games that you own.
* Backup, edit, and restore saves for many games.
* Play games for older systems with various emulators, using RetroArch or other standalone emulators.
* Safely update to the latest system version without fear of losing access to homebrew.
* Safely customize your device while retaining full access to Nintendo Switch Online services.

More things to do with a CFW-installed Switch can be found later on in the guide.

## What do I need to follow this guide?

### For Desktop/Laptop Users

* A desktop or laptop computer running Windows/macOS/Linux/chromeOS
* A built-in microSD card reader, or an adapter that will allow you to read a microSD card
* A USB cable capable of data transfer to connect your computer and Nintendo Switch together

### For Android Users

* An Android device
* A built-in microSD card reader, or an adapter that will allow you to read a microSD card
* A USB cable capable of data transfer to connect your Android device and Nintendo Switch together

### For iOS Users

* A **jailbroken** iOS device
* An adapter that will allow you to read a microSD card
* A USB cable capable of data transfer to connect your iOS device and Nintendo Switch together

### For all users

If you choose the emuMMC path introduced later in the guide, you will also need a microSD card that is *at least* 128 gigabytes. In this path, it'll be important to disable the [Automatic Save Data Cloud](https://en-americas-support.nintendo.com/app/answers/detail/a_id/41209) function beforehand, as well as making sure [the Switch is set as the primary Pass-Enabled console](https://en-americas-support.nintendo.com/app/answers/detail/a_id/41221/~/how-to-set-or-change-the-primary-nintendo-switch-console-for-a-nintendo-account).

If you must use a smaller microSD card or don't wish to use an emuMMC, you can choose to use the sysCFW path instead.

Additionally, on a V1 "unpatched" Switch, you will need a way to access the ReCovery Mode (this will be further explained in the Entering RCM section of the guide). While possible with household tools, you may want to shell money out for a "jig" that inserts into the Joy-Con rail to reliably enable RCM.

## What else should I know before proceeding?

::: danger

**Bricking Risks**

We ask that you acknowledge that EVERY time you modify your system, there is always the potential for an **UNRECOVERABLE** brick. A brick is a damaged device that can no longer function; in other words, something that becomes "as useful as a brick".

Bricks are rare on the Nintendo Switch, but still a possibility — so make sure you read the directions **CAREFULLY** before performing them, and follow them **EXACTLY**.

Keep your device plugged in and charged throughout the entire process to avoid data loss or damage from an unexpected power-off.

:::

::: warning

**Exploit Persistence**

Custom firmware is **not** permanently installed and does not change anything on your console simply by running it. It will be entirely unloaded upon rebooting the console. However, CFW does allow you to make permanent changes to your console at your own will, so **be responsible and cautious with the abilities enabled by CFW**.

:::

::: tip

**Getting Assistance**

It is advised that you read the entire guide from start to finish one or more times before actually running through the guide with your system, to help with your understanding of the information provided.

If, despite this, something is hard to understand while you follow the guide, please reach out and ask for clarification on the [Nintendo Homebrew Discord server](https://discord.gg/C29hYvh).

If your English isn't the best, use a translator such as [Google Translate](https://translate.google.com/) to submit your questions so that we can assist.

:::

::: tip

**Compatability**

This guide will work on first-generation (V1) and modchipped Switch consoles in all regions on any firmware version.

:::

## Ready to start?

If so, please follow the link below to proceed to the main guide.

::: tip

[Continue to Getting Started](user_guide/getting_started)

Once you have finished reading the above information, proceed to Get Started to determine your console exploitability, and resulting exploit method.

:::

---

::: details Frequently Asked Questions about this page

* **Q: What are the differences between "first-generation" ("V1") consoles and "patched" consoles when it comes to running homebrew?**

    A: Once you boot into Horizon, not much. The primary things to keep in mind is that only V1 consoles support Atmosphère's "Reboot to Payload" function, but modchips automatically load payloads during reboots on their own.

* **Q: What is Horizon?**

    A: Horizon is the name of the Switch's operating system. It is sometimes called "HorizonNX", because it is actually a derivative version of the Nintendo 3DS's operating system of the same name.

* **Q: Why is it called Atmosphère?**

    A: Atmosphère "runs on top of the Horizon" operating system. Each layer of Horizon's security is referenced via the atmosphere's different layers. For example, the EL1 "kernel" re-implementation is called mesosphère, while the EL3 "TrustZone" re-implementation is called exosphère. Learn more about ARM Exception Levels on the [ARM Developer](https://developer.arm.com/documentation/102412/0103/Privilege-and-Exception-levels/Exception-levels) site.

* **Q: What exactly is the "emuMMC path," and why is it recommended for the microSD card to be at least 128GB for this path?**

    A: The purpose of an emuMMC/emuNAND is to give you a safe place to use custom firmware functions without Nintendo catching sight. As it is an offline clone of your internal storage ran entirely from your microSD card, you will need to set allocate up to 64GB on your microSD card for it (depending on the size of your internal storage), plus a duplicate of your digital game data (emuMMC uses a separate Nintendo folder for game installs).

* **Q: Why do I need to set my console as primary before starting this guide?**

    A: The Switch will otherwise try to connect to Nintendo servers before starting apps, which can lead to unexpected delays and make emuMMCs completely unusable.

* **Q: Can I follow this guide if I have a smaller microSD card, and what are the risks involved in choosing the sysCFW path?**

    A: Nothing stops you from using sysCFW, but it is recommended for first-timers to get familiar with CFW by starting with an emuMMC. If used improperly, running sysCFW can cause software bricks and/or [bans](https://nx.eiphax.tech/ban.html).

* **Q: Are there any specific restrictions or limitations imposed by Nintendo on consoles running custom firmware and homebrew?**

    A: Nintendo has shown a distinct tolerance for users using CFW while online. They **do not** ban for the presence of CFW, they ban for misbehavior - such as piracy or cheating online. Otherwise, you are treated like all other users.

* **Q: Is there any community support or forums recommended for users who may have questions or issues during the process?**

    A: Of course! As well as the [Nintendo Homebrew Discord server](https://discord.gg/C29hYvh), you can also try the [r/SwitchHacks subreddit](https://www.reddit.com/r/SwitchHacks/)!

:::
