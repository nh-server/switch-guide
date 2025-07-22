# Keeping your system up-to-date

This page documents how you can keep your system up-to-date.

After following our guide, your system will consist of three core elements that can be updated. Atmosphère, hekate and your system firmware.

## Updating Atmosphère

When updating Atmosphère, always make sure to _read the release notes_. They may list important changes and modifications to your system.

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
1. From here, you're done and you can boot into CFW and update your firmware. (See sections below.)
    - **Note:** If your system does *not* boot as expected after updating, please consult the [Common crashes after updating](#common-crashes-after-updating) section below.


## Updating your firmware

Always check _before_ updating your system firmware if the latest version of Atmosphère _as well_ as the latest version of hekate support the firmware version you are updating towards.

### About emuMMC

Your sysMMC and emuMMC have separate system firmwares and need to be updated separately.

If you keep your emuMMC offline, you have 3 options:

1. You can dump the currently installed firmware version from your sysMMC
1. You can dump the firmware from another Switch you own
1. You can use a gamecard to update your firmware (keep in mind that no gamecard contains the latest available firmware version at the time of writing)

Only the first option is covered in the steps below.

### Updating emuMMC by dumping an updated firmware from your sysMMC

::: danger

**Downgrading**

This guide is made for updating your emuMMC's firmware. It is **not** for downgrading. Downgrading at all, sysMMC or emuMMC, is not supported, not recommended and not worth it. Downgrading is also very dangerous and can lead to serious complications even when performed correctly.

:::

There are two supported methods of dumping your sysMMC's firmware, these methods are detailed in the two tabs below. Either choice will provide the same end result, but can be more difficult depending on the console model you have.

- **Note:**
If you have an unpatched Switch, have autoRCM enabled and you're updating your system while in stock firmware, **updating will disable autoRCM** and you will need to enter RCM manually to boot custom firmware again.
To prevent autoRCM from being disabled, boot CFW on sysMMC and update through settings from there, as booting without AutoRCM <ins>will burn any preserved e-fuses</ins>.

::::: tabs

:::: tab default Dumping your firmware via Goldleaf

#### What you need:
- The latest release of [Goldleaf](https://github.com/XorTroll/Goldleaf/releases) (`Goldleaf.nro`)

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
    - **Note:** If your system does *not* boot as expected after updating, please consult the [Common crashes after updating](#common-crashes-after-updating) section below.

## Common crashes after updating

After updating your firmware, you might run into crashes due to incompatible [sysmodules](/homebrew/#terminologies). The following crashes are the most common ones, but is not an exhaustive list.

- **Note:** hekate and fusee are both bootloaders, these bootloaders have different ways of presenting error screens to the user. Errors displayed by hekate will typically be yellow and errors displayed by fusee will typically be white.</br>
- Below you will find the way it's presented depending on how you normally boot into CFW. 

#### Custom theme crash
::: tip

![Visual for theme crash](img/themecrash.png)

:::

This crash typically happens due to the currently installed custom theme not being compatible with the HOME menu of your currently installed firmware version. In order to fix this crash, navigate to `sd:/atmosphere/contents` and delete the folder named `0100000000001000`. You may reinstall your custom theme afterwards using the `Installing a theme` section [here](/homebrew/nxtheme-installer.html#installing-a-theme).

#### MissionControl crash

::: tip
#### hekate crash screen:
![Visual for missioncontrol crash hekate](img/missioncontrolcrash1.jpg)
#### fusee crash screen:
![Visual for missioncontrol crash fusee](img/missioncontrolcrash2.jpg)

:::

This happens due to your current version of [MissionControl](../homebrew/mission-control) not being compatible with your currently installed Atmosphère version. If there is a newer version of MissionControl available for your currently installed Atmosphère version, you should update to that newer version if you wish to keep using MissionControl. If not, you can fix this crash by navigating to `sd:/atmosphere/contents` and deleting the folder named `010000000000bd00`, which will uninstall MissionControl.

#### ldn_mitm crash

::: tip
#### hekate crash screen:
![Visual for ldn_mitm crash hekate](img/ldn_mitmcrash1.jpg)
#### fusee crash screen:
![Visual for ldn_mitm crash fusee](img/ldn_mitmcrash2.jpg)

:::

This happens due to your current version of [ldn_mitm](../homebrew/ldn_mitm) not being compatible with your currently installed Atmosphère version. If there is a newer version of ldn_mitm available for your currently installed Atmosphère version, you should update to that newer version if you wish to keep using ldn_mitm. If not, you can fix this crash by navigating to `sd:/atmosphere/contents` and deleting the folder named `4200000000000010`, which will uninstall ldn_mitm.

### Fully yellow/blue screen on boot

This usually happens due to mismatched Atmosphère files being installed (for example, due to an incomplete Atmosphère update). Even if you're sure you've updated Atmosphère, re-update to the latest available version.

### 'Unknown pkg1 version. HOS version not supported!'

If there is a line of white text saying `Found pkg1 ('XXXXXXXXXXXXXX').`, X being any number, this is most likely due to an incompatible version of hekate being installed. Even if you're sure you've updated hekate, re-update to the latest available version. The pkg1 ID is the ID of the installed firmware version, if the pkg1 field is empty or contains scrambled text, please ask for assistance in `#switch-assistance-1` or `#switch-assistance-2` in the [NH Discord server](https://discord.gg/C29hYvh).

### Gamecards don't work after updating my firmware

Please unfold the `Legacy information` section at the bottom of this page and see if that resolves your issues.

### Still running into issues?

If you still run into issues at this point, please ask for assistance in `#switch-assistance-1` or `#switch-assistance-2` in the [NH Discord server](https://discord.gg/C29hYvh)

:::: details Legacy information {closed}

::: warning

#### **Updating from below Atmosphère 1.0.0**

If you update from below Atmosphère 1.0.0, there are additional steps to follow. You will have to delete the `sept` folder from your microSD, delete `fusee-secondary.bin` from your `atmosphere` folder and update your hekate config file: <a href="/files/emu/hekate_ipl.ini" download>hekate_ipl.ini</a> in the `bootloader` folder.

:::

#### **Gamecard reader firmware** 

In addition, updating to or past some firmwares update the firmware of the gamecard reader of your Switch. Refer to the table below for information about which firmware updates updated the firmware of the gamecard reader.

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

If at least one of the versions you are updating towards also updates the gamecard reader's firmware, you will not be able to downgrade below that version without making the gamecard reader unusable until you update.

Atmosphère and hekate come bundled with patches that automatically disable the gamecard reader if it is detected that the system has an older gamecard reader firmware that would be updated. If you boot into RCM on each boot (for example by using AutoRCM), this means that the gamecard slot will not be updated and you can downgrade below that version. If this happens, you will not be able to use the gamecard slot as long as you are on the newer firmware.

Otherwise, you can safely update your system firmware through the system settings.

::::

