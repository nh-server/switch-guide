# FAQ

### What firmware versions are currently hackable?

!!! tip ""
    Currently two hardware revisions of the Switch exist. Any Switch bought before July 2018 has a bootrom bug that allows us to launch CFW regardless of the firmware version on the switch. This bug cannot be fixed by Nintendo once the console leaves the factory, not even if the console is sent in for repairs. This means that all current and future firmwares will be able to launch CFW through this exploit on the old hardware revision.

    The first claims of a new hardware revision of the Switch that fixes the exploit needed to launch cfw have been made in July 2018. Currently the only way to know if your Switch is hackable is by trying to send the payload in RCM. Even with this exploit fixed, any Switch on firmware 4.1 and below will be able to launch CFW through other means in the far future. The serial number on the back of the box can possibly tell you which consoles are patched and which aren't. See [GBA Thread](https://gbatemp.net/threads/switch-informations-by-serial-number.481215/) for an up to date list.

### How do I use the exploit? How can I boot into RCM?

!!! tip ""
    To launch CFW through the exploit, the Switch needs to be in "Recovery Mode"(RCM). The easiest way to enter RCM is by grounding pin 10 in the right joycon rail and holding VOL+ on boot. Several methods and designs to do this exist, see [this page of the guide](../user_guide/entering_rcm) for more information. Once the Switch is in RCM it needs to be connected to either a computer, phone or dongle to send the exploit and the payload.

    This procedure needs to happen every time the Switch boots from a completely "off" state, otherwise the Switch will boot into the stock firmware.

### What makes a good jig good? Can I use a paperclip?

!!! tip ""
    Most people prefer to use 3d-printed jigs to enter RCM. These jigs are made in a way that they slide into the right joycon rail and have a piece of connected wire that then bridges pin 10 and one of the grounded pins on the Switch. A lot of different designs for these jigs exist, but it is important to understand, that these jigs can damage the Switch if they are made in a bad way.

    Since the wire in the jig is supposed to touch the pads inside the Switch's joycon rail, it is important to use wire that is thin, not rigid and bent/not pointy. Paperclips make for potentially dangerous jigs, as they are made out of a hard material, are rigid and pointy and can easily scratch off the pads inside the Switch. A good jig uses 32Gauge(0.2mm diameter) wire and is bent in a way that the end of the wire does not scratch the pads. [Switch Jigs](https://switchjigs.com/) sells jigs we consider "good". You can also download and 3d-print your own jig and use the pictures on the website to guide you on how to bend the wire correctly.

### Is there a way to launch CFW more comfortably?

!!! tip ""
    To enter RCM more comfortably a solution called "AutoRCM" exists. Once set up, this method will always boot the Switch into RCM, even without a jig or holding any buttons. This works by "bricking" the Switch in a controlled manner. The Switch detects that something is wrong and boots into RCM to get repaired. The big downside of this method is, that it is impossible to boot the Switch without a computer, phone or dongle, as it will never boot into stock firmware by itself, and that it requires an SD card with the proper CFW files on it at all times. In addition, if the battery of the Switch is completely drained, the Switch will need to charge to at least 10% in Hekate before launching Atmosphere, otherwise the Switch will refuse to boot due to the low battery. Charging in RCM is not recommended as this is very slow. "AutoRCM" can be uninstalled, but it is advised to keep a working NAND and BOOT0/1 backup before using it.

    Many Android-phones are able to send the exploit to the Switch, making them a perfect portable way to launch CFW. Different designs for portable dongles exist, ranging from Raspberry Pi Zero and Arduino projects to internal dongles, that work completely autonomous. The latter should only be done by advanced users, as it requires soldering onto the Switch mainboard itself.

### Will we ever be able to launch CFW directly, without any external tools required?

!!! tip ""
    In the future there will possibly be methods to launch CFW without needing a computer, phone or dongle to send the exploit and payload from. However, the higher the firmware of the Switch the less likely these exploits become. Currently there is little hope for such an exploit on firmware 5.0+. Even on lower firmwares, this exploit will most likely not directly boot you into CFW from a "off" state, but require you to launch an exploit on the original firmware to then reboot into CFW.

    The chances of a persistent, untethered coldboot solution (like on the 3DS and Wii-U) technically exist on firmwares below 3.0.2.

### I'm on FW XY, should I stay or update?

!!! tip ""
    If your Switch is one of the new hardware revisions that patched the exploit in RCM and you are on firmware 4.1.0 or lower, you should not update if you want to have CFW in the forseeable future.

    If your Switch is one of the older hardware revisions and you don't mind having to use jigs/hardmods/AutoRCM and sending the exploit via computer, phone or dongle everytime you want to launch into CFW then it is completely safe to update. If you want the chance to maybe, one day, not have to use a external device, then it is recommended to stay on a FW as low as possible. Beware that this means that you potentially need to wait for a very long time (months to years) for this to happen, if ever. Private exploits to launch CFW are known to exist for firmwares up to 4.1.

    Downgrading on the Switch is possible, but it requires using AutoRCM and a custom bootloader payload to bypass the Switch's several hardware anti-downgrade mechanisms. This will not work on an unpatched system, and is practically useless for most users.
    On every boot the Switch firmware checks how many e-fuses have been burned and how many e-fuses the Switch expects to be burned. Major updates to the Switch, or updates in which a large vulnerability has been patched, irreversibly burn one of the Switch's 32 "e-fuses". If the Switch ever detects that more e-fuses have been burned than expected (meaning a downgrade happened), it will refuse to boot. Replacing e-fuses is not an option.

    A method to update without burning e-fuses exists, but, like downgrading, it forces you to use AutoRCM and sending the exploit via USB every time, as booting into the stock firmware even once would instantly burn the e-fuse. Note that other anti-downgrade mechanisms exist, making it for example impossible to boot game carts on a firmware below 4.1 if the Switch has ever launched a game on firmware 4.1+. This can only be worked around by completely disabling the game cart slot while on 4.1 or greater, which is similarly impractical for most users.

