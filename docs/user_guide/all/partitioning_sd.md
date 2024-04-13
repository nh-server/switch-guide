# Partitioning the SD Card and creating the emuMMC

!!! danger "This will delete everything on your microSD card"
    This process includes formatting the microSD card, which means all data on it will be lost. Now is a good time to back up *all* of its data (namely the `/Nintendo` folder) to a safe place so that you can restore it later. You can do this by following the instructions below.
    The Nintendo folder contains downloaded necessary game data (the data required for games to actually run). You will need to copy the Nintendo folder to `SD:/emuMMC/RAW1/` after creating the emuMMC.

-----

### **What you need:**

- Your Switch loaded into Hekate

### **Instructions:**

1. Navigate to `Tools` > `Partition SD card`
2. Set the `emuMMC (RAW)` slider to `29 FULL` in the middle of the bar.
    - Set the `emuMMC (RAW)` slider to `58 FULL` if you're on an OLED Switch.
    - If you wish to install Android and/or Linux later, partition your microSD card here accordingly by moving the sliders you see during this step. We recommend setting the `Android (USER)` and `Linux (EXT4)` sliders to 16GB minimum.
3. Navigate to `Next Step` at the bottom right, then select `Start` in the menu that appears.
4. From hekate's `Home` menu, navigate to `emuMMC` > `Create emuMMC` > `SD Partition` > `Part 1` and wait for Hekate to complete creating the emuMMC.
5. Close the emuMMC creation menu by navigating to the `Close` button, then navigate to `Change emuMMC` > `SD RAW 1` and press the `Close` button twice in the top right to return to hekate's `Home` menu.
6. Once done, go to `Tools` > `USB tools` > `SD card` and plug your Switch into your PC via USB.
7. Continue with the next step of the guide.
     - Your microSD card should now be accessible on your PC, if not, consult the warning message below.

!!! warning "Your microSD card is not showing up or Windows complaining about an unreadable drive"
    If you get the issue that Windows says the microSD card is unreadable and wants to format it, do not format! This is likely your emuMMC partition. After partitioning your SD, your microSD will show up as 2 drives on your PC. Use the accessible drive.
    If your microSD card isn't showing up at all, ensure that you're using a USB cable capable of data transfer and that, if you use Windows, Windows has assigned a drive letter to the FAT32 partition of your SD. If you still experience errors, join the <a href="https://discord.gg/C29hYvh" target="_blank">NH Discord server</a> for support.


![hekate-partitioning-emu](img/hekate-partitioning-emu.png)

&nbsp;

[Continue to SD Preparations :material-arrow-right:](sd_preparation.md){ .md-button .md-button--primary }
