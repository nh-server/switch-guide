### **Information**

ldn_mitm is a [sysmodule](index.md#terminologies) that allows you to route the local wireless ad-hoc network traffic of the Switch via the network your Switch is connected to, essentially allowing "LAN" functionality between consoles and emulators using ldn_mitm. The official Github repository for ldn_mitm can be found [here](https://github.com/spacemeowx2/ldn_mitm).

#### Common use cases for ldn_mitm:
- It can be used in combination with [lan-play](http://lan-play.com/install-switch)
- It can be used in combination with [XLink Kai](https://www.teamxlink.co.uk/wiki/Nintendo_Switch_XLink_Kai_Setup)
- It can be used in combination with real Switch consoles and emulators

-----

#### Installation requirements:
- An archive manager like [7-Zip](https://www.7-zip.org/)
- The latest release of [ldn_mitm](https://github.com/DefenderOfHyrule/ldn_mitm/releases) (the `ldn_mitm.zip` file)

#### Installation instructions:
1. Boot into Hekate and go to `Tools` > `USB Tools` > `SD Card`, then plug your Switch into your PC via USB.
2. Your microSD card should now be accessible on your PC, open it.
3. Extract the `.zip` file to a location on your computer.
    - If your archive manager allows for it, you can also simply open the `.zip` file directly.
4. Copy the *contents* of the (extracted) `.zip` file to the root of your microSD card.
    - **Optional:** You can verify if you've installed ldn_mitm correctly, you should have a folder called `4200000000000010` (ldn_mitm) in `sd:/atmosphere/contents` and the `ldnmitm_config.nro` file in `sd:/switch/ldnmitm_config`.
5. Boot into CFW.

-----

### **Basic usage instructions**

You can enable/disable ldn_mitm by opening the Homebrew menu, opening ldn_mitm's config app and pressing `Y` to toggle ldn_mitm.

![ldn_mitm](img/ldn_mitm.jpg)

-----

### **Troubleshooting**
#### **My Switch crashes on boot after I installed ldn_mitm!:**

**Cause:** If your Switch crashes with Error `std::abort (0xFFE)` and Title ID `4200000000000010`, you're using a version of ldn_mitm that's incompatible with your Atmosphere version. The expected Atmosphere version is mentioned on each release page of an ldn_mitm release.

&nbsp;

#### **ldn_mitm isn't working!:**

Assuming you've followed the installation structions successfully, this is probably due to the archive bit being set on one or more folders/files on your microSD card. This is usually the result of copying files to a microSD card via a Mac. If you are experiencing this issue, try running the archive bit fixer utility via Hekate for all files.

This can be done by booting into Hekate and going to `Tools` > `Arch bit • RCM Touch • Pkg1/2` > `Fix Archive Bit`.
