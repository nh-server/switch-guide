# Theming

You can create unique styles and layouts for your Switch Home Menu.

&nbsp;

!!! tip ""
	![ExampleSwitchTheme](../extras/img/switch_theming.jpg)

!!! tip "What to follow"
	Follow the `Making a theme` section if you want to make a theme.

	Follow the `Installing a theme` section if you want to install a theme

	Follow the `Installing a custom font` sectio
	n if you want to install a custom font

&nbsp;

## Making a theme (Windows)

### What you need

The latest release of <a href="https://github.com/exelix11/SwitchThemeInjector/releases" target="_blank">**Switch Theme Injector**</a>

- You need to download the `ReleaseVx.x.zip` on the download page

### Making the theme

1. Unzip `ReleaseVx.x.zip` to somewhere on your pc's drive.
2. Open up the `SwitchThemes.exe` app. Navigate to `NXTheme Builder`.
3. Select a Home menu part, A 720p image and a Layout patch. Click on `Build NXTheme` after selecting your home menu part, image and layout patch.
4. Fill out the details in the window that pops up. After filling out this window and clicking ok, you will get asked where to save the NXTheme file. Save this file to a temporary folder.
5. Repeat step 3 and 4 for every Home Menu part of the Switch you want to modify.

&nbsp;

## Making a theme (Mac / Linux)

### Making the theme

Make sure that the images you want to use are 1280x720 and in JPG!

1. Navigate to <a href="https://exelix11.github.io/SwitchThemeInjector/v2/" target="_blank">.**Exelix's Web Injector**</a>
2. Select a Theme Target you want to edit. After this, click the Open an Image button and select your background image.
3. Choose a theme name and an author name and optionally a different layout, then click build NxTheme.
4. Your browser will prompt you to download a file. Save this file to a temporary folder.
5. Repeat step 2 to 4 for every Home Menu part of the Switch you want to modify.
	
&nbsp;

## Installing a theme

!!! tip "Community Themes"
	If you want to use community themes, for example from the <a href="https://www.reddit.com/r/NXThemes/" target="_blank">**r/NXThemes**</a>, you can follow the guide below to install a community provided nxtheme

!!! tip "Homebrew app store"
	If you want to use the homebrew app store for themes, you can simply install the theme you want via the appstore, and follow the instructions from step 2 onwards below.

1. Copy the `.nxtheme` files to the `themes` folder on your sd card (It is recommended you put them into their own folders, e.g. /themes/awesome_theme/awesome.nxtheme).
	- Create the `themes` folder on the root of your sd card if it does not exist.
&nbsp;
2. Boot Switch CFW, launch the Homebrew Menu and launch `NXThemes Installer`.
3. Your theme files should be listed here. You can install them one by one.
4. Reboot your switch to see the changes.

&nbsp;

## Installing a custom font

1. Put a font in the .ttf file format into the `themes` folder (It is recommended you put them into their own folders, e.g. /themes/cool_font/font.ttf).
2. Boot Switch CFW, launch the Homebrew Menu and launch `NXThemes Installer`.
3. Find your font and install it.
4. Reboot your switch to see the changes.


&nbsp;

## Troubleshooting:
My Switch crashes on boot after I installed a theme!:

- You installed a bad theme. You can remove it by going into the `/atmosphere/titles/0100000000001000/romfs/lyt` and deleting every file in that folder.

The NXTheme installer crashes when I launch it:

- This is probably due to the archive bit being set on either the app or the nxthemes. This is usually the result of copying files to an sd card via a Mac. If you are experiencing this issue, try resetting the archive bit via Hekate for all files.
