# Restore a NAND backup to the Switch

::: warning

**Warning:**

* This will reset all of your saves, games, system version and other system settings back to the point of when you made the NAND backup. Keep this in mind, as you probably don't have to restore a NAND backup unless you have bricked your Switch or want to go back online safely after using CFW.
* If you're going to restore an old NAND which will downgrade your firmware it's best to create a second NAND backup before restoring the first one in case something goes wrong.

:::

## Section I - Requirements

* Your `rawnand.bin` (Combined or in 15 or 30 parts)
* Your `BOOT0` and `BOOT1`
    * If you're missing any of the files above, ask for further help in the [Nintendo Homebrew](https://discord.gg/C29hYvh) Discord server.
* The [Hekate](https://github.com/CTCaer/hekate/releases/) Payload
* A microSD card larger than 32GB

## Section II - Instructions

Before we start, check if you have a tree of folders called `backup/[8 Character NAND id]/restore` on your microSD card.

::: warning

**If you don't see a backup or [8 Character NAND id] folder on your microSD card:**

This means you do not have a nand backup, it is highly recommended you make one as soon as possible. Follow the steps below to make one.

1. Launch the latest hekate payload on your Switch.
1. Navigate to `Tools` > `Backup eMMC` > `eMMC BOOT0 & BOOT1` and let it do its thing.
1. Wait for the process to complete. When it's completed, you now have a `backup/[8 Character NAND id]/restore` folder on your microSD card. Continue with step 1 of the instructions below.

:::

1. Enter RCM and inject the hekate payload.
    * If you use a modchipped Switch, you can simply just turn your Switch on with the hekate payload renamed to `payload.bin` on the root of your SD.
1. Navigate to `Tools` > `USB Tools` > `SD Card` and plug your Switch into your PC via USB.
1. Copy your `rawnand.bin` (combined or in 15 or 30 parts), `BOOT0`, and `BOOT1` to the `backup/[8 Character NAND id]/restore` folder on the microSD card.
    * If you have one `rawnand.bin` file that is 29GiB (or 58GiB on OLED consoles) and cannot move it to the SD with the error "The file 'rawnand.bin' is too large for the destination file system" on Windows or similar or macOS/Linux, check the [instructions to split your NAND backup below.](#if-you-have-a-combined-nand-backup-and-cant-move-it) 
1. Eject the `UMS` device safely from within your computer's operating system.
1. Navigate to `Tools` > `Restore eMMC`. Select `Restore eMMC BOOT0 & BOOT1`. Wait for this process to complete.
1. In that same menu, select `eMMC RAW GPP` and wait for the process to complete.
    * This will generally take a long time to complete, the time it takes depends on your microSD card's specifications. (10-15 minutes is expected.)

## If you have a combined NAND backup and cant move it...


::::: tabs

:::: tab default Windows

Following these instructions should leave you with 15 split parts of your NAND, called `rawnand.bin.00` through `rawnand.bin.014`.

### Section I - Prerequisites

* Your combined NAND file (`rawnand.bin`)
* [7-Zip](https://www.7-zip.org/)

### Section II - Instructions

1. Open the 7-Zip File Manager.
1. Navigate to the `rawnand.bin` file.
1. Right-click on the file and select `Split File`.
1. In the Window that opens up, under `Split to volumes, bytes:`, type in `2G`.
1. Press OK. Once done, you will be left with files called `rawnand.bin.001` through 015.
    * This might take a while, depending on the speed of your drive.
1. Rename every file, taking out the first zero, and deducting one from the current number.
    * For example, a file called `rawnand.bin.013` will become `rawnand.bin.12`.

Once done, you will be left with files called `rawnand.bin.00` through 14.

::::

:::: tab Linux

Following these instructions should leave you with 15 split parts of your NAND, called `rawnand.bin.00` through `rawnand.bin.014`.

### Section I - Prerequisites

* Your combined NAND file (`rawnand.bin`)
* The `split` utility
    * This should be pre-installed on most distributions.
* Some terminal skills

### Section II - Instructions

1. Open your terminal in the directory your `rawnand.bin` file is located.
1. Run `split -b 2G -d rawnand.bin rawnand.bin.`.

Once done, you will be left with files called `rawnand.bin.00` through 14.


::::

:::: tab macOS

Following these instructions should leave you with 15 split parts of your NAND, called `rawnand.bin.00` through `rawnand.bin.014`.

### Section I - Prerequisites

* Your combined NAND file (`rawnand.bin`)
* Some terminal skills

### Section II - Instructions

1. Open your terminal in the directory your `rawnand.bin` file is located.
1. Run `split -b 2G -d rawnand.bin rawnand.bin.`.

Once done, you will be left with files called `rawnand.bin.00` through 14.


::::

:::::





::: danger

**If you're downgrading using your NAND backup**

If the security version you were on before you performed the NAND restore is HIGHER than the NAND backup itself, you have to enable autoRCM to not get stuck in a boot crash.

* Note:  This section can be disregarded for modchipped Switch users.

A system update is considered a security version when a fuse is burned, you can check **[which versions burn fuses here](https://switchbrew.org/wiki/Fuses#Anti-downgrade)**.

If you were in AutoRCM before you upgraded to a newer security version (and still were after the upgrade) you don't have to do this.

1. In hekate's main menu, navigate to `Tools` and go to the bottom of the page where you will find a button called `Archive bit - AutoRCM`
1. Select the `AutoRCM` buttom and you will see `ON` written next to it. This means it is enabled.

:::
