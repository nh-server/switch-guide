

### What firmware versions are currently hackable?

!!! tip ""
    Currently two hardware revisions of the Switch exist. Any Switch bought or manufactured before the middle of 2018 has a bootrom bug that allows us to run code regardless of the firmware version on the Switch. When Nintendo updates the system, however, CFW will usually need an update to account for it. 
    This bug cannot be fixed by Nintendo once the console leaves the factory, unless the console is sent in for repairs. This means that all current and future firmwares will be able to launch CFW through this exploit on the old hardware revision.

    Any console purchased after approximately August 2018 is **likely** to be patched. This includes the latest units on shelves, referred to as 'red box' or 'Mariko'.
    Mariko is hardware patched, but may come on a vulnerable firmware.
    Currently the only way to know if your Switch is hackable is by trying to send the payload in RCM.
    Even with this exploit fixed, many Switches on 8.0.1 and below will be hackable to some degree in the future (see "Should I update my Firmware?" for much more detailed information).
    The serial number on the back of the box can possibly tell you which consoles are patched and which aren't. 
    See <a href="https://gbatemp.net/threads/switch-informations-by-serial-number.481215/" target="_blank">here</a> for an up to date list.


### How do I use the exploit? How can I boot into RCM?

!!!tip ""
    To launch CFW through the exploit, the Switch needs to be in "Recovery Mode"(RCM). 
    The easiest way to enter RCM is by grounding pin 10 in the right joycon rail and holding VOL+ on boot. 
    Several methods and designs to do this exist, see [our guide](https://nh-server.github.io/switch-guide/user_guide/emummc/entering_rcm) for more information. 
    Once the Switch is in RCM it needs to be connected to either a computer, phone or dongle to send the exploit and the payload.

    This procedure needs to happen every time the Switch boots from a completely "off" state, otherwise the Switch will boot into the stock firmware.


### What makes a good jig good? Can I use a paperclip?

!!!tip ""
    Most people prefer to use 3d-printed jigs to enter RCM. 
    These jigs are made in a way that they slide into the right joycon rail and have a piece of connected wire that then bridges pin 10 and one of the grounded pins on the Switch. 
    A lot of different designs for these jigs exist, but it is important to understand, that these jigs can damage the Switch if they are made in a bad way.

    Since the wire in the jig is supposed to touch the pads inside the Switch's joycon rail, it is important to use wire that is thin, not rigid and bent/not pointy. 
    Paperclips make for potentially dangerous jigs, as they are made out of a hard material, are rigid and pointy and can easily scratch off the pads inside the Switch. 
    A good jig uses 32Gauge(0.2mm diameter) wire and is bent in a way that the end of the wire does not scratch the pads. <a href="https://switchjigs.com/" target="_blank">Switch Jigs</a> sells jigs we consider "good". 
    You can also download and 3d-print your own jig and use the pictures on the website to guide you on how to bend the wire correctly.


### Is there an easier way to enter RCM?

!!!tip ""
    To enter RCM more comfortably a solution called "AutoRCM" exists. 
    Once set up, this method will always boot the Switch into RCM, even without a jig or holding any buttons. 
    This works by "bricking" the Switch in a controlled manner. 
    The Switch detects that something is wrong and boots into RCM to get repaired. 
    The big downside of this method is, that it is impossible to boot the Switch without a computer, phone or dongle, as it will never boot into stock firmware by itself, and that it requires an SD card with the proper CFW files on it at all times. In addition, if the battery of the Switch is completely drained, the Switch will need to charge to at least 10% in Hekate before launching Atmosphere, otherwise the Switch will refuse to boot due to the low battery. Charging in RCM is not recommended as this is very slow. AutoRCM can be reversed, but it is advised to keep a working NAND and BOOT0/1 backup before using it.

    Many Android-phones are able to send the exploit to the Switch, making them a perfect portable way to launch CFW. Different designs for portable dongles exist, ranging from Raspberry Pi Zero and Arduino projects to internal dongles, that work completely autonomous. The latter should only be done by advanced users, as it requires soldering onto the Switch mainboard itself.


### Should I update my Firmware?

!!!tip ""

    If your Switch is one of the new hardware revisions that patched the exploit in RCM and you are on firmware 7.0.1 or lower, you should not update if you want to have CFW in the forseeable future.

    If your Switch is one of the older hardware revisions and you don't mind having to use jigs/hardmods/AutoRCM and sending the exploit via computer, phone or dongle everytime you want to launch into CFW then it is completely safe to update. 
    If you want the chance to maybe, one day, not have to use a external device, then it is recommended to stay on a FW as low as possible. 
    Beware that this means that you potentially need to wait for a very long time (months to years) for this to happen, if ever. Private exploits to launch CFW over the Browser are known to exist for firmwares up to 7.0.1.

    Downgrading on the Switch is possible, but it requires using AutoRCM and a custom bootloader payload to bypass the Switch's several hardware anti-downgrade mechanisms. 
    This will not work on an unpatched system, and is practically useless for most users.
    On every boot the Switch firmware checks how many e-fuses have been burned and how many e-fuses the Switch expects to be burned. 
    Major updates to the Switch, or updates in which a large vulnerability has been patched, irreversibly burn one of the Switch's 64 "e-fuses". 
    *If the Switch ever detects that more e-fuses have been burned than expected (meaning a downgrade happened), it will refuse to boot. Replacing e-fuses is not an option.*
    You can find more information about fuses <a href="https://switchbrew.org/wiki/Fuses#Anti-downgrade" target="_blank">here</a>
    Atmosphere 0.9.4 works fine with the new 9.0.1 firmware update on unpatched units. The situation for patched and new units is this:
    **"Old"** *Patched Switch (HAC-001): Do NOT update past 7.0.1. Units on 7.0.1 and below will eventually get CFW. Patched units that have upgraded to 8.0.0 or 8.0.1 will likely get homebrew.*
    **"New"** *Switch (HAC-001-01): Do NOT update past 8.0.1. Units on 8.0.1 and below will likely get homebrew. Units on 8.1.0 and higher are not expected to be hacked and can be updated.*
    **Switch Lite** *(HDH-001): Do NOT update past 8.0.1. Units on 8.0.1 and below will likely get homebrew. Units on 8.1.0 and higher are not expected to be hacked and can be updated.*


    A method to update without burning e-fuses exists, but, like downgrading, it forces you to use AutoRCM and sending the exploit via USB every time, as booting into the stock firmware even once would instantly burn the e-fuse. Note that other anti-downgrade mechanisms exist, making it for example impossible to boot game carts on a firmware below 4.1/9.0.0 if the Switch has ever launched a game on firmware 4.1+/9.0.0+. This can only be worked around by completely disabling the game cart slot while on 4.1/9.0.0 or greater, which is similarly impractical for most users.


### Is it safe to use homebrew? Will I get banned?

!!!tip ""
    The Switch comes with a lot of telemetry, and has been called a "telemetry monster" by several prominent developers. 
    As long as the Switch is connected to the internet, Nintendo gets a report about a lot of different actions and states and has the option to log or act on them. 
    Even if the Switch is offline and connects to the internet at a later point, Nintendo still recieves information about what happened while the Switch was disconnected.
 
    To disable some of this telemetry, it is advised to disable the sending of error reports in the System Settings of the Switch. 
    Additionally if you live in the EU you can set the "do not share" option on <a href="https://accounts.nintendo.com/setting" target="_blank">Nintendo's website</a> to prevent your Switch from sending a lot of telemetry, although the effectiveness of this is questionable.
 
    Nintendo still receives a lot of information, even with those options disabled. 
    We also cannot know if Nintendo decides to look for something in the logs and ban people in retrospect. 
    They have also shown to expand their telemetry options with every other firmware update.
 
    !!!tip "Currently all bans have been for very obvious and intrusive actions, specifically:"
        - Developers using their unique Switch data to poke and reverse-engineer Nintendos Server responses
        - People pirating games and using them online
        - People changing their profile pictures to custom pictures
        - People using savegame editors to unlock content that is not available yet and using it online (Splatoon 2)
        - People cheating online in general (Modifying Cart stats in MK8)
        - People installing homebrew NSP files, which Nintendo can pick up on with their telemetry


    Atmosphere stops some, but ***not all*** of Nintendo's telemetry, and prevents crash reports from being sent. This means Nintendo can't tell if anything, including homebrew or modded games crashed, and Atmosphere dumps the crash log to the SD card to help homebrew developers. However, Nintendo still receives information about what is being played, and general system report information.

    Atmosphere is not a silver bullet, and this does not mean that Nintendo won't decide to ban people for harmless homebrew in the future. If you are scared to get banned then don't use homebrew for now. Atmosphere now supports emuMMC (emuNAND): a copy of Switch system software, run entirely from the SD card instead. 
    This erases ban risks due to the fact that emuMMC is run in a quarantined, offline state, not touching the internal memory. You are still able to boot into original firmware to play online.

    For patched units reliant on deja-vu, sysNAND will always have to be on a firmware below 4.1. For switches from 5.0 to 7.0.1 deja-vu isn't quite out yet but is coming soon. (Also please note that firmwares 8.0.0+ will never work with deja-vu) You can use an updated emuMMC dedicated to online/clean play, while your sysNAND is used offline for custom firmware.
	
    We do not recommend the use of ReiNX or SX OS for many reasons, primary among them that they use lots of assets from Atmosphere and offer no real benefit that Atmosphere does not offer anyway.
    We also do not recommend Kosmos, as its large amount of extras on top of regular Atmosphere make it difficult to troubleshoot strange issues.
    All of these alternative CFWs also tend to use non-conventional setups which can cause issues that make it difficult to troubleshoot, which is another reason we prefer using Atmosphere.
    Additionally, it is advised to use 90DNS which blocks connections to any Nintendo servers. If you use an emuNAND for CFW and keep your sysNAND clean for playing online, you should use 90DNS on your emuNAND.
    *Note: Keeping your emuNAND "dirty" and your sysNAND "clean" pertains primarily to those using the RCM exploit. Users employing Nereba or Caffeine will do the opposite.*

### What formats can homebrew come in

!!!tip ""

    Homebrew can come in two different formats, namely in `nro` files and in `bin` files.

    - `nro` Files are placed in the `switch` folder on your SD card and can be launched using the Homebrew menu.
    - `bin` This format is used as a payload and is to be pushed in RCM using a payload launcher like tegrarcmgui on windows and fusee-interfacee-tk on other operating systems.
   
**Homebrew risks**
*Be careful with launching downloaded homebrew! If you don't know the source, it's best not to launch it.*
*Homebrew can potentially damage your system! Atmosphere provides protections against common bricking methods, but these are not guaranteed to always work!*


### What microSD card/format should I use?

!!!tip ""
    microSD cards that are 32GB or smaller can be used for homebrew, but are not recommended as these will not permit you to have a full NAND dump and/or an emuMMC on them.

    The recommended microSD card size is 128GB. This will permit you to make a full NAND dump as well as having enough space to run an emuNAND in the future while also having adequate space for homebrew.

    The recommended filesystem format is FAT32. While the Switch supports exFAT through an additional update from Nintendo, this filesystem is prone to corruption and as a result is not advisable.



### Fake microSD cards

!!!tip ""
    Do not buy microSD cards from sites like eBay. 
    These microSD cards are often fake and do not have the advertised amount of storage and will result in data corruption if used. 
    Amazon has had some problems with fake SD cards, so we recommend buying them at a physical store. Even on trustworthy sites, *always, always check reviews on a product before buying!!*

    
    If you suspect your microSD card is fake or damaged, see the instructions <a href="https://3ds.eiphax.tech/sd.html" target="_blank">here</a> to verify the integrity of your SD card.

### Amazon/eBay/Aliexpress jigs

!!!tip ""
    Although some Switch jigs are for sale on these websites and others like them, we have *no way of verifying that they are appropriate or safe for use with the Switch* and as such we do not recommend buying from these websites. The only seller we trust due to their reputation and our overall experience with the many jigs they have sent out is <a href="https://switchjigs.com/" target="_blank">Switch Jigs</a>.



### My homebrew is not showing up on the menu

!!!tip ""
    This is an issue primarily affecting macOS users, but may occur on other devices as well. If you are able to launch the homebrew menu, but you are not seeing some or any of your homebrew, you will need to unset the archive bit with Hekate.

    1. Send the Hekate payload to your Switch by following these instructions: [here](https://nh-server.github.io/switch-guide/user_guide/emummc/sending_payload/)
    2. Click on `Tools` on the top menu bar
    3. In the bottom left corner click on `Archive bit * AutoRCM`
    4. Click on `Unset Archive bit` - this might take a while
    5. Press `Close` in the top right corner
    6. Press `Home` in the top menu bar to get back from where you started
    7. Follow the instructions at the Launching CFW page [here](https://nh-server.github.io/switch-guide/user_guide/emummc/launching_cfw/) to launch Atmosphere.
