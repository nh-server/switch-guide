# SD Preparation

We will now place the required files for the Atmosphere custom firmware and some additional homebrew files on the SD card.

Atmosphere has its own bootloader, called fusee (primary). For the purposes of this guide we will be using Hekate instead, so that we can back up the system's NAND (internal storage) and do other advanced features in the future.

&nbsp;

!!! danger "Notice"
	Your SD card will need to be formatted as either FAT32 or exFAT. FAT32 is recommended as it is more stable and will work out of the box with the Switch's operating system, but has a file size limit of 4GB. If you plan on using exFAT, you will need to install the exFAT update for your Switch, which is downloaded when you insert an exFAT formatted SD card in to your Switch. Note that this will update your console and requires an internet connection.
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
