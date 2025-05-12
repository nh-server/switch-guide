# Glossary of common hacking terms

This section is dedicated to explaining a number of common terms that are used when hacking the Nintendo Switch as well as linking a number of resources that can help fledgling developers or curious users.

## Hacking terms

The following list is in alphabetical order.

- **90DNS**: DNS that blocks system updates on the Nintendo Switch. This can be enabled by following the guide [here](blocking_nintendo).
- **[Atmosphère](https://github.com/Atmosphere-NX/Atmosphere)**: The CFW developed by the Atmosphère-NX organization on GitHub and the one used in this guide.
- **AutoRCM**: A method that corrupts parts of your boot0 and boot1, causing the Switch to boot into RCM automatically. Using this requires an additional peripheral (such as a computer, phone, dongle, or modchip) to be able to boot your Switch.
- **boot0 and boot1**: Two partitions of the Switch NAND.
- **bootROM**: An initial system loader whose primary purpose is to initialise a device's hardware and prepare it for use. It is also typically responsible for authenticating hardware and software necessary to start the device. A bootROM is a ROM, meaning that it is etched into the device and cannot be rewritten or upgraded without replacing the hardware entirely.
- **CFW**: Short for custom firmware. CFW is a collection of patches which partially or largely modify the functionality of the underlying OS. It is not used to refer to the usage of brand new operating systems entirely.
- **Deja Vu**: An unreleased exploit chain for the Nintendo Switch. The completely unpatched version of this chain will grant access to TrustZone, which effectively means being able to enter CFW. The TrustZone part of this exploit was patched in firmware version 5.0.0 and up, but normal homebrew access can still be gained up to firmware version 6.0.1.
- **DNS**: [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System). Basically, the internet's addressbook. If you visit a website, the DNS lookup is what tells you what server the site is hosted on.
- **Dongle**: Device you can plug in the USB-C of your Switch to automatically send a payload if your Switch is in RCM.
- **Encryption keys**: Keys used to encrypt data from the Nintendo Switch.
    - **BIS keys**: Built-in Storage keys. They are used to encrypt/decrypt the NAND's contents.
- **[fusee-gelee](https://github.com/Qyriad/fusee-launcher/blob/master/report/fusee_gelee.md)/[ShofEL2](https://github.com/fail0verflow/shofel2)**: Two names for two different implementations of the [same exploit](https://nvd.nist.gov/vuln/detail/CVE-2018-6242). This is an exploit that grants full bootROM access to the Nintendo Switch from the Tegra X1's RCM, and permitting us to run CFW. This exploit requires an external device or a tiny hardware modification. fusee-gelee is developed by an ex-ReSwitched developer, while ShofEL2 is developed by the failoverfl0w team. This guide uses fusee-gelee.
- **[hactool](https://github.com/SciresM/hactool)**: Software used to decrypt Nintendo Switch files like .XCI and .NSP files.
- **[hekate](https://github.com/CTCaer/hekate)**: A bootloader for the Nintendo Switch. The current guide uses this in combination with essential files from Atmosphère to boot CFW.
- **Homebrew**: Unsigned code that can be ran on the Nintendo Switch. Examples of homebrew include save editors, emulators and ports of PC games, but can also include completely original games. To run this code, you need to have an exploit.
- **Homebrew launcher**: Software developed by the Switchbrew team that lets you run other Homebrew.
- **Jig**: Refers to a piece of hardware that you can put in the Joycon rail to enter RCM.
- **KIP**: Short for Kernel Initial Process. These files can be loaded in when the Switch boots in CFW and provide additional functionality.
- **NAND**: Referred to as "Internal Storage" within Nintendo's consoles, this is the storage chip that the console saves the system software and internal settings to. The name refers to the type of logic gate employed, known as "not-AND" in this case.
- **nx-hbloader**: Intermediary program used to load the Homebrew Launcher from CFW developed by Switchbrew. Comes bundled with Atmosphere.
- **PRODINFO**: A partition on the NAND of your Switch. This along with boot0 and boot1 is the only part of your Switch that can render it unbootable if improperly modified. Atmosphère backs up this partition on booting and it is included in your NAND backup.
- **qLaunch**: This is similar to the HOME Menu on the Nintendo 3DS. It serves as a launcher for many applets such as System Settings, the main home menu (ResidentMenu), User/Friends Page (myPage), Lock Screen (Entrance), News menu (Notification), and so on.
- **ReSwitched**: A hacking team that is one of the main developers for Atmosphère.
- **RCM**: A shorthand for "Recovery Mode". When talking about hacking the Switch, this commonly refers to the Recovery Mode in the Tegra X1 chip that is included in the Nintendo Switch. Can be entered by holding down the Tegra X1 home button. This button is not the same as the home button on the joycons. Ways of pressing this button can be found [here](../user_guide/rcm/entering_rcm).
- **ROM**: "Read-only memory"; a section of data that cannot be modified once it is written. <br> Some forms of ROM can be rewritten under very specific scenarios, such as [EEPROM](https://en.wikipedia.org/wiki/EEPROM) (electronically-erasable/programmable ROM).
- **[TegraRCMGUI](https://github.com/eliboa/TegraRcmGUI/releases)/[fusee-interface-tk](https://github.com/nh-server/fusee-interfacee-tk/releases)**: Software used to run the fusee-gelee exploit on the Switch.
- **Stock**: "Stock" generally refers to the original factory operation or state of something. <br> For example, stock firmware means the original operation of Horizon, not using CFW.
- **Tegra X1**: [A chip made by Nvidia that is used in the Nintendo Switch.](https://en.wikipedia.org/wiki/Tegra#Tegra_X1)
- **Trinket**: A category of modchip that is soldered on the Switch motherboard to automatically send a payload if it is in RCM. They are not necessarily always the Trinket brand, as this refers to the category of modchip.
- **TrustZone**: The highest security level on the Switch.
- **XCI/NSP**: Format used to dump games to. XCI is used for gamecard dumps, while NSP is for dumping digital titles.

## Resources

The resources below are for users and developers interested in developing Homebrew or for those that want to get a more technical understanding of the various concepts.

- The [ReSwitched FAQ](https://reswitched.github.io/faq/) lists a general overview of how the Switch works.
- [Switchbrew](https://switchbrew.org) is a wiki detailing the inner workings of the Nintendo Switch's firmware.
- [libNX documentation](https://switchbrew.github.io/libnx/index.html). LibNX is the library used to develop Homebrew on the Nintendo Switch.
