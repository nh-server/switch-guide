# Alternate boot setups

If you need to troubleshoot something, or need to try a different boot setup, read on.

::: danger

**Do I need any of these?**

Unless you are experiencing problems with booting or Atmosphère itself, it's strongly recommended to use the main guide instead of these. They are provided for the sake of completeness.

:::

## Chainloading Fusee from hekate

- The latest release of [hekate](https://github.com/CTCaer/hekate/releases/)
- The latest release of [Atmosphère](https://github.com/Atmosphere-NX/Atmosphere/releases)
    - You will need to download both the release zip and the `fusee.bin`

### Instructions:

1. Insert your Switch's microSD card into your PC.
1. Copy *the contents of* the Atmosphere `.zip` file to the root of your microSD card.
1. Copy the `bootloader` folder from the hekate `.zip` file to the root of your microSD card.
1. Copy `fusee.bin` to the `sd:/bootloader/payloads` folder on your microSD card.
1. The setup is complete, you can inject the hekate payload (Unpatched Switch users) or place the hekate payload on the root of your microSD card and rename it to `payload.bin` (Modchipped Switch users).
1. Navigate to and select `Payloads` > `fusee.bin`.
    - Note: `fusee` uses a set boot order that is not as easily configurable as hekate. Its boot order is `emuMMC` > `sysCFW` > `stock`.
    If an emuMMC isn't present, it will boot into sysCFW for example. Make sure you have a method of blocking Nintendo's servers set up (such as [DNS-MITM](../extras/blocking_nintendo#instructions-ams-dns-redirection)) if you do use `fusee` and have an `emuMMC`.

## Using Fusee without hekate

This method will *not* work for Modchipped Switch users.

- The latest release of [Atmosphère](https://github.com/Atmosphere-NX/Atmosphere/releases)
    - You will need to download both the release zip and the `fusee.bin`

### Instructions:

1. Insert your Switch's microSD card into your PC.
1. Copy *the contents of* the Atmosphere `.zip` file to the root of your microSD card.
1. The setup is complete, you can inject the `fusee.bin` payload.
    - Note: `fusee` uses a set boot order that is not as easily configurable as hekate. Its boot order is `emuMMC` > `sysCFW` > `stock`.
    If an emuMMC isn't present, it will boot into sysCFW for example. Make sure you have a method of blocking Nintendo's servers set up (such as [DNS-MITM](../extras/blocking_nintendo#instructions-ams-dns-redirection)) if you do use `fusee` and have an `emuMMC`.
