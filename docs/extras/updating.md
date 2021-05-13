# Keeping your system up-to-date

This page documents how you can keep your system up-to-date.

After following our guide, your system will consist of three core elements that can be updated. Atmosphere, Hekate and your system firmware.

## Updating Atmosphere

When updating Atmosphere always make sure to _read the release notes_. They may list important changes and modifications to your system.

When a new version of Atmosphere releases, you can update Atmosphere by following these steps:

<!-- Notice for easy removal later once EXPERIMENTAL releases aren't needed:  This section below has a notice about EXPIREMENTAL release. -->

1. Turn off your Nintendo Switch and plug your SD card in your computer.
2. Download the latest release of <a href="https://github.com/Atmosphere-NX/Atmosphere/releases" target="_blank">Atmosphere</a> (Download the `atmosphere-(version)-master-(version)+hbl-(version)+hbmenu-(version).zip` release of Atmosphere. Do not download the `atmosphere-EXPERIMENTAL-(version)-master-(version)+hbl-(version)+hbmenu-(version).zip` release.)
3. Copy *the contents of* the Atmosphere `.zip` file to the root of your SD card.
    - If you are prompted to overwrite files, do so.
4. (If your hekate is not on the latest version) Update hekate via the steps below
5. Put your SD card back in your Switch and launch CFW.

## Updating Hekate

When updating Hekate always make sure to _read the release notes_. They may list important changes and modifications to your system.

When a new version of Hekate releases, you can update by following these steps:

1. Turn off your Nintendo Switch and plug your SD card in your computer.
2. Download the latest version of <a href="https://github.com/CTCaer/Hekate/releases/" target="_blank">Hekate</a> (Download the `hekate_ctcaer_(version).zip` release of hekate).
3. Copy the `bootloader` folder from the Hekate `.zip` file to the root of your SD card. If you are asked to overwrite or merge files while copying, say yes to merge/overwrite them.
4. Put your SD card back in your Switch and launch Hekate.
5. Go to the Options tab at the top right of the screen. Turn "Update Reboot 2 Payload" on the bottom right ON (if it isn't on already). Tap "Save Options" at the bottom of the screen.

## Updating your firmware

Always check _before_ updating your system firmware if the latest version of Atmosphere _as well_ as the latest version of Hekate support the firmware version you are updating towards.

Currently the latest version supported by Atmosphere and Hekate is: **12.0.2**.

In addition, updating to or past some firmwares update the gamecard firmware. Reference the table below for information about these.

| Updating from                        | Updating towards                              | Updates gamecard firmware |
| ------------------------------------ | --------------------------------------------- | ------------------------- |
| Below 4.0.0                          | Below 4.0.0                                   | No                        |
| Below 4.0.0                          | 4.0.0 or above                                | Yes                       |
| On or above 4.0.0, but below 9.0.0   | At least 4.1.0 but below 9.0.0                | No                        |
| On or above 4.0.0, but below 9.0.0   | 9.0.0 or above                                | Yes                       |
| On or above 9.0.0, but below 11.0.0  | At least 9.1.0 but below 11.0.0               | No                        |
| On or above 9.0.0, but below 11.0.0  | 11.0.0 or above                               | Yes                       |
| On or above 11.0.0 but below 12.0.0  | At least 11.0.1 but below 12.0.0              | No                        |
| On or above 11.0.0 but below 12.0.0  | 12.0.0 or above                               | Yes                       |
| On or above 12.0.0                   | Latest supported Atmosphere & Hekate revision | No                        |

If at least one of the versions you are updating towards also updates the gamecard firmware, you will not be able to downgrade below that version without making the gamecard slot unusable until you update.

Atmosphere (and Hekate) come bundled with patches that automatically disable the gamecard slot if it is detected that the system has an older gamecard firmware that would be updated. If you boot into RCM on each boot (for example by using AutoRCM), this means that the gamecard slot will not be updated and you can downgrade below that version. If this happens, you will not be able to use the gamecard slot as long as you are on the newer firmware.

Otherwise, you can safely update your system firmware through the system settings.

!!!warning "Note about autoRCM"
    If you have autoRCM enabled and you're updating your system while in stock firmware, **updating will disable autoRCM** and you will need to enter RCM manually to boot custom firmware again.
    To prevent autoRCM from being disabled, boot CFW on sysMMC and update through settings from there, as booting without AutoRCM <ins>will burn any preserved fuses</ins>.

### About emuMMC

sysMMC and emuMMC have separate system firmwares and need to be updated separately.

If you keep your emuMMC offline, you will have to use a gamecard to update your system firmware, synchronize it with another Nintendo Switch or dump an updated firmware from your sysMMC.

## Updating emuMMC by dumping an updated firmware from your sysMMC

!!!warning "Do you have an eMMC backup yet?"
    Please do not start this guide without doing a RAW GPP and a BOOT 0/1 eMMC backup!

    You can learn how to make one [here](../user_guide/sysnand/making_essential_backups.md).

!!!danger "Downgrading"
    This guide is made for updating your emuMMC. It is **not** for downgrading. Downgrading at all, sysMMC or emuMMC, is not recommended and not worth it. Downgrading is also very dangerous and can lead to serious complications even when performed correctly.

### What you will need

!!!tip ""
    - The latest release of <a href="https://github.com/suchmememanyskill/TegraExplorer/releases" target="_blank">TegraExplorer</a>
    - The latest release of <a href="https://github.com/Atmosphere-NX/Atmosphere/releases" target="_blank">Atmosphere</a>

### Preparing your SD card

1. Insert your microSD card into your computer.
2. Download `TegraExplorer.bin` and place it somewhere on your PC (A good idea is to put it where you keep all your switch payloads like Hekate).
3. Update Atmosphere and Hekate by using the above guides.
4. If you haven't already, update the sysMMC to the latest firmware.

### Dumping your sysMMC firmware

1. Make sure your sysMMC is up to date. If your sysMMC is not up-to-date, update it through the System Settings.
2. Inject `TegraExplorer.bin` using TegraRCMGUI (Like you would with Hekate).
3. Using the joystick and the A buttons, select `Dump Firmware`.
4. Wait about 1-2 minutes for the tool to dump your firmware.
5. When the tool finishes, press any button.
6. Select `Reboot to atmosphere/reboot_payload.bin`.

### Updating your emuMMC with Daybreak

1. In Hekate go to `Launch -> Atmosphere FSS0 Emu`.
2. Once booted, hold `R` while launching a game to boot into the homebrew menu.
3. Find Daybreak in the homebrew menu and launch it.
4. Tap on `Install` and navigate to `tegraexplorer/Firmware/<latest firmware number>`.
5. Tap on `Continue` and then `Preserve settings`.
    - If you see the message `Warning: exFAT firmware is missing or corrupt`, you likely don't have the exFAT drivers installed on your sysMMC. Just press continue if this is the case.
6. If it is available choose `Install (FAT32 + exFAT)`, otherwise `Install (FAT32)` and then `Continue`.
7. Wait until Daybreak completes installing the dumped firmware.
8. Once it completes, it will ask if you want to reboot. Tap `Reboot`.
9. Once rebooted, launch into emuMMC and verify your system works. You can verify your system has been properly updated in `Settings -> System`.
