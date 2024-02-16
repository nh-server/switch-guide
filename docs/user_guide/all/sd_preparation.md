# SD Preparation

We will now place the required files for the Atmosphère custom firmware and some additional homebrew files on the microSD card.

Atmosphere has its own bootloader, called fusee. For the purposes of this guide we will be using Hekate instead, so that we can back up the system's NAND (internal storage) and take advantage of other advanced features in the future.

!!! warning "File name extensions"
    If you use Windows, you should enable file name extensions before continuing. See [this link](../../extras/showing_file_extensions.md) for a guide on how to do this.

### **What you need:**
- The latest release of <a href="https://github.com/CTCaer/Hekate/releases/" target="_blank">Hekate</a> (Download the `hekate_ctcaer_(version).zip` release of hekate)
- The Hekate config file: <a href="../../../files/emu/hekate_ipl.ini" download>hekate_ipl.ini</a>
- The DNS-MITM DNS redirection config: <a href="../../../files/emummc.txt" download>emummc.txt</a>
- The bootlogo zip folder: <a href="../../../files/bootlogos.zip" download>bootlogos.zip</a>
- The latest release of <a href="https://github.com/Atmosphere-NX/Atmosphere/releases" target="_blank">Atmosphere</a>. Download the `atmosphere-(version)-master-(version)+hbl-(version)+hbmenu-(version).zip` release of Atmosphere.
- The latest release of <a href="https://github.com/J-D-K/JKSV/releases" target="_blank">JKSV</a> (Download the `JKSV.nro` release of JKSV)
- The latest release of <a href="https://github.com/mtheall/ftpd/releases" target="_blank">FTPD</a> (Download the `ftpd.nro` release of FTPD)
- The latest release of <a href="https://github.com/exelix11/SwitchThemeInjector/releases" target="_blank">NXThemeInstaller</a> (Download the `NxThemesInstaller.nro` release of NxThemeInstaller)
- The latest release of <a href="https://github.com/joel16/NX-Shell/releases" target="_blank">NX-Shell</a> (Download the `NX-Shell.nro` release of nx-shell)

### **Instructions:**
1. Navigate to the accessible drive.
2. Copy *the contents of* the Atmosphère`.zip` file to the root of your microSD card.
3. Copy the `bootloader` folder from the Hekate `.zip` file to the root of your microSD card.
4. Copy the `bootloader` folder from the `bootlogos.zip` file to the root of your microSD card.
    - If you're asked to merge the bootloader folders, do so.
5. Copy `hekate_ipl.ini` to the `bootloader` folder on your microSD card.
6. Create a folder named `hosts` inside the `atmosphere` folder on your microSD card, and put `emummc.txt` in it.
7. Copy `JKSV.nro`, `ftpd.nro`, `NX-Shell.nro` and `NxThemesInstaller.nro` to the `switch` folder on your microSD card.
8. If you were already using your microSD card as a storage device for your games and backed up the Nintendo folder before partitioning your microSD card, please place it back on the root of your microSD card.
    - If you created an emuMMC on the previous page, don't forget to copy the Nintendo folder to `SD:/emuMMC/RAW1/`!

    !!! danger "About emummc.txt"
        Putting the `emummc.txt` file provided by this guide into `/atmosphere/hosts` will prevent your emuMMC (emuNAND) from connecting to Nintendo. Not doing this will likely result in a ban.

    !!! tip ""    
        Your microSD card should look similar to the image below. The `Nintendo` folder will not be present if your Switch has not already booted with the microSD card inserted and the `emuMMC` folder will not be present if you're following the sysCFW path of the guide/you haven't created an emuMMC!
        `payload.bin` will not be present if you're using an unpatched Switch.

        ![sdfilesimg](img/sdfiles3.png)

[Continue to Making Essential Backups :material-arrow-right:](making_essential_backups.md){ .md-button .md-button--primary }
