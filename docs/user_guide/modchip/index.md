# Introduction to Modchips

## Prerequisites

A modchip is a physical modification to the motherboard of your Switch. It cannot be installed without decent microsoldering experience. You can outsource this work to people who are willing to do the job for you, or you can also view the following guide if you are willing to install one yourself.

::: tip

[Modchip Installation guide](https://guide.nx-modchip.info/)

:::

**Note:** The above guide is not hosted or supported by NH Server; we cannot provide support for reviving consoles ruined by inexperience.

## Information
Unlike "unpatched" consoles, modchips enable CFW via CPU voltage glitching, which bypass bootROM firmware verifications. It allows a ``payload.bin`` file to be launched in place of BOOT0, loaded via a modchip firmware module named `sdloader`. This is much different from RCM and its exploit, [fusee-gelee](https://github.com/Qyriad/fusee-launcher/blob/master/report/fusee_gelee.md), which "unpatched" consoles use.
Modchips allow any console, including all patched consoles, to run CFW!

## General knowledge

Patched Switch consoles (consoles produced after mid-2018) are immune to the fusee-gelee exploit in RCM. Attempting to inject a payload on a Patched console will be unsuccessful.

Depending on your modchip's firmware, you may not be able to boot the console without a microSD card inserted.
This means without a microSD inserted at all times, your Switch becomes *unusable*. The likelihood of the Switch becoming *unusable* is small, but still possible. To know if your modchip and its firmware support the bypassing of the firmware module `sdloader`, consult the "**About modchips and their firmware versions**" section below.

If you do turn on your Switch without a microSD card inserted, you should end up at a splash screen saying something along the lines of `NO SD`.

::: details About modchips and their firmware versions (Click to unfold)

Some modchip firmwares (e.g., Spacecraft-NX, Hwfly-NX and the Picofly firmware) allow bypassing `sdloader` by holding one - or both - of the volume buttons during power-on, enabling normal boot without a microSD card. Not all modchips support manual firmware updates.

:::

Modchipped Switch consoles allow untethered, coldboot CFW loading, directly entering custom firmware without external devices like dongles or jigs. This is in contrast to the tethered coldboot "RCM" entrypoint.

- "Untethered coldboot" means being able to turn on your console from a fully-off ("cold") state directly into custom firmware, without external devices such as a dongle, payload injector, or jig.

Running CFW on modchipped consoles is more simplistic, as it only requires you to have `payload.bin` present on the root of your microSD card when you turn on the system.

Furthermore, this guide assumes you have a functional modchip installation.

## Important
If you do decide to follow the recommended emuMMC path later in the guide, make sure you disable [Automatic Save Data Cloud backups/downloads](https://www.nintendo.co.uk/Support/Nintendo-Switch/How-to-Enable-Disable-Automatic-Save-Data-Backups-and-Downloads-1434310.html) beforehand as well as making sure [the Switch is set as the primary Pass-Enabled console](https://en-americas-support.nintendo.com/app/answers/detail/a_id/41221/~/how-to-set-or-change-the-primary-nintendo-switch-console-for-a-nintendo-account).


::: danger

**Disclaimer**

We **ONLY** support the Picofly modchip (the `RP2040 Zero` development board and the "modchip variant" of it). Installing a modchip safely is your responsibility, so if you don't trust yourself, get someone trusted to perform the install.

There is always a risk of your Switch being rendered dysfunctional when messing with its hardware without proper experience.

The NH-Discord server is not for fixing bad/failed modchip installations.

We can give advice and installation tips for the installation as long as it's for a Picofly modchip.

:::

::: tip

[Continue to Preparing hekate](preparing_hekate)

:::

::: details Frequently Asked Questions about this page

- **Q: Can you provide more information about modchip firmwares, specifically regarding their impact on the boot process and the ability to bypass the sdloader?**

    A: Modchip firmwares indirectly determine the functionality of your system. Modern modchips (such as Picofly) typically have firmware flashed to them that support all hardware configurations (namely eMMC brands like Hynix, Samsung and Toshiba) "out-of-the-box" and also allow you to bypass `sdloader`. If this is not the case however, flashing the firmware manually is required by opening up the Switch and using the USB debug port that comes with the modchip to flash the modchip directly. This is especially required in the cases where the eMMC brand is not supported, as your Switch wouldn't boot whatsoever and the modchip would be stuck while trying to glitch/train and write its payload to the `BOOT0` partition of the internal storage.

- **Q: What different types of modchips are there?**

    A: There are three main types of modchips for the Nintendo Switch. Only two of them are relevant for this guide.

    On the V1 Nintendo Switch, a chip can be installed which automatically injects a payload whenever the console is detected in RCM. This type of modchip is **not** supported by this guide.

    On all other Switch consoles, there are DIY "Picofly" modchips which can be created with Raspberry Pi parts and custom cables. These use special firmwares, and are not compatible with firmwares intended for other modchips.

    There are also other "commercial" modchips of dubious origin by the name of "hwfly" or "SX Core/Lite"; we only will help with flashing new firmwares onto these, if you happen to already have one of them installed. Do not ask for assistance installing or sourcing this type of modchip.

- **Q: Can you further explain the concept of running homebrew "over a title" and why it allows for higher resource allocation?**

    A: The default way to run homebrew within Atmosphère is via the Album applet on the HOME Menu. However, applets have significantly less resources compared to full applications, and homebrew tools often run into constraints with these limits. By holding a button while launching normal apps while in CFW, you can load the Homebrew menu in their stead with full resources.

- **Q: What makes Picofly the only supported modchip, and what are the potential risks associated with installing a modchip on your Switch without proper experience?**

    A: Picofly is a fully open-source modchip, from the firmware to the RP2040 microcontroller it uses. Other "commercial" modchips have dubious origins, or were manufactured by [established illegal piracy groups](https://www.justice.gov/opa/pr/two-members-notorious-videogame-piracy-group-team-xecuter-custody) that have no place in the homebrew community. For the safety of your console and to respect the law of where NH Server is based, we will not assist with sourcing these types of modchips.

:::
