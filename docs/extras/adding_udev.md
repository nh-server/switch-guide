# Linux - Run payload sender without root

This section details how to add an udev rule to let you send a payload to the Nintendo Switch without needing to use `sudo`.

!!! tip ""
    The following instructions are not for beginners. Only do this if you are confident in what you are doing.

!!! tip ""
    The following instructions only work if you have `systemd` installed. Most modern distros have `systemd`.

!!! tip ""
    Do the following instructions while your Switch is _not_ connected to your computer.

## Creating a new group

To start, we will create a new group and add ourselves to it. The group the Nintendo Switch device will be owned by on Linux will be set to this group.

!!! tip ""
    There are differing implementations of the following commands on different distros. The commands below are assumed to be run on Ubuntu. Check your distros manual if you are not running Ubuntu for the equivalent commands.

1. Open a terminal.
2. Enter the following command: `sudo groupadd nintendo_switch`.
3. Enter your password when prompted.
4. Enter the following command: `sudo usermod -a -G nintendo_switch $USER`. Make sure that the `G` is capitalized!
5. Close the terminal.

## Adding a udev rule

Next we're gonna add a new udev rule. udev is a device manager for the linux kernel. The rule we're gonna specify is that if the Switch is connected in RCM mode, the group the Switch belongs to will be the group we made in the previous section.

1. Open a terminal.
2. Change to the root user with the following command: `sudo su`. Enter your password when prompted.
3. Enter the following command: `mkdir -p /etc/udev/rules.d`.
4. Enter the following command: `cd /etc/udev/rules.d`.
5. Enter the following command: `echo 'SUBSYSTEMS=="usb", ATTRS{manufacturer}=="NVIDIA Corp.", ATTRS{product}=="APX", GROUP="nintendo_switch"' > 10-switch.rules`.
6. Enter the following command: `udevadm control --reload`.
7. Enter the following command: `udevadm trigger`.
8. Logout and log back in.

You should now be able to run the payload sender without having to use `sudo`.