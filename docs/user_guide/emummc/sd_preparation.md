# SD Preparation

We will now place the required files for the Atmosphere custom firmware and some additional homebrew files on the microSD Card.

Atmosphere has its own bootloader, called fusee. For the purposes of this guide we will be using Hekate instead, so that we can back up the system's NAND (internal storage) and take advantage of other advanced features in the future.

&nbsp;

!!! warning "File name extensions"
    If you use Windows, you should enable file name extensions before continuing. See [this link](../../extras/showing_file_extensions.md) for a guide on how to do this.

&nbsp;

### What you need

!!! tip ""
    - The latest release of <a href="https://github.com/CTCaer/Hekate/releases/" target="_blank">Hekate</a> (Download the `hekate_ctcaer_(version).zip` release of hekate)
    - The hekate config file: <a href="../../../files/emu/hekate_ipl.ini" download>hekate_ipl.ini</a>
    - The 90dns DNS redirection config: <a href="../../../files/emummc.txt" download>emummc.txt</a>
    - The bootlogo zip folder: <a href="../../../files/bootlogos.zip" download>bootlogos.zip</a>
    - The latest release of <a href="https://github.com/Atmosphere-NX/Atmosphere/releases" target="_blank">Atmosphere</a>. Download the `atmosphere-(version)-master-(version)+hbl-(version)+hbmenu-(version).zip` release of Atmosphere.
    - The latest release of <a href="https://github.com/shchmue/Lockpick_RCM/releases" target="_blank">Lockpick_RCM</a> (Download the `Lockpick_RCM.bin` release of Lockpick)
    - The latest release of <a href="https://github.com/J-D-K/JKSV/releases" target="_blank">JKSV</a> (Download the `JKSV.nro` release of JKSV)
    - The latest release of <a href="https://github.com/mtheall/ftpd/releases" target="_blank">FTPD</a> (Download the `ftpd.nro` release of FTPD)
    - The latest release of <a href="https://github.com/exelix11/SwitchThemeInjector/releases" target="_blank">NXThemeInstaller</a> (Download the `NxThemesInstaller.nro` release of NxThemeInstaller)
    - The latest release of <a href="https://github.com/joel16/NX-Shell/releases" target="_blank">NX-Shell</a> (Download the `NX-Shell.nro` release of nx-shell)
    - The latest release of the <a href="https://github.com/vgmoose/hb-appstore/releases" target="_blank">hbappstore</a> (Download the `appstore.nro` release of hbappstore)

### Instructions

!!! tip ""
    1. Insert your Switch's microSD Card into your PC
    2. Copy *the contents of* the Atmosphere `.zip` file to the root of your microSD Card
    3. Copy the `bootloader` folder from the Hekate `.zip` file to the root of your microSD Card
    4. Copy the `bootloader` folder from the `bootlogos.zip` file to the root of your microSD Card
          - If you're asked to merge the bootloader folders, do so.
    5. Copy `hekate_ipl.ini` to the `bootloader` folder on your microSD Card
    6. Copy `Lockpick_RCM.bin` to the `/bootloader/payloads` folder on your microSD Card
    7. Create a folder named `hosts` inside the `atmosphere` folder on your microSD Card, and put `emuMMC.txt` in it
    8. Create a folder named `appstore` inside the `switch` folder on your microSD Card, and put `appstore.nro` in it
    9. Copy `JKSV.nro`, `ftpd.nro`, `NX-Shell.nro` and `NxThemesInstaller.nro` to the `switch` folder on your microSD Card
    10. If you were already using your microSD Card as a storage device for your games and backed up the Nintendo folder before partitioning your microSD Card, please place it back on the root of your microSD Card.
    11. Reinsert your microSD Card back into your Switch

    !!!danger "About emummc.txt"
        Putting the `emummc.txt` file provided by this guide into `/atmosphere/hosts` will prevent your emuMMC (emuNAND) from connecting to Nintendo. Not doing this will likely result in a ban.

    !!! tip ""
        Your microSD Card should look similar to this. The `Nintendo` folder will not be present if your switch has not already booted with the microSD Card inserted.
        ![sdfilesimg](../img/sdfiles.png)

&nbsp;

#### [Continue to Making emuMMC <i class="fa fa-arrow-circle-right fa-lg"></i>](making_emummc.md)
