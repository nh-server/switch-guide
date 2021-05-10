# Blocking Updates

This page will help you set up a method to block all communication with Nintendo. This will stop any updates and reporting to Nintendo, but it will prevent use of the eShop and online games.

### Instructions (AMS DNS redirection)
You can configure Atmosphere to automatically redirect any requests directed to Nintendo to nothing instead. Documentation about this feature can be [found here](https://github.com/Atmosphere-NX/Atmosphere/blob/master/docs/features/dns_mitm.md). The section below will help you set up DNS redirection on your emummc. Note that this will only apply when you are using cfw.

#### What you need: 

- <a href="../../files/emummc.txt" download>emummc.txt</a>
- Atmosphere 0.18.0 or higher

#### Setup:

1. Insert your SD into your pc
2. Enter the Atmosphere folder
3. If it doesn't exist already, create a folder named `hosts` in the atmosphere folder
4. Copy the emummc.txt into the hosts folder
    - If you want to apply the DNS redirection to sysmmc instead of emummc, rename the file to `sysmmc.txt`

!!! note "Verify functionality"
    You can verify the functionality of the DNS redirection by booting into emummc (or sysmmc if you applied the config to sys), and powering off after. 
    
    A report will be generated in sd:/atmosphere/logs called `dns_mitm_startup.log`. If this starts with the following, the dns redirection is active

    !!! tip ""
        ![dnsmitmlog](../extras/img/dnsmitm.png)

&nbsp;

### Instructions (90dns)
You can add a custom DNS to your WiFi connection that will block all communication with Nintendo's servers. We will be using [90DNS](https://gitlab.com/a/90dns), a community-run custom DNS server. If you prefer, you can run your own DNS server following the instructions on the [GitLab repository.](https://gitlab.com/a/90dns/blob/master/SELFHOST.md)

!!! tip ""
    Enter the console's System Settings, and then proceed to the Internet tab. From here:
    

    ### Setting up a new connection via WiFi
    
    !!! warning "Open WiFi networks without a password"
        Not all WiFi networks require a password to connect. If your network does not use one, you can use the `Manual Setup` option, located at the very bottom of the `Internet Settings` screen below all other WiFi networks.
        
    1. Select your WiFi network from the list of networks.
    2. Enter an **incorrect** password that is 8 characters long and press `OK`.
    3. After a few moments of attempting to connect, the console will display a connection error.
    4. Press `OK` to close the error message.
    5. Press `Close` when it offers to display more details about the error.
    6. When asked if you want to re-enter the password, pick `View Settings`.
    7. Change `DNS Settings` to `Manual`.
    8. Pick the server that is the closest to your location out of the below chart and enter its `Primary` and `Secondary` DNS into your connection settings.
    9. Enter the correct password for your WiFi connection.
    10. Save the settings and test the connection.

    -----

    ### Editing an existing WiFi connection
    1. Select your existing WiFi network from the list of networks.
    2. Select `Change Settings`.
    3. Pick the server that is the closest to your location out of the below chart and enter its Primary and Secondary DNS into your connection settings.
    4. Save the settings and test the connection.

    -----

    ### Using homebrew to set 90dns on all existing WiFi networks
    1. Download [switch-90dns-setter](https://github.com/suchmememanyskill/switch-90dns-setter/releases) and put it in the switch folder.
    2. Launch CFW and open the homebrew menu.
    3. Launch `90dns setter`.
    4. Press X to apply 90dns to all WiFi networks.
    5. Press Y to reboot the switch.
    6. Check in system settings if networks have a custom DNS applied.

   
| Location                              | Primary DNS         | Secondary DNS       |
|:--------------------------------------|:--------------------|:--------------------|
| Europe (Server located in France)     | `163.172.141.219`   | `207.246.121.77`    |
| America (Server located in the USA)   | `207.246.121.77`    | `163.172.141.219`   |


!!! tip ""
    Example for a 90dns connection with the Europe settings:
    ![Visual for System Settings serial location](../extras/img/blocking_updates.png)


&nbsp;

## Testing if you can reach nintendo

### Testing via the eShop (Stock)

!!! tip ""
    1. Open the eShop. Wait until it either opens or displays an error
    2. If it displays "Unable to display page." you seem to have Nintendo blocked

### Testing via a homebrew app (CFW)

!!! tip ""
    1. Download the latest release of the [90dns Tester](https://github.com/meganukebmp/Switch_90DNS_tester/releases)
    2. Place the `Switch_90DNS_tester.nro` in the `switch` folder on your SD
    3. Enter the homebrew menu and run the 90dns Tester
    4. After the test finished it should look similar to the below picture, with every `nintendo` domain being blocked

!!! tip ""
    ![tester example](../extras/img/90dns_tester_switch.jpg)


