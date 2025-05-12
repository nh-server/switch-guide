# Theming

Using NXTheme Installer, you can install and create unique styles and layouts for your Switch Home Menu.

### Index

- Follow the [Installing a theme](#installing-a-theme) section if you want to install a theme.
- Follow the [Making a theme](#making-a-theme) section if you want to make a theme manually.
- Follow the [Installing a custom font](#installing-a-custom-font) section if you want to install a custom font.
- If you run into any issues, visit the [Troubleshooting](#troubleshooting) section.

## Installing a theme

::: tip

**Community Themes**

If you want to use community made themes, for example from the [r/NXThemes](https://www.reddit.com/r/NXThemes/) subreddit or [Themezer](https://themezer.net), you can follow the guide below to install a community provided `.nxtheme` file.

:::

## What you need:

- The latest release of [NXThemes Installer](https://github.com/exelix11/SwitchThemeInjector/releases)

## Instructions:

1. Download `NXThemesInstaller.nro` and put it in `sd:/switch`.
1. Copy the `.nxtheme` files to the `themes` folder on your microSD card (It is recommended you put them into their own folders, e.g. `sd:/themes/awesome_theme/awesome.nxtheme`).
    - Create the `themes` folder on the root of your microSD card if it does not exist.
1. Boot into sysCFW/emuMMC and launch the Homebrew Menu, then launch `NXThemes Installer` *with* an internet connection.
    - NXTheme Installer will automatically download the required theme patches if it has a connection to the internet. These theme patches are required for themes to work.
    - If you don't want to or don't have the ability connect to a Wi-Fi network, installing the theme patches can be done manually.
    - See the instructions [here](https://github.com/exelix11/theme-patches#if-you-dont-want-to-connect-your-console-to-the-internet) on how to install them manually.
1. If you get prompted about extracting your home menu data, do so.
    - You can always do this manually via the `Extract home menu` tab in `NXTheme Installer`.
1. You should now see the main menu of `NXTheme Installer`, the `Themes` tab is where you will find your themes. To install them, press the folder name of your theme and go through each home menu section to install the desired theme for that section (e.g. going to `/awesome_theme` and selecting your theme for the specific menu you want to change, do the same for the other menus).
1. Reboot into CFW via the `Reboot` tab to see the changes.

::: tip

**An example of a Home Menu theme being installed**

![ExampleSwitchTheme](../extras/img/switch_theming.jpg)

:::

## Making a theme

::::: tabs

:::: tab default Windows

### What you need:

The latest release of [**Switch Theme Injector**](https://github.com/exelix11/SwitchThemeInjector/releases)
- You need to download the `ReleaseVx.x.zip` on the download page

### Making the theme

1. Unzip `ReleaseVx.x.zip` to somewhere on your PC's drive.
1. Open up the `SwitchThemes.exe` app. Navigate to `NXTheme Builder`.
1. Select a Home menu part, A 720p image and a Layout patch. Click on `Build NXTheme` after selecting your home menu part, image and layout patch.
1. Fill out the details in the window that pops up. After filling out this window and clicking ok, you will get asked where to save the NXTheme file. Save this file to a temporary folder.
1. Repeat step 3 and 4 for every Home Menu part of the Switch you want to modify.

::::

:::: tab Mac / Linux / ChromeOS

#### Making the theme

Make sure that the images you want to use are 1280x720 and in JPG!

1. Navigate to [**Exelix's Web Injector**](https://exelix11.github.io/SwitchThemeInjector/v2/).
1. Select a Theme Target you want to edit. After this, click the Open an Image button and select your background image.
1. Choose a theme name and an author name and optionally a different layout, then click build NxTheme.
1. Your browser will prompt you to download a file. Save this file to a temporary folder.
1. Repeat step 2 to 4 for every Home Menu part of the Switch you want to modify.

::::

:::::

-----

## Installing a custom font

1. Put a font with the `.ttf` file type into the `themes` folder (It is recommended you put them into their own folders, e.g. `sd:/themes/cool_font/font.ttf`).
1. Boot into sysCFW/emuMMC, launch the Homebrew Menu and launch `NXThemes Installer`.
1. You should now see the main menu of `NXTheme Installer`, the `Themes` tab is where you will find your font(s).
1. Install your desired font by selecting the `.ttf` file in the font folder you created.
1. Reboot into CFW via the `Reboot` tab to see the changes.

## Troubleshooting

### My Switch crashes on boot after I installed a theme!:

**Cause 1:** You didn't install the required theme patches for your firmware version. You can remove your installed custom theme data by navigating to `sd:/atmosphere/contents` and deleting the `01000000000001000` folder.

**Cause 2:** You didn't extract your home menu data when prompted. You can remove your installed custom theme data by navigating to `sd:/atmosphere/contents` and deleting the `01000000000001000` folder.

**Cause 3:** You installed a bad theme. You can remove them by navigating to `sd:/atmosphere/contents` and deleting the `01000000000001000` folder.

- **Note:** `contents` is called `titles` on Atmosphère versions 0.9.4 and below.

### My Switch crashes on boot after I installed a font!:

**Cause 1:** You installed a font that was too large in file size (maximum file size being 1.9MB). You can remove your installed custom font data by navigating to `sd:/atmosphere/contents` and deleting the `0100000000000811` folder.

**Cause 2:** You installed a font that wasn't the right file type (e.g. `.otf`). You can remove your installed custom font data by navigating to `sd:/atmosphere/contents` and deleting the `0100000000000811` folder.

- **Note:** `contents` is called `titles` on Atmosphère versions 0.9.4 and below.

### The NXTheme installer crashes when I launch it:

This is probably due to the archive bit being set on either the app or the `.nxtheme` files. This is usually the result of copying files to a microSD card via a Mac. If you are experiencing this issue, try running the archive bit fixer utility via hekate for all files.

This can be done by booting into hekate and going to `Tools` > `Arch bit • RCM Touch • Pkg1/2` > `Fix Archive Bit`.
