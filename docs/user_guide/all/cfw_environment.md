---
aside: false
---

# CFW on sysMMC vs. CFW on emuMMC

A "CFW Environment" describes the context in which you are using custom firmware (CFW).
As a reminder, custom firmware is never permanently installed, and runs independently on top of the system firmware. This means that you never have to commit to where you want to use custom firmware.

Atmosphère temporarily patches HOS (HorizonOS, operating system of the switch) to enable customisations. You can choose what version of HOS it patches, each time you turn on your system. Each option has its own benefits and drawbacks.

- For the purposes of this guide, the suffix -NAND and -MMC are interchangeable.

Generally, `sys-` refers to the physical storage chip (sysMMC/eMMC) inside of your Switch. It stands for "system".

Generally, `emu-` refers to a virtual version of the eMMC (internal storage), running from a microSD card. It stands for "emulated".

For more information on terminology, please refer to the [glossary](../../extras/glossary).

**You get to decide!** Your choices are between using the internal storage or emulated storage. We will go over the advantages and disadvantages of either decision below.

-----

::::: cards

:::: card

### emuMMC CFW
#### CFW on emuMMC has the following benefits:

- No risk of bans as long as emuMMC remains offline from Nintendo [[info]](https://nx.eiphax.tech/ban.html))
- A safe area to test dangerous or risky mods and homebrew
- No chance of bricking and losing console-unique information while using CFW

#### The following drawbacks:

- Large microSD size requirement (32GB or 64GB will be reserved, depending on if you use a Switch OLED or not). If you want a *decent* experience, a minimum of 128GB is required (unless you are an advanced user and can resize the USER partition of your NAND)
- Slower console response times due to the limitation of your microSD card's classifications/specifications
- No official online play while in CFW
- More microSD card wear over time
- Doubled digital game storage requirements <link to dumping digital games>

#### And the following considerations:
No parity between sysMMC and emuMMC (Game installs, save data, and system settings will be separated when you boot between the two)

#### In particular, here are just *some* popular use-cases for CFW on emuMMC:

- Restoring modified save data for any game
- Modding and cheating in any game
- Custom fonts and home menu theming
- Downgrading titles to base versions, without mandatory updates
- Enjoying CFW features such as custom sysmodules and homebrew apps

If you prefer foolproofing, and a separation between official features and custom features, you may consider using CFW on emuMMC. In this guide, emuMMC is assumed to be utilised for offline play.

::: info

**About this path**

This path of the guide ***also*** includes sysCFW as launch option.

:::

::: info

To proceed with CFW on **emuMMC**, click on the button below:

[Continue with the emuMMC path](../all/partitioning_sd)

:::

::::

:::: card

### sysCFW (CFW on sysMMC)
#### CFW on sysMMC has the following benefits:

- Parity of system settings, save data, and titles between CFW usage and standard usage (no need to duplicate digital games)
- Significantly lower microSD card storage requirements
- Possibility of online play during CFW use
- Fast console response time by not having to rely on the speed of your microSD card
- Longer microSD card lifespan

#### The following drawbacks:

- A brick risk for risky behaviors, especially for modchip users [[info]](#modchip-instability)
- A Nintendo server ban risk for misbehavior [[info]](https://nx.eiphax.tech/ban.html)
- No possibility of custom profile pictures (guaranteed ban)

#### In particular, here are just *some* popular use-cases for sysCFW:

- Enjoying CFW features such as custom sysmodules and homebrew apps
- Dumping eShop games, save data, and encryption keys for preservation or installation on emuMMC or external Switch emulators
- Restoring modified save data for many games
- Custom fonts and home menu theming
- Modifying and cheating in most offline games (and some online games; [[info]](../../homebrew/edizon))

If you prefer snappiness, online play, and a seamless transition between official features and custom features, you may consider using CFW on sysMMC. In this guide, sysMMC is assumed to be utilised for online play.

-----

::: info

To proceed with CFW on **sysMMC**, click on the button below:

[Continue with the sysCFW path](../all/partitioning_sd_syscfw)

:::

::::

:::::

### Modchip Instability

::: danger

**About Modchipped Switch console users**

Modchips directly infiltrate communication with the internal storage chip. Due to this, there are slight chances of NAND backups being tainted with corrupted data. If a bad backup is restored to sysNAND, the console can be bricked, and a modchip alone won't be able to fix it. To be safe, we recommend setting up an emuMMC on a console with a modchip, verify BOOT0/1 backups using tools like [NXNandManager (Windows)](https://github.com/eliboa/NxNandManager) or test NAND backups by running them as emuMMCs before you flash them to the sysNAND.

:::

::: details Frequently Asked Questions about this page

- **Q: Why is CFW referred to as being "never permanently installed"?**

    A: Unless you have a modchip of any kind, turning the console off will disactivate the custom firmware. There is no current method for Atmosphère to install-to or permanently replace any part of the Nintendo Switch, so it will need to be triggered by an exploit every time you turn on the console. Atmosphère will then patch Horizon to bring you custom firmware features.

- **Q: Should I personally use sys/emuMMC?**

    A: These questions are answered in detail within the webpage. Please make sure that you are fully reading the page before jumping here.