### Is it safe to use homebrew or will I get banned?

!!! tip ""
    The Switch comes with a lot of telemetry, and has been called a "telemetry monster" by several prominent developers. As long as the Switch is connected to the internet, Nintendo gets a report about a lot of different actions and states and has the option to log or act on them. Even if the Switch is offline and connects to the internet at a later point, Nintendo still recieves information about what happened while the Switch was disconnected.
 
    To disable some of this telemetry, it is advised to disable the sending of error reports in the System Settings of the Switch. Additionally if you live in the EU you can set the "do not share" option on [Nintendos Accounts Settings Page](https://accounts.nintendo.com/setting) to prevent your Switch from sending a lot of telemetry.
 
    Nintendo still recieves a lot of information, even with those options disabled. We also cannot know if Nintendo decides to look for something in the logs and ban people in retrospect. They have also shown to expand their telemetry options with every other firmware update.
 
    Currently all bans have been for very obvious and intrusive actions, specifically:

    - Developers using their unique Switch data to poke and reverse-engineer Nintendos Server responses
    - People pirating games and using them online
    - People changing their profile pictures to custom pictures
    - People using savegame editors to unlock content that is not available yet and using it online (Splatoon 2)
    - People cheating online in general (Modifying Cart stats in MK8)
    - People installing homebrew NSP files, which Nintendo can pick up on with their telemetry
    - People using unsafe custom firmware (such as ReiNX) that dangerously changes the system version string, creating a massive red flag for Nintendo (Atmosphere safely changes the version string and does not have this problem).

    Atmosphere stops some, but ***not all*** of Nintendo's telemetry, and prevents crash reports from being sent. This means Nintendo can't tell if anything, including homebrew or modded games crashed, and Atmosphere dumps the crash log to the SD card to help homebrew developers. However, Nintendo still receives information about what is being played, and general system report information.

    Atmosphere is not a silver bullet, and this does not mean that Nintendo won't decide to ban people for harmless homebrew in the future. If you are scared to get banned then don't use homebrew for now. In a future Atmosphere update, we will be able to create a dual-boot (EmuNAND) solution, that allows us to have a clean, online firmware and a seperate offline firmware for homebrew related software. Unbanning on the Switch will be a lot harder than previous Nintendo systems, if not impossible.

!!! danger "SX OS"
    *Team Xecuter's "EmuNAND" is not a proper (or safe) EmuNAND, and Nintendo can pick up on it with their telemetry.*

### What formats can homebrew come in? Where do I place my downloaded homebrew?

!!! tip ""
    Homebrew can come in two different formats, namely in `nro` files and in `kip` files.

    `nro` files are placed in the `switch` folder on your SD card and can be launched using the Homebrew menu.

    `kip` files are placed in the `atmosphere/kips` folder on your SD card and provide additional services.

!!! danger "Homebrew risks"
    *Be careful with launching downloaded homebrew! If you don't know the source, it's best not to launch it.*

    *Homebrew can potentially damage your system! Atmosphere provides protections against common bricking methods, but these are not guaranteed to always work!*

### What size microSD card should I buy? What format should my microSD card be in?

!!! tip ""
    The minimal required microSD card size is 64GB. This will permit you to make a NAND dump as well as have an emuNAND in the future.

    The recommended microSD card size is 128GB. This will permit you to make a NAND dump as well as having enough space to run an emuNAND in the future while also having adequate space for homebrew.

    The recommended filesystem format is FAT32. While the Switch supports exFAT through an additional update from Nintendo, this filesystem is prone to corruption and as a result is not advisable.


!!! danger "Fake microSD cards"
    Do not buy microSD cards from sites like eBay. These microSD cards are often fake and do not have the advertised amount of storage and will result in data corruption if used. Consumer grade microSD cards do not exist in capacities over 512GB and any that advertise that they are 512GB or larger are fake.
    
    If you suspect your microSD card is fake or damaged, see the instructions [here](https://3ds.filthycasuals.tech/sderrors.html) to verify the integrity of your SD card.

### My homebrew is not showing up on the homebrew menu and I'm sure the files are in their correct place!

!!! tip ""
    This is an issue primarily affecting macOS users, but may occur on other devices as well. If you are able to launch the homebrew menu, but you are not seeing some or any of your homebrew, you will need to unset the archive bit with Hekate.

    1. [Send the Hekate payload to your Switch](user_guide/sending_payload/).
    2. Navigate to `Tools` with the volume buttons and press power to confirm.
    3. Navigate to `Fix archive bit (except Nintendo folder)` with the volume buttons and press power to confirm.
    4. Wait a bit, this may take a while.
    5. Press any button to continue.
    6. Navigate to `Fix archive bit (Nintendo folder)` with the volume buttons and press power to confirm.
    7. Wait a bit, this may take a while.
    8. Press any button to continue.
    9. Navigate to `Back...` with the volume buttons and press power to confirm.
    10. Follow the instructions at [Launching CFW](user_guide/launching_cfw/) to launch Atmosphere.