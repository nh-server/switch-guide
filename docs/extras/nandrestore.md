## Restore a nand backup to the switch

!!! danger "Warning:"	
	-This will reset all of your saves, games, system version and other system settings back to a point when you made the the nand backup. Keep this in mind, as you probably don't have to restore a nand backup unless you have bricked your switch or want to go back online safely after using cfw.
	
	-If you're going to restore an old nand which will downgrade your firmware it's best to create a second NAND backup before restoring the first one in case something goes wrong.

### What you need:
- Your `Rawnand.bin` (Combined or in 15 or 30 parts)
- Your `BOOT0` and `BOOT1`
	- If you're missing any of the files above, ask for further help in the [Nintendo Homebrew](https://discord.gg/C29hYvh) Discord server.
- The [Hekate](https://github.com/CTCaer/hekate/releases/) Payload
- A microSD card larger than 32gb

### Instructions:

Before we start, check if you have a tree of folders called `backup/[8 Character NAND id]/restore` on your sd card

!!! warning "If you don't see a backup or [8 Character NAND id] folder on your sd card:"
	1. Launch the latest hekate payload on your switch.
	2. Navigate to `Tools > Backup > Backup eMMC BOOT0/1`, and press the power button to select the option.
	3. Wait for the process to complete. When it's completed, you now have a `backup/[8 Character NAND id]/restore` folder on your sd card. Continue with step 1 of the guide.

1. Copy your `Rawnand.bin` (combined or in 15 or 30 parts), `BOOT0`, and `BOOT1` to the `backup/[8 Character NAND id]/restore` folder on the sd card
2. Put your sd card into your switch, and launch hekate.
3. Navigate to `Tools > Restore`. Select `Restore eMMC BOOT0/1`. Wait for this process to complete. After it finished, you can press power to return.
4. Select `Restore eMMC RAW GPP`. This WILL take a very long time to complete. After it finished, you can press power to return.

!!! danger "If you're downgrading using your nand backup"
	If the MAJOR version you were on before you performed the nand restore is HIGHER than the nand backup itself, you have to enable autoRCM to not get stuck in a boot crash.
	Major versions include 1.0, 2.0, 3.0, 4.0, 4.1, 5.0, 6.0, 6.2, 7.0

	If you were in autorcm before you upgraded to a newer major version (and still were after the upgrade) you don't have to do this.

	1. In hekate's main menu, navigate to `Tools > AutoRCM`
	2. Enable AutoRCM
