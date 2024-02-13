<a href="https://discord.gg/C29hYvh" target="_blank"><img style="float: right;" src="img/discord.png"></a>

# NH Switch Guide

A guide collaboration between Nintendo Homebrew's Helpers and Staff, from stock to Atmosphère.

For live support with this guide please visit us in **#switch-assistance-1** or **#switch-assistance-2** over at the [NH Discord server](https://discord.gg/C29hYvh).

### **What is homebrew?**

Homebrew is a term for unoffical software written by hobbyists and amateur developers for locked down systems, like the Nintendo Switch.

Homebrew can include original games, emulators, save-editing tools, and much more.

Homebrew can be run for free (except for an RCM jig) on your Switch through Custom Firmware as long as you have a "first-generation" system, and a USB-C cable. All other consoles *can* run homebrew, but it requires external tools and hardware.

&nbsp;

### **What is Custom Firmware?**

Custom FirmWare (“CFW”) is a type of homebrew software that modifies the system firmware.
Atmosphère, for example, does this by running in the background and patching the OS on the fly.

Custom firmware can be considered a holy grail in terms of device modding, as it allows nearly limitless control and freedoms than you would get with more primitive "userland" access.

CFW can be set up on any console, with a hardware modification known as a modchip. However, some lucky people can run CFW for free, with no (expensive) tools, as long as they own a first-generation Nintendo Switch ("V1"), which were all manufactured between 2017 and mid-2018.
&nbsp;

### **What does this guide install?**

This guide has the end-goal of taking a completely unmodified Switch from stock firmware to a custom firmware named Atmosphère.

"fusee-gelee" is currently the most widespread method of launching custom firmware, giving us nearly full control of the system. It utilizes a vulnerability in the bootROM of the first-generation Switch systems, allowing us to send any payload we want to the Switch's recovery mode, instead of only ones that Nvidia and Nintendo authorized.

&nbsp;

### **What can I do with custom firmware?**

* Customize your HOME Menu with user-created themes and splash screens
* Run “ROM hacks” for games that you own
* Backup, edit, and restore saves for many games
* Play games for older systems with various emulators, using RetroArch or other standalone emulators
* Safely update to the latest system version without fear of losing access to homebrew

&nbsp;

### **What do I need to know before starting?**

Before beginning the guide, you must know the risks of Switch hacking: EVERY time you modify your system, there is always the potential for an UNRECOVERABLE brick. They’re rare, but still a possibility -- so make sure you read the directions carefully before performing them, and follow them EXACTLY.

This guide will work on first-generation (V1) and modchipped Switch consoles in all regions on any firmware version.

!!! note ""

    You will need **one** of the following in order to successfully follow this guide:

    - A PC and a USB cable capable of data transfer between your Switch and your PC
    - An Android device and a USB cable capable of data transfer between your Switch and your Android device
        - This does not work on every Android phone
    - A Lightning-OTG adapter, a jailbroken iOS device, and a USB cable capable of data transfer between your Switch and the adapter
        - This method is not covered by the guide, but you can read more about it at [this website](https://mologie.github.io/nxboot/)
    - A successfully modchipped Switch

    You will also need a microSD card that is at least 128 gigabytes or larger if you plan on following this guide through the emuMMC path, which is safer and strongly recommended. If you do decide to follow the emuMMC path, make sure you disable [Automatic Save Data Cloud backups/downloads](https://www.nintendo.co.uk/Support/Nintendo-Switch/How-to-Enable-Disable-Automatic-Save-Data-Backups-and-Downloads-1434310.html) beforehand as well as making sure [the Switch is set as Primary Console](https://en-americas-support.nintendo.com/app/answers/detail/a_id/22453/~/how-to-change-the-primary-console-for-your-nintendo-account).
    If you must use a smaller microSD card, you can choose to use the sysNAND CFW path, after assuming the risks involved.

    Additionally, on a V1 "unpatched" Switch, you will need a way to access the ReCovery Mode (this will be further explained in the "Entering RCM section").

If everything goes according to plan, you will lose no data and end up with everything that you started with (games, Nintendo Account, saves, etc will be preserved). Your functionalities will only be enhanced.

Keep your device plugged in and charged throughout the entire process to avoid data loss or damage from an unexpected power-off.

Custom firmware is not permanently installed and does not change anything on your console simply by running it. It will be entirely unloaded upon rebooting the console if you aren't using a modchip. However, CFW does allow you to make permanent changes at your own will, so __be cautious of what you do with the powers that CFW grants you__.

It is advised that you read the entire guide from start to finish one or more times before actually running through the guide with your system.

### **Continue with the applicable guide for your Switch by clicking one of the buttons below:**

[Get Started with RCM (V1) :material-arrow-right:](user_guide/getting_started.md){ .md-button .md-button--primary } [Get Started with Modchips (Not Free!) :material-arrow-right:](user_guide/modchip/index.md){ .md-button .md-button--primary }

&nbsp;


Note: We are not currently, historically, or will we ever be, associated with Anton Retro, sthetix, Ely M., or other derivative or YouTube/TikTok guide publishers, especially any that claim relation to us.

Furthermore, we resent any implication to the contrary.
