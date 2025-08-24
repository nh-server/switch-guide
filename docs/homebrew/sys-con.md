# sys-con

sys-con is a [sysmodule](index#terminologies) that allows you to use normally-unsupported controllers as if they were natively supported, like PS3, PS4, PS5 and Xbox One S/X controllers via USB. The full supported feature and controller list can be found on the following Github repository [here](https://github.com/o0Zz/sys-con) including usage instructions and configuration options.

## Installation requirements:
- An archive manager like [7-Zip](https://www.7-zip.org/)
- The latest release of [sys-con](https://github.com/o0Zz/sys-con/releases) (the `sys-con-(version).zip` file)

## Installation instructions:
1. Boot into hekate and go to `Tools` > `USB Tools` > `SD Card`, then plug your Switch into your PC via USB.
1. Your microSD card should now be accessible on your PC, open it.
1. Extract the `.zip` file to a location on your computer.
    - If your archive manager allows for it, you can also simply open the `.zip` file directly.
1. Copy the *contents* of the (extracted) `.zip` file to the root of your microSD card.
    - **Optional:** You can verify if you've installed sys-con correctly, you should have a folder called `690000000000000D` (sys-con) in `sd:/atmosphere/contents`.
1. Boot into CFW.

## Troubleshooting

### My Switch crashes on boot after I installed sys-con!:

**Cause:** While it's almost impossible for this to happen, if your Switch crashes with Error code `2162-0002 (0x4a2)` and Title ID `690000000000000D`, you're using a version of sys-con that's incompatible with your Switch firmware version. The expected firmware version is mentioned on each release page of a sys-con release.

- **Note:** sys-con hasn't needed an update for years as of the moment of writing this. If it does need an update, an updated release will be mentioned here.

### sys-con isn't working!:

Assuming you've followed the installation instructions successfully, this is probably due to the archive bit being set on one or more folders/files on your microSD card. This is usually the result of copying files to a microSD card via a Mac. If you are experiencing this issue, try running the archive bit fixer utility via hekate for all files.

This can be done by booting into hekate and going to `Tools` > `Arch bit • RCM Touch • Pkg1/2` > `Fix Archive Bit`.
