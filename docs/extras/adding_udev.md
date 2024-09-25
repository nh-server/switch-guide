# Linux - Run payload injector without root

This section details how to add an `udev` rule to let you send a payload to your Switch without needing to use `sudo`.

The following instructions only work if you have a system that implements `udev`. Most modern distros come with `systemd` already installed, which includes a `udev` implementation.

Do the following instructions while your Switch is _not_ connected to your computer.

::: tip

**For Arch Linux users:**

The package `android-udev` includes rules that will also allow for payload injection to work without root. Do note this also allows Android specific commands such as `adb` and `fastboot` to also work without root (as is the intention of it.)

:::

## Option 1: Manually adding rules and group

The following instructions are not for beginners. Only do this if you understand what you are doing.

### Creating a new group

To start, we will create a new group and add ourselves to it. The group the Nintendo Switch device will be owned by on Linux will be set to this group.

1. Open a terminal.
1. Enter the following command: `sudo groupadd nintendo_switch`.
1. Enter your password when prompted.
1. Enter the following command: `sudo usermod -a -G nintendo_switch $USER`. Make sure that the `G` is capitalized!
1. Close the terminal.

### Adding a udev rule

Next we're gonna add a new `udev` rule. `udev` is a device manager for the linux kernel. The rule we're gonna specify is that if the Switch is connected in `RCM`, the group the Switch belongs to will be the group we made in the previous section.

1. Open a terminal.
1. Change to the root user with the following command: `sudo -i`. Enter your password when prompted.
1. Enter the following command: `mkdir -p /etc/udev/rules.d`.
1. Enter the following command: `echo 'SUBSYSTEMS=="usb", ATTRS{manufacturer}=="NVIDIA Corp.", ATTRS{product}=="APX", GROUP="nintendo_switch"' > /etc/udev/rules.d/10-switch.rules`.
1. Enter the following command: `udevadm control --reload`.
1. Enter the following command: `udevadm trigger`.
1. Logout and log back in.

You should now be able to run the payload sender without having to use `sudo`.

## Option 2: Installing a package with the rules

These rules will actually allow _ANY_ user to access your Switch via USB, not only _your_ user.

You may just follow the instructions at [nx-udev](https://github.com/pheki/nx-udev), or if you're on Ubuntu / Debian:

1. Download [nx-udev_latest_all.deb](https://github.com/pheki/nx-udev/releases/latest/download/nx-udev_latest_all.deb).
1. Open a terminal in the same directory as your download.
1. Run `sudo dpkg -i nx-udev_latest_all.deb` to install the package

You should now be able to run the payload injector and homebrew with USB communication without having to use `sudo`.
