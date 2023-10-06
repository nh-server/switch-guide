# RCM

RCM (short for ReCovery Mode) is a mode for the switch that allows nintendo to send the switch commands to do various things. People found out that on unpatched switches, you could send a payload, and then quickly copy it into the memory buffer behind the stack, overflowing the memory buffer into the stack, meaning you smash the stack and get full access to everything on the system. We use it here to launch atmosphere.

!!!tip "emuNAND vs emuMMC vs sysNAND"
	- sysNAND stands for System NAND, meaning the internal storage in your actual Switch.
	- emuNAND stands for emulated NAND, this means that your entire NAND (system memory) will run off your microSD card with Custom Firmware (CFW). This NAND's contents (games, applications, saves, etc.) are *completely separate* from your sysNAND.
	- emuMMC is the name for the currently used implementation of emuNAND on Switch. It has no difference from emuNAND besides name.

----

### emuNAND CFW (**Recommended for new users**)

!!!tip "What's needed for emuNAND"
	- A microSD card that's 64GB or larger

	#### Pros of using emuNAND over sysNAND CFW:
	
	- Using homebrew applications and CFW features in a safe environment that won't connect to Nintendo services, while the sysNAND can be used online.
	- Allowing users on patched Switches using Caffeine to update their emuNAND to latest and use it online, keeping sysNAND at a lower vulnerable version.

&nbsp;

[Continue to Entering RCM (emuNAND) :material-arrow-right:](entering_rcm.md){ .md-button .md-button--primary }