# Getting Started

::: tip

**About modchipped Switch console users**

If you already know you have a modchipped Switch console, you can skip ahead to the [Modchip Introduction](../user_guide/modchip/index) page.

:::

## Finding your serial number

In the RCM path, we'll first determine if your Switch is vulnerable to fusee-gelee, the exploit we will be using to launch CFW.

The fusee-gelee vulnerability was discovered independently by different Switch hacking teams, who all independently released versions of the exploit in April 2018. Nintendo and NVIDIA were informed 90 days before these releases, and patched consoles were launched by mid-2018. NVIDIA [publicly acknowledged the flaw](https://nvidia.custhelp.com/app/answers/detail/a_id/4660/~/security-notice%3A-nvidia-tegra-rcm-vulnerability) in April as well. In July 2019, Nintendo announced updated consoles: the Switch Lite (HDH-001), and a new model of original Switch (HAC-001(-01)/"V2") with better battery life. Both of these new models use the Tegra X1+ (also known as Mariko, the T214, and T210B01) with a brand-new bootROM, and cannot currently be hacked without a modchip.

Patched and Mariko units can be identified by their serial number. This number can be found in the Settings applet at **System -> Serial Information**. You can also find it on the bottom of the console, adjacent to the charging port. However, it is always more accurate to use the serial reported in Settings instead, especially if you aren't the original owner of the console.

![Visual for System Settings serial location](../user_guide/img/getting_started_serial_location.jpg)

![Visual for serial location on the bottom of console](../user_guide/img/serial_switch.png)    

## Determining if your Switch is vulnerable

The community has crowdsourced a list of known serial numbers which are vulnerable to fusee-gelee.

- If your serial number is on this list as "potentially patched", follow the notice directly after this list.
- If your serial number is listed as "patched", there is nothing you can do at this time besides installing a modchip (hardware modification. It __requires__ experience with microsoldering.).
- If your system is patched, it is highly advised to keep it on 7.0.1 or lower, if possible, as there may be a vulnerability for these versions in the far future. **DO NOT update patched consoles past 7.0.1 if you want to ever have a chance of running homebrew and/or CFW on them if you do not have the skills required to install a modchip.**

::: tip

**Notice**

If you are unsure if your serial is patched, you can test your console yourself following the instructions [here](rcm/sending_payload).

:::

## Serial list

The following information is based on [this GBATemp thread](https://gbatemp.net/threads/switch-informations-by-serial-number-read-the-first-post-before-asking-questions.481215/).

|  Serial Numbers  | <span style="color:green">Unpatched</span> | <span style="color:orange">Potentially patched</span> | <span style="color:red">Patched</span> |
| :----|:---------------------------------|:---------------------------------|:----------------------|
| XAW1 | XAW10000000000 to XAW10074000000 | XAW10074000000 to XAW10120000000 | XAW10120000000 and up |
| XAW4 | XAW40000000000 to XAW40011000000 | XAW40011000000 to XAW40012000000 | XAW40012000000 and up |
| XAW7 | XAW70000000000 to XAW70017800000 | XAW70017800000 to XAW70030000000 | XAW70030000000 and up |
| XAJ1 | XAJ10000000000 to XAJ10020000000 | XAJ10020000000 to XAJ10030000000 | XAJ10030000000 and up |
| XAJ4 | XAJ40000000000 to XAJ40046000000 | XAJ40046000000 to XAJ40060000000 | XAJ40060000000 and up |
| XAJ7 | XAJ70000000000 to XAJ70040000000 | XAJ70040000000 to XAJ70050000000 | XAJ70050000000 and up |
| XAK1 | **N/A**                          | XAK10000000000 and up            | **N/A**               |

If your serial number is not listed above, your device is not vulnerable to the fusee-gelee exploit.

## Version Table

::: tip

**Note**

While the "New" Switch (HAC-001(-01)'s earliest possible firmware is 7.0.1, it is **not** vulnerable to *déjà vu*, the exploit used by Nereba and Caffeine, because of hardware differences from the "old" Switch (HAC-001).

:::

| Firmware Version | Unpatched Switch systems (HAC-001)    | Patched Switch systems (HAC-001) | "New" Switch (HAC-001(-01)  | Switch Lite (HDH-001)                                |
|:-----------------|:--------------------------------------|:---------------------------------|:----------------------------|:-----------------------------------------------------|
| 1.0.0            | Nereba or [**RCM**](rcm/index)     | **N/A**                          | **N/A**                     | **N/A**                                              |
| 2.0.0 - 3.0.2    | Caffeine or [**RCM**](rcm/index)   | **N/A**                          | **N/A**                     | **N/A**                                              |
| 4.0.0 - 4.1.0    | Caffeine or [**RCM**](rcm/index)   | Caffeine                         | **N/A**                     | **N/A**                                              |
| 5.0.0 - 7.0.0    | [**RCM**](rcm/index)               | [**Modchip**](modchip/index) / Wait for CFW                 | **N/A**                     | **N/A**                |
| 7.0.1            | [**RCM**](rcm/index)               | [**Modchip**](modchip/index) (no software exploit)          | [**Modchip**](modchip/index) (no software exploit)| **N/A**  |
| 8.0.1            | [**RCM**](rcm/index)               | [**Modchip**](modchip/index) (no software exploit)          | [**Modchip**](modchip/index) (no software exploit)| [**Modchip**](modchip/index) (no software exploit)|
| 8.1.0 and up     | [**RCM**](rcm/index)               | [**Modchip**](modchip/index) (no software exploit)          | [**Modchip**](modchip/index) (no software exploit)| [**Modchip**](modchip/index) (no software exploit)|

::: tip

**About Mariko Switch models**

All Mariko (V2) Switch models (`HAC-001(-01)`, `HDH-001`, `HEG-001`) are currently unhackable via software. If **Modchip** is listed as a method for your console model, then that means the device is currently unhackable without a hardware modification (modchip). If there are theoretical exploits that may lead to CFW or homebrew for that device, you also have the choice to "wait" for their release. These exploits may (and will likely) never launch and there is **NO ETA**, so what you choose to do is up to you. This guide assumes you have a functional modchip installation if you *do* have a Patched console.

:::

## **Console Preparation**

### Important

Before setting up for homebrew, install at least one eShop title to utilize "title takeover", an Atmosphère feature that allows homebrew to use more resources than they would normally have. Try downloading a free game (like [Fallout Shelter](https://www.nintendo.com/games/detail/fallout-shelter-switch/)), application (like [YouTube](https://www.nintendo.com/games/detail/youtube-switch/)), or a game demo (like [10 Second Run RETURNS](https://www.nintendo.com/games/detail/10-second-run-returns-switch)). Running the Homebrew Menu via a game cartridge is an alternative, but requires the game to be inserted any time you want to launch the Homebrew Menu. Generally, title takeover doesn't permanently alter the donor game or application. <br> Once you obtain any bootable title, you are prepared to continue on with the guide.

-----

::: tip

**If your Switch is not patched, click the button below to follow the RCM path of the guide.**

[Continue to RCM](rcm/index)

:::

::: tip

**If your Switch is patched and modchipped, click the button below to follow the Modchip path of the guide.**

[Continue to Modchip introduction](modchip/index)

:::

::: details Frequently Asked Questions about this page

- **Q: How reliable is the crowdsourced list of vulnerable serial numbers, and what if my serial number is not listed?**

    A: To our knowledge, there hasn't been a single console which has disproved the trends documented here. Unless your serial is potentially patched, you can be certain that the table is accurate to reality.

- **Q: Why is it essential to install at least one eShop title before setting up homebrew, and what is "title takeover"?**

    A: By default, the homebrew menu and its apps inherit the resources of the Album applet. Applets don't have as many system resources as full apps, and as such have inconsistent behavior when used for homebrew purposes. Title takeover ensures the best performance, and is required for some homebrew.

- **Q: Why is the "New" Switch (HAC-001(-01)) not vulnerable to *déjà vu*, and what are the implications for Switch Lite (HDH-001) and OLED Switch consoles?**

    A: Despite being exploitable via software, *déjà vu* is actually a bootROM exploit that isn't present in the new bootROM of the Tegra X1+.

:::
