# RCM

RCM (short for **R**e**C**overy **M**ode) is a pre-boot mode for Tegra processors that allows NVIDIA and Nintendo to send the Switch tiny programs for various internal uses. On unpatched consoles, once a payload was sent,  then quickly copied into the memory buffer behind the stack, it overflowed the memory buffer into the stack. This leads to a  "smashed stack" and unsigned code execution within a bootROM context, giving us access to nearly everything on the console. We use it here to launch Atmosphère.

If you choose the emuMMC path introduced later in the guide, it'll be important to disable the [Automatic Save Data Cloud](https://en-americas-support.nintendo.com/app/answers/detail/a_id/41209) function beforehand, as well as making sure [the Switch is set as the primary Pass-Enabled console](https://en-americas-support.nintendo.com/app/answers/detail/a_id/41221/~/how-to-set-or-change-the-primary-nintendo-switch-console-for-a-nintendo-account). <br>

::: tip

[Continue to Entering RCM](entering_rcm)

:::

::: details Frequently Asked Questions about this page
- **Q: How does the RCM exploit work on unpatched Nintendo Switch consoles?**

    A: For more information, please reference [this page](../../fusee_gelee). There is also a Medium article about it [here](https://medium.com/@SoyLatteChen/inside-fus%C3%A9e-gel%C3%A9e-the-unpatchable-entrypoint-for-nintendo-switch-hacking-26f42026ada0).

- **Q: Does RCM work on patched consoles?**

    A: Yes. RCM is an intended mode for all Switch consoles. The exploit is the unintended effect that only some consoles can use. Consoles with the Tegra X1+ have a completely new bootROM with no evidence of the exploit, while "patched" V1 systems have an IROM patch to the bootROM applied that effectively removes fusee-gelee as well.

:::
