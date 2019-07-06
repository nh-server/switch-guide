# RCM

RCM (short for ReCovery Mode) is a mode for the switch that allows nintendo to send the switch commands to do various things. People found out that on unpatched switches, you could send a payload, and then quickly copy it into the memory buffer behind the stack, overflowing the memory buffer into the stack, meaning you smash the stack and get full access to everything on the system. We use it here to launch atmosphere.

-----

!!!tip "Emunand vs Sysnand"
	- Emunand stands for Emulated nand, this means that your entire nand 	   (system memory) will run off your sd card with custom firmware (CFW)     this nand is *completely seprate* from your sysnand.

	- Sysnand stands for System nand, meaning the internal storage in your actual switch, which means that cfw will run off your nand that is on your actual system, which presents a higher ban risk.


----

### Emunand CFW (Recommended)

!!!tip ""
	What's needed for emunand:

	- A SD card that's 64 gb or larger

	Pros of using emunand over sysnand cfw:

	- No ban risk if used properly
		- Note that you need to keep your emunand completely offline for it to be effective
	- Playing online without risk on a clean sysnand
	- Game card dumping

#### [Continue to Partitioning SD (Emummc) <i class="fa fa-arrow-circle-right fa-lg"></i>](emummc/partitioning_sd.md)
-----

### Sysnand CFW

This is for the people who don't have an 64gb sd card or larger, or don't want emunand. **this is not recommended**

!!!note "Note"
	If you set up an emunand you may still have cfw on your sysnand if you so choose to use it. You do not have to follow the guide linked below, all the files are the same, you simply select "Sysnand CFW" from Hekate 


#### [Continue to SD preperations (Sysnand CFW) <i class="fa fa-arrow-circle-right fa-lg"></i>](sysnand/sd_preparation.md)