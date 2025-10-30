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

Prepare to set aside a minimum of an hour to follow this guide. This is specifically for you to carefully read and understand each page for safe execution for the safety and longevity of your Switch console. Some required device backups can also take around ten to thirty minutes to create, depending on your Switch model and your microSD card specifications.

:::

## What is Custom Firmware?

Custom FirmWare (“CFW”) is complex software that modifies the function of a device's operating system, also known as a system firmware.
Atmosphère, for example, patches the Switch OS (named Horizon) on the fly.

Custom firmware can be considered a holy grail in terms of device modding, as it allows nearly limitless control and freedoms than you would get with more primitive "userland" access.
&nbsp;

## What is homebrew?

Homebrew refers to unofficial software written by hobbyists for locked down systems, like the Nintendo Switch. Homebrew can include original games, emulators, save-editing tools, and much, much more!

On the Switch in particular, you need CFW to run almost all available homebrew. Some first-gen ("V1") consoles can run homebrew for free, while all other ("patched") consoles require specialized hardware installation beforehand.
&nbsp;

## What are custom operating systems?
Custom operating systems (OSes) are alternative system software installations, like Android or Linux, that install alongside the default Switch OS. These are usually perfect for powerusers who want to extend the functionality of their console beyond that of a gaming console, transforming Nintendo Switch to a full-fledged hybrid tablet or desktop. These custom OSes run completely independent of the Switch OS, meaning that anything you do in a custom OS cannot be reported back to Nintendo. Custom operating systems are not "emulated"; they run natively on the Switch's Tegra X1 SoC.

This guide will give you the opportunity to set aside space on your microSD to install these custom OSes onto, if you desire. It is important to note that these installations are optional; you do not need to install any custom OS in order to complete this guide and install Atmosphère. However, it is better to decide sooner rather than later, as the installation process involves formatting your microSD card.

## What does this guide install?

This guide has the end-goal of taking a completely unmodified Switch from stock firmware to a custom firmware named Atmosphère.

[fusee-gelee](files/extras/fusee_gelee_nvidia.pdf) is currently the most widespread software entrypoint of launching custom firmware. It utilizes a vulnerability in the bootROM of the first-generation Switch systems, allowing us to boot the console via any payload we choose, instead of only ones that Nvidia and Nintendo authorize.  The result allows full baremetal control over your console, including system storage backups, recovery, custom firmwares, and custom operating systems.
&nbsp;

## What can I do with custom firmware?

- Customize your HOME Menu with user-created themes and splash screens.
- Run “ROM hacks” for games that you own.
- Backup, edit, and restore saves for many games.
- Play games for older systems with various emulators, using RetroArch or other standalone emulators.
- Safely update to the latest system version without fear of losing access to homebrew.
- Safely customise your device while retaining full access to Nintendo Switch Online services.

More on this can be found later on in the guide.

## What do I need to know before starting?

As previously mentioned, this guide will take a minimum of an hour to fully complete. Please responsibly set aside this time before your first run-through.

Acknowledge that EVERY time you modify your system, there is always the potential for an UNRECOVERABLE brick. A brick is a damaged device that no longer functions; something that becomes as "useful as a brick". On the Switch, they're rare, but still a possibility -- so make sure you read the directions carefully before performing them, and follow them EXACTLY.

This guide will work on first-generation (V1) and modchipped Switch consoles in all regions on any firmware version.

::: tip

**You will need ***one*** of the following in order to successfully follow this guide:**

- A PC, a microSD card reader, and a USB-C cable capable of data transfer to connect them together.
- An Android device with microSD card reader and a USB-C cable capable of data transfer to connect them together.
    - This does not work on every Android phone.
