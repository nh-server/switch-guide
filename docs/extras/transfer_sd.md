# Changing microSD cards

The goal of this page is to transfer the contents from one microSD card to another one. The method to do this will differ, depending on whether you're using a partition based emuMMC on your microSD card or not.

We will be using [hekate](https://github.com/CTCaer/hekate/releases/) to both backup and restore the emuMMC, so make sure that you have its latest files on your microSD card already.

#### **Instructions:**

You should first check whether you have a file or partition based emuMMC:

1. Enter RCM and inject the Hekate payload.
    - If you use a modchipped Switch, you can simply just turn your Switch on with the Hekate payload renamed to `payload.bin` on the root of your SD.
2.  Tap on the `emuMMC` button.
3.  Under `emuMMC Info & Selection`, check the text next to `Type`.
    - If you have one it should be either `SD Raw Partition` or `SD File`.

-----
### **If you are using a file based emummc or are using no emummc at all:**

1. Enter RCM and inject the Hekate payload.
    - If you use a modchipped Switch, you can simply just turn your Switch on with the Hekate payload renamed to `payload.bin` on the root of your SD.
2. Navigate to `Tools` > `USB Tools` > `SD Card` and plug your Switch into your PC via USB.
2. Copy the contents of your microSD card somewhere to your PC.
4. Access your new microSD card via a microSD card reader or similar.
5. Format your new microSD card to FAT32 if it isn’t already.
    - To do this, use [this guide](https://wiki.hacks.guide/wiki/Formatting_an_SD_card).
6. Copy the files from your PC or directly from your old microSD card to your new microSD card.
7. Eject the `UMS` device safely from within your computer's operating system.

-----
### **If you are using a partition based emummc:**

!!!warning "Space for the backup"
    You need at least 30GB (or 60GB if using an OLED Switch) of free space to be able to restore the emuMMC!

1. Enter RCM and inject the Hekate payload.
    - If you use a modchipped Switch, you can simply just turn your Switch on with the Hekate payload renamed to `payload.bin` on the root of your SD.
2.  In the main menu, tap on `Tools`, then `Backup eMMC` and set `SD emuMMC Raw Partition` at the bottom of your screen to `ON`.
3.  Backup both `SD emuMMC BOOT0 & BOOT1` and `SD emuMMC RAW GPP` (Note: `SD emuMMC RAW GPP` may take a while).
4.  Once both are done, go back to the main menu, navigate to `Tools` > `USB Tools` > `SD Card` and plug your Switch into your PC via USB.
5.  If Windows asks you to format a drive, discard it and select the drive with your SD contents.
6.  Copy the contents of your old microSD card somewhere to your PC.
7.  Follow the `Preparing Hekate` section at the bottom of [this page](../user_guide/rcm/sending_payload.md) (Unpatched Switch users only) to prepare your new SD card with Hekate's files.
    - If you have a modchipped Switch, follow [this page](../user_guide/modchip/preparing_hekate.md) instead.
8.  Follow only steps 1-3 on [this page](../user_guide/all/partitioning_sd.md) to partition the new microSD card for an emuMMC setup.
8.  After it’s done, boot into Hekate and navigate to `Tools` > `USB Tools` > `SD Card`, then plug your Switch into your PC via USB.
9.  Copy the backup you made of your old microSD card on your PC to your new microSD card.
10. Navigate to `/backup/<some characters>/emummc` on your microSD card and move `BOOT0`, `BOOT1` and the `rawnand.bin.xx` files to `/backup/<some characters>/restore/emummc`.
11. Eject the `UMS` device safely from within your computer's operating system.
12. Tap on `Tools`, `Restore eMMC`, set `SD emuMMC Raw Partition` at the bottom of your screen to `ON`.
13. Restore the backup by tapping on both `SD emuMMC BOOT0 & BOOT1` and `SD emuMMC RAW GPP` (Note: `SD emuMMC RAW GPP may take a while).
    - It is very important that for both of these the `SD emuMMC Raw Partition` option is enabled, otherwise you will be altering your sysMMC
      which is not what you want.
14. Your emuMMC is now restored on the new microSD card and you should be able to launch it from `Launch` -> `Atmosphere FSS0 emuMMC` in hekate.
