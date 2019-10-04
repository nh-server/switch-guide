# Glossary of common hacking terms

This section is dedicated to explaining a number of common terms that are used when hacking the Nintendo Switch as well as linking a number of resources that can help fledgling developers or curious users.

## Hacking terms

The following list is in alphabetical order.

- 90DNS: DNS that blocks system updates on the Nintendo Switch.
- Atmosphere: The CFW developed by the Atmosphere-NX organization on GitHub and the one used in this guide.
- AutoRCM: A method that corrupts parts of your boot0 and boot1, causing the Switch to boot into RCM automatically. Using this requires an additional peripheral (such as a computer, phone, dongle or trinket) to be able to boot your Switch.
- boot0 and boot1: Two partitions of the Switch NAND.
- CFW: Short for custom firmware. Custom firmware permits you to completely modify how your Switch works.
- Deja Vu: An unreleased exploit chain for the Nintendo Switch. The completely unpatched version of this chain will grant access to TrustZone, which effectively means being able to enter CFW. The TrustZone part of this exploit was patched in firmware version 5.0.0 and up, but normal homebrew access can still be gained up to firmware version 6.0.1.
- DNS: [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System). Basically it's the internets addressbook. If you visit a website, the DNS is what tells you what server the site is hosted on.
- Dongle: Device you can plug in the charging port of your Switch to automatically send a payload if your Switch is in RCM.
- Encryption keys: Keys used to encrypt files from the Nintendo Switch. These can be dumped by following the guide [here](/extras/backup_keys/).
  - BIS keys: Specific keys used to decrypt the NAND.
- fusee-gelee/ShofEL2: Two names for two different implementations of the same exploit. This is an exploit that grants full bootrom access to the Nintendo Switch from the Tegra X1s RCM and permits us to run CFW. This exploit requires an external device and a tiny hardware modification. fusee-gelee is developed by an ex-ReSwitched developer, while ShofEL2 is developed by the failoverfl0w team. This guide uses fusee-gelee.
- hactool: Software used to decrypt Nintendo Switch files like .XCI and .NSP files.
- Hekate: A bootloader for the Nintendo Switch. The current guide uses this in combination with essential files from Atmosphere to boot CFW.
- Homebrew: Unsigned code that can be ran on the Nintendo Switch. Examples of homebrew include save editors, emulators and ports of PC games, but can also include completely original games. To run this code, you need to have an exploit.
- Homebrew launcher: Software developed by the Switchbrew team that lets you run other Homebrew.
- Jig: Refers to a piece of hardware that you can put in the Joycon rail to enter RCM.
- KIP: Short for Kernel Initial Process. These files can be loaded in when the Switch boots in CFW and provide additional functionality.
- NAND: The internal filesystem used by the Switch. Contains boot0 and boot1, as well as PRODINFO and various other partitions.
- nx-hbloader: Intermediary program used to load the Homebrew Launcher from CFW developed by Switchbrew. Comes bundled with Atmosphere.
- PRODINFO: A partition on the NAND of your Switch. This along with boot0 and boot1 is the only part of your Switch that can render it unbootable if improperly modified. Atmosphere backs up this partition on booting and it is included in your NAND backup.
- ReSwitched: A hacking team that is one of the main developers for Atmosphere.
- RCM: A shorthand for "Recovery Mode". When talking about hacking the Switch, this commonly refers to the Recovery Mode in the Tegra X1 chip that is included in the Nintendo Switch. Can be entered by holding down the Tegra X1 home button. This button is not the same as the home button on the joycons. Ways of pressing this button can be found [here](/user_guide/entering_rcm/).
- TegraRCMGUI/fusee-interface-gtk: Software used to run the fusee-gelee exploit on the Switch.
- Tegra X1: A chip made by Nvidia that is used in the Nintendo Switch.
- Trinket: A tiny chip that is soldered on the Switch motherboard to automatically send a payload if it is in RCM.
- TrustZone: The highest security level on the Switch.
- XCI/NSP: Format used to dump games to. XCI is used for gamecard dumps, while NSP is for dumping digital titles.

## Resources

The resources below are for users and developers interested in developing Homebrew or for those that want to get a more technical understanding of the various concepts.

- The [ReSwitched FAQ](https://reswitched.team/faq/) lists a general overview of how the Switch works.
- [Switchbrew](https://switchbrew.org) is a wiki detailing the inner workings of the Nintendo Switch's firmware.
- [libNX documentation](https://switchbrew.github.io/libnx/index.html). LibNX is the library used to develop Homebrew on the Nintendo Switch.
