# Getting Started

### Finding your serial number

The first thing to do is determine if your Switch is vulnerable to fusee-gelee, the exploit we will be using to launch CFW.

This vulnerability was independently discovered by several different Switch hacking teams, and multiple variants of it were released to the public in April 2018 after a 90-day disclosure period ended. Nintendo and NVIDIA were made aware of the issue before the public release as a result, and Switch systems that are not vulnerable to the exploit started being spotted in the wild in July 2018. NVIDIA [publicly acknowledged the flaw](https://nvidia.custhelp.com/app/answers/detail/a_id/4660/~/security-notice%3A-nvidia-tegra-rcm-vulnerability) in April as well.

Patched units can be identified by their serial number. This number can be found on the bottom of your Switch adjacent to the USB-C port, or in the Settings applet at **System -> Serial Information**.

&nbsp;

![Visual for System Settings serial location](../img/getting_started_serial_location.jpg)

&nbsp;

### Determining if your Switch is vulnerable

The homebrew community has crowdsourced a list of known serial numbers which are vulnerable to fusee-gelee. 

- If your serial number is on this list as "potentially patched", follow the guide and see if your system works. 
- If your serial number is listed as "patched", there is nothing you can do at this time. 
- If your system is patched, it is highly advised to keep it on 4.1.0 or lower, if possible, as there may be a vulnerability for these versions in the far future.

The following information is based on [this GBATemp thread](https://gbatemp.net/threads/switch-informations-by-serial-number-read-the-first-post-before-asking-questions.481215/).


!!! note ""
    - If your serial starts with **XAW1**:
        - XAW10078XXX and below are unpatched
        - XAW10079XXX and above are potentially patched
        - XAW1010XXX and above are patched
!!! note ""
    - If your serial starts with **XAW4**:
        - XAW40011XXX and below are unpatched
        - XAW40012XXX and above are potentially patched
        - XAW40013XXX and above are patched
!!! note ""
    - If your serial starts with **XAW7**:
        - XAW700178X and below are unpatched
        - XAW700179X and above are potentially patched
        - XAW70019X and above are patched
!!! note ""
    - If your serial starts with **XAJ1**:
        - XAJ10031XX and above are potentially patched
!!! note ""
    - If your serial starts with **XAJ4**:
        - XAJ40050X and below are unpatched
        - XAJ40051X and above are potentially patched
        - XAJ4006XX and above are patched
!!! note ""
    - If your serial starts with **XAJ7**:
        - XAJ70042X and below are unpatched
        - XAJ70043X and above are potentially patched
        - XAJ7005XX and above are patched

&nbsp;

#### [Continue to SD Preparation](sd_preparation.md)