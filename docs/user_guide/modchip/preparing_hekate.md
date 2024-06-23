# **Payload and bootloader folder placement**

To get ready for formatting and/or partitioning your microSD card, we will need to prepare and place the required files on the microSD card.

!!! danger "Following the guide will delete everything on your microSD card!"
    Later in the guide, you will be formatting and/or partitioning your microSD card. This means that all data on the microSD card will be lost. Now is a good time to back up *all* of its data to a safe place (for example, on your PC or external drive) so that you can restore it later. You can do this by following the instructions below.

-----


#### **What you need:**
- The latest release of <a href="https://github.com/CTCaer/Hekate/releases/" target="_blank">Hekate</a> (Download the `hekate_ctcaer_(version).zip` release of Hekate)
- Your microSD card

#### **Instructions:**

1. Extract the Hekate `.zip` to a location on your computer.
2. Insert your microSD card into your computer.
3. Copy the `Nintendo` folder (and any other important data) from the root of your microSD card to a safe space on your device.
4. Inside of the extracted Hekate folder, you will find the `bootloader` folder and the `hekate_ctcaer_(version).bin` payload.
5. Copy the `bootloader` folder and `hekate_ctcaer_(version).bin` payload to the root of your microSD card.
6. Rename the `hekate_ctcaer_(version).bin` payload to `payload.bin`
7. Insert your microSD card back into your Switch, then turn it on.
8. You should now be loaded into the Hekate GUI (Nyx), pictured below, within seconds.
![Nyx](../all/img/nyx.bmp){ width="600" }
    - If you are unable to load into Nyx, consult the warning message below.

!!! warning
    If your Switch does not load into the Hekate GUI, or shows a `No SD Card`/`No Payload` screen when turning on the console, ensure that you inserted your microSD card and that Hekate's `payload.bin` is on the root of the microSD card.


[Continue to choosing your CFW environment :material-arrow-right:](../all/cfw_environment.md){ .md-button .md-button--primary }

??? "Frequently Asked Questions about this page"
      **Q: Can I use a microSD card with existing data, or does it need to be formatted specifically for this process?** <br>
      A: It is recommended that you use a microSD that is already formatted as FAT32 before starting. In addition, it is important that the microSD card does not have any data from other Switch consoles already on it.

      **Q: What makes Hekate the recommended choice in this guide?** <br>
      A: Hekate is a polished, multi-purpose bootloader for the Switch. It has the tools to facilitate simple usage of custom firmware and custom operating systems, and aids with organisation and formatting later on in this guide. <br>

      **Q: How do you pronounce "Hekate"?**<br>
      A: Hekate comes from Greek. The most commonly accepted pronunciations are "HEK-ate", "HEK-uh-tee", and "hek-AH-tay".

      **Q: What role does the `/bootloader` folder play in the overall functionality of Hekate?**<br>
      A: The bootloader folder contains crucial parts of Hekate that can't fit in the injectable RCM/modchip payload, such as Nyx; Hekate's touch-enabled GUI. If you start Hekate without these files on your microSD, Hekate's functionality will be severely limited.

      **Q: How often should I check for updates to Hekate, and what benefits do newer releases bring to the process?**<br>
      A: Nintendo Homebrew's #announcements channel will automatically poll for updates to Atmosphère and Hekate, letting you know when updates are available for them. In general, you'll want to look for updates whenever a major Switch system update is launched, as major updates will stop Horizon from booting until Hekate and Atmosphère are updated accordingly.

      **Q: Does this process have any effect on the Switch's system or data?**<br>
      A: No, nothing in the guide has had any permanent effect on the Switch so far.
