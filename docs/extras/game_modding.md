# Game modding with LayeredFS

LayeredFS, a tool built in to Atmosphere, allows you to replace game files with your own.

&nbsp;

### Instructions


Make a folder on your microSD card inside the `atmosphere/contents/` folder, with the name being the title ID of the game you would like to replace the files of. For example if you want to do mods of The Legend of Zelda: Tears of the Kingdom the path would be `atmosphere/contents/0100F2C0115B6000/`. Switch game title IDs can be found on [http://nswdb.com/](http://nswdb.com/).

If you have a pre-made mod, the files would be placed here. Some mods may include the title ID or the entire path for you to merge. Mods will usually come as a compressed format and need to be extracted to use. There may be a folder named `romfs` or `exefs` or both that need to go in the title ID folder. If the mod doesn't come with these you'll need to find the file path of the assets it is replacing yourself and set up the folder structure on your SD card inside of the title ID folder.  Then, once the title is launched while in Atmosphere, your mod should load. By default, holding the L button while launching a game will disable any mod.

!!! warning "Atmosphere 0.9.4 and below"
    **Note: On Atmosphère 0.9.4 and below `contents` is called `titles`**

![ExampleGameMod](../extras/img/game_modding.jpg)
