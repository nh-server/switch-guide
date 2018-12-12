# Making a NAND Backup

A NAND backup is crucial. They can be used to restore the device to a working state in case of emergencies, and will be required in order to migrate to an EmuNAND setup in the near future.

Once the backup is finished, **keep it somewhere safe.** The best backup is the one you have but never need, and the worst backup is the one you need but never made. To save space, it's recommended to compress the end-result with a `.zip` file or something similar.

It's highly recommended that you use an SD card that is formatted to exFAT, and has at least 32 gigabytes of space free, so the end-result doesn't need to be stitched together or take multiple reboots. This will still work on smaller cards, but it's not ideal.

## Instructions

!!! tip ""
    1. Enter RCM and upload the Hekate payload
    2. Use the volume buttons to navigate to `Tools` -> `Backup`, then press the power button
    3. Navigate to `Backup eMMC BOOT0/1`, then press the power button
    - This may take a few minutes
    4. Press any key to continue, then navigate to `Backup eMMC RAW GPP` and press the power button
        - This will take a long time
        - On FAT32 SD cards or cards that have less than 32 gigabytes of space available, the NAND will be split into 4 gigabyte chunks
            - Hekate will stop producing these chunks when it runs out of space. When this happens, do the following:
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

## Combining NAND backup parts

If your NAND was dumped in one cohesive part, you may skip to the next section.

### What you need

!!! tip ""
    - [NAND joiner scripts](https://github.com/CTCaer/hekate/releases/) (joiner_scripts_for_windows_linux_macos.zip)

### Instructions

!!! tip ""
    1. Copy *the contents of* the joiner scripts `.zip` file to the `backup` -> (numbers) folder on your PC
    2. Run the script matching the amount of NAND chunks you have, and the operating system you are on
    - Users with 15 chunks should run the `join_15_1GBparts` file, and users with 30 chunks should run the `join_30_2GBparts` file
    - This will take a few minutes
    3. Once you have the complete `rawnand.bin`, you may delete the original chunks
    - Don't forget to keep your backup in a safe location

&nbsp;

#### [Continue to Launching CFW](launching_cfw.md)