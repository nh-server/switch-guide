# Giving Homebrew More RAM
This section has the end-result of giving homebrew more RAM access.
Atmosphere's default is to load homebrew using the album applet. Since this is designed to run while a game is still in the background, but paused, there is a significant limit to the amount of memory the album can access- only 512 megabytes.
Homebrew run through a full-blown application has access to much more RAM, a little over 3 gigabytes. This allows for homebrew that requires more RAM (like DOOM 3, and Nintendo 64 emulators) to run.

This method does not install a .NSP file. Other methods may do this, which is grounds for a virtually guaranteed ban.

The method we are using will override an application with the Homebrew Menu. You will still be able to access the game by holding R while starting it up, but it's a good idea to use a small free game or demo to effectively serve as a permanent Homebrew Menu launcher.

### What you need

!!! tip ""
	- A game to replace with the Homebrew Menu
          - You must also know the game's Title ID, which you can find using Checkpoint or on the [Switchbrew wiki](https://switchbrew.org/wiki/Title_list/Games)
          - For the purposes of this guide, we'll be using the **demo** for [10 Second Run RETURNS](https://www.nintendo.com/games/detail/10-second-run-returns-switch)

### Instructions

!!! tip ""
	1. Insert your Switch's SD card into your PC.
	2. Navigate to the `atmosphere` folder.
	3. Open `loader.ini` in a text editor.
	4. Replace `hbl_tid=010000000000100D` with `hbl_tid=0100DC000A472000`.
          - This tells Atmosphere to load Homebrew using the demo for 10 Second Run RETURNS instead of the album.
          - If you're not using the demo for 10 Second Run RETURNS, replace this with the Title ID of your target application instead.
	5. Insert your Switch's SD card back into your Switch, and boot it up normally.
          - Going online while in custom firmware is not considered 100% safe at this time.
	6. Download the **demo** for 10 Second Run RETURNS from the eShop.

When in Atmosphere, when the 10 Second Run RETURNS demo is launched, you will boot into the Homebrew Menu instead. If, for whatever reason, you want to play the 10 Second Run RETURNS demo, simply hold R while launching it.
