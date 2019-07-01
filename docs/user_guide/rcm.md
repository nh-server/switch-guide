# RCM

RCM (short for ReCovery Mode) is a mode for the switch that allows nintendo to send it commands to do various things. People found out that on unpatched switches, that you could send a payload, and then quickly copying it into the memory buffer behind the stack, overflowing the memory buffer into the stack, meaning you smash the stack and get full access to everything on the system. We use it here to launch atmosphere.

-----

### Emunand cfw (Recommended)

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

### Sysnand cfw

This is for the people who don't have an 64gb sd card or larger, or don't want emunand. **this is not recommended**

[Continue to SD preperations (sysnand cfw)](sysnand/sd_preparation.md)