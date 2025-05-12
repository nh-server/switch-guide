# sys-botbase

sys-botbase is an advanced [sysmodule](index#terminologies) that allows users to interact with their Switch remotely, to "remote control" their Switch. This remote control allows users to create automated tasks, simulate button presses, simulate touchscreen input and read/write to the memory of the Switch while in-game.

### Common use cases for sys-botbase:
- Use ACNHPokerCore in combination with ACNH
- Controlling a game remotely
- Automation

## Installation requirements:
- An archive manager like [7-Zip](https://www.7-zip.org/)
- The latest release of [sys-botbase](https://github.com/olliz0r/sys-botbase/releases) (the `sys-botbase(version).zip` file)

## Installation instructions:
1. Boot into hekate and go to `Tools` > `USB Tools` > `SD Card`, then plug your Switch into your PC via USB.
1. Your microSD card should now be accessible on your PC, open it.
1. Extract the `.zip` file to a location on your computer.
    - If your archive manager allows for it, you can also simply open the `.zip` file directly.
1. Copy the *contents* of each (extracted) `.zip` file to the root of your microSD card.
    - **Optional:** You can verify if you've installed sys-botbase correctly, you should have a folder called `430000000000000B` (sys-botbase) in `sd:/atmosphere/contents`.
1. Boot into CFW.

## Troubleshooting

### My Switch crashes on boot after I installed sys-botbase!:

**Cause:** While it's almost impossible for this to happen, if your Switch crashes with Error `2001-0123 (0xf601)` and Title ID `430000000000000B`, you're using a version of sys-botbase that's incompatible with your Atmosphère version.

- **Note:** sys-botbase will almost never crash unless something is fundamentally wrong with the contents of your microSD card. If it does crash and need an update, an updated release will be mentioned here.

### sys-botbase isn't working!:

Assuming you've followed the installation instructions successfully, this is probably due to the archive bit being set on one or more folders/files on your microSD card. This is usually the result of copying files to a microSD card via a Mac. If you are experiencing this issue, try running the archive bit fixer utility via hekate for all files.

This can be done by booting into hekate and going to `Tools` > `Arch bit • RCM Touch • Pkg1/2` > `Fix Archive Bit`.
