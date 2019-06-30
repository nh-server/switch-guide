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

/* Missing other os's */

#### [Continue to SD Preperations <i class="fa fa-arrow-circle-right fa-lg"></i>](sd_preparation.md)