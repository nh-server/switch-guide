# Introduction to Modchips

!!! info "Information" 
    Modchips and modchipped switches are different from unpatched switches. They use voltage glitching to glitch the SoC and essentially "lag out" the CPU so that `sdloader` can run. 
    `sdloader` is the module responsible for loading `payload.bin` off of the root of your SD card, this allows even patched Switch consoles to run CFW.

### **General knowledge**

If you've just finished installing your modchip or getting your Switch modchipped, there are general things you should know.

Unless you have a modchipped V1 unpatched Switch, your Switch is not vulnerable to the fusee-gelee exploit found in RCM. 
This means that putting your Switch in RCM and trying to inject a payload won't do anything.

Modchipped Switch consoles, depending on the firmware they're running and the kind of modchip you have, will not boot without SD card inserted.
This means that you will not be able to use your Switch normally if you don't have an SD card. 

???+ note "Note about modchips and their firmwares"
    Some modchips and modchip firmwares (namely the PicoFly modchip and its firmware) **DO** allow you to bypass the modchip by either holding both volume buttons or either one of the volume buttons, then powering on your Switch. This would allow you to boot normally without SD card     inserted.

If you do turn on your Switch without SD card inserted, you should end up at a splash screen saying something along the lines of `NO SD`.

Unlike unpatched Switch consoles, modchipped Switch consoles can "cold boot" CFW, they do not rely on an external device to inject a payload like unpatched Switch consoles would. 

- "Cold booting" means turning on your console from a fully-off state and immediately being able to run CFW.

Running CFW on modchipped switches is more simplistic as it only requires you to have `payload.bin` present on the root of your SD card and turn on your switch. 

Before setting up the console for homebrew, it is important to have at least one eShop game (such as [Fallout Shelter](https://www.nintendo.com/games/detail/fallout-shelter-switch/)), application (such as [YouTube](https://www.nintendo.com/games/detail/youtube-switch/) or [Hulu](https://www.nintendo.com/games/detail/hulu-switch/)), or a game demo such as [10 Second Run RETURNS](https://www.nintendo.com/games/detail/10-second-run-returns-switch). Running homebrew through any game cartridge will also work, but it must be inserted. Running homebrew does not permanently replace or remove the game/application, nor does it become tied to only one game/application (any cartridge you have inserted or any game/application installed can always be used). Once you have any game or application, you are prepared to continue on with the guide.

If you do decide to follow the emuMMC path (recommended) later in the guide, make sure you disable [Automatic Save Data Cloud backups/downloads](https://www.nintendo.co.uk/Support/Nintendo-Switch/How-to-Enable-Disable-Automatic-Save-Data-Backups-and-Downloads-1434310.html) beforehand as well as making sure [the Switch is set as Primary Console](https://en-americas-support.nintendo.com/app/answers/detail/a_id/22453/~/how-to-change-the-primary-console-for-your-nintendo-account).


!!! danger "Disclaimer" 
    We **ONLY** support the PicoFly modchip (the `RP2040 Zero` development board and the "modchip variant" of it), it's your own responsibility to install a modchip or let your switch get modchipped.
    There is always a risk of your switch being rendered dysfunctional if you don't know what you're doing.
    The NH Discord server is also generally **NOT** a place for fixing bad modchip installations (e.g. by you or a modchip installer) as it should be fixable by someone knowledgeable. 
    We can give advice and installation tips for the installation as long as it's for a PicoFly modchip.

[Continue to Preparing Hekate :material-arrow-right:](preparing_hekate.md){ .md-button .md-button--primary }

