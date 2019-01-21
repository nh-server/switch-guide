# Theming

You can create unique styles and layouts for your Switch Home Menu.

&nbsp;

!!! danger "Console keys needed"
	You need your console keys dumped for this, check out the **<span style="text-decoration:underline">[Backup Keys](backup_keys.md)</span>** section if you haven't done so already.

!!! tip ""
	![ExampleSwitchTheme](../extras/img/switch_theming.jpg)

&nbsp;

### What you need 

!!! tip ""
	- The latest release of **[NXThemeInstaller and Switch Theme Injector v3.6](https://github.com/exelix11/SwitchThemeInjector/releases)**
		- You need both the `NXThemesInstaller.nro` and `ReleaseV3.6.zip`
	- Your `prod.keys` keyset file
	
&nbsp;

### Making a theme (Windows)

!!! tip ""
	1. Unzip `ReleaseV3.6.zip` to somewhere on your pc's drive.
	1. Open up the `SwitchThemes.exe` app. Navigate to `NXTheme Builder`.
	2. Select a Home menu part, A 720P image and a Layout patch. Click on `Build NXTheme` after selecting your home menu part, image and layout patch.
	3. Fill out the details in the window that pops up. After filling out this window and clicking ok, you will get asked where to save the NXTheme file. Save this file to a temporary folder.
	4. Repeat step 3 and 4 for every home menu part of the switch you want to modify.


### Making a theme (Other os's)

!!! tip "Converting to dds"
	You will need [GIMP](https://www.gimp.org/) installed, as well as the gimp-dds plugin. On Windows it can be downloaded from [here](https://code.google.com/archive/p/gimp-dds/downloads) and on Linux it should be installed via your package manager. Use your package manager to search for `gimp-dds`. After both of these are installed, you will be able to export your image in the .dds format.

	Alternatively, you can use [a dds convertion site](https://www.aconvert.com/image/png-to-dds/) to convert an png image to dds.

	Make sure all of your images you convert are 720P!


!!! tip "Making a theme"
	1. Navigate to **[Exelix's web injector](https://exelix11.github.io/SwitchThemeInjector/)** and navigate to `Nxtheme builder`
	2. Select a home menu part you want to edit. After this, select your dds you converted earlier
	3. Select a custom layout patch, a theme name and an author name, then click build NxTheme.
	4. Repeat step 3 and 4 for every home menu part of the switch you want to modify.
	
&nbsp;

### Installing a theme

!!! warning "System updates"
	Every time you do a system update, you need to re-dump your keys and re-dump your home menu. Do so by following the steps below:
	
	1. Delete any key files (prod.keys, keys.ini) files off your sd card.
	2. Re-do the **[Backup Keys](backup_keys.md)** guide
	3. Inside the NXThemes nro app, navigate to `Extract home menu`, press right and press +.

!!! tip "Community Themes"
	If you want to use community themes, for example from the **[r/NXTheme Subreddit](https://www.reddit.com/r/NXThemes/)**, you can put the nxthemes provided by the theme maker in the `themes` folder on your sd card, preferably in a subfolder, and follow the guide below to install a theme.

!!! tip ""
	1. Copy `NXThemesInstaller.nro` to the switch folder on your sd card.
	2. Copy your `prod.keys` to the switch folder on your sd card.
	3. Create a folder called `themes` on your sd card and copy your `.nxtheme` files to the themes folder on your sd card .
	4. Boot switch CFW, launch the homebrew launcher and launch `NXThemes Installer`.
	5. Navigate to `Extract home menu`, press right and press +. Your home menu files will be dumped now.
	6. Navigate to `Themes`, Your theme files should be listed here. You can install them one by one.
	7. Reboot your switch to see the changes.
	8. (Note: After following the guide above, you only have to put an nxtheme in the `themes` folder, and install it via the app, as you already dumped the required files)
	
&nbsp;

### Troubleshooting:

 

!!! tip ""
	If you get the error "Residentmenu is not found in lyt dir": 

	- You probably are using outdated or badly dumped keys. Delete all key files off the sd card and re-dump them with lockpick

	My switch crashes on boot after i installed a theme!:

	- You installed a bad theme. You can remove it by going into the `(CFW)/Titles/0100000000001000/romfs/lyt` and deleting every file in that folder


### Sharing your theme

!!! tip ""
	The `(name).nxtheme` files are completely legal to share! On the flipside, the .szs files are **illegal** to share, as they contain coprighted content. 






