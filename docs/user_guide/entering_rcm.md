# Entering RCM

As the Switch uses a Tegra X1 processor, it has a special recovery mode that is, in most scenarios, useless for the end-user. Fortunately, due to the fusee-gelee vulnerability, this special mode acts as our gateway into CFW.

There are several methods of entering RCM (**R**e**C**overy **M**ode). The most affordable of these require nothing more than common household items, while the most reliable are very cheap ($10).

!!! danger "Patched Switch"
    Note that patched units **can** enter RCM, but it is useless to us on those systems. Also note that this is a different recovery mode than the one accessed by holding Volume Up, Volume Down, and Power.

!!! snippet "Note"
    The order of methods on this page is in the order of ease. The easiest to immediately accomplish are listed at the top, and the most advanced/difficult methods are at the bottom.

&nbsp;

### Instructions

!!! tip ""
    1. Power off the Switch and use one of the methods listed below to short the pins.
    2. Hold Volume Up and press the Power button.
     
    If your Switch displays the Nintendo logo and boots normally or immediately shuts down, you didn't successfully enter RCM and should try again.

!!! tip ""
    ### Tinfoil
    <details>
        <summary>Click to expand!</summary>
    
    !!! snippet "Note"
        This method will result in the right Joy-Con being detected as in wireless mode while attached to the Switch, and this method may result in the Joy-Con being permanently detected as wireless if you update the Joy-Con firmware while this mod is installed. In the latter case, fixing this requires opening up the Joy-Con and reseating the battery. It is recommended that you only use this to get into RCM, and immediately remove it once you're successfully in RCM.

    !!! snippet "Note"
        Take care to not short pin 4 by accident while the system is on. This pin provides power to the Joy-Con, so shorting it by accident may damage your Switch permanently.

    This method entails putting a thin piece of tinfoil in between pins 9 and 10 on the Joy-Con, and the Joy-Con rail, then folding the foil over the back of the rail to tape it in place. This is best done by taking a 1 square inch piece of tinfoil, and folding it multiple times.

    !!! tip ""
        <iframe width=100% height=430 src="https://www.youtube.com/embed/dm6hxGbZZj4"> </iframe>
</details>

!!! tip ""
    ### Metal Bridge / Paperclip
    <details>
        <summary>Click to expand!</summary>
    
    !!! snippet "Note"
        This method is not recommended due to having a serious risk of permanently damaging your Switch's right Joy-Con rail. It is listed here as it is utilizing household items, but it is highly recommended to either do the tinfoil method or to order an RCM jig. This risk is made exponentially higher if a tool such as a screwdriver is used instead of a metal wire or paperclip.

    !!! snippet "Note"
        Take care to not short pin 4 by accident while the system is on. This pin provides power to the Joy-Con, so shorting it by accident may damage your Switch permanently.

    This method entails taking a piece of metal (such as a paperclip or screwdriver) and bending it so that it touches pins 1 and 10, or any other grounded piece of metal and pin 10.

    Here are some examples of shorting pins 1 and 10 using a wire from HowDenKing#0001 on our Discord server.

    !!! tip ""
        ![HowDenKing Paperclip Reference 1](../user_guide/img/entering_rcm_paperclip_hdk_1.jpg)

    !!! tip ""
        ![HowDenKing Paperclip Reference 2](../user_guide/img/entering_rcm_paperclip_hdk_2.jpg)
</details>

!!! tip ""
    ### RCM Jig
    <details>
        <summary>Click to expand!</summary>
    
    !!! snippet "Note"
        Some jig designs use paperclips, inheriting the same risks as the Metal Bridge / Paperclip method. If you would like a safe jig design, we highly recommend [switchjigs.com](https://switchjigs.com).

    This method is similar to the Metal Bridge / Paperclip method, but is more reliable and safer in many cases. Jigs hold a wire in place so the correct pins are shorted every time.

    Jigs range in price, with the ones we recommend being $10. They're more expensive than other jigs, but spending $10 on a quality jig using 32-gauge wire is a smaller cost than replacing your entire Joy-Con rail after the pins are scratched off by a paperclip jig.

    !!! tip ""
        ![switchjigs.com jigs](../user_guide/img/entering_rcm_jig.jpg)
</details>

!!! tip ""
    ### Bent Joy-Con Pins
    <details>
        <summary>Click to expand!</summary>
    
    !!! snippet "Note"
        This method will result in the right Joy-Con being detected as in wireless mode while attached to the Switch, and this method may result in the Joy-Con being permanently detected as wireless if you update the Joy-Con firmware while this mod is installed. In the latter case, fixing this requires opening up the Joy-Con and reseating the battery.

    !!! snippet "Note"
        This method requires opening your right Joy-Con, voiding its warranty. Not for the faint of heart.

    The goal of this method is to open the Joy-Con to the point that you can reach the contact pads easily, and use a thin object such as a knife to gently bend pin 9 onto pin 10, shorting them.

    Here is an example from Sonlen#0666 on our Discord server.

    !!! tip ""
        ![Sonlen example](../user_guide/img/entering_rcm_bent_pins.jpg)
</details>

!!! tip ""
    ### Soldered Joy-Con Pads - 9 & 10 
    <details>
        <summary>Click to expand!</summary>
    
    !!! snippet "Note"
        This method will result in the right Joy-Con being detected as in wireless mode while attached to the Switch, and this method may result in the Joy-Con being permanently detected as wireless if you update the Joy-Con firmware while this mod is installed. In the latter case, fixing this requires opening up the Joy-Con and reseating the battery. It is recommended to solder pads 7 and 10 together with a resistor instead.

    !!! snippet "Note"
        This method requires opening your right Joy-Con, voiding its warranty. Not for the faint of heart.

    This is similar to the previous method, however the goal is to solder pads 9 and 10 together.

    Here is an example from YyAoMmIi#3705 on our Discord server.

    !!! tip ""
        ![YyAoMmIi solder example](../user_guide/img/entering_rcm_solder_910_yyaommii.jpg)
</details>

!!! tip ""
    ### Soldered Joy-Con Pads - 7 & 10
    <details>
        <summary>Click to expand!</summary>
    
    !!! snippet "Note"
        This method requires opening your right Joy-Con, voiding its warranty. Not for the faint of heart.

    This is similar to the previous method, however the goal is to solder pins 7 and 10 together with a surface-mount 0805 10k resistor. Apart from using a reed switch, this is currently considered the safest method that involves soldering to pads.

    Here is an example from stuckpixel#3421 on the ReSwitched Discord server.

    !!! tip ""
        ![stuckpixel solder example](../user_guide/img/entering_rcm_solder_710_stuckpixel.jpg)
</details>

&nbsp;

#### [Continue to Sending a Payload](sending_payload.md)
