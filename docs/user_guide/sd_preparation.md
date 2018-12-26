# SD Preparation

We will now place the required files for the Atmosphere custom firmware and some additional homebrew files on the SD card.

Hekate will be used as an intermediary bootloader, as it has useful options such as unsetting the archive bit on files for exFAT SD cards, backing up and restoring NAND backups, and "dual-booting" different payloads.

&nbsp;

### What you need

!!! tip ""
    - The latest release of [Hekate](https://github.com/CTCaer/hekate/releases/)
    - The latest release of [Atmosphere](https://github.com/Atmosphere-NX/Atmosphere/releases) 
        - You will need to download both the release zip and the `fusee-primary.bin`
    - The latest release of [nx-hbmenu](https://github.com/switchbrew/nx-hbmenu/releases)
    - The latest release of [nx-hbloader](https://github.com/switchbrew/nx-hbloader/releases)
    - The latest release of [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases)
	    - Download the `Checkpoint.nro` release of Checkpoint
    - The latest release of [FTPD](https://github.com/mtheall/ftpd/releases)
	    - Download the `ftpd.nro` release of FTPD
    - The latest release of [NX-Shell](https://github.com/joel16/NX-Shell/releases)
    - <a href="../../files/hekate_ipl.ini" download>hekate-ipl.ini</a>



### Instructions

!!! tip ""
    1. Insert your Switch's SD card into your PC
    2. Copy *the contents of* the Atmosphere `.zip` file to the root of your SD card
    3. Copy `fusee-primary.bin` to the atmosphere folder on your SD card
    4. Copy the `bootloader` folder from the Hekate `.zip` file to the root of your SD card
    5. Copy nx-hbloader (`hbl.nsp`) to the `atmosphere` folder on your SD card
    6. Copy *the contents of* the nx-hbmenu `.zip` file to the root of your SD card
    7. Copy `hekate-ipl.ini` to the `bootloader` folder on your SD card
    8. Make a folder called `switch` on the root of the sd card
    9. Copy `ftpd.nro` , `Checkpoint.nro` and `NX-Shell.nro` to the `switch` folder

&nbsp;

#### [Continue to Entering RCM <i class="fa fa-arrow-circle-right fa-lg"></i>](entering_rcm.md)
