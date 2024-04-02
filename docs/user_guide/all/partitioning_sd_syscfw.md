# Formatting and/or partitioning the SD

!!! warning "This will delete everything on your microSD card"
	Doing this will delete all your data from your microSD card, be warned! Back up your `Nintendo` folder (if you used your microSD card for game storage already) and any other folders/files on the root of your microSD card beforehand using the instructions below.
    The Nintendo folder contains downloaded necessary game data (the data required for games to actually run). You will need to copy the Nintendo folder to `SD:/emuMMC/RAW1/` after creating the emuMMC.

-----

### **What you need:**

- Your Switch loaded into Hekate

### **Instructions:**

1. Navigate to `Tools` > `Partition SD card`
2. Navigate to `Next Step` at the bottom right, then select `Start` in the menu that appears.
    - If you wish to install Android and/or Linux later, partition your microSD card here accordingly by moving the sliders you see during this step. We recommend setting the `Android (USER)` and `Linux (EXT4)` sliders to at least 16GB.
3. Once done, go to Hekate's `Home` menu and then `Tools` > `USB tools` > `SD card` and plug your Switch into your PC via USB.
4. Continue with the next step of the guide.
    - Your microSD card should now be accessible on your PC, if not, consult the warning message below.

!!! warning "Your microSD card is not showing up"
    If your microSD card isn't showing up at all, ensure that you're using a USB cable capable of data transfer and that, if you use Windows, Windows has assigned a drive letter to the FAT32 partition of your SD. If you still experience errors, join the <a href="https://discord.gg/C29hYvh" target="_blank">NH Discord server</a> for support.

![hekate-partitioning-emu](img/hekate-partitioning-sys.png)

&nbsp;

[Continue to SD Preparations :material-arrow-right:](sd_preparation.md){ .md-button .md-button--primary }
