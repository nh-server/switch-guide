# Games cheats

## EdiZon

For cheats management, [EdiZon](https://github.com/WerWolv/EdiZon) and/or [EdiZon-SE](https://github.com/tomvita/EdiZon-SE) (up to date and offers more features) are recommended. They offer support for Atmosphère's cheat engine, providing an easy way to download new cheats, as well as toggle them on or off.

## Installation requirements:
- An archive manager like [7-Zip](https://www.7-zip.org/)
- The latest release of [EdiZon](https://github.com/WerWolv/EdiZon/releases) (the `EdiZon.nro` file) or [EdiZon-SE](https://github.com/tomvita/EdiZon-SE/releases) (the `EdiZon.zip` file)

::: tip

**EdiZon overlay**

EdiZon also offers a Tesla-Menu overlay, however, the official EdiZon overlay is no longer maintained and will result in Atmosphère crashing when trying to use the EdiZon overlay on firmware version 16.0.0+.

The maintained EdiZon overlay can be found [here](https://github.com/proferabg/EdiZon-Overlay/releases).

:::

::::: tabs

:::: tab default Installation instructions (EdiZon):

1. Boot into hekate and go to `Tools` > `USB Tools` > `SD Card`, then plug your Switch into your PC via USB.
1. Your microSD card should now be accessible on your PC, open it.
1. Put the `EdiZon.nro` in `sd:/switch`.
1. Boot into CFW.

::::

:::: tab Installation instructions (EdiZon-SE):

1. Boot into hekate and go to `Tools` > `USB Tools` > `SD Card`, then plug your Switch into your PC via USB.
1. Your microSD card should now be accessible on your PC, open it.
1. Extract the `.zip` file to a location on your computer.
    - If your archive manager allows for it, you can also simply open the `.zip` file directly.
1. Copy the *contents* of the (extracted) `.zip` file to the root of your microSD card.
    - **Optional:** You can verify if you've installed EdiZon-SE correctly, you should have a folder called `054e4f4558454000` (EdiZon-SE) in `sd:/atmosphere/contents` and an `EdiZon.nro` file in `sd:/switch/EdiZon`.
1. Boot into CFW.

::::

:::::

## Usage instructions

Atmosphère looks for cheats to load in the `contents` sub-folder of the `atmosphere` folder. The template it looks for is `sd:/atmosphere/contents/<title_id>/cheats/<build_id>.txt`.
You need to create the `<title_id>` folder and sub-folders manually:

- `title_id` being the title or program of a game. This is game specific and can be found on EdiZon's cheat menu (TID and BID, see the bottom of this page for a sample), [switchbrew](https://switchbrew.org/wiki/Title_list/Games) and [nswdb](https://nswdb.com/).
    - **Note:** Title ID means the same thing as Program ID.
- `build_id` being the version of a game. This is game specific and can be found on EdiZon's cheat menu (BID, see the bottom of this page for a sample) Cheats can be version specific so make sure the cheats you are using are compatible with your game version.

**Note:** On Atmosphère 0.9.4 and below `contents` is called `titles`.

Once the title is launched while in Atmosphère, your cheats should be applied.

## Preventing cheats from being enabled by default

To prevent cheats from being enabled by default, you can change your Atmosphère configuration by following the steps below.

1. Copy `system_settings.ini` from `sd:/atmosphere/config_templates` to `sd:/atmosphere/config` if it's not already there.
1. Open the `system_settings.ini` file with a text editor and edit the line `; dmnt_cheats_enabled_by_default = u8!0x1` to `dmnt_cheats_enabled_by_default = u8!0x0`.
    - Make sure you remove the space and the semicolon "`; `" in front of `dmnt_cheats_enabled_by_default`.

By default, holding the L button while launching a game will disable any game modification.

Here the Title ID of the game (TID) is `0100646009FBE000` and the Build ID of the game (BID) is `0B9A75586BC1A6C6`. Cheats are loaded from `sd:/atmosphere/contents/0100646009FBE000/cheats/0B9A75586BC1A6C6.txt` in this example.

![ExampleGameCheat](../extras/img/game_cheating.jpg)

## Additional information:

For more in-depth details about Atmosphère's cheat engine, you can refer to [this page](https://github.com/Atmosphere-NX/Atmosphere/blob/master/docs/features/cheats.md).

## Troubleshooting

### EdiZon isn't showing up when I open the Homebrew menu!:

Assuming you've followed the installation instructions successfully, this is probably due to the archive bit being set on one or more folders/files on your microSD card. This is usually the result of copying files to a microSD card via a Mac. If you are experiencing this issue, try running the archive bit fixer utility via hekate for all files.

This can be done by booting into hekate and going to `Tools` > `Arch bit • RCM Touch • Pkg1/2` > `Fix Archive Bit`.
