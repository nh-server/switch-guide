# RCM

### **About RCM**

RCM (short for **R**e**C**overy **M**ode) is a mode for the switch that allows Nintendo to send the switch commands to do various things. People found out that on unpatched switches, you could send a payload, and then quickly copy it into the memory buffer behind the stack, overflowing the memory buffer into the stack, meaning you smash the stack and get full access to everything on the system. We use it here to launch atmosphere.

Before setting up the console for homebrew, it is important to have at least one eShop game (such as [Fallout Shelter](https://www.nintendo.com/games/detail/fallout-shelter-switch/)), application (such as [YouTube](https://www.nintendo.com/games/detail/youtube-switch/) or [Hulu](https://www.nintendo.com/games/detail/hulu-switch/)), or a game demo such as [10 Second Run RETURNS](https://www.nintendo.com/games/detail/10-second-run-returns-switch). Running homebrew through any game cartridge will also work, but it must be inserted. Running homebrew does not permanently replace or remove the game/application, nor does it become tied to only one game/application (any cartridge you have inserted or any game/application installed can always be used). Once you have any game or application, you are prepared to continue on with the guide.

If you do decide to follow the emuMMC path (recommended) later in the guide, make sure you disable [Automatic Save Data Cloud backups/downloads](https://www.nintendo.co.uk/Support/Nintendo-Switch/How-to-Enable-Disable-Automatic-Save-Data-Backups-and-Downloads-1434310.html) beforehand as well as making sure [the Switch is set as Primary Console](https://en-americas-support.nintendo.com/app/answers/detail/a_id/22453/~/how-to-change-the-primary-console-for-your-nintendo-account).


[Continue to Entering RCM :material-arrow-right:](entering_rcm.md){ .md-button .md-button--primary }
