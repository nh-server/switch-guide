# Alternate boot setups

If you need to troubleshoot something, or need to try a different boot setup, read on.

!!! danger "Do I need any of these?"
	Unless you are experiencing problems with booting or Atmosphere itself, it's strongly recommended to use the main guide instead of these. They are provided for the sake of completeness.

&nbsp;

### Chainloading Fusee-primary from Hekate


!!! tip "What you need"
    - The latest release of [Hekate](https://github.com/CTCaer/hekate/releases/)
    - The latest release of [Atmosphere](https://github.com/Atmosphere-NX/Atmosphere/releases) 
        - You will need to download both the release zip and the `fusee-primary.bin`
    - <a href="../../files/extras/hekate_ipl.ini" download>hekate_ipl.ini</a>


### Instructions

!!! tip ""
    1. Insert your Switch's SD card into your PC
    2. Copy *the contents of* the Atmosphere `.zip` file to the root of your SD card
    3. Copy `fusee-primary.bin` to the atmosphere folder on your SD card
    4. Copy the `bootloader` folder from the Hekate `.zip` file to the root of your SD card
    5. Copy `hekate_ipl.ini` to the `bootloader` folder on your SD card
    6. Setup is complete, now you can boot CFW by injecting the hekate_ctcaer `.bin` file from the Hekate zip


&nbsp;

### Using Fusee-primary without Hekate


!!! tip "What you need"
    - The latest release of [Atmosphere](https://github.com/Atmosphere-NX/Atmosphere/releases) 
        - You will need to download both the release zip and the `fusee-primary.bin`
    
### Instructions

!!! tip ""
    1. Insert your Switch's SD card into your PC
    2. Copy *the contents of* the Atmosphere `.zip` file to the root of your SD card
    3. Setup is complete, now you can boot CFW by injecting `fusee-primary.bin`
