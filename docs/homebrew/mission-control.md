### **Information**

MissionControl is a [sysmodule](index.md#terminologies) that allows you to pair normally-unsupported controllers as if they were natively supported, like PS3, PS4, PS5 and Xbox One S/X controllers via Bluetooth. The full supported controller list can be found on the official Github repository [here](https://github.com/ndeadly/MissionControl) including pairing instructions for the supported controllers.

-----

#### Installation requirements:
- An archive manager like [7-Zip](https://www.7-zip.org/)
- The latest release of [MissionControl](https://github.com/ndeadly/MissionControl/releases) (the `MissionControl-(version)-master.zip` file)

#### Installation instructions:
1. Boot into Hekate and go to `Tools` > `USB Tools` > `SD Card`, then plug your Switch into your PC via USB.
2. Your microSD card should now be accessible on your PC, open it.
3. Extract the `.zip` file to a location on your computer.
    - If your archive manager allows for it, you can also simply open the `.zip` file directly.
4. Copy the *contents* of the (extracted) `.zip` file to the root of your microSD card.
    - **Optional:** You can verify if you've installed MissionControl correctly, you should have a folder called `010000000000BD00` (MissionControl) in `sd:/atmosphere/contents`.
5. Boot into CFW.

-----

### **Troubleshooting**
#### **My Switch crashes on boot after I installed MissionControl!:**

**Cause:** If your Switch crashes with Error `std::abort (0xFFE)` and Title ID `010000000000BD00`, you're using a version of MissionControl that's incompatible with your Atmosphere version. The expected Atmosphere version is mentioned on each release page of a MissionControl release.

&nbsp;

#### **MissionControl isn't working!:**

Assuming you've followed the installation structions successfully, this is probably due to the archive bit being set on one or more folders/files on your microSD card. This is usually the result of copying files to a microSD card via a Mac. If you are experiencing this issue, try running the archive bit fixer utility via Hekate for all files.

This can be done by booting into Hekate and going to `Tools` > `Arch bit • RCM Touch • Pkg1/2` > `Fix Archive Bit`.
