# Reper2's ACNH Website
readme is unfinished, will be finished really soon.

> ![favicon](./favicon.ico)  
> Reper2's Animal Crossing: New Horizons website. Includes: complete album of Reper2's acnh photos & videos, hhn showroom, all of Reper2's custom designs (as well as design sets), preview of Reper2's island, Sprinkle order files, and other links to profiles & etc.
> ![large_image](./meta.png)

# Features:
- [Nearly 500 backgrounds][bg] (that change to a different background every time you refresh the page)
- [Evently backgrounds for many events that are held in acnh][bg]
- [Hourly & evently music just like in the game][mus]
- Message box like in acnh (using [acnhmsgbox npm library][acnhmsgbox])
- [Keyboard shortcuts](https://reper2.github.io/acnh/kbd)
- [Notifications about events][notif]
- Installable
- And much much more...

# NookPhone Apps:
Some of these may still be under construction.
- [Album](https://reper2.github.io/acnh/#album): Download the complete album of my acnh screenshots & videos
- [DodoCodes Profile](https://reper2.github.io/acnh/#dodocodes): My DodoCodes.com profile
- [Sprinkle Order Files](https://reper2.github/acnh/sprinkle/): Download my Sprinkle order files
- [ACNH Apps](https://reper2.github/acnh-apps/): Animal Crossing New Horizons Apps is a website with useful apps for you to use
- [Nookazon Profile](https://reper2.github.io/acnh/#nookazon): My Nookazon profile
- [GitHub Repository](): Link to this GitHub repository
- [Designs](https://reper2.github.io/acnh/#designs) -> [Design Sets][https://reper2.github.io]: My Custom Designs and Design Sets
- [Island Preview](https://reper2.github.io/acnh/#isprev): 51 previews of my island
- [HHN Showroom](https://reper2.github.io/acnh/#showroom): My Happy Home Network Showroom

# Dependencies & Submodules
These are the npm libraries and github submodules that make up part of the website or are invloved in the development.

## Dependencies
- [acnhmsgbox][acnhmsgbox]

## DevDependencies
- [http-server][http-server]

## Submodules
- [acnhmsgbox][acnhmsgbox]

[View Dependencies][pkg]  
[View Submodules][gitmod]

# Service Workers
- [Main Service Worker][sw]
- [Notifications Service Worker][notif]

# Libraries
- [jQuery][jQuery] - [Source][g_jQuery]

# Modules
| Module | Description | Imports | Exports | Used By
| :---: | :---: | :---: | :---: | :---:
| [back.mjs][back] | Creates a back button in top-left corner of the page. | [`path`][path] | | [sprinkle][sprinkle], [designs][designs], [sets][sets], [island][island], [hhn][hhn]
| [background.mjs][bg] | Randomised backgrounds including evently backgrounds for some acnh events. | [`time`][time], [`con`][con], [`events`][events], [`hours`][hours] | | [home][home], [sprinkle][sprinkle], [designs][designs], [sets][sets], [island][island]
| [`con`][con] | Common console messages. | | { `cur`, `tdy`, `bg` } | [music.mjs][mus], [background.mjs][bg]
| [`events`][events] | ACNH event dates. | [`time`][time] | { `intlmusday`, `maydaytour`, `wedseas`, `winter`, `bday`, `halloween`, `toyday`, `nye`, `nye_1h`, `nye_30m`, `nye_10m`, `nye_5m`, `nye_hny`, `nye_midn` } | [music.mjs][mus], [background.mjs][bg]
| [`hours`][hours] | Hours of the day. | [`time`][time] | { `am_12`, `am_01`, `am_02`, `am_03`, `am_04`, `am_05`, `am_06`, `am_07`, `am_08`, `am_09`, `am_10`, `am_11`, `pm_12`, `pm_01`, `pm_02`, `pm_03`, `pm_04`, `pm_05`, `pm_06`, `pm_07`, `pm_08`, `pm_09`, `pm_10`, `pm_11` } | [music.mjs][mus], [background.mjs][bg]
| [music.mjs][mus] | Hourly and evently music just like in acnh. | [`time`][time], [`con`][con], [`events`][events], [`hours`][hours] | | [home][home], [sprinkle][sprinkle], [designs][designs], [sets][sets], [island][island], [hhn][hhn]
| [`path`][path] | File path control center for scripts. | | { `b`, `bg`, `bg_n`, `mus`, `mus_e`, `mus_n`, `mus_h`, `mus_s` } | [music.mjs][mus], [background.mjs][bg], [back.mjs][back]
| [`time`][time] | Common time variables. | | { `tdy`, `Y`, `M`, `d`, `D`, `h`, `m`, `s`, `ms`, `t`, `Y_M_d_t_s_ms__t`, `D_h`, `D_t` } | [music.mjs][mus], [background.mjs][bg], [`events`][events], [`hours`][hours]

<details>
    <summary>Show Graph</summary>

```mermaid
graph TD;
    back.mjs-->sprinkle;
    back.mjs-->designs;
    back.mjs-->sets;
    back.mjs-->island;
    back.mjs-->hhn;

    background.mjs-->home;
    background.mjs-->sprinkle;
    background.mjs-->designs;
    background.mjs-->sets;
    background.mjs-->island;

    con-->background.mjs;
    con-->music.mjs;

    events-->background.mjs;
    events-->music.mjs;

    hours-->music.mjs;

    kbd.mjs-->home;
    kbd.mjs-->sprinkle;
    kbd.mjs-->designs;
    kbd.mjs-->sets;
    kbd.mjs-->island;
    kbd.mjs-->hhn;
    kbd.mjs-->kbd;

    music.mjs-->home;
    music.mjs-->sprinkle;
    music.mjs-->designs;
    music.mjs-->sets;
    music.mjs-->island;
    music.mjs-->hhn;

    path-->back.mjs;
    path-->background.mjs;
    path-->music.mjs;

    time-->background.mjs;
    time-->events;
    time-->hours;
    time-->music.mjs;
```
</details>

---

# Normal Scripts
These are the regular scripts that make up the website without the imports or exports of modules.
| Script | Description | Used By |
| :---: | :---: | :---: |
| [acnhmsgbox_home.js][msgbox_home] | Creates the message box like in acnh on the home page using [acnhmsgbox][acnhmsgbox]. | [home][home]
| [acnhmsgbox_comingsoon.js][msgbox_comingsoon] | Creates a message box like in acnh on the Coming Soon page using [acnhmsgbox][acnhmsgbox]. | [comingsoon.html][comingsoon]
| [audio-controls.js][audctrls] | Creates shows/hide button that allows you to show or hide audio controls for accessability when autoplay doesn't work. | [home][home], [sprinkle][sprinkle], [designs][designs], [sets][sets], [island][island], [hhn][hhn]
| [clipboard.js][clipboard] | Enables copying of a link to a section on the page via the `copyLink()` function. | [island][island], [hhn][hhn]
| [clock.js][clock] | Displays the current time on the NookPhone. | [home][home]
| [copyBtn.js][copyBtn] | Creates a button that copys the link to the page. | [home][home], [sprinkle][sprinkle], [designs][designs], [sets][sets], [island][island], [hhn][hhn]
| [copyright.js][copyright] | Adds copyright information to the bottom of the page. | [home][home], [sprinkle][sprinkle], [designs][designs], [sets][sets], [island][island], [hhn][hhn] 
| [download.js][download] | Download confirmation for the file in context. | [sprinkle][sprinkle], [designs][designs], [sets][sets]
| [footer.js][footer] | Adds the footer to the page. | [home][home], [sprinkle][sprinkle], [designs][designs], [sets][sets], [island][island], [hhn][hhn]
| [isprev.js][isprev] | The script for the [Island Preview][island] page. | [island][island]
| [showroom.js][showroom] | The script for the [HHN Showroom][hhn] page. | [hhn][hhn]

<details>
    <summary>Show Graph</summary>

```mermaid
graph LR;
    acnhmsgbox_home.js-->home;
    acnhmsgbox_comingsoon.js-->comingsoon;

    audio-controls.js-->home;
    audio-controls.js-->sprinkle;
    audio-controls.js-->designs;
    audio-controls.js-->sets;
    audio-controls.js-->island;
    audio-controls.js-->hhn;

    clipboard.js-->island;
    clipboard.js-->hhn;

    clock.js-->home;

    copyBtn.js-->home;
    copyBtn.js-->sprinkle;
    copyBtn.js-->designs;
    copyBtn.js-->sets;
    copyBtn.js-->island;
    copyBtn.js-->hhn;
    copyBtn.js-->kbd;

    copyright.js-->home;
    copyright.js-->sprinkle;
    copyright.js-->designs;
    copyright.js-->sets;
    copyright.js-->island;
    copyright.js-->hhn;
    copyright.js-->kbd;

    download.js-->sprinkle;
    download.js-->designs;
    download.js-->sets;

    footer.js-->home;
    footer.js-->sprinkle;
    footer.js-->designs;
    footer.js-->sets;
    footer.js-->island;
    footer.js-->hhn;
    footer.js-->kbd;

    isprev.js-->island;

    showroom.js-->hhn;
```
</details>

---

<!-- Sources -->
[home]: [index.html]
[sprinkle]: [sprinkle/index.html]
[designs]: [designs/index.html]
[sets]: [designs/sets/index.html]
[island]: [island/index.html]
[hhn]: [hhn/index.html]
[comingsoon]: [comingsoon.html]

<!-- Modules -->
[back]: [scripts/modules/back.mjs]
[bg]: [scripts/modules/backgrounds.mjs]
[con]: [scripts/modules/console.mjs]
[events]: [scripts/modules/events.mjs]
[hours]: [scripts/modules/hours.mjs]
[kbd]: [scripts/modules/kbd.mjs]
[mus]: [scripts/modules/music.mjs]
[path]: [scripts/modules/path.mjs]
[swi]: [scripts/modules/sw-installer.mjs]
[time]: [scripts/modules/time.mjs]

<!-- Scripts -->
[msgbox_home]: [scripts/acnhmsgbox_home.js]
[msgbox_comingsoon]: [scripts/acnhmsgbox_comingsoon.js]
[audctrls]: [scripts/audio-controls.js]
[clipboard]: [scripts/clipboard.js]
[clock]: [scripts/clock.js]
[copyBtn]: [scripts/copyBtn.js]
[copyright]: [scripts/copyright.js]
[download]: [scripts/download.js]
[footer]: [scripts/footer.js]
[isprev]: [scripts/isprev.js]
[showroom]: [scripts/showroom.js]

<!-- Other -->
[acnhmsgbox]: [https://npmjs.com/package/acnhmsgbox]
[http-server]: [https://npmjs.com/package/http-server]
[jQuery]: [scripts/jquery.min.js]
[g_jQuery]: [https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js]
[sw]: [sw.js]
[notif]: [scripts/notifications.js]
[pkg]: [package.json]
[gitmod]: [.gitmodules]