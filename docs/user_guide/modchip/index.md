# Introduction to Modchips

!!! info "information"
    Unlike "unpatched" consoles,
    modchips enable CFW via CPU voltage glitching, which bypass firmware verifications. It allows a ``payload.bin`` file to be launched in place of BOOT0, loaded via a modchip firmware module named `sdloader`. This is much different from RCM and its exploit, [fusee-gelee](link), which "unpatched" consoles use.
    Modchips allow any console (even all patched consoles) to run CFW!

### **General knowledge**

If you're new to the world of modchipped Switch consoles, there are general things you should know.

Modchipped Switch consoles, except certain original V1 consoles made from 2017 to mid-2018, are immune to the fusee-gelee exploit in RCM. Attempting payload injection in RCM is futile; modchips are typically used on unhackable consoles in the first place.

Depending on the firmware running on your modchip, you may not be able to boot the console without a microSD card inserted.
This means that you will not be able to use your Switch *at all* if you don't have an microSD card inserted.

???+ note "Note about modchips and their firmwares"
    Some modchip firmwares (Spacecraft-NX, for example) **DO** allow you to bypass the modchip's `sdloader` by either holding both volume buttons or either one of the volume buttons, then powering on your Switch. This would allow you to boot normally without a microSD card inserted. However, not all modchips allow upgrading their firmware.

If you do turn on your Switch without a microSD card inserted, you should end up at a splash screen saying something along the lines of `NO SD`.

Unlike unpatched Switch consoles, modchipped Switch consoles allow "untethered, coldboot" CFW loading; they do not rely on an external device to inject a payload like unpatched Switch consoles would.

- "Untethered coldboot" means being able to turn on your console from a fully-off ("cold") state, directly into custom firmware, without external devices such as a dongle, payload injector, or jig.

Running CFW on modchipped switches is more simplistic, as it only requires you to have `payload.bin` present on the root of your microSD card when you turn on the Switch.

Before setting up the console for homebrew, it is important to have at least one eShop title installed. Running the homebrew menu "over a title" allows for much higher resource allocation. Try downloading a free game (such as [Fallout Shelter](https://www.nintendo.com/games/detail/fallout-shelter-switch/)), application (such as [YouTube](https://www.nintendo.com/games/detail/youtube-switch/)), or a game demo such as [10 Second Run RETURNS](https://www.nintendo.com/games/detail/10-second-run-returns-switch). Running homebrew through any game cartridge will also work, but it must be inserted. Running homebrew does not permanently replace or remove the game/application, nor does it become tied to only one game/application (any cartridge you have inserted or any game/application installed can always be used). Once you obtain any bootable title, you are prepared to continue on with the guide.

### **Important**
If you do decide to follow the recommended emuMMC path later in the guide, make sure you disable [Automatic Save Data Cloud backups/downloads](https://www.nintendo.co.uk/Support/Nintendo-Switch/How-to-Enable-Disable-Automatic-Save-Data-Backups-and-Downloads-1434310.html) beforehand as well as making sure [the Switch is set as Primary Console](https://en-americas-support.nintendo.com/app/answers/detail/a_id/22453/~/how-to-change-the-primary-console-for-your-nintendo-account).


!!! danger "Disclaimer"
    We **ONLY** support the Picofly modchip (the `RP2040 Zero` development board and the "modchip variant" of it), it's your own responsibility to install a modchip or get your Switch modchipped.
    There is always a risk of your Switch being rendered dysfunctional when messing with its hardware without proper experience.
    The NH Discord server is also generally **NOT** a place for fixing bad modchip installations (e.g. by you or a modchip installer) as it should be fixable by someone knowledgeable.
    We can give advice and installation tips for the installation as long as it's for a Picofly modchip.

[Continue to Preparing Hekate :material-arrow-right:](preparing_hekate.md){ .md-button .md-button--primary }
