## Restore a NAND backup to the Switch

!!! danger "Warning:" 	
	-This will reset all of your saves, games, system version and other system settings back to the point when you made the NAND backup. Keep this in mind, as you probably don't have to restore a NAND backup unless you have bricked your Switch or want to go back online safely after using CFW.

	-If you're going to restore an old NAND which will downgrade your firmware it's best to create a second NAND backup before restoring the first one in case something goes wrong.

### What you need:
- Your `rawnand.bin` (combined or in 15 or 30 parts)
- Your `BOOT0` and `BOOT1`
	- If you're missing any of the files above, ask for further help in the [Nintendo Homebrew](https://discord.gg/C29hYvh) Discord server.
- The <a href="https://github.com/CTCaer/hekate/releases/" target="_blank">Hekate</a> Payload
- A microSD Card larger than 32GB

### Instructions:

Before we start, check if you have a tree of folders called `backup/[8 Character NAND id]/restore` on your microSD Card.

!!! warning "If you don't see a backup or [8 Character NAND id] folder on your microSD Card:"
	This means you do not have a NAND backup, it is highly recommended you make one as soon as possible. Follow the steps below to make one.

	1. Inject the latest Hekate payload to your Switch.
	2. Navigate to `Tools > Backup eMMC > eMMC BOOT0 & BOOT1` and let the task complete.
	3. Once it's completed, you'll now have a `backup/[8 Character NAND id]/restore` folder on your microSD Card. Continue with Step 1 of the guide.

1. Copy your `rawnand.bin`, `BOOT0`, and `BOOT1` to the 	`backup/[8 Character NAND id]/restore` folder on the microSD Card.
	• The `rawnand.bin` might instead be split into many small `rawnand.bin.xx` files, where `xx` will be a number. Place **all of these** in the restore folder mentioned above.
2. Put your microSD Card into your Switch, and launch Hekate.
3. Navigate to `Tools > Restore eMMC`. Select `Restore eMMC BOOT0 & BOOT1`. Wait for this process to complete.
4. In that same menu, select `eMMC RAW GPP` and wait for the process to complete. This will take a very long time to complete.

!!! danger "If you're downgrading using your NAND backup"
	If the security revision you were on before you performed the NAND restore is HIGHER than the NAND backup itself, you have to enable autoRCM to not get stuck in a crash on boot.
	A system update is considered a security revision when a fuse is burned. You can check **<a href="https://switchbrew.org/wiki/Fuses#Anti-downgrade" target=blank>which versions burn fuses here</a>**.

	If no fuses were burnt between the NAND backup you are restoring, and the Switch's current version, you can ignore this.

	1. In Hekate's main menu, navigate to `Tools` and go to the bottom of the page where you will find a button called `Archive bit - autoRCM`
	2. Select the `autoRCM` button, and you will see `ON` written next to it. This means AutoRCM is enabled.
