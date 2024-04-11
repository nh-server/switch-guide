# Installing Android

This page details the installation of Android 11 based on LineageOS onto your Switch. The Switch lacks a cell modem; simply installing Android does not transform your Switch into a tablet that has mobile data with the capability to call people over a mobile network. It can, however, natively run Android programs and games. This installation is not an "Android emulator" of any kind, it is real Android, running directly off of the microSD card.

!!! warning "Is your SD card partitioned?"
    If you have nt partitioned your card for Android, this process will require you to format your microSD card, which means all data on it will be lost. Now is a good time to back up *all* of its data to a safe place so that you can restore it later. If you have an emuMMC, follow [these steps](link) to back it up. This guide will assume you already have Legacy Android partitions on your card--if not, follow the [offical Switchroot Wiki guide](https://wiki.switchroot.org/wiki/android/11-r-setup-guide).

This page will detail the setup of the latest release of Switchroot Android, Android 11, for your Nintendo Switch. This page assumes that you have no previous installation, so please do not follow this if you already have Switchroot Android installed on your microSD card, as it will overwrite your data. This page will not detail things such as rooting and overclocking; these types of additions can be found under the [Extras](link) category.

!!! tip "Looking for Android 10?"
    An unfortunate bug with clocking on Android 11 results in degraded performance for Erista (v1) units on Android 11. Android 10 installation is not covered here, but there is a [guide](https://wiki.switchroot.org/wiki/android/10-q-setup-guide) on the Switchrot Wiki. However, Android 11 is the currently supported version and uses much newer graphics drivers etc.

## Requirements
  - A Nintendo Switch that runs Hekate <br>
    If you don't already possess this, follow the main guide up *until* you see [this page](https://nintendo.com.se/guide/user_guide/all/cfw_environment/)
  - A microSD card *larger than* 8GB
    - Please consult the [Switchroot microSD Card Guide](https://wiki.switchroot.org/wiki/sd-card-guide) before buying!
  - A good quality USB-A to USB-C cable
    - C-to-C is very glitchy and will be fixed in next release
  - PC

## Steps

### Step 0: Prepare Necessary State

If you have official Joy-Cons, you can set up auto-pairing so undocking them automatically connects to Android without having to re-pair between HOS and Android. To make this work, boot HOS, ensure both work undocked (pair them), and reboot to hekate. Select `Nyx Options` followed by `Dump Joy-Con BT`. You should see "Found 2 out of 2 Joy-Con pairing data!"

!!! tip "Have a Switch Lite?"
    You should poke the dump button in hekate anyway--this will dump factory stick and IMU calibration for use in Android

### Step 1: Downloading Files

Download the latest `.7z` release archive from [the official Switchroot download site](https://download.switchroot.org/android-11/)--choose `nx-atv...` for Android TV (more controller- and dock-optimized experience) or `nx-tab...` for standard Android (a more standard andrid tablet experience). Both are usable with controllers and docking, but only tab supports proper touch input.

!!! tip "If you prefer [TWRP recovery](https://twrp.me/)..."
    ...you can download `twrp.img` from the [extras folder](https://download.switchroot.org/android-11/extras/).

### Step 2: Arranging the SD Card

!!! tip "Are you using a v1 or v2 Switch?"
    These models have a poorly SD card reader and repeated removals and reinsertions will cause the reader to break. Please use hekate SD UMS to transfer files instead of removing the SD!

Extract the archive to the root of the SD card (FAT32 partition). The card file structure should look more or less like this:

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
|- Nintendo (if you use stock)
|  |- ...
|- switchroot
|  |- android
|  |  |- ...
|  |- install
|  |  |- ...
|- lineage-18.1-[date]-UNOFFICIAL-[device].zip
```

!!! tip "If you downloaded TWRP..."
    ...you have to replace `/switchroot/install/recovery.img` with `twrp.img`. No need to rename, just swap it out.

### Step 3: Flashing

Open the hekate partition manager (on the `Tools` tab) and select Flash Android. All three images should be found and successfully flashed. Select the option to reboot to recovery.

Once in recovery, select `Factory Reset` followed by `Format Data`. This *does not delete anything here*, but rather is used to prepare yur data partitions for flashing. Ignore any errors that may appear. Return to the main menu and select `Apply Update` followed by `Select from SWITCH SD`. Find and select the `lineage-18.1...` zip in the list, and wait for it to finish.

!!! warning "Did the zip fail to flash?"
    Your SD card is likely bad. Take a look at hekate's SD card info and consider buying a better card.

!!! tip "If you are using TWRP..."
    ...good luck. TWRP is for advanced users only and no support will be provided. The image is provided for powerusers.

Once done, reboot the system when prompted--Android is now installed.

## Post-Install

### Tips and Tricks

- If Joy-Con autopairing has not kicked in, try a reboot. Sometimes the first boot deosn't pick up the addition.

- To access recovery/TWRP: hold VOL+ on reboot

- To access hekate from Android: hold VOL- on reboot

- To reboot back to Android: standard reboot

- To return to stock fw: power off and coldboot

### Power User Guides

To learn more about using the Switch Configuration app, ini options, overclocking, and more, see the [official Switchroot guide](https://wiki.switchroot.org/wiki/android/11-r-setup-guide).

### Need Help?

Join the [Switchroot Discord server](https://discord.gg/N9PPYXjWMY).

## Funding for Switchroot Maintainers

- makinbacon (Android developer)
[https://paypal.me/makinbacon21](https://paypal.me/makinbacon21)

- npjohnson (Android developer)
[https://paypal.me/nolenjohnson](https://paypal.me/nolenjohnson)

- CTCaer (Linux & Low level developer, Hekate maintainer)
[https://www.patreon.com/ctcaer](https://www.patreon.com/ctcaer)

- ave (Infrastructure & Hosting)
[https://patreon.com/aveao](https://patreon.com/aveao)
