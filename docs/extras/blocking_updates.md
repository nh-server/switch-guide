# Blocking Updates

You can add a custom DNS to your WiFi connection that will block all communication with Nintendo's servers. This will stop any updates and reporting to Nintendo, but it will prevent use of the eShop and online games.

We will be using [90DNS](https://gitlab.com/a/90dns), a community-run custom DNS server. If you prefer, you can run your own DNS server following the instructions on the [GitLab repository.](https://gitlab.com/a/90dns/blob/master/SELFHOST.md)

&nbsp;

### Instructions

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

   
| Location                              | Primary DNS         | Secondary DNS       |
|:--------------------------------------|:--------------------|:--------------------|
| Europe (Server located in France)     | `163.172.141.219`   | `207.246.121.77`    |
| America (Server located in the USA)   | `207.246.121.77`    | `163.172.141.219`   |


!!! tip ""
    Example for a 90dns connection with the Europe settings:
    ![Visual for System Settings serial location](../extras/img/blocking_updates.png)

!!! tip ""
    ### Testing if your 90dns connection is working
    <details>
        <summary>Click to expand!</summary>

    !!! tip ""
        1. Download the latest release of the [90dns Tester](https://github.com/meganukebmp/Switch_90DNS_tester/releases)
        2. Place the `Switch_90DNS_tester.nro` in the `switch` folder on your SD
        3. Enter the homebrew menu and run the 90dns Tester
        4. After the test finished it should look similar to the below picture, with every `nintendo` domain being blocked

    !!! tip ""
        ![tester example](../extras/img/90dns_tester_switch.jpg)

</details>

