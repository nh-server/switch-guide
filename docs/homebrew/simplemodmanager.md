# SimpleModManager

SimpleModManager is a [homebrew app](index#terminologies) that allows easily adding and removing mods to the layeredFS directory from another directory on the SD card.

### Common use cases for SimpleModManager:

- Switching between large modpacks
- Enabling and disabling individual mods

::: warning

**What NOT to use SimpleModManager for.**

SimpleModManager should not be used for some specific games like Super Smash Bros. Ultimate and The Legend of Zelda: Breath of the Wild and Tears of the Kingdom. This is due to how these games handle mods differently from others.

:::

## Installation requirements:
- The latest release of [SimpleModManager](https://github.com/nadrino/SimpleModManager/releases/latest) (the `SimpleModManager.nro` file)

## Installation instructions:
1. Boot into hekate and go to `Tools` > `USB Tools` > `SD Card`, then plug your Switch into your PC via USB.
1. Your microSD card should now be accessible on your PC, open it.
1. Copy the `SimpleModManager.nro` file the `/switch/` folder on your microSD card.
1. Boot into CFW.

## Usage instructions:
1. Create a directory named `mods/<game name>/<mod name>/` on the root of the SD card.
    - What you put for the mod name does not have to align with anything, put whatever you like!
1. Create the layeredFS directory for your mod that can be found on the [Game Modding](../extras/game_modding) page, skipping the `atmosphere` folder inside the `<mod name>` folder.
1. Launch SimpleModManager via the Homebrew Menu and your games will show up, pressing A on them will show the mods available.

![ExampleSwitchTheme](img/simplemodmanager1.jpg){ width="600" }
![ExampleSwitchTheme](img/simplemodmanager2.jpg){ width="600" }
