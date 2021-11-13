# Games cheats

For cheats management, [EdiZon](https://github.com/WerWolv/EdiZon/releases) is recommended. It has support for Atmosphere's cheat engine, providing an easy way to download new cheats, as well as toggle them on or off.

&nbsp;

### Instructions

!!! tip ""
    Atmosphere looks for cheats to load in the `contents` sub-folder of the `atmosphere` folder. The template it looks for is `sd:/atmosphere/contents/<title_id>/cheats/<build_id>.txt`.
    You need to create the `<title_id>` folder and sub-folders manually:

    - `title_id` being the title or program of a game. This is game specific.
    - `build_id` being the version of a game. Cheats can be version specific so make sure the cheats you are using are compatible with your version.

    **Note: On Atmosphere 0.9.4 and below `contents` is called `titles`**. 

    Switch game title IDs and build IDs can be found using the cheat menu of EdiZon (TID and BID, see below for a sample). Once the title is launched while in Atmosphere, your cheats should be applied.

!!! tip "Preventing cheats from being active"
    To prevent cheats from being enabled by default, you can change your atmosphere configuration:

    - Copy `system_settings.ini` from `/atmosphere/config_templates` to `/atmosphere/config` if it is not already there.
    - Edit the line `; dmnt_cheats_enabled_by_default = u8!0x1` to `dmnt_cheats_enabled_by_default = u8!0x0`.
        Make sure to remove the space and the semicolon " ;"

    By default, holding the L button while launching a game will disable any cheat.
    
For more in-depth details about Atmosphere's cheat engine, you can refer to [this page](https://github.com/Atmosphere-NX/Atmosphere/blob/master/docs/features/cheats.md).
    
!!! tip "Cheats in EdiZon"
    Here the title ID of the game (TID) is "0100646009FBE000" and the build ID of the game (BID) is "0B9A75586BC1A6C6". Cheats are loaded from `sd:/atmosphere/contents/0100646009FBE000/cheats/0B9A75586BC1A6C6.txt`.
	![ExampleGameCheat](../extras/img/game_cheating.jpg)
