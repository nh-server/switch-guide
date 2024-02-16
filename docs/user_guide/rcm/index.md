# RCM

### **About RCM**

RCM (short for **R**e**C**overy **M**ode) is a pre-boot mode for Tegra processors that allows NVIDIA and Nintendo to send the Switch tiny programs for various internal uses. On unpatched consoles, once a payload was sent,  then quickly copied into the memory buffer behind the stack, it overflowed the memory buffer into the stack. This leads to a  "smashed stack" and unsigned code execution within a bootROM context, giving us access to nearly everything on the console. We use it here to launch Atmosphère.

Before setting up for homebrew, install at least one eShop title to utilize "title takeover", an Atmosphère feature that allows homebrew to use more resources than they would normally have. Try downloading a free game (such as [Fallout Shelter](https://www.nintendo.com/games/detail/fallout-shelter-switch/)), application (such as [YouTube](https://www.nintendo.com/games/detail/youtube-switch/)), or a game demo (such as [10 Second Run RETURNS](https://www.nintendo.com/games/detail/10-second-run-returns-switch)). Running the Homebrew Menu via a game cartridge will also work, but it must be inserted every time you want to boot into homebrew. Title takeover does not permanently replace or remove the donor game/application, nor does it become tied to it specifically. Any installation or cartridge used for title takeover can always be used normally if you don't hold any buttons when booting that title. <br> Once you obtain any bootable title, you are prepared to continue on with the guide.

If you choose the emuMMC path introduced later in the guide, it'll be important to disable the [Automatic Save Data Cloud](https://en-americas-support.nintendo.com/app/answers/detail/a_id/41209) function beforehand, as well as making sure [the Switch is set as the primary console](https://en-americas-support.nintendo.com/app/answers/detail/a_id/22453/~/how-to-change-the-primary-console-for-your-nintendo-account). <br>


[Continue to Entering RCM :material-arrow-right:](entering_rcm.md){ .md-button .md-button--primary }

??? "Frequently Asked Questions about this page"
      - **Q: How does the RCM exploit work on unpatched Nintendo Switch consoles?** <br>
      A: For more information, please reference [this link](https://github.com/Qyriad/fusee-launcher/blob/master/report/fusee_gelee.md). There is also a Medium article about it [here](https://medium.com/@SoyLatteChen/inside-fus%C3%A9e-gel%C3%A9e-the-unpatchable-entrypoint-for-nintendo-switch-hacking-26f42026ada0).

      - **Q: Does RCM work on patched consoles?** <br>
      A: Yes. RCM is an intended mode for all Switch consoles. The exploit is the unintended effect that only some consoles can use. Consoles with the Tegra X1+ have a completely new bootROM with no evidence of the exploit, while "patched" V1 systems have an IROM patch to the bootROM applied that effectively removes fusee-gelee as well.
