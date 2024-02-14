### **sysCFW vs. emuCFW**

A "CFW Environment" describes the context in which you are using custom firmware (CFW).
As a reminder, custom firmware is never permanently installed, and runs independently on top of the system firmware. This means that you never have to commit to where you want to use custom firmware.

Atmosphère temporarily patches the OS to enable customisations. You can choose the CFW environment each time you turn on your system. Each option has its own benefits and drawbacks.

 - For the purposes of this guide, the suffix -NAND and -MMC are interchangeable.

sys- refers to the physical storage chip inside of your Switch. It stands for "system".

emu- refers to a virtual version of the OS, running from a microSD card. It stands for "emulated".

**You get to decide your CFW's Environment!**

Your choices are between using the internal storage or emulated storage. The following will go over the pros and cons of either decision.

### **sysCFW (CFW on sysMMC)**
#### **sysCFW has the following benefits:**

* Possibility of online play during CFW use
* Parity between CFW use and standard use
* Fast console response time
* Longer microSD card lifespan


#### **The following drawbacks:**

* A brick risk for users who engage in risky behavior, and a brick risk specifically for modchip users [[info]](#modchip-instability)
* Nintendo server bans for misbehavior [[info]](https://nx.eiphax.tech/ban.html)
* No possibility of custom application installations on the HOME Menu (guaranteed ban)
* No possibility of custom profile pictures (guaranteed ban)

If you prefer snappiness, online play, and a seamless transition between official features and custom features, you may consider using CFW on sysMMC. In this guide, sysMMC is assumed to be utilised for online play.

#### **In particular, here are just *some* popular use-cases for sysCFW:**

* Enjoying CFW features such as custom sysmodules and homebrew apps
* Dumping eShop games and game saves for preservation or installation on emuMMC
* Restoring modified save data for many games
* Custom fonts and home menu theming
* Modifying and cheating in most offline games (and some online games; [[info]](../../extras/cheats.md))


To proceed with sysCFW, click on the following button:
[Formatting/Partitioning the SD for sysCFW :material-arrow-right:](../all/partitioning_sd_syscfw.md){ .md-button .md-button--primary }

### **emuCFW (CFW on emuMMC)**
#### **emuCFW has the following benefits:**

* No risk of bans as long as emuMMC remains offline from Nintendo [[info]](../../extras/img/ban.png)
* A safe area to test dangerous or risky mods and homebrew
* No chance of bricking and losing console-unique information

#### **emuCFW has the following drawbacks:**

* Large microSD size requirement (32GB or 64GB will be reserved, depending on if you use an Switch OLED or not)
* This also means a minimum of 128GB is required (unless you are an advanced user and can resize the USER partition of your NAND)
* Slower console response times
* No official online play while in CFW
* More microSD card wear over time
* Doubled digital game storage requirements <link to dumping digital games>

#### **And the following considerations:**
No parity between sysMMC and emuMMC (Game installs, save data, and system settings will be separated when you boot between the two)

If you prefer foolproofing, and a separation between official features and custom features, you may consider using CFW on emuMMC. In this guide, emuMMC is assumed to be utilised for offline play.

#### **In particular, here are just *some* popular use-cases for emuCFW:**

* Installing game cartridges
* Restoring modified save data for any game
* Modding and cheating in any game
* Custom fonts and home menu theming
* Downgrading titles to base versions, without mandatory updates
* Enjoying CFW features such as custom sysmodules and homebrew apps

To proceed with emuCFW, click on the following button:
[Formatting/Partitioning the SD for emuCFW :material-arrow-right:](../all/partitioning_sd.md){ .md-button .md-button--primary }

#####Modchip Instability
!!! danger "Modchips"
      Modchips directly infiltrate communication with the internal storage chip. Due to this, there are slight chances of NAND backups being tainted with corrupted data. If a bad backup is restored to sysNAND, the console can be bricked, and a modchip alone won't be able to fix it. To be safe, either only run an emuMMC on a console with a modchip, verify BOOT0/1 backups using tools like [NXNandManager (Windows)(https://github.com/eliboa/NxNandManager)] or test NAND backups by running them as emuMMCs before you flash them to the sysNAND.
