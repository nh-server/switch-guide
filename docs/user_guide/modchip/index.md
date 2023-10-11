# Introduction to Modchips

!!! info "Information" 
    Modchips and modchipped switches are different from unpatched switches. They use voltage glitching to glitch the SoC      and essentially "lag out" the CPU so that `sdloader` can run. 
    `sdloader` is the module responsible for loading `payload.bin` off of the root of your SD card, this allows even          patched switches to run CFW.

### General knowledge

If you've just finished installing your modchip or getting your switch modchipped, there are general things you should know.

Unless you have a modchipped V1 unpatched switch, your switch is not vulnerable to the fusee-gelee exploit found in RCM. 
This means that putting your switch in RCM and trying to inject a payload won't do anything.

Modchipped switches, depending on the firmware they're running and the kind of modchip you have, will not boot without SD card inserted.
This means that you will not be able to use your switch normally if you don't have an SD card. 

???+ note "Note about modchips and their firmwares"
    Some modchips and modchip firmwares **DO** allow you to bypass the modchip by either holding both volume buttons or       either one of the volume buttons, then powering on your switch. This would allow you to boot normally without SD card     inserted.

If you do turn on your switch without SD card inserted, you should end up at a splash screen saying something along the lines of `NO SD`.

Unlike unpatched switches, modchipped switches can "cold boot" CFW, they do not rely on an external device to inject a payload like unpatched switches would. 
(Cold booting means turning on your console from a fully-off state and immediately being able to run CFW).
Running CFW on modchipped switches is more simplistic as it only requires you to have `payload.bin` present on the root of your SD card and turn on your switch.

!!! danger "Disclaimer" 
    We do **NOT** assist with the sourcing and installation of modchips, it's your own responsibility to install a modchip or let your switch get modchipped.
    There is always a risk of your switch being rendered dysfunctional if you don't know what you're doing.
    The NH Discord server is also **NOT** a place for discussing modchips and fixing bad modchip installations (e.g. by you or a modchip installer).

[Continue to Preparing Hekate :material-arrow-right:](preparing_hekate.md){ .md-button .md-button--primary }

