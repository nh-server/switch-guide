# Keeping your system up-to-date

This page documents how you can keep your system up-to-date.

After following our guide, your system will consist of three core elements that can be updated. Atmosphere, Hekate and your system firmware.

## Updating Atmosphere

When updating Atmosphere always make sure to _read the release notes_. They may list important changes and modifications to your system.

### Manual method: SD card

When a new version of Atmosphere releases, you can always update Atmosphere by following these steps:

1. Turn off your Nintendo Switch and plug your SD card in your computer.
2. Back up `reboot_payload.bin` from the `atmosphere` folder of your SD card to your computer.
3. Download the latest release of <a href="https://github.com/Atmosphere-NX/Atmosphere/releases" target="_blank">Atmosphere</a> (Download the `atmosphere-(version).zip` release of Atmosphere.)
4. Copy *the contents of* the Atmosphere `.zip` file to the root of your SD card.
    - If you are prompted to overwrite files, do so, _except_ for the `.ini` files.
    - If you do accidentally overwrite the `.ini` files, this is not an emergency but you will lose any changes you made to Atmospheres settings.
5. Place your copy of `reboot_payload.bin` in the `atmosphere` folder. If you are prompted to overwrite files, do so.
6. Put your SD card back in your Switch and launch CFW.

### Automated method: atmosphere-updater

It is also possible to update Atmosphere and Hekate through a homebrew utility called `atmosphere-updater`. This utility should be installed if you followed our guide.

If you did not install this utility, you can download it from <a href="https://github.com/ITotalJustice/atmosphere-updater/releases" target="_blank">here</a> or from the homebrew appstore.

Updating your Atmosphere and Hekate installation using atmosphere-updater:

!! tip "" - Always update Atmosphere and Hekate together when using atmosphere-updater! Otherwise your `reboot_payload.bin` will not correctly be preserved.

1. Open the Homebrew menu
2. Open `Atmosphere-Updater`.
3. Select `Update Hekate (for hekate / kosmos users)`.
4. Press `A` when prompted.
5. When asked to update AMS and hekate, press `A`.
6. When asked to overwrite Atmosphere ini files, press `B`.
7. Wait for it to complete.
8. Select `Reboot (reboot to payload)`.
9. Press `A`.
10. You can now select your launch option in Hekate.

## Updating Hekate

When updating Hekate always make sure to _read the release notes_. They may list important changes and modifications to your system.

### Manual method: SD card

When a new version of Hekate releases, you can always update by following these steps:

1. Turn off your Nintendo Switch and plug your SD card in your computer.
2. Download the latest version of <a href="https://github.com/CTCaer/Hekate/releases/" target="_blank">Hekate</a> (Download the `hekate_ctcaer_(version).zip` release of hekate).
3. Copy Hekate's `.bin` file from the Hekate `.zip` file to the `bootloader` folder on your SD card.
4. Rename Hekate's `.bin` file to `update.bin` (if you already have an `update.bin`, remove the old one.)
5. Put your SD card back in your Switch and launch CFW.

### Automated method: atmosphere-updater

It is also possible to update Atmosphere and Hekate through a homebrew utility called `atmosphere-updater`. This utility should be installed if you followed our guide. 

If you did not install this utility, you can download it from <a href="https://github.com/ITotalJustice/atmosphere-updater/releases" target="_blank">here</a> or from the homebrew appstore.

Updating your Atmosphere and Hekate installation using atmosphere-updater:

!! tip "" - Always update Atmosphere and Hekate together when using atmosphere-updater! Otherwise your `reboot_payload.bin` will not correctly be preserved.

1. Open the Homebrew menu
2. Open `Atmosphere-Updater`.
3. Select `Update Hekate (for hekate / kosmos users)`.
4. Press `A` when prompted.
5. When asked to update AMS and hekate, press `A`.
6. When asked to overwrite Atmosphere ini files, press `B`.
7. Wait for it to complete.
8. Select `Reboot (reboot to payload)`.
9. Press `A`.
10. You can now select your launch option in Hekate.

## Updating your firmware

Always check _before_ updating your system firmware if the latest version of Atmosphere _as well_ as the latest version of Hekate support the firmware version you are updating towards.

Currently the latest version supported by Atmosphere and Hekate are: **9.0.1**.

In addition, updating to or past some firmwares update the gamecard firmware. Reference the table below for information about these.

| Updating from                        | Updating towards                              | Updates gamecard firmware |
| ------------------------------------ | --------------------------------------------- | ------------------------- |
| Below 4.0.0                          | Below 4.0.0                                   | No                        |
| Below 4.0.0                          | 4.0.0 or above                                | Yes                       |
| On or above 4.0.0, but below 9.0.0   | At least 4.1.0 but below 9.0.0                | No                        |
| On or above 4.0.0, but below 9.0.0   | 9.0.0 or above                                | Yes                       |
| 9.0.0 or above                       | Latest support Atmosphere and Hekate revision | No                        |

If at least one of the versions you are updating towards also updates the gamecard firmware, you will not be able to downgrade below that version without making the gamecard slot unusable until you update.

Atmosphere (and Hekate) come bundled with patches that automatically disable the gamecard slot if it is detected that the system has an older gamecard firmware that would be updated. If you boot into RCM on each boot (for example by using AutoRCM), this means that the gamecard slot will not be updated and you can downgrade below that version. If this happens, you will not be able to use the gamecard slot as long as you are on the newer firmware.

Otherwise, you can safely update your system firmware through the system settings.

### About emuMMC

sysMMC and emuMMC have separate system firmwares and need to be updated separately.

If you keep your emuMMC offline, you will have to use a gamecard to update your system firmware, synchronize it with another Nintendo Switch or dump an updated firmware from your sysMMC.

The last option invovles running homebrew on your sysMMC.
