# Partitioning the sd card 

-----

### What you need (Windows)

!!!tip ""
	- [Minitool partition wizard (or any other good partition manager)](https://www.partitionwizard.com/download/v11/pw11-free.exe)

-----

### Instructions (Windows)

!!!warning "This will delete everything on your sd card"
	Doing this will delete all your data from your sd card, be warned!

1. Install and open minitool partition wizard
2. Go into the `Disk & Partition Management`
3. Find your sd card and delete the volume on it
4. Create a new partition with the following settings:
	- Partition size: 29.2GB
	- File System: Unformatted
	- Drag the partition the the end of the sd card
	- You should see the following 
	- !!!tip ""
		![Create_emummc_partition](img/emummc_create_minitool.png)
5. Create another new partition with the following settings:
	- Ignore the warning about windows not being able to recognize the partition
	- Partition the rest of your sd card's size
	- File system: FAT32
6. Your sd card now should look something like this:
	- !!!tip ""
		![SD_format](img/emummc_final_minitool.png)
7. Apply the changes to your sd card by hitting apply in the top left

&nbsp;

-----
## Linux instructions

!!! danger "SD card identification"
	Make 100% sure you get your microSD card during the following steps. If you are not careful, you can end up wiping your entire linux filesystem. We are not responsible for data loss when doing this.

### What you will need (Linux)

- The latest version of `gparted`
- The latest version of `fdisk`
- Access to an administrator account.

### Instructions (Linux)

1. Open a terminal.
2. Run `sudo fdisk -l`. Enter your password if prompted. This will print information about all drives connected to your computer. Use the information about the file size to identify your microSD card. Specifically, take note of the line after `Disk `. This will look something like `/dev/xxx`, where `xxx` will differ on your system (can also be longer than three characters). It does NOT end with a number.
3. Run `sudo gparted <value>`. Enter your password if prompted. Replace `<value>` in the command with the information you obtained from step 2.
4. You will see a list of partitions on your SD card. Go to `Device` -> `Create partition table`. Select `msdos` as the partition type and select Apply. This will remove all existing partitions from your SD card.
5. Go to `Partition` -> `New`. Set `New size (MiB)` to `29828`. Also, make sure that `Free space following (MiB)` is `0`. Set `File system` to `cleared`. Finally, set the `Label` to `emuMMC`. Leave everything else untouched and select `Add`.
6. At the top part of gparted, you will now see a large gray space to the left. Right click this space, select `New`.
7. Set `File system` to `fat32`. Set `Label` to `sMicroSD`. Leave everything else untouched and select `Add`.
8. Click the check icon in the toolbar.
9. Wait for all operations to succeed. This might take a while.
10. Close `gparted`.

!!!info "NOFAT error in Hekate"
	This error might occur after preforming the previous steps if you are using a 64GB microSD. The reason for this is that Hekate expects the FAT32 partition to use a 32k cluster size, which gparted only does by default if the partition is larger than 32GB, which it likely won't be on a 64GB microSD. **This will wipe all the data on your FAT32 partition**.

	To fix this, follow these instructions:

	1. Open a terminal.
	2. Run `sudo fdisk -l`. Enter your password if prompted. This will print information about all drives connected to your computer. Use this information to determine the FAT32 partition on your SD card. Specifically, note the value under the column `Device`. This will look something like `/dev/xxx`, where `xxx` will differ on your system (can also be longer than three characters). It always ends with a number!
	3. Run `sudo mkdosfs <value> -s 64 -F 32 -I`. Enter your password if prompted. Replace `<value>` with the value you got from step 2.
	4. Wait until it finishes running. Depending on the size of your microSD card, this might take a while.
	5. Run `sudo fatlabel <value> "sMicroSD"`. Enter your password if prompted. Replace `<value>` with the value you got from step 2.

/* Missing other os's */

#### [Continue to SD Preperations <i class="fa fa-arrow-circle-right fa-lg"></i>](sd_preparation.md)