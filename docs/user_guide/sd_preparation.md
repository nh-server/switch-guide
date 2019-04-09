# SD Preparation

We will now place the required files for the Atmosphere custom firmware and some additional homebrew files on the SD card.

Atmosphere has its own bootloader, called fusee (primary). For the purposes of this guide we will be using Hekate instead, so that we can back up the system's NAND (internal storage) and take advantage of other advanced features in the future.

&nbsp;

!!! danger "Notice"
    Your SD card will need to be formatted as either FAT32 or exFAT. FAT32 is recommended as it is more stable and will work out of the box with the Switch's operating system, but has a file size limit of 4GB. If you plan on using exFAT, you will need to install the exFAT update for your Switch, which is downloaded when you insert an exFAT formatted SD card in to your Switch. Note that this will update your console and requires an internet connection.

!!! warning "NxThemeInstaller"
    The ban risks of using Switch themes are at this time unknown. Use them at your own risk.

!!! warning "File name extensions"
    If you use Windows, you should enable file name extensions before continuing. See [this link](../extras/showing_file_extensions.md) for a guide on how to do this.

&nbsp;

### What you need

!!! tip ""
    - The latest release of [Hekate](https://github.com/CTCaer/hekate/releases/)
    - The latest release of [Atmosphere](https://github.com/Atmosphere-NX/Atmosphere/releases) 
        - You will need to download the release zip.
    - The latest release of [Lockpick_RCM](https://github.com/shchmue/Lockpick_RCM/releases)
    - The latest release of [Checkpoint](https://github.com/FlagBrew/Checkpoint/releases)
        - Download the `Checkpoint.nro` release of Checkpoint
    - The latest release of [FTPD](https://github.com/mtheall/ftpd/releases)
        - Download the `ftpd.nro` release of FTPD
    - The latest release of [NXThemeInstaller](https://github.com/exelix11/SwitchThemeInjector/releases)
        - Download the `NxThemesInstaller.nro` release of NxThemeInstaller
    - The latest release of [NX-Shell](https://github.com/joel16/NX-Shell/releases)
    - The latest release of the [hbappstore](https://github.com/vgmoose/hb-appstore/releases)
    - <a href="../../files/hekate_ipl.ini" download>hekate-ipl.ini</a>


### Instructions

!!! tip ""
    1. Insert your Switch's SD card into your PC
    2. Copy *the contents of* the Atmosphere `.zip` file to the root of your SD card
    3. Copy the `bootloader` folder from the Hekate `.zip` file to the root of your SD card
    4. Copy Hekate's `.bin` file from the Hekate `.zip` file to the `atmosphere` folder on your SD card
    5. Delete `reboot_payload.bin` in the `atmosphere` folder on your SD card
    6. Rename Hekate's `.bin` file to `reboot_payload.bin`
    7. Copy `hekate-ipl.ini` to the `bootloader` folder on your SD card
    8. Copy `Lockpick_RCM.bin` to the `/bootloader/payloads` folder on your SD card
    9. Create a folder named `appstore` inside the `switch` folder on your SD card, and put `appstore.nro` in it
    10. Copy `ftpd.nro` , `Checkpoint.nro` , `NX-Shell.nro` and `NxThemesInstaller.nro` to the `switch` folder on your SD card

&nbsp;

#### [Continue to Entering RCM <i class="fa fa-arrow-circle-right fa-lg"></i>](entering_rcm.md)