- A Lightning OTG adapter, a microSD card reader, a jailbroken iOS device, and a USB cable capable of data transfer to connect them together.
    - This method is not covered by the guide, but you can read more about it at [this website](https://mologie.github.io/nxboot/)
- A successfully modchipped Switch and a microSD card reader.

If you choose the emuMMC path introduced later in the guide, you will also need a microSD card that is *at least* 128 gigabytes. In this path, it'll be important to disable the [Automatic Save Data Cloud](https://en-americas-support.nintendo.com/app/answers/detail/a_id/41209) function beforehand, as well as making sure [the Switch is set as the primary Pass-Enabled console](https://en-americas-support.nintendo.com/app/answers/detail/a_id/41221/~/how-to-set-or-change-the-primary-nintendo-switch-console-for-a-nintendo-account).

If you must use a smaller microSD card or don't wish to use an emuMMC, you can choose to use the sysCFW path instead.

Additionally, on a V1 "unpatched" Switch, you will need a way to access the ReCovery Mode (this will be further explained in the "Entering RCM" section). While possible with household tools, you may want to shell money out for a "jig" that inserts into the Joy-Con rail to reliably enable RCM.

:::

Upon completion, you will lose no data, ending up with everything that you started with (games, Nintendo Account, save data, etc will be preserved). Your functionalities will only be enhanced.

Keep your device plugged in and charged throughout the entire process to avoid data loss or damage from an unexpected power-off.

Custom firmware is not permanently installed and does not change anything on your console simply by running it. It will be entirely unloaded upon rebooting the console. However, CFW does allow you to make permanent changes to your console at your own will, so __be responsible and cautious with the abilities enabled by CFW__.

It is advised that you read the entire guide from start to finish one or more times before actually running through the guide with your system.

If something doesn't make sense while you follow the guide, please reach out and ask for clarification rather than fumble around on your own. If your English isn't the best, use a translator such as [Google Translate](https://translate.google.com/) to submit your questions, so we can help.

::: tip

[Continue to Getting Started](user_guide/getting_started)

:::

-----

Note: We are not currently, historically, or will we ever be, associated with Anton Retro, sthetix, Ely M., or other derivative or YouTube/TikTok guide publishers, especially any that claim relation to us.

Furthermore, we resent any implication to the contrary.

::: details Frequently Asked Questions about this page

- **Q: What are the differences between "first-generation" ("V1") consoles and "patched" consoles when it comes to running homebrew?**

    A: Once you boot into Horizon, not much. The primary things to keep in mind is that only V1 consoles support Atmosphère's "Reboot to Payload" function, but modchips automatically load payloads during reboots on their own.

- **Q: What is Horizon?**

    A: Horizon is the name of the Switch's operating system. It is sometimes called "HorizonNX", because it is actually a derivative version of the Nintendo 3DS's operating system of the same name.

- **Q: Why is it called Atmosphère?**

    A: Atmosphère "runs on top of the Horizon" operating system. Each layer of Horizon's security is referenced via the atmosphere's different layers. For example, the EL1 "kernel" reimplementation is called mesosphère, while the EL3 "TrustZone" reimplementation is called exosphère.
 Learn more about ARM Exception Levels [here](https://developer.arm.com/documentation/102412/0103/Privilege-and-Exception-levels/Exception-levels).

- **Q: What exactly is the "emuMMC path," and why is it recommended for the microSD card to be at least 128GB for this path?**

    A: The purpose of an emuMMC/emuNAND is to give you a safe place to use custom firmware functions without Nintendo catching sight. As it is an offline clone of your internal storage ran entirely from your microSD card, you will need to set allocate up to 64GB on your microSD card for it (depending on the size of your internal storage), plus a duplicate of your digital game data (emuMMC uses a separate Nintendo folder for game installs).

- **Q: Why do I need to set my console as primary before starting this guide?**

    A: The Switch will otherwise try to connect to Nintendo servers before starting apps, which can lead to unexpected delays and make emuMMCs completely unusable.

- **Q: Can I follow this guide if I have a smaller microSD card, and what are the risks involved in choosing the sysCFW path?**

    A: Nothing stops you from using sysCFW, but it is recommended for first-timers to get familiar with CFW by starting with an emuMMC. If used improperly, running sysCFW can cause software bricks and/or [bans](https://nx.eiphax.tech/ban.html).

- **Q: Are there any specific restrictions or limitations imposed by Nintendo on consoles running custom firmware and homebrew?**

    A: Nintendo has shown a distinct tolerance for users using CFW while online. They __do not__ ban for the presence of CFW, they ban for misbehavior - such as piracy or cheating online. Otherwise, you are treated like all other users.

- **Q: Is there any community support or forums recommended for users who may have questions or issues during the process?**

    A: Of course! As well as the [Nintendo Homebrew Discord server](https://discord.gg/C29hYvh), you can also try the [r/SwitchHacks subreddit](https://www.reddit.com/r/SwitchHacks/)!

:::
