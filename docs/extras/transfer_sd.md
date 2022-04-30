# Changing microSD Cards

The goal of this page is to transfer the contents from one microSD Card to another one. The method to do this will differ, depending on whether you're using a partition based emuMMC on your microSD Card or not.

We will be using [hekate](https://github.com/CTCaer/hekate/releases/) to both backup and restore the emuMMC, so make sure that you have its latest files on your microSD Card already.

## Instructions

You should first check whether you have a file or partition based emuMMC:

1.  Inject the hekate payload.
2.  Tap on `emuMMC`.
3.  Under `emuMMC Info & Selection`, check the text next to `Type`.
    - If you have one it should be either `SD Raw Partition` or `SD File`.

-----
### If you are using a file based emuMMC or are using no emuMMC at all:

1.  Remove your microSD Card.   
2.  Insert your old microSD Card into your computer.
3.  Copy the contents of your microSD Card somewhere to your PC.
4.  Eject the microSD Card and insert your new one.
5.  Format your new microSD Card to FAT32 if it isn’t already.
    - To do this, use [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm) for example (Windows).
6.  Copy the files from your PC to your new microSD Card and you’re done.

-----
### If you are using a partition based emuMMC:

!!!warning "Space for the backup"
    You need at least 30GB of free space to be able to backup and restore the emuMMC!

1.  Inject the hekate payload.
2.  In the main menu, tap on `Tools`, then `Backup eMMC` and set `SD emuMMC Raw Partition` at the bottom of your screen to `ON`.
3.  Backup both `SD emuMMC BOOT0 & BOOT1` and `SD emuMMC RAW GPP` (Note: raw gpp may take a while).
4.  Once both are done, go back to the main menu, remove your microSD Card and insert it into your PC.
5.  If Windows asks you to format a drive, discard it and select the drive with your SD contents.
6.  Copy the contents of your microSD Card somewhere to your PC.
7.  Follow only [this page](/user_guide/emummc/partitioning_sd.md) to partition the new microSD Card for an emuMMC setup.
8.  After it’s done, exit and insert your new microSD Card into your PC.
9.  Copy the contents of your old microSD Card to your new one.
10. Navigate to `/backup/<some characters>/` on your microSD Card and move `BOOT0`, `BOOT1` and the `rawnand.bin.xx` files to the `restore` folder.
11. Eject the microSD Card and insert it into your Switch.
12. Inject the Hekate payload once again.
13. Tap on `Tools`, `Restore eMMC`, set `SD emuMMC Raw Partition` at the bottom of your screen to `ON`.
14. Restore the backup by tapping on both `SD emuMMC BOOT0 & BOOT1` and `SD emuMMC RAW GPP` (Note: raw gpp may take a while).
    - It is very important that for both of these the `SD emuMMC Raw Partition` option is enabled, otherwise you will be altering your sysMMC
      which is not what you want.
15. Your emuMMC is now restored on the new microSD Card and you should be able to launch it from `Launch` -> `Atmosphere FSS0 emuMMC`  in hekate.
