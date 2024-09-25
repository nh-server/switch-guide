# FTPD

FTPD is simply an FTP server for the Switch, it can be used to transfer files wirelessly to- and from- your microSD card.

## Usage requirements:

- An FTP client such as [WinSCP](https://winscp.net/eng/download.php) (Windows)
- Any device that can connect to an FTP server with an FTP client

## Usage instructions:

::: tip

**Note**

This section assumes that the device running the FTP client and your Switch are connected to the same network. If it's not, make sure they are connected to the same network before continuing.

:::

1. Launch the FTPD Homebrew app from the Homebrew menu.
1. Open your FTP client of choice.
1. Add a new connection and in the `Host` field of your FTP client, put in the IP address of your Switch mentioned in the top left of FTPD.
    - If applicable in your FTP client, check the `Anonymous` box.
1. Type in port `5000` for the port and attempt to connect to your Switch.
1. You should now be able to access your microSD card wirelessly and transfer files to- and from- the microSD card.

### FTPD's main menu:

![FTPD](img/ftpd.jpg)

## Additional information:

FTPD can also run in the form of a background process (sysmodule), called sys-ftpd. It can be found [here](https://github.com/cathery/sys-ftpd), usage and configuration options are mentioned there as well.
