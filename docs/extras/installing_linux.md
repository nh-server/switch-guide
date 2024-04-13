# Installing Linux 4 Switch

!!! warning "Have you partitioned your microSD card?"
    This guide assumes that you've followed the NH-Server guide up until this point, your microSD card should be partitioned accordingly. If you didn't do so, see [this page](/user_guide/all/partitioning_sd_syscfw) of our guide.

Linux 4 Switch is a sister project to Switchroot Android--it uses a similar kernel but provides a variety of Linux distributions.The available distributions at this time are:

- Ubuntu Bionic (maintained by CTCaer, the primary dev of both the L4S kernel and hekate--this is the most stable and supported distro)

- Ubuntu Jammy (maintained by theofficialgman, one of the primary devs of the L4T Megascript installer program)

- Fedora 39 (maintained by azkali, a L4S kernel developer)

- Lakka 5.x (maintained by gavin_darkglider, a L4S kernel developer and Lakka maintainer)

!!! info "Looking for Arch?"
    Unfortunately, L4S Arch Linux is deprecated following an xorg ABI change that breaks compatibility with the Tegra210 BSP.


### **The installation**
To install an L4S distribution, follow the official guide starting from [0. Linux Distributions](https://wiki.switchroot.org/wiki/linux/linux-distributions).

- **Note:** You can skip partitioning your microSD card since you partitioned your microSD card during the NH-Server guide. Start from step 4. during the [Installation](https://wiki.switchroot.org/wiki/linux/linux-install-update-guide#installation) section.

-----    
    
This page was made in collaboration with `makinbacon21` on Discord. See the collapsible section below for the L4S guide maintainers.
    
??? note "L4S Project Staff (Android / Linux)"
    If you'd like, you can donate to the people who made this project possible using these links.

    - CTCaer (Linux & Low level developer, Hekate maintainer)
    [https://www.patreon.com/ctcaer](https://www.patreon.com/ctcaer)

    - Azkali (Linux & Low level developer)
    [https://www.patreon.com/azkali](https://www.patreon.com/azkali)

    - gavin_darkglider (Linux & Lakka developer)
    [https://paypal.me/gavindarkglider](https://paypal.me/gavindarkglider)

    - ave (Infrastructure & Hosting)
    [https://patreon.com/aveao](https://patreon.com/aveao)
