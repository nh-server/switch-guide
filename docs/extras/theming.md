# Theming

You can create unique styles and layouts for your Switch Home Menu.

&nbsp;

!!! danger "Console keys needed!"
	You need your console keys dumped for this, check out the [Backup Keys](backup_keys.md) section if you haven't done so already.
	
!!! snippet "Windows only!"
	This guide requires windows apps to work.

!!! tip ""
	![ExampleSwitchTheme](../extras/img/switch_theming.jpg)

&nbsp;

### What you need 

!!! tip ""
	- The latest release of [NXThemeInstaller and Switch Theme Injector v3.4](https://github.com/exelix11/SwitchThemeInjector/releases)
		- You need both the `NXThemeInstaller.nro` and `ReleaseV3.4.zip`
	- Your `prod.keys` keyset file

### Dumping required files

!!! tip ""
	1. Unzip `ReleaseV3.5.zip` to somewhere on your pc's drive.
	2. Place `NXThemeInstaller.nro` in the switch folder on your sd card.
	3. Boot switch CFW, launch the homebrew launcher and launch `NXThemes`.
	4. Navigate to `Dump NCA` and press + to dump the home nca.
	5. Turn your switch off and put the sd card back into your pc.
	6. Launch the `SwitchThemes.exe` app from the `ReleaseV3.4.zip`, navigate to `extract NCA`. Select your keyset file from your switch (`prod.keys`) and the `themes/systemData` folder on your sd card.
	7. All .szs files required for theming are now located in `themes/systemData` on your sd card. Copy them to your pc if you want to make themes manually later on.

&nbsp;

### Making a theme

!!! tip "Note:"
	Only the lockscreen and homescreen can be individually themed on <=5.1. The settings, news and all software home menu parts will have the same background as the homescreen.

!!! tip ""
	1. Open up the `SwitchThemes.exe` app. Navigate to `NXTheme Builder`.
	2. Select a Home menu part, A 720P image and a Layout patch. Click on `Build NXTheme` after selecting your home menu part, image and layout patch.
	3. Fill out the details in the window that pops up. After filling out this window and clicking ok, you will get asked where to save the NXTheme file. Save this file in the `themes` folder on the sd card.
	4. Repeat these steps for every home menu part of the switch you want to modify.

&nbsp;
	
### Installing a theme

!!! tip ""
	1. Boot switch CFW, launch the homebrew launcher and launch `NXThemes`.
	2. Navigate to `Themes`, Your theme files should be listed here. You can install them one by one.
	3. Reboot your switch to see the changes.

&nbsp;

### Sharing your theme

!!! tip ""
	The `(name).nxtheme` files are completely legal to share! On the flipside, the .szs files are **illegal** to share, as they contain coprighted content. 


### Find other user created themes
There's a subreddit where lots of people share their theme, it's called [r/NXTheme](https://www.reddit.com/r/NXThemes/). Search for posts with the `NXTheme` tag, these contain user created themes. Installation of these themes are nearly the same as installing your own themes, you drop the folder containing the nxthemes files in the `themes` folder on your sd card, then install them via the switch homebrew app.
