# Keeping your system up-to-date

This page documents how you can keep your system up-to-date.

After following our guide, your system will consist of three core elements that can be updated. Atmosphère, hekate and your system firmware.

## Updating Atmosphère

When updating Atmosphère, always make sure to _read the release notes_. They may list important changes and modifications to your system.

::: warning

**Updating from below Atmosphère 1.0.0**

If you update from below Atmosphère 1.0.0, there are additional steps to follow. You will have to delete the `sept` folder from your microSD, delete `fusee-secondary.bin` from your `atmosphere` folder and update your hekate config file: <a href="/files/emu/hekate_ipl.ini" download>hekate_ipl.ini</a> in the `bootloader` folder.

:::

When a new version of Atmosphère releases, you can update Atmosphère by following these steps:


1. Enter RCM and inject the hekate payload.
    - If you use a modchipped Switch, you can simply just turn your Switch on with the hekate payload renamed to `payload.bin` on the root of your microSD card.
1. Navigate to `Tools` > `USB Tools` > `SD Card` and plug your Switch into your PC via USB.
1. Download the latest release of [Atmosphère](https://github.com/Atmosphere-NX/Atmosphere/releases) (Download the `atmosphere-(version)-master-(version)+hbl-(version)+hbmenu-(version).zip` release of Atmosphère.)
1. Copy *the contents of* the Atmosphère `.zip` file to the root of your microSD card.
    - If you are prompted to overwrite files, do so.
1. Eject the `UMS` device safely from within your computer's operating system.
1. (If your hekate is not on the latest version) update hekate via the steps below.

## Updating hekate

When updating hekate always make sure to _read the release notes_. They may list important changes and modifications to your system.

When a new version of hekate releases, you can update by following these steps:

1. Enter RCM and inject the hekate payload.
    - If you use a modchipped Switch, you can simply just turn your Switch on with the hekate payload renamed to `payload.bin` on the root of your microSD card.
1. Navigate to `Tools` > `USB Tools` > `SD Card` and plug your Switch into your PC via USB.
1. Download the latest version of [hekate](https://github.com/CTCaer/Hekate/releases/) (Download the `hekate_ctcaer_(version).zip` release of hekate).
1. Copy the `bootloader` folder from the hekate `.zip` file to the root of your microSD card. If you are asked to overwrite or merge files while copying, say yes to merge/overwrite them.
1. Eject the `UMS` device safely from within your computer's operating system.
1. Go back to hekate's main menu and press `Reload` > `Reload` to reload hekate from your microSD card.
1. From here, you're done and you can boot into CFW.

## Updating your firmware

Always check _before_ updating your system firmware if the latest version of Atmosphère _as well_ as the latest version of hekate support the firmware version you are updating towards.

In addition, updating to or past some firmwares update the gamecard firmware. Reference the table below for information about these.

| Updating from                        | Updating towards                              | Updates gamecard firmware |
| ------------------------------------ | --------------------------------------------- | ------------------------- |
| Below 4.0.0                          | Below 4.0.0                                   | No                        |
| Below 4.0.0                          | 4.0.0 or above                                | Yes                       |
| On or above 4.0.0, but below 9.0.0   | At least 4.0.1 but below 9.0.0                | No                        |
| On or above 4.0.0, but below 9.0.0   | 9.0.0 or above                                | Yes                       |
| On or above 9.0.0, but below 11.0.0  | At least 9.0.1 but below 11.0.0               | No                        |
| On or above 9.0.0, but below 11.0.0  | 11.0.0 or above                               | Yes                       |
| On or above 11.0.0 but below 12.0.0  | At least 11.0.1 but below 12.0.0              | No                        |
| On or above 11.0.0 but below 12.0.0  | 12.0.0 or above                               | Yes                       |
| On or above 12.0.0 but below 14.0.0  | At least 12.0.1 but below 13.2.1              | No                        |
| On or above 12.0.0 but below 14.0.0  | 14.0.0 or above                               | Yes                       |
| On or above 14.0.0                   | Latest supported Atmosphère & hekate revision | No                        |

If at least one of the versions you are updating towards also updates the gamecard firmware, you will not be able to downgrade below that version without making the gamecard slot unusable until you update.

Atmosphère (and hekate) come bundled with patches that automatically disable the gamecard slot if it is detected that the system has an older gamecard firmware that would be updated. If you boot into RCM on each boot (for example by using AutoRCM), this means that the gamecard slot will not be updated and you can downgrade below that version. If this happens, you will not be able to use the gamecard slot as long as you are on the newer firmware.

Otherwise, you can safely update your system firmware through the system settings.

::: warning

**Note about autoRCM**

If you have autoRCM enabled and you're updating your system while in stock firmware, **updating will disable autoRCM** and you will need to enter RCM manually to boot custom firmware again.

To prevent autoRCM from being disabled, boot CFW on sysMMC and update through settings from there, as booting without AutoRCM <ins>will burn any preserved fuses</ins>.

:::

### About emuMMC

sysMMC and emuMMC have separate system firmwares and need to be updated separately.

If you keep your emuMMC offline, you will have to use a gamecard to update your system firmware, synchronize it with another Nintendo Switch or dump an updated firmware from your sysMMC.

### Updating emuMMC by dumping an updated firmware from your sysMMC

::: warning

**Before starting; do you have an eMMC NAND backup?**

Please do not start this guide without performing an eMMC RAW GPP and eMMC BOOT0/BOOT1 NAND backup!

You should always have *at least* one functional NAND backup, in the possible event of your console becoming "softbricked". This is not expected to happen while following the steps below, but this is a general reminder for the people who *don't* have a NAND backup, as you *do* interact with internal system files during the steps below.

If you do already have a NAND backup stored somewhere safely, you may ignore this warning.

You can learn how to make a NAND backup [here](../user_guide/all/making_essential_backups).

:::

::: danger

**Downgrading**

This guide is made for updating your emuMMC's firmware. It is **not** for downgrading. Downgrading at all, sysMMC or emuMMC, is not recommended and not worth it. Downgrading is also very dangerous and can lead to serious complications even when performed correctly.

:::

There are two supported methods of dumping your sysMMC's firmware, these methods are detailed in the two tabs below. Either choice will provide the same end result, but can be more difficult depending on the console model you have.

::::: tabs

:::: tab default Dumping your firmware via Goldleaf

#### What you need:
- The latest release of [Goldleaf](https://github.com/XorTroll/Goldleaf/releases) (`Goldleaf.nro`)
- The latest release of [Atmosphère](https://github.com/Atmosphere-NX/Atmosphere/releases) (`atmosphere-(version)-master-(version)+hbl-(version)+hbmenu-(version).zip`)

#### Preparing your microSD card

1. Boot into hekate.
1. Go to `Tools` > `USB Tools` > `SD Card` and connect your Switch to your PC via USB.
1. Download the latest release of `Goldleaf.nro` and place it in `sd:/switch` on your microSD card.

#### Dumping your sysMMC firmware

1. Make sure your sysMMC is up to date. If your sysMMC is not up-to-date, boot into sysCFW and update it through `System Settings` > `System` > `System Update`.
    - sysCFW is recommended since it preserves e-fuses and preserves AutoRCM (if applicable).
1. Boot into hekate, and navigate to `Launch` > `Atmosphere PKG3 sysMMC`.
    - `Atmosphere PKG3 sysMMC` is sysCFW, this environment may be called something different if you do not use the config we provide in our guide.
1. Once booted into sysCFW, open the homebrew menu in applet mode by opening the gallery applet on your home menu. 
    - Title takeover mode (holding `R` while launching any title on your HOME menu) also works, but isn't *required* for this process.
1. Find Goldleaf in your homebrew menu and launch the app.
1. Navigate to `Console & Goldleaf settings` > `Firmware and updates` > `Export update` > `Directory`, then wait for Goldleaf to finish dumping your currently installed firmware version.
1. Once done, reboot back to hekate by holding power for 3-4 seconds and selecting `Power Options` > `Restart`, or by using the `Reboot to Payload` homebrew app in your homebrew menu (Erista ("V1") console users only).

::::

:::: tab Dumping your firmware via TegraExplorer

#### What you need:
- The latest release of [TegraExplorer](https://github.com/suchmememanyskill/TegraExplorer/releases) (`TegraExplorer.bin`)

::: warning

On Mariko ("V2") consoles, this method of dumping the sysMMC's firmware requires you to have dumped your console's `prod.keys` prior to starting the steps below. To do this, you will need Lockpick_RCM.
- We do ***not***, under any circumstance, assist with the sourcing (locating) of the Lockpick_RCM payload, please refrain from asking about where to obtain it.

:::

#### Preparing your microSD card

1. Boot into hekate.
1. Go to `Tools` > `USB Tools` > `SD Card` and connect your Switch to your PC via USB.
1. Download the latest release of `TegraExplorer.bin` and place it `sd:/bootloader/payloads` on your microSD card.

#### Dumping your sysMMC firmware

1. Make sure your sysMMC is up to date. If your sysMMC is not up-to-date, boot into sysCFW and update it through `System Settings` > `System` > `System Update`.
    - sysCFW is recommended since it preserves e-fuses and preserves AutoRCM (if applicable).
1. Boot into hekate and navigate to `Payloads` > `TegraExplorer.bin`.
1. Using the joystick and the A buttons, select the `FirmwareDump.te` script, then select `Dump sysmmc`.
    - If navigation doesn't work with your Joycons, navigating using the volume buttons and selecting using the power button also works.
      (This is also required for Switch Lite console users.)
1. Wait approximately 1-2 minutes for the script to dump your firmware.
    - It may take a little longer depending on the specifications of your microSD card.
1. When the script finishes, press any button.
1. Select `Reboot to bootloader/update.bin`.

::::

:::::

#### Updating your emuMMC's firmware with Daybreak

1. In hekate go to `Launch -> Atmosphere PKG3 emuMMC`.
1. Once booted into your emuMMC, open the homebrew menu in applet mode by launching the gallery applet on your HOME menu.
    - Title takeover mode (holding `R` while launching any title on your HOME menu) also works, but isn't *required* for this process.
1. Find Daybreak in the homebrew menu and launch it.
1. Tap on `Install` and follow the instructions corresponding to the method you used to dump your firmware below.
    - For users who dumped their firmware using Goldleaf: Navigate to `sd:/switch/Goldleaf/export/update/<latest firmware version number>`.
    - For users who dumped their firmware using TegraExplorer: Navigate to `sd:/tegraexplorer/Firmware/<latest firmware version number>`.
1. Tap on `Continue` and then `Preserve settings`.
    - If you see the message `Warning: exFAT firmware is missing or corrupt`, you likely don't have the exFAT drivers installed on your sysMMC. Just press continue if this is the case.
1. If it is available choose `Install (FAT32 + exFAT)`, otherwise select `Install (FAT32)` and then `Continue`.
1. Wait until Daybreak completes installing the dumped firmware.
1. Once it completes, it will ask if you want to reboot. Tap `Reboot`.
1. Once rebooted, launch into emuMMC and verify your system works. You can verify your system has been properly updated in `System Settings` > `System`, it will tell you the installed firmware version underneath the `System Update` button.

#### Common crashes after updating

After updating your firmware, you might run into crashes due to outdated files. The following crashes are the most common ones, this is not an exhaustive list.

### Custom theme crash
::: tip

![Visual for theme crash](img/theme_crash.png)

:::

This crash happens due to the currently installed custom theme not supporting your firmware version. In order to fix it, navigate to `sd:/atmosphere/contents` and delete the folder named `0100000000001000`. You may reinstall your custom theme afterwards.

### MissionControl crash

::: tip

![Visual for missioncontrol crash](img/missioncontrol_crash1.png)
![Visual for missioncontrol crash](img/missioncontro2_crash1.png)

:::

This happens due to your current version of [MissionControl](../homebrew/mission-control) not supporting your firmware version. If there is a newer version of MissionControl available to support your current firmware, update to it. If not, you can fix this crash by navigating to `sd:/atmosphere/contents` and deleting the folder named `010000000000BD00`, which will uninstall MissionControl.

### Fully yellow screen on boot

This happens due to an outdated version of Atmosphère being installed. Even if you're sure you've updated Atmosphère, update it to the newest version available again.

### 'Unknown pkg1 version. HOS version not supported!'

If there is a line of white text saying `Found pkg1 ('XXXXXXXXXXXXXX').`, X being any number, this is most likely due to an outdated version of Hekate being installed. Even if you're sure you've updated Hekate, update it to the newest version available again.
