# MissionControl & sys-con

MissionControl and sys-con are both [sysmodules](index#terminologies) that allo you to use normally-unsupported controllers as if they were natively supported. MissionControl lets you pair controllers over bluetooth and sys-con allows you to use them via USB. A list of supported controllers, along with additional usage instructions and configuration, can be found on [MissionControl's](https://github.com/ndeadly/MissionControl) and [sys-con's](https://github.com/o0Zz/sys-con) github pages.

## MissionControl requirements

* An archive manager like [7-Zip](https://www.7-zip.org/)
* The latest release of [MissionControl](https://github.com/ndeadly/MissionControl/releases) (the `MissionControl-(version)-master-(hash).zip` file)

## MissionControl Installation

1. Boot into hekate and go to `Tools` > `USB Tools` > `SD Card`, then plug your Switch into your PC via USB.
1. Your microSD card should now be accessible on your PC, open it.
1. Extract the `.zip` file to a location on your computer.
    * If your archive manager allows for it, you can also simply open the `.zip` file directly.
1. Copy the *contents* of the (extracted) `.zip` file to the root of your microSD card.
    * **Optional:** You can verify if you've installed MissionControl correctly, you should have a folder called `010000000000BD00` (MissionControl) in `sd:/atmosphere/contents`.
1. Boot into CFW.

## MissionControl Troubleshooting

### My Switch crashes on boot after I installed MissionControl!

**Cause:** If your Switch crashes with Error `std::abort (0xFFE)` and Title ID `010000000000BD00`, you're using a version of MissionControl that's incompatible with your Atmosphère version. The expected Atmosphère version is mentioned on each release page of a MissionControl release.

**Fix:** If there is a release that supports your Atmosphère version, you can update MissionControl by following the [installation instructions](#MissionControl-Installation) above. If this isn't the case, you can remove the `sd:/atmosphere/contents/010000000000BD00` folder (MissionControl) to allow the switch to boot.

### MissionControl isn't doing anything!

Since MissionControl is background process, it makes no visual changes when running. You can confirm it's running by connecting a left Joycon or Pro Controller to the console wirelessly and pressing the `DPAD_UP` and `MINUS` buttons together. If MissionControl is active, this will act like the capture button and take a screenshot. If not, it's likely it is not running. 

#### MissionControl is not running!

**Cause:** Assuming you've followed the installation instructions successfully, this is probably due to the archive bit being set on one or more folders/files on your microSD card. This is usually the result of copying files to a microSD card via a Mac.

**Fix:** Try running the archive bit fixer utility by booting hekate and going to `Tools` > `Arch bit • RCM Touch • Pkg1/2` > `Fix Archive Bit`.

#### MissionControl is running, but my controller isn't working!

**Cause:** The controller you are using could be unsupported. 

**Fix:** See if your controller is on [the list of supported controllers.](https://github.com/ndeadly/MissionControl#supported-controllers).

### The issue I'm having isn't on here!

Read through MissionControls [frequently asked questions](https://github.com/ndeadly/MissionControl#frequently-asked-questions) page.


## sys-con requirements

* An archive manager like [7-Zip](https://www.7-zip.org/)
* The latest release of [sys-con](https://github.com/o0Zz/sys-con/releases) (the `sys-con-(version).zip` file)

## sys-con Installation

1. Boot into hekate and go to `Tools` > `USB Tools` > `SD Card`, then plug your Switch into your PC via USB.
1. Your microSD card should now be accessible on your PC, open it.
1. Extract the `.zip` file to a location on your computer.
    * If your archive manager allows for it, you can also simply open the `.zip` file directly.
1. Copy the *contents* of the (extracted) `.zip` file to the root of your microSD card.
    * **Optional:** You can verify if you've installed sys-con correctly, you should have a folder called `690000000000000D` (sys-con) in `sd:/atmosphere/contents`.
1. Boot into CFW.

## sys-con Troubleshooting

### My Switch crashes on boot after I installed sys-con!

**Cause:** If your Switch crashes with Error `std::abort (0xFFE)` and Title ID `690000000000000D`, you're using a version of sys-con that's incompatible with your Atmosphère version. The expected Atmosphère version is mentioned on each release page of a sys-con release.

**Fix:** If there is a release that supports your Atmosphère version, you can update sys-con by following the [installation instructions](#sys-con-Installation) above. If this isn't the case, you can remove the `sd:/atmosphere/contents/690000000000000D` folder (sys-con) to allow the switch to boot.

### sys-con is not running!

**Cause:** Assuming you've followed the installation instructions successfully, this is probably due to the archive bit being set on one or more folders/files on your microSD card. This is usually the result of copying files to a microSD card via a Mac.

**Fix:** Try running the archive bit fixer utility by booting hekate and going to `Tools` > `Arch bit • RCM Touch • Pkg1/2` > `Fix Archive Bit`.

### sys-con is running, but my controller isn't working!

**Cause:** The controller you are using could be unsupported. 

**Fix:** See if your controller is on [the list of supported controllers](https://github.com/o0Zz/sys-con/blob/master/doc/TestedControllers.md).

### The issue I'm having isn't on here!

Read through sys-cons [troubleshooting](https://github.com/o0Zz/sys-con/blob/master/doc/Troubleshooting.md) page.