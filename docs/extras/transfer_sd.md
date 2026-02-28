---
outline: false
---

# Changing microSD cards

The goal of this page is to transfer the contents from one microSD card to another one. The method to do this will differ, depending on whether you're using a partition based emuMMC on your microSD card or not.

We will be using [hekate](https://github.com/CTCaer/hekate/releases/) to both backup and restore the emuMMC, so make sure that you have its latest files on your microSD card already.

::: warning

If you follow the steps on this guide and find that you are suddenly unable to open your homebrew or games due to "corrupted data", you likely need to unset archive bits on your SD card. Instructions for this process can be found on the [FAQ page](../faq.md#my-homebrew-apps-are-not-showing-up-in-the-homebrew-menu).

:::

## Preparation

You should first check whether you have a file or partition based emuMMC:

1. Enter RCM and inject the hekate payload.
    * If you use a modchipped Switch, you can simply just turn your Switch on with the hekate payload renamed to `payload.bin` on the root of your microSD card.
1. Tap on the `emuMMC` button.
1. Under `emuMMC Info & Selection`, check the text next to `Type`.
    * If you have one it should be either `SD Raw Partition` or `SD File`.
    * If you have no emuMMC, it'll be disabled.

::: tip

Depending on whether you are using a partition based emuMMC, file based emuMMC, or no emuMMC at all, click the corresponding tab below.

:::

::::: tabs

:::: tab default Partition based emuMMC

::: warning

**Space for the backup**

You need at least 30GB (or 60GB if using an OLED Switch) of free space to be able to restore the emuMMC!

:::

## Section I - Requirements

* The latest version of [hekate](https://github.com/CTCaer/Hekate/releases/) (`hekate_ctcaer_(version).zip`).

## Section II - Instructions for Old microSD card

1. Enter RCM and inject the hekate payload.
    * If you use a modchipped Switch, you can simply just turn your Switch on with the hekate payload renamed to `payload.bin` on the root of your microSD card.
1. From hekate's `Home` menu, navigate to `Tools` > `Backup eMMC`, set `SD EmuMMC Raw Partition` at the bottom of your screen to `ON`.
1. Backup both `SD emuMMC BOOT0 & BOOT1` and `SD emuMMC RAW GPP` (Note: `SD emuMMC RAW GPP` may take a while).
1. Once both are done, go back to the main menu, navigate to `Tools` > `USB Tools` > `SD Card` and plug your Switch into your PC via USB.
1. If Windows asks you to format a drive, discard it and open the accessible drive containing the contents of your microSD card.
1. Copy the contents of your old microSD card somewhere to your PC.

## Section III - Instructions for New microSD card

1. Copy the *contents* of the previously downloaded hekate `.zip` to the root of your new microSD card.
1. Enter RCM and inject the hekate payload.
    * If you use a modchipped Switch, you can simply just turn your Switch on with the hekate payload renamed to `payload.bin` on the root of your microSD card.
1. Navigate to `Tools` > `Partition SD card` once in hekate/Nyx.
1. Set the `emuMMC (RAW)` slider to `29 FULL` in the middle of the bar.
    * Set the `emuMMC (RAW)` slider to `58 FULL` if you're on an OLED Switch.
    * If you wish to install Android and/or Linux later, partition your microSD card here accordingly by moving the sliders you see during this step. We recommend setting the `Android (USER)` and `Linux (EXT4)` sliders to at least 16GB.
1. Navigate to `Next Step` at the bottom right, then select `Start` in the menu that appears.
    * For Android; Select `Dynamic` partitioning for Android 13+ and `Legacy` partitioning for Android 10/11. Note that Android 10/11 are no longer supported, Legacy and Dynamic partitioning are also **NOT** intercompatible.
1. After it’s done, return to hekate's `Home` menu and navigate to `Tools` > `USB Tools` > `SD Card`, then plug your Switch into your PC via USB.
1. Copy the backup you made of your old microSD card on your PC to your new microSD card, replacing files if/when prompted.
1. Navigate to `/backup/<some characters>/emummc` on your new microSD card and move `BOOT0`, `BOOT1` and the `rawnand.bin.xx` files to `/backup/<some characters>/restore/emummc`.
1. Eject the `UMS` device safely from within your computer's operating system.
1. From hekate's `Home` menu, navigate to `Tools` > `Restore eMMC`, set `SD EmuMMC Raw Partition` at the bottom of your screen to `ON`.
1. Restore the backup by tapping on both `SD emuMMC BOOT0 & BOOT1` and `SD emuMMC RAW GPP` (Note: `SD emuMMC RAW GPP` may take a while).
    * It's important that for both of these options the `SD emuMMC Raw Partition` option is enabled, otherwise you could be altering your sysMMC
      which is not what you want.
1. Your emuMMC is now restored on the new microSD card and you should be able to launch it from `Launch` -> `Atmosphere PKG3 emuMMC` in hekate.

::::

:::: tab File based emuMMC OR no emuMMC at all

## Section I - Requirements

* The latest version of [hekate](https://github.com/CTCaer/Hekate/releases/) (`hekate_ctcaer_(version).zip`).

## Section II - Instructions for Old microSD card

1. Enter RCM and inject the hekate payload.
    * If you use a modchipped Switch, you can simply just turn your Switch on with the hekate payload renamed to `payload.bin` on the root of your microSD card.
1. Navigate to `Tools` > `USB Tools` > `SD Card` and plug your Switch into your PC via USB.
1. Copy the contents of your microSD card somewhere to your PC.

## Section III - Instructions for New microSD card

1. Copy the *contents* of the previously downloaded hekate `.zip` to the root of your new microSD card.
1. Enter RCM and inject the hekate payload.
    * If you use a modchipped Switch, you can simply just turn your Switch on with the hekate payload renamed to `payload.bin` on the root of your microSD card.
1. Format your new microSD card to FAT32 using hekate. To do so, navigate to `Tools` > `Partition SD card` once in hekate/Nyx.
1. Leave all sliders on their default values.
    * If you wish to install Android and/or Linux later, partition your microSD card here accordingly by moving the sliders you see during this step. We recommend setting the `Android (USER)` and `Linux (EXT4)` sliders to at least 16GB.
1. Navigate to `Next Step` at the bottom right, then select `Start` in the menu that appears.
    * For Android; Select `Dynamic` partitioning for Android 13+ and `Legacy` partitioning for Android 10/11. Note that Android 10/11 are no longer supported, Legacy and Dynamic partitioning are also **NOT** intercompatible.
1. Navigate to `Tools` > `USB Tools` > `SD Card` and plug your Switch into your PC via USB.
1. Copy the backup you made of your old microSD card from your PC (or directly from your old microSD card) to your new microSD card.
1. Eject the `UMS` device safely from within your computer's operating system.
1. You've successfully followed this guide and your emuMMC is now accessible from `Launch` -> `Atmosphere PKG3 emuMMC` in hekate.

::::

:::::
