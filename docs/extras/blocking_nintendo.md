# Blocking Nintendo servers

This page will help you set up a method to block all communication with Nintendo. This will stop any updates and reporting to Nintendo, but it will prevent use of the eShop and online games.

### **Instructions (AMS DNS redirection)**
You can configure Atmosphère to automatically redirect any requests directed to Nintendo to nothing instead. Documentation about this feature can be [found here](https://github.com/Atmosphere-NX/Atmosphere/blob/master/docs/features/dns_mitm.md). The section below will help you set up DNS redirection on your emummc. Note that this will only apply when you are using cfw.

#### What you need:
- <a href="../../files/emummc.txt" download>emummc.txt</a>
- Atmosphère 0.18.0 or higher

#### Setup:

1. Enter RCM and inject the Hekate payload.
    - If you use a modchipped Switch, you can simply just turn your Switch on with the Hekate payload renamed to `payload.bin` on the root of your SD.
1. Navigate to `Tools` > `USB Tools` > `SD Card` and plug your Switch into your PC via USB.
1. Enter the `atmosphere` folder.
1. If it doesn't exist already, create a folder named `hosts` in the `atmosphere` folder.
    - You should end up with the `sd:/atmosphere/hosts` directory.
1. Copy the `emummc.txt` file into the hosts folder.
    - If you want to apply the DNS redirection to sysmmc instead of emummc, rename the file to `sysmmc.txt`
1. Eject the `UMS` device safely from within your computer's operating system and boot into CFW.

!!! note "Verify functionality"
    You can verify the functionality of the DNS redirection by booting into emummc (or sysmmc if you applied the config to sys), and powering off after.

    A report will be generated in `sd:/atmosphere/logs` called `dns_mitm_startup.log`. If this starts with the following, the dns redirection is active

    ![dnsmitmlog](../extras/img/dnsmitm.png)

&nbsp;

### **Instructions (90DNS)**
You can add a custom DNS to your WiFi connection that will block all communication with Nintendo's servers. We will be using [90DNS](https://gitlab.com/a/90dns), a community-run custom DNS server. If you prefer, you can run your own DNS server following the instructions on the [GitLab repository.](https://gitlab.com/a/90dns/blob/master/SELFHOST.md)

Enter the console's System Settings, and then proceed to the Internet tab. From here:


#### **Setting up a new connection via Wi-Fi**

!!! warning "Open WiFi networks without a password"
    Not all WiFi networks require a password to connect. If your network does not use one, you can use the `Manual Setup` option, located at the very bottom of the `Internet Settings` screen below all other WiFi networks.

1. Select your WiFi network from the list of networks.
1. Enter an **incorrect** password that is 8 characters long and press `OK`.
1. After a few moments of attempting to connect, the console will display a connection error.
1. Press `OK` to close the error message.
1. Press `Close` when it offers to display more details about the error.
1. When asked if you want to re-enter the password, pick `View Settings`.
1. Change `DNS Settings` to `Manual`.
1. Pick the server that is the closest to your location out of the below chart and enter its `Primary` and `Secondary` DNS into your connection settings.
1. Enter the correct password for your WiFi connection.
1. Save the settings and test the connection.

    -----

#### **Editing an existing WiFi connection**
1. Select your existing WiFi network from the list of networks.
1. Select `Change Settings`.
1. Pick the server that is the closest to your location out of the below chart and enter its Primary and Secondary DNS into your connection settings.
1. Save the settings and test the connection.

    -----

#### **Using homebrew to set 90DNS on all existing WiFi networks**
1. Download [switch-90dns-setter](https://github.com/suchmememanyskill/switch-90dns-setter/releases) and put it in the `/switch` folder.
1. Launch CFW and open the homebrew menu.
1. Launch `90DNS Setter`.
1. Press X to apply 90DNS to all WiFi networks.
1. Press Y to reboot the Switch.
1. Check in system settings if networks have a custom DNS applied.


| Location                              | Primary DNS         | Secondary DNS       |
|:--------------------------------------|:--------------------|:--------------------|
| Europe (Server located in France)     | `163.172.141.219`   | `207.246.121.77`    |
| America (Server located in the USA)   | `207.246.121.77`    | `163.172.141.219`   |


!!! tip ""
    Example for a 90DNS connection with the Europe settings:
    ![Visual for System Settings serial location](../extras/img/blocking_updates.png)


&nbsp;

### **Testing if you can reach Nintendo**

#### **Testing via the eShop (Stock)**
1. Open the eShop. Wait until it either opens or displays an error.
1. If it displays "Unable to display page.", you seem to have blocked Nintendo's servers.

#### **Testing via a homebrew app (CFW)**
1. Download the latest release of the [90DNS Tester](https://github.com/meganukebmp/Switch_90DNS_tester/releases)
1. Place the `Switch_90DNS_tester.nro` in the `switch` folder on your SD.
1. Enter the homebrew menu and run the 90DNS Tester.
1. After the test finished it should look similar to the below picture, with every `nintendo` domain being blocked.

!!! tip ""
    ![tester example](../extras/img/90dns_tester_switch.jpg)
