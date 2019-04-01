# Getting Started

### Finding your serial number

The first thing to do is determine if your Switch is vulnerable to fusee-gelee, the exploit we will be using to launch CFW.

This vulnerability was independently discovered by several different Switch hacking teams, and multiple variants of it were released to the public in April 2018 after a 90-day disclosure period ended. Nintendo and NVIDIA were made aware of the issue before the public release as a result, and Switch systems that are not vulnerable to the exploit started being spotted in the wild in July 2018. NVIDIA [publicly acknowledged the flaw](https://nvidia.custhelp.com/app/answers/detail/a_id/4660/~/security-notice%3A-nvidia-tegra-rcm-vulnerability) in April as well.

Patched units can be identified by their serial number. This number can be found on the bottom of your Switch adjacent to the USB-C port, or in the Settings applet at **System -> Serial Information**.

&nbsp;

!!! tip ""
    ![Visual for System Settings serial location](../user_guide/img/getting_started_serial_location.jpg)

!!! tip ""
    ![Visual for serial location on the bottom of console](../user_guide/img/serial_switch.png)    

&nbsp;

### Determining if your Switch is vulnerable

The homebrew community has crowdsourced a list of known serial numbers which are vulnerable to fusee-gelee. 

- If your serial number is on this list as "potentially patched", follow the guide and see if your system works. 
- If your serial number is listed as "patched", there is nothing you can do at this time. 
- If your system is patched, it is highly advised to keep it on 4.1.0 or lower, if possible, as there may be a vulnerability for these versions in the far future.

!!! tip "Notice"
    If you are unsure if your serial is patched, you can test your console yourself following the instructions [here.](/switch-guide/extras/rcm_test/)

&nbsp;

The following information is based on [this GBATemp thread](https://gbatemp.net/threads/switch-informations-by-serial-number-read-the-first-post-before-asking-questions.481215/).



!!! tip ""
    ### List of console serial number ranges
    <details>
        <summary>Click to expand!</summary>

    !!! note ""
        - If your serial starts with **XAW1**:
            - XAW10000000000 through XAW10074000000 are unpatched
            - XAW10075000000 through XAW10120000000 are potentially patched
            - Serials above XAW10120000000 are patched
    !!! note ""
        - If your serial starts with **XAW4**:
            - XAW40000000000 through XAW40011000000 are unpatched
            - XAW40011000000 through XAW40012000000 are potentially patched
            - Serials above XAW40012000000 are patched
    !!! note ""
        - If your serial starts with **XAW7**:
            - XAW70000000000 through XAW70017800000 are unpatched
            - XAW70017800000 through XAW70030000000 are potentially patched
            - Serials above XAW70030000000 are patched
    !!! note ""
        - If your serial starts with **XAJ1**:
            - XAJ10000000000 through XAJ10020000000 are unpatched
            - XAJ10020000000 through XAJ10030000000 are potentially patched
            - Serials above XAJ10030000000 are patched
    !!! note ""
        - If your serial starts with **XAJ4**:
            - XAJ40000000000 through XAJ40046000000 are unpatched
            - XAJ40046000000 through XAJ40060000000 are potentially patched
            - Serials above XAJ40060000000 are patched
    !!! note ""
        - If your serial starts with **XAJ7**:
            - XAJ70000000000 through XAJ70040000000 are unpatched
            - XAJ70040000000 through XAJ70050000000 are potentially patched
            - Serials above XAJ70050000000 are patched
    !!! note ""
        - If your serial starts with **XAJ9**:
            - These units are refurbished units provided by Nintendo. No information is known yet, but they are potentially patched.
    !!! note ""
        - If your serial starts with **XAK**:
            - No information is known yet- you are encouraged to continue with the guide and report on the GBATemp thread if the guide worked, along with the first few digits of your serial number.
</details>
&nbsp;

### Console Preparation

!!! danger "Important"
    Before setting up the console for homebrew, it is important to have at least one eShop game, application (such as Youtube or Hulu), or a game demo such as [10 Second Run RETURNS](https://www.nintendo.com/games/detail/10-second-run-returns-switch). A game cartridge will also work, but note that the cartridge will have to be inserted in order to run homebrew if you wish to go this route. Once you have a game or application, you are prepared to continue on with the guide.

&nbsp;

#### [Continue to SD Preparation <i class="fa fa-arrow-circle-right fa-lg"></i>](sd_preparation.md)
