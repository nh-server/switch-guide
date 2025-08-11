# Installing Android

This page will detail the required information you need to know about installing Android (Android 15) for the Nintendo Switch.

::: warning

**Have you partitioned your microSD card?**

This page assumes that you've followed our guide to partition your microSD card for an Android setup. If you didn't do so yet, please follow [this page](../user_guide/all/partitioning_sd_syscfw).

:::

### Installation

Click the following link to continue to the official LineageOS documentation for installing Android 15 (external link):

::: tip
[Install Android 15](https://wiki.lineageos.org/devices/nx_tab/)
:::

- **Note:** You can skip the partitioning mentioned in the LineageOS documentation. You already did this during the guide and do *not* have to do so again.

If you already have Android fully installed, do not follow this guide, as your current installation would be erased.

-----

### Post-Install information

#### Tips and Tricks

- If Joy-Con autopairing has not kicked in, try a reboot. Sometimes the first boot doesn't pick up the addition.
- To access LineageOS recovery: hold `VOL+` on boot or reboot.
- To access hekate from Android: hold `VOL-` on reboot.
- To reboot back to Android: hold `Power` for a few seconds and perform a standard reboot.
- To return to Horizon (`OFW/CFW`): power your Switch off fully, then boot into your desired mode.

-----

#### Need Help?

Join the [Switchroot Discord server](https://discord.gg/N9PPYXjWMY).

-----

::: info

**Looking for Android 10/11?**

An unfortunate bug with clocking on Android 11 results in degraded performance for Erista (v1) units on Android 11. Android 10/11 installation is not covered here, but there are [guides](https://wiki.switchroot.org/wiki/android) on the Switchroot Wiki. However, Android 15 is the currently supported version of Android which uses much more updated drivers and is updated frequently. 

This page *does* contain a legacy guide for Android 10, which can be found in the `Legacy information (Android 10)` section at the very bottom of this page.

:::

:::: details Legacy information (Android 10) {closed}

#### Requirements:
- A Nintendo Switch console that is capable of running hekate. <br>
- A microSD card *larger than* 8GB.
    - Please consult the [Switchroot microSD Card Guide](https://wiki.switchroot.org/wiki/sd-card-guide) before buying!
- A good quality, data-transfer capable USB-A to USB-C cable.
    - C to C is unstable, but this will be fixed in the next release.
- A computer.

#### Instructions:

#### Step 0: Preparation

If you have official Joy-Con controllers, you can set up auto-pairing so undocking them seamlessly connects to the console regardless of what OS is running. To make this work, boot HOS, ensure both work undocked (pair them), then reboot to hekate. Select `Nyx Options` followed by `Dump Joy-Con BT`. You should see "Found 2 out of 2 Joy-Con pairing data!"

::: tip

**Have a Switch Lite?**

You should poke the dump button in hekate anyway -- this will dump factory stick and IMU calibration for use in Android.

:::

-----

#### Step 1: Downloading Files

Download the latest `.7z` release archive from [the official Switchroot download site](https://download.switchroot.org/android-11/)--choose `nx-atv...` for Android TV (more console-like experience) or `nx-tab...` for standard Android (a more standard Android tablet experience). Both are usable with controllers and docking, but only tab supports proper touch input.

::: tip

**If you prefer [TWRP recovery](https://twrp.me/)...**

...you can download `twrp.img` from the [extras folder](https://download.switchroot.org/android-11/extras/).

:::

-----

#### Step 2: Arranging the microSD Card

::: tip

**Are you using a V1 or V2 Switch (standard models)?**

These models have a poorly designed microSD card reader and repeated removals/reinsertions can eventually cause the reader to fail. Please use hekate SD UMS to transfer files instead of removing the microSD card from your Switch!

- This can be done by booting into hekate and going to `Tools` > `USB Tools` > `SD Card` and plugging your Switch into your PC via USB.

:::

Extract the archive to the root of the microSD card (the FAT32 partition). The microSD card file structure should look more or less like this:

```
root
|- bootloader
|  |- ini
|  |  |- ...
|  |- payloads
|  |  |- ...
|  |- res
|  |  |- ...
|  |- sys
|  |  |- ...
|- Nintendo (if you use Horizon)
|  |- ...
|- switchroot
|  |- android
|  |  |- ...
|  |- install
|  |  |- ...
|- lineage-18.1-[date]-UNOFFICIAL-[device].zip
```

::: tip

**If you downloaded TWRP...**

...you have to replace `/switchroot/install/recovery.img` with `twrp.img`. No need to rename the file, just swap it out.

:::

-----

#### Step 3: Flashing Android

Open the hekate partition manager (located in `Tools` > `Partition SD Card`) and select Flash Android at the bottom of your screen. All three images should be found and successfully flashed. Select the option to reboot to recovery.

Once in recovery, select `Factory Reset` followed by `Format Data`. This *does not delete anything here*, but rather is used to prepare your data partitions for flashing. Ignore any errors that may appear. Return to the main menu and select `Apply Update` followed by `Select from SWITCH SD`. Find and select the `lineage-18.1...` zip in the list, and wait for it to finish.

::: warning

**Did the zip fail to flash?**

Your microSD card is probably bad... Take a look at hekate's microSD card info, and consider buying a better card.

:::

::: tip

**If you are using TWRP...**

Good luck... TWRP is for advanced users; no user support will be provided. TWRP is provided for power users who have a specific need for it.

:::

Once done, reboot the system when prompted -- Android is now installed!

#### Post-Install

#### Tips and Tricks

- If Joy-Con autopairing has not kicked in, try a reboot. Sometimes the first boot doesn't pick up the addition.
- To access recovery/TWRP: hold `VOL+` on boot or reboot.
- To access hekate from Android: hold `VOL-` on reboot.
- To reboot back to Android: hold `Power` for a few seconds and perform a standard reboot.
- To return to Horizon (`OFW/CFW`): power your Switch off fully, then boot into your desired mode.

#### Power User Guides

To learn more about using the Switch Configuration App and overclocking, see the [Switch Configuration App](https://wiki.switchroot.org/wiki/android/11-r-setup-guide#switch-configuration-app) section. Furthermore, you can check out the [INI guide](https://wiki.switchroot.org/wiki/android/11-r-ini-guide) as well.

The Switch lacks a cell modem; simply installing Android does not grant your Switch access to cell towers. This means, unlike most Android devices, you will not be able to make emergency phone calls, and you will still need Wi-Fi to access the Internet. You can, however, natively run Android programs and games.

This page will also *not* detail things such as rooting and overclocking; external links to these types of additions can be found in the [Power User Guides](#power-user-guides) section at the bottom of this page.

#### Need Help?

Join the [Switchroot Discord server](https://discord.gg/N9PPYXjWMY).

-----

This page was made in collaboration with `makinbacon21` on Discord. See the collapsible section below for the Switchroot guide maintainers.

::: details Switchroot Project Staff (Android / Linux)

If you'd like, you can donate to the people who made this project possible using these links.

- makinbacon (Android developer)
[https://paypal.me/makinbacon21](https://paypal.me/makinbacon21)

- npjohnson (Android developer)
[https://paypal.me/nolenjohnson](https://paypal.me/nolenjohnson)

- CTCaer (Linux & Low level developer, hekate maintainer)
[https://www.patreon.com/ctcaer](https://www.patreon.com/ctcaer)

- ave (Infrastructure & Hosting)
[https://patreon.com/aveao](https://patreon.com/aveao)

:::

::::
