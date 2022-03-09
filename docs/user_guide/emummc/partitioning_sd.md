# Partitioning the microSD Card

!!!warning "This will delete everything on your microSD Card"
	Doing this will delete all your data from your microSD Card, be warned!

!!! warning "Back up your existing Nintendo folder"
	Before we start, if you are using a microSD Card already as a storage device for your games, you will want to back up your `Nintendo` folder that is on the root of your microSD Card to a safe place on your computer. This folder contains your downloaded games and game updates.

-----

## Preparations

What you need:

- The latest release of <a href="https://github.com/suchmememanyskill/TegraExplorer/releases" target="_blank">TegraExplorer</a>

### Instructions

1. Inject the TegraExplorer payload with your 64GB (or larger) microSD Card inserted into your Switch.
	- If you forgot how to do this, re-read the [sending payload](sending_payload.md) section of the guide.
2. Navigate to `Partition the SD` and press the A button to enter the SD format menu.
	- If you can't find the Partition the sd option, make sure that your microSD Card is inserted and select Mount SD.
3. Navigate to `FAT32 + emuMMC` and press the A button to confirm.
4. Read the warning, and select Yes to partition & format your microSD Card.
	- Note: This will delete all data on your microSD Card. Make sure you backed up your Nintendo folder!
	- This should not take more than a few seconds.
5. Press any button to return to the main menu.
6. Navigate to `Reboot to RCM` and press the A button to reboot to RCM. It's now safe to eject your microSD Card for the next part of the guide.

!!! warning "Windows complaining about an unreadable drive"
    If you get the issue that Windows says the microSD Card is unreadable and wants to format it, do not format! This is likely your emuMMC partition. After partitioning your sd, your sd will show up as 2 drives on your PC. Use the drive that can be accessed

&nbsp;

#### [Continue to SD Preparations <i class="fa fa-arrow-circle-right fa-lg"></i>](sd_preparation.md)
