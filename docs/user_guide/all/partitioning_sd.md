# Partitioning the microSD Card and creating the emuMMC

## What you need:

- Your Switch loaded into hekate

::: danger

**Partitioning *WILL* wipe all data on your microSD card!**

In case you missed the warning earlier, your microSD card will be wiped during this page. Go to `Tools` > `USB Tools` > `SD Card`, plug your switch into your PC via USB and back up the contents of your microSD card to your PC if you haven't done so yet. If you don't mind redownloading all the games stored on the microSD card and/or all other (potentially important) files getting deleted, you may skip this.

:::

## Instructions:

1. Navigate to `Tools` > `Partition SD card`
1. Set the `emuMMC (RAW)` slider to `29 FULL` in the middle of the bar.
    - Set the `emuMMC (RAW)` slider to `58 FULL` if you're on an OLED Switch.
    - If you wish to install Android and/or Linux later, partition your microSD card here accordingly by moving the sliders you see during this step. We recommend setting the `Android (USER)` and `Linux (EXT4)` sliders to at least 16GB.
1. Navigate to `Next Step` at the bottom right, then select `Start` in the menu that appears.
    - For Android; Select `Legacy` partitioning for Android 10/11 and `Dynamic` partitioning for Android 13+. Legacy and Dynamic partitioning are **NOT** intercompatible.
1. From hekate's `Home` menu, navigate to `emuMMC` > `Create emuMMC` > `SD Partition` > `Part 1` and wait for Hekate to complete creating the emuMMC.
1. Close the emuMMC creation menu by navigating to the `Close` button, then navigate to `Change emuMMC` > `SD RAW 1` and press the `Close` button twice in the top right to return to hekate's `Home` menu.
1. Once done, go to `Tools` > `USB Tools` > `SD Card` and plug your Switch into your PC via USB.
1. Continue with the next step of the guide.
     - Your microSD card should now be accessible on your PC, if not, consult the warning message below.

::: warning

**Your microSD card is not showing up or Windows complaining about an unreadable drive**

If you get the issue that Windows says the microSD card is unreadable and wants to format it, do not format! This is likely your emuMMC partition. After partitioning your SD, your microSD will show up as 2 drives on your PC. Use the accessible drive.

If your microSD card isn't showing up at all, ensure that you're using a USB cable capable of data transfer and that, if you use Windows, Windows has assigned a drive letter to the FAT32 partition of your SD. If you still experience errors, join the <a href="https://discord.gg/C29hYvh" target="_blank">NH-Discord server</a> for support.

:::

![hekate-partitioning-emu](img/hekate-partitioning-emu.png)

::: tip

[Continue to SD Preparations](sd_preparation)

:::
