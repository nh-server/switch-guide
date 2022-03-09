# RCM

RCM (short for ReCovery Mode) is a mode for the Switch that allows nintendo to send the Switch commands to do various things. It was discovered, that on unpatched Switch units, one could send a payload, and then quickly copy it into the memory buffer behind the stack, overflowing the memory buffer into the stack, leading to a smashed stack early in the booting process. We use it here to launch atmosphere.

!!!tip "emuNAND vs emuMMC vs sysNAND"
	- sysNAND stands for System NAND, meaning the internal storage in your actual Switch.
	- emuNAND stands for emulated NAND, this means that your entire NAND (system memory) will run off your microSD Card with Custom Firmware (CFW). This NAND's contents (games, applications, saves, etc.) are *completely separate* from your sysNAND.
	- emuMMC is the name for the implementation of emuNAND on Switch. The suffixes **-MMC** and **-NAND** are interchangable.

----

### emuNAND CFW (**Recommended**)

!!!tip "What's needed for emuNAND"
	- A microSD Card that's 64GB or larger

	#### Pros of using emuNAND over sysNAND CFW:

	- Using homebrew applications such as save editors, or cheating in games offline without "dirtying" or affecting sysNAND, allowing sysNAND to be used online without ban risk.
	- Allowing users on patched Switches using Caffeine to update their emuNAND to latest and use it online, keeping sysNAND at a lower vulnerable version.

&nbsp;

#### [Continue to Entering RCM <i class="fa fa-arrow-circle-right fa-lg"></i>](emummc/entering_rcm.md)
-----


### sysNAND CFW (**Not Recommended**)

This is for the people who don't have an 64GB microSD Card or larger, or who don't want emuNAND for whatever reason.

!!!note "Note"
	If you set up an emuNAND you may still have CFW on your sysNAND if you choose to use it. You do not have to follow the guide linked below; all the files are the same, you simply select "sysNAND CFW" from Hekate/Nyx.

&nbsp;

#### [Continue to SD preparations (sysNAND CFW) (**Not Recommended**) <i class="fa fa-arrow-circle-right fa-lg"></i>](sysnand/sd_preparation.md)
