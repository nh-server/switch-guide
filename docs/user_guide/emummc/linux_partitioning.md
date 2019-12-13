## Manual Linux Preperations

!!! danger "SD card identification"
	Make 100% sure you get your microSD card during the following steps. If you are not careful, you can end up wiping your entire linux filesystem. We are not responsible for data loss when doing this.

!!! warning "Who is this for?"
	This section is for the people who do not want to let a tool automatically modify their sd, and want to do it manually for more control over what gets created. This section helps with that

!!! tip "What you will need (Linux)"
    - The latest version of `gparted`
    - The latest version of `fdisk`
	- Access to an administrator account.

### Manual instructions (Linux)

1. Open a terminal.
2. Run `sudo fdisk -l`. Enter your password if prompted. This will print information about all drives connected to your computer. Use the information about the file size to identify your microSD card. Specifically, take note of the line after `Disk `. This will look something like `/dev/xxx`, where `xxx` will differ on your system (can also be longer than three characters). It does NOT end with a number.
3. Run `sudo gparted <value>`. Enter your password if prompted. Replace `<value>` in the command with the information you obtained from step 2.
4. You will see a list of partitions on your SD card. Go to `Device` -> `Create partition table`. Select `msdos` as the partition type and select Apply. This will remove all existing partitions from your SD card.
5. Go to `Partition` -> `New`. And do the following:
    - Set `Free space following (MiB)` to `30000`. 
    - Set `Free space preceding (MiB)` to `1`. 
    - Set `File system` to `fat32`. 
    - Set the `Label` to `sMicroSD`. 
    - Leave everything else untouched and select `Add`.

		![gparted](../img/gparted.png)

1. At the top part of gparted, you will now see a large gray space to the right. Right click this space, select `New`.
2. Set `File system` to `linux-swap`. Set `Label` to `emuMMC`. Leave everything else untouched and select `Add`.
3. Click the check icon in the toolbar.
4.  Wait for all operations to succeed. This might take a while.
5.  Close `gparted`.

!!!info "NOFAT error in Hekate"
	This error might occur after preforming the previous steps if you are using a 64GB microSD. The reason for this is that Hekate expects the FAT32 partition to use a 32k cluster size, which gparted only does by default if the partition is larger than 32GB, which it likely won't be on a 64GB microSD. **This will wipe all the data on your FAT32 partition**.

	To fix this, follow these instructions:

	1. Open a terminal.
	2. Run `sudo fdisk -l`. Enter your password if prompted. This will print information about all drives connected to your computer. Use this information to determine the FAT32 partition on your SD card. Specifically, note the value under the column `Device`. This will look something like `/dev/xxx`, where `xxx` will differ on your system (can also be longer than three characters). It always ends with a number!
	3. Run `sudo mkdosfs <value> -s 64 -F 32 -I`. Enter your password if prompted. Replace `<value>` with the value you got from step 2.
	4. Wait until it finishes running. Depending on the size of your microSD card, this might take a while.
	5. Run `sudo fatlabel <value> "sMicroSD"`. Enter your password if prompted. Replace `<value>` with the value you got from step 2.

&nbsp;

#### [Continue to SD Preparations <i class="fa fa-arrow-circle-right fa-lg"></i>](sd_preparation.md)