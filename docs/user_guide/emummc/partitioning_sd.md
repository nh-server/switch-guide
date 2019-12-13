# Partitioning the SD Card 

!!!warning "This will delete everything on your sd card"
	Doing this will delete all your data from your sd card, be warned!

!!! warning "Backing up your existing Nintendo folder"
	Before we start, if you are using a microSD card already as a storage device for your games, you will want to back up your `Nintendo` folder that is on the root of your microSD card to a safe place on your computer. This folder contains your downloaded games and game updates.

-----

## Preperations

What you need:

- The latest release of <a href="https://github.com/suchmememanyskill/TegraExplorer/releases" target="_blank">TegraExplorer</a>

### Instructions

1. Inject the TegraExplorer payload with your 64GB (or larger) SD card inserted into your Switch.
	- If you forgot how to do this, re-read the [sending payload](sending_payload.md) section of the guide.
2. Navigate to `SD Format` and press the power button to enter the SD format menu.
3. Navigate to `Format for EmuMMC setup` and press the power button to confirm.
5. Read the warning, and press power after 10 seconds to format your SD card.
	- Note: This will delete all data on your SD card. Make sure you backed up your Nintendo folder!
	- This will take about 5 minutes.
6. Press any button to return to the main menu.
7. Navigate to `Exit` and press the power button to enter the Exit menu.
8. Navigate to `Reboot to RCM` and press the power button to reboot to RCM. It's now safe to eject your sd card for the next part of the guide.

!!! warning "Windows complaining about an unreadable drive"
    If you get the issue that Windows says the SD card is unreadable and wants to format it, do not format! This is likely your emuMMC partition.
    
&nbsp;

#### [Continue to SD Preparations <i class="fa fa-arrow-circle-right fa-lg"></i>](sd_preparation.md)
