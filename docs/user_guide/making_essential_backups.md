# Making Essential Backups

!!! danger "Important"
    It is critical to make these backups. Do not skip these steps.

&nbsp;

## Making a NAND Backup

!!! danger "Important"
	A NAND backup is crucial. They can be used to restore the device to a working state in case of emergencies, and will be required in order to migrate to an EmuNAND setup in the near future.

	Once the backup is finished, **keep it somewhere safe.** The best backup is the one you have but never need, and the worst backup is the one you need but never made. To save space, it's recommended to compress the end-result with a `.zip` file or something similar.

	It's highly recommended that you use an SD card that is formatted to FAT32 and has at least 32 gigabytes of space free. This will still work on smaller cards, but it's not ideal.

&nbsp;

### Instructions

!!! tip ""
    1. Enter RCM and upload the Hekate payload
    2. Use the volume buttons to navigate to `Tools` -> `Backup`, then press the power button
    3. Navigate to `Backup eMMC BOOT0/1`, then press the power button
    - This may take a few minutes
    4. Press any key to continue, then navigate to `Backup eMMC RAW GPP` and press the power button
        - This will take a long time
        - On FAT32 SD cards or cards that have less than 32 gigabytes of space available, the NAND will be split into 1 or 2 gigabyte parts.
            - Hekate will stop producing these parts when it runs out of space. When this happens, do the following:
            - Power off your system
            - Insert your SD card into your PC
            - Move all files from the `backup` folder on your SD card to a safe location on your PC
            - Insert your SD card into your Switch
            - Enter RCM again, upload Hekate again, and continue by navigating to `Tools` -> `Backup` -> `Backup eMMC RAW GPP` again
            - Repeat the process until the NAND is completely dumped
    5. Press any key to continue, then power off your Switch
    6. Insert your SD card into your PC
    7. Copy the `backup` folder on your SD card to a safe location on your PC

&nbsp;

## Getting your Console's Unique Keys

!!! danger "Important"
    These keys are critical to have. They can be used as another way to restore your device to a working state when paired with other tools, if your NAND backup is not enough.

&nbsp;

### Instructions

!!! tip ""
    1. Enter RCM and upload the Hekate payload
    2. Use the volume buttons to navigate to `Launch` -> `Payloads...`, then press the power button
    3. Navigate to `Lockpick_RCM.bin`, then press the power button
    4. If Lockpick_RCM prompts you to `Reboot to Sept`, press power or either volume button to do so. A "sept by Atmosphere" logo will then display, followed by Lockpick_RCM starting again. If it does *not* prompt you, continue on to step 5.
    5. Lockpick_RCM should now inform you that your keys have been saved to `/switch/prod.keys` on the SD card.
    6. Press the power button to power off your Switch
    7. Insert your SD card into your PC
    8. Copy `prod.keys` from the `switch` folder on your SD card to a safe location on your PC (it is suggested to copy it to the same place that you copied your NAND backup to).

&nbsp;

#### [Continue to Launching CFW <i class="fa fa-arrow-circle-right fa-lg"></i>](launching_cfw.md)
