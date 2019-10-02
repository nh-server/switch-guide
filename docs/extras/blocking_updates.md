# Blocking Updates

You can add custom DNS to your WiFi connection that will block all communication with the Nintendo servers. This will stop any updates and reporting to Nintendo, but it will prevent use of the eShop and online games.

We will be using [90DNS](https://gitlab.com/a/90dns), a community-run custom DNS server. If you prefer, you can run your own DNS server following the instructions on the [GitLab repository.](https://gitlab.com/a/90dns/blob/master/SELFHOST.md)

&nbsp;

### Hijack check

In some cases, 90DNS does not work, which means that your switch can communicate with the Nintendo servers. This might happen when your ISP hijacks your DNS requests. There are several methods you can use to test whether 90DNS is safe to use on the network that you want to connected to:

!!! tip ""
	- Run the connectivity test program on your computer that is in the [90DNS README file.](https://gitlab.com/a/90dns/blob/master/README.md)
	- Set up 90DNS on a clean NAND on your switch and check if you can connect to the eshop. Error 2811-1007 means that 90dns works.
	- Set the DNS on your computer to the IPs found in the instructions below and open [90dns.test.](http://90dns.test/) If 90DNS works you'll see a message telling you that you are connected successfully.

If 90DNS does not work, you can choose to keep the switch permanently offline or to host a DNS server yourself. Instructions to host your own 90DNS server can be found [here](https://gitlab.com/a/90dns/blob/master/SELFHOST.md). Another option is to try to use another network.

-----

### Setting up 90DNS

!!! tip ""
    1. Go to the Settings applet, and then to the Internet tab.
    2. Select the WiFi network you are connected to and click `Change Settings`.
    3. Change DNS Settings to Manual.
    4. Set Primary DNS to `163.172.141.219`
    5. Set Secondary DNS to `45.248.48.62`
    6. Save Settings and test connection.
   
!!! tip ""
    ![Visual for System Settings serial location](../extras/img/blocking_updates.jpg)
