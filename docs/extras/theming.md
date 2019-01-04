# Theming

You can create unique styles and layouts for your Switch Home Menu.

&nbsp;

!!! danger "Console keys needed"
	You need your console keys dumped for this, check out the [Backup Keys](backup_keys.md) section if you haven't done so already.
	
!!! snippet "Windows only"
	This guide requires windows apps to work.

!!! tip ""
	![ExampleSwitchTheme](../extras/img/switch_theming.jpg)

&nbsp;

### What you need 

!!! tip ""
	- The latest release of [NXThemeInstaller and Switch Theme Injector v3.5](https://github.com/exelix11/SwitchThemeInjector/releases)
		- You need both the `NXThemesInstaller.nro` and `ReleaseV3.5.zip`
	- Your `prod.keys` keyset file
	
&nbsp;

### Making a theme

!!! tip "Notice"
	Only the lockscreen and homescreen can be individually themed on 5.1 and below. The settings, news and all software home menu parts will have the same background as the homescreen.

!!! tip ""
	1. Unzip `ReleaseV3.5.zip` to somewhere on your pc's drive.
	1. Open up the `SwitchThemes.exe` app. Navigate to `NXTheme Builder`.
	2. Select a Home menu part, A 720P image and a Layout patch. Click on `Build NXTheme` after selecting your home menu part, image and layout patch.
	3. Fill out the details in the window that pops up. After filling out this window and clicking ok, you will get asked where to save the NXTheme file. Save this file to a temporary folder.
	4. Repeat step 3 and 4 for every home menu part of the switch you want to modify.
	
&nbsp;

### Installing a theme

!!! danger "System updates"
	Every time you do a system update, you need to redump your home menu files. To do this, follow step 5 below again.

!!! tip ""
	1. Copy `NXThemesInstaller.nro` to the switch folder on your sd card.
	2. Copy your `prod.keys` to the switch folder on your sd card.
	3. Create a folder called `themes` on your sd card and copy your `.nxtheme` files to the themes folder on your sd card .
	4. Boot switch CFW, launch the homebrew launcher and launch `NXThemes Installer`.
	5. Navigate to `Extract home menu`, press right and press +. Your home menu files will be dumped now.
	6. Navigate to `Themes`, Your theme files should be listed here. You can install them one by one.
	7. Reboot your switch to see the changes.
	
&nbsp;

### Sharing your theme

!!! tip ""
	The `(name).nxtheme` files are completely legal to share! On the flipside, the .szs files are **illegal** to share, as they contain coprighted content. 

&nbsp;
	
### Find other user created themes

!!! tip ""
	There's a subreddit where lots of people share their theme, it's called [r/NXTheme](https://www.reddit.com/r/NXThemes/). Search for posts with the `NXTheme` tag, these contain user created themes. Installation of these themes are nearly the same as installing your own themes, you drop the folder containing the nxthemes files in the `themes` folder on your sd card, then install them via the switch homebrew app.
