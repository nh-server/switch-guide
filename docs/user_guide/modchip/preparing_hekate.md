# Payload and bootloader folder placement

To get ready for formatting/partitioning your microSD card, we will need to prepare your microSD card with the required files.

### **What you need:**
- The latest release of <a href="https://github.com/CTCaer/Hekate/releases/" target="_blank">Hekate</a> (Download the `hekate_ctcaer_(version).zip` release of Hekate)
- Your microSD card


### **Instructions:**

1. Extract the Hekate `.zip` to a location on your computer.
2. Insert your microSD card into your computer.
3. Inside of the extracted Hekate folder, you will find `/bootloader` and `hekate_ctcaer_(version).bin`
4. Copy the `bootloader` folder and `hekate_ctcaer_(version).bin` payload to the root of your microSD card.
5. Rename the `hekate_ctcaer_(version).bin` payload to `payload.bin`
6. Copy the `Nintendo` folder from the root of your microSD to a safe space on your device.
7. Insert your microSD card back into your Switch, then turn it on.
8. You should now be loaded into Hekate within seconds. If not, consult the warning message below.

!!! warning
    If your Switch does not load into Hekate or shows a `NO SD`/`No Payload` screen when turning on the console, ensure that you inserted your microSD card and renamed the Hekate payload to `payload.bin` exactly.


[Continue to choosing your CFW environment :material-arrow-right:](../all/cfw_environment.md){ .md-button .md-button--primary }
