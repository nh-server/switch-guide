# Payload and bootloader folder placement

To get ready for formatting/partitioning your SD card, we will need to prepare your SD card with the required files. 

### What you need:
- The latest release of <a href="https://github.com/CTCaer/Hekate/releases/" target="_blank">Hekate</a> (Download the `hekate_ctcaer_(version).zip` release of hekate)
- Your micro SD card


### Instructions:

1. Extract the hekate zip to a location on your computer.
2. Insert your SD card into your computer.
3. Inside of the extracted folder you will find `bootloader` and `hekate_ctcaer_(version).bin`
4. Copy the `bootloader` folder and `hekate_ctcaer_(version).bin` payload to the root of your SD card.
5. Rename the `hekate_ctcaer_(version).bin` payload to `payload.bin`
6. Insert your SD card back into your switch, then turn on your switch.
7. You should now be loaded into hekate. If not, consult the message below.
	
!!! warning
    If your switch does not load into hekate or shows a `NO SD`/`No Payload` screen when turning on your switch, ensure that you inserted your SD card and renamed the hekate payload to exactly `payload.bin`


[Continue to Partitioning the SD :material-arrow-right:](../all/partitioning_sd.md){ .md-button .md-button--primary }
