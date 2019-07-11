## Restore a NAND backup to the switch

!!! danger "Warning:" 	
	-This will reset all of your saves, games, system version and other system settings back to a point when you made the the nand backup. Keep this in mind, as you probably don't have to restore a nand backup unless you have bricked your switch or want to go back online safely after using cfw.
	
	-If you're going to restore an old NAND which will downgrade your firmware it's best to create a second NAND backup before restoring the first one in case something goes wrong.

### What you need:
- Your `rawnand.bin` (Combined or in 15 or 30 parts)
- Your `BOOT0` and `BOOT1`
	- If you're missing any of the files above, ask for further help in the [Nintendo Homebrew](https://discord.gg/C29hYvh) Discord server.
- The <a href="https://github.com/CTCaer/hekate/releases/" target="_blank">Hekate</a> Payload
- A microSD card larger than 32gb

### Instructions:

Before we start, check if you have a tree of folders called `backup/[8 Character NAND id]/restore` on your sd card.

!!! warning "If you don't see a backup or [8 Character NAND id] folder on your sd card:"
	This means you do not have a nand backup, it is highly reccomended you make one as soon as possible. Follow the steps below to make one.

	1. Launch the latest Hekate payload on your switch.
	2. Navigate to `Tools > Backup eMMC > eMMC BOOT0 & BOOT1` and let it do its thing.
	3. Wait for the process to complete. When it's completed, you now have a `backup/[8 Character NAND id]/restore` folder on your sd card. Continue with step 1 of the guide.

1. Copy your `rawnand.bin` (combined or in 15 or 30 parts, this can be done by using the joiner scripts on the hekate github release page), `BOOT0`, and `BOOT1` to the 	`backup/[8 Character NAND id]/restore` folder on the sd card.
2. Put your sd card into your switch, and launch Hekate.
3. Navigate to `Tools > Restore eMMC`. Select `Restore eMMC BOOT0 & BOOT1`. Wait for this process to complete.
4. In that same menu, select `eMMC RAW GPP` and wait for the process to complete. This will take a very long time to complete.

!!! danger "If you're downgrading using your NAND backup"
	If the security version you were on before you performed the NAND restore is HIGHER than the NAND backup itself, you have to enable autoRCM to not get stuck in a boot crash.
	A system update is considered a security version when a fuse is burned, you can check **<a href="https://switchbrew.org/wiki/Fuses#Anti-downgrade" target=blank>which versions burn fuses here</a>**.

	If you were in autorcm before you upgraded to a newer security version (and still were after the upgrade) you don't have to do this.

	1. In Hekate's main menu, navigate to `Tools` and go to the bottom of the page where you will find a button called `Archive bit - AutoRCM`
	2. Select the `AutoRCM` buttom and you will see `ON` written next to it. This means it is enabled.
