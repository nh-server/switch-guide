# Formatting and/or partitioning the microSD Card

### **What you need:**

- Your Switch loaded into Hekate

!!! warning "Partitioning WILL wipe all data on your SD card!"
    Hekate will prompt you to back it up with UMS before you begin, but in case you miss it, go to `Tools` > `USB tools` > `SD card` and plug your switch into your PC via USB, and backup the contents of your SD card. If you don't mind redownloading all the games stored on the SD card, you may skip this.

### **Instructions:**

1. Navigate to `Tools` > `Partition SD card`
2. Navigate to `Next Step` at the bottom right, then select `Start` in the menu that appears.
    - If you wish to install Android and/or Linux later, partition your microSD card here accordingly by moving the sliders you see during this step. We recommend setting the `Android (USER)` and `Linux (EXT4)` sliders to at least 16GB.
    - For Android; Select `Legacy` partitioning for Android 10/11 and `Dynamic` partitioning for Android 13+. Legacy and Dynamic partitioning are **NOT** intercompatible.
3. Once done, go to Hekate's `Home` menu and then `Tools` > `USB tools` > `SD card` and plug your Switch into your PC via USB.
4. Continue with the next step of the guide.
    - Your microSD card should now be accessible on your PC. If not, consult the warning message below.

!!! warning "Your microSD card is not showing up"
    If your microSD card isn't showing up at all, ensure that you're using a USB cable capable of data transfer and that if you use Windows, Windows has assigned a drive letter to the FAT32 partition of your microSD card. If you still experience errors, join the <a href="https://discord.gg/C29hYvh" target="_blank">NH-Discord server</a> for support.

![hekate-partitioning-emu](img/hekate-partitioning-sys.png)

&nbsp;

[Continue to SD Preparations :material-arrow-right:](sd_preparation.md){ .md-button .md-button--primary }
