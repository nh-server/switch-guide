# Introduction to Modchips

!!! info "information"
    Unlike "unpatched" consoles, modchips enable CFW via CPU voltage glitching, which bypass bootROM firmware verifications. It allows a ``payload.bin`` file to be launched in place of BOOT0, loaded via a modchip firmware module named `sdloader`. This is much different from RCM and its exploit, [fusee-gelee](https://github.com/Qyriad/fusee-launcher/blob/master/report/fusee_gelee.md), which "unpatched" consoles use.
    Modchips allow any console (like all "patched" consoles) to run CFW!

### **General knowledge**

New to modchipped consoles? Here's what you need to know.

Modchipped Switch consoles, except certain original V1 consoles made from 2017 to mid-2018, are immune to the fusee-gelee exploit in RCM. Attempting payload injection in RCM is futile; modchips are typically used on patched consoles in the first place.

Depending on your modchip's firmware, you may not be able to boot the console without a microSD card inserted.
This means without a microSD inserted at all times, your Switch becomes *unusable*.
???+ note "Note about modchips and their firmwares"
    Some modchip firmwares (Spacecraft-NX, for example) **DO** allow you to bypass the modchip's `sdloader` by either holding both volume buttons or either one of the volume buttons during startup. This would allow you to boot normally without a microSD card inserted. However, not all modchips allow upgrading their firmware.

If you do turn on your Switch without a microSD card inserted, you should end up at a splash screen saying something along the lines of `NO SD`.


Introduction to Modchips
Unlike "unpatched" consoles, modchips enable CFW through CPU voltage glitching, bypassing bootROM firmware verifications. This allows launching a payload.bin file instead of BOOT0, loaded via a modchip firmware module named `sdloader`. Modchips, in contrast to the RCM and its fusee-gelee exploit used by "unpatched" consoles, enable any console, including all "patched" consoles, to run CFW.

General knowledge
New to modchipped consoles? Here's what you need to know.

Modchipped Switch consoles, except certain original V1 consoles made from 2017 to mid-2018, are immune to the fusee-gelee exploit in RCM. Payload injection in RCM is futile on consoles typically using modchips.

Depending on your modchip's firmware, booting the console may require a microSD card. Without it, your Switch becomes unusable.

???+ note "Note about modchips and their firmwares"
     Some modchip firmwares (e.g., Spacecraft-NX, Hwfly-NX and the Picofly firmware) allow bypassing sdloader by holding one of- or both volume buttons during power-on, enabling normal boot without a microSD card. Not all modchips support firmware upgrades.

     Booting without a microSD card leads to a NO SD splash screen.

Modchipped Switch consoles allow untethered, coldboot CFW loading, directly entering custom firmware without external devices like dongles or jigs. This is in contrast to the tethered coldboot "RCM" entrypoint.

- "Untethered coldboot" means being able to turn on your console from a fully-off ("cold") state directly into custom firmware, without external devices such as a dongle, payload injector, or jig.

Running CFW on modchipped consoles is more simplistic, as it only requires you to have `payload.bin` present on the root of your microSD card when you turn on the system.

Before setting up for homebrew, install at least one eShop title. Running homebrew "over a title" allows more resources for homebrew apps. Try downloading a free game (such as [Fallout Shelter](https://www.nintendo.com/games/detail/fallout-shelter-switch/)), application (such as [YouTube](https://www.nintendo.com/games/detail/youtube-switch/)), or a game demo such as [10 Second Run RETURNS](https://www.nintendo.com/games/detail/10-second-run-returns-switch). Running homebrew via a game cartridge will also work, but it must be inserted every time. Running homebrew does not permanently replace or remove the game/application, nor does it become tied to only one game/application (any cartridge you have inserted or any game/application installed can always be used). Once you obtain any bootable title, you are prepared to continue on with the guide.

### **Important**
If you do decide to follow the recommended emuMMC path later in the guide, make sure you disable [Automatic Save Data Cloud backups/downloads](https://www.nintendo.co.uk/Support/Nintendo-Switch/How-to-Enable-Disable-Automatic-Save-Data-Backups-and-Downloads-1434310.html) beforehand as well as making sure [the Switch is set as Primary Console](https://en-americas-support.nintendo.com/app/answers/detail/a_id/22453/~/how-to-change-the-primary-console-for-your-nintendo-account).


!!! danger "Disclaimer"
    We **ONLY** support the Picofly modchip (the `RP2040 Zero` development board and the "modchip variant" of it). Installing a modchip safely is your responsibility, so if you don't trust yourself, get someone trusted to perform the install.
    There is always a risk of your Switch being rendered dysfunctional when messing with its hardware without proper experience.
    The NH Discord server is not for fixing bad modchip installations.
    We can give advice and installation tips for the installation as long as it's for a Picofly modchip.

[Continue to Preparing Hekate :material-arrow-right:](preparing_hekate.md){ .md-button .md-button--primary }

??? "Frequently Asked Questions about this page"
      **Q: Can you provide more information about modchip firmwares, specifically regarding their impact on the boot process and the ability to bypass the sdloader?** <br>
      A: Modchip firmwares indirectly determine the functionality of your system. Modern modchips (such as Picofly) typically have firmware flashed to them that support all hardware configurations (namely eMMC brands like Hynix, Samsung and Toshiba) "out-of-the-box" and also allow you to bypass `sdloader`. If this is not the case however, flashing the firmware manually is required by opening up the Switch and using the USB debug port that comes with the modchip to flash the modchip directly. This is especially required in the cases where the eMMC brand is not supported, as your Switch wouldn't boot whatsoever and the modchip would be stuck while trying to glitch/train and write its payload to the `BOOT0` partition of the internal storage.

      **Q: Can you further explain the concept of running homebrew "over a title" and why it allows for higher resource allocation?** <br>
      A: The default way to run homebrew within Atmosphère is via the Album applet on the HOME Menu. However, applets have significantly less resources compared to full applications, and homebrew tools often run into constraints with these limits. By holding a button while launching normal apps while in CFW, you can load the Homebrew menu in their stead with full resources.

      **Q: What makes Picofly the only supported modchip, and what are the potential risks associated with installing a modchip on your Switch without proper experience?** <br>
      A: Picofly is a fully open-source modchip, from the firmware to the RP2040 microcontroller it uses. Other "commercial" modchips have dubious origins, or were manufactured by [established illegal piracy groups](https://www.justice.gov/opa/pr/two-members-notorious-videogame-piracy-group-team-xecuter-custody) that have no place in the homebrew community. For the safety of your console and to respect the law of where NH Server is based, we will not assist with sourcing these types of modchips.
