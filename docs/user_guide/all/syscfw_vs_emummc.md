### **emuNAND vs emuMMC vs sysNAND vs sysMMC**

We will often and most of the time refer to your Switch's internal storage as sysMMC, the definitions of the different terminologies is listed below:

- sysNAND stands for System NAND, meaning the internal storage inside of your actual Switch.
- sysMMC is the same as sysNAND besides the name, most of the time we will refer to sysNAND as sysMMC.
- emuNAND stands for emulated NAND, this means that your entire NAND (system memory) will run off your microSD card with Custom Firmware (CFW). This NAND's contents (games, applications, saves, etc.) are *completely* separate from your sysNAND.
- emuMMC is the name for the currently used implementation of emuNAND on Switch. It has no difference from emuNAND besides the name.

### **emuMMC (Recommended for new users and modchipped Switch users)**

`emuMMC` is a copy of your sysMMC (internal storage) at the point of creation, it's essentially an "offline" sandbox that never communicates with Nintendo's servers and always has Atmosphere applied to it.
Its main purpose is to serve as (aforementioned) sandbox that you can use to practice all aspects of homebrew safely.

- "Offline" meaning behind a method of blocking Nintendo's servers.

It can also additionally serve as brick protection, which is why it's especially important and recommended to set up for modchipped Switch users.

This path of the guide also sets up sysCFW, you don't have to set it up additionally.

#### Some use cases for this path of the guide are:

- Dumping games and save data
- Restoring save data
- Modding and cheating in any game
- Theming (installing user made themes)
- Installing game cartridges
- Downgrade titles to their base versions
- Running CFW and therefore also running custom homebrew sysmodules and homebrew apps

#### The requirements for emuMMC are:

1. Your 128GB micro SD card or larger (smaller capacities *are* doable but you likely won't have a good time)
2. Your Switch

If you wish to follow this path of the guide, click on the button below:

[Partitioning the SD for emuMMC :material-arrow-right:](../all/partitioning_sd.md){ .md-button .md-button--primary }

### **sysCFW (Not recommended for new users and modchipped Switch users)**

`sysCFW` (sysNAND CFW) essentially is your Switch's internal storage (sysNAND) with Atmosphere applied to it.
This allows you to run Atmosphere on your Switch's internal storage and use your Switch online with all homebrew functionality, as long as you do nothing bannable with CFW.

This path is *not* recommended for modchipped Switch users.

#### Some use cases for this path of the guide are:

- Dumping games and save data
- Restoring save data (this should *not* be done to every game, it's bannable in some instances)
- Modding offline games
- Modding online games with "Wi-Fi safe" mods (e.g. UI/skin mods)
- Cheating in offline games
- Theming (installing user made themes)
- Running CFW and therefore also running custom homebrew sysmodules and homebrew apps

Bannable offenses can be found [here](https://nx.eiphax.tech/ban.html)

#### The requirements for sysCFW are:

1. Your micro SD card
2. Your Switch

If you wish to follow this path of the guide, click on the button below:

[Formatting/Partitioning the SD for sysCFW :material-arrow-right:](../all/partitioning_sd_syscfw.md){ .md-button .md-button--primary }









