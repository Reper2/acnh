# Reper2's ACNH Website
> ![favicon](./favicon.ico)  
> Reper2's Animal Crossing: New Horizons website. Includes: complete album of Reper2's acnh photos & videos, hhn showroom, all of Reper2's custom designs (as well as design sets), preview of Reper2's island, Sprinkle order files, and other links to profiles & etc.
> ![large_image](./meta.png)

# Features:
- 350+ backgrounds (that change to a different background every time you refresh the page)
- evently backgrounds for many events that are held in acnh
- hourly & evently music just like in the game
- message box like in acnh (using acnhmsgbox npm library)
- And much more...

# NookPhone Apps:
Some of these may still be under construction.
- **Album**: download the complete album of my acnh screenshots & videos
- **DodoCodes Profile**: my DodoCodes.com profile
- **Sprinkle Order Files**: download my Sprinkle order files
- **ACNH Apps**: Animal Crossing New Horizons Apps is a website with useful apps for you to use
- **Nookazon Profile**: my Nookazon profile
- **GitHub Repository**: link to this GitHub repository
- **Custom Designs, Design Sets**: my Custom Designs and Design Sets
- **Island Preview**: preview of my island
- **Happy Home Network Gallery**: my Happy Home Network gallery

# Dependencies & Submodules
These are the npm libraries and github repositories that make up part of the website or are invloved in the development.

## Dependencies
- [acnhmsgbox][acnhmsgbox]

## DevDependencies
- [http-server][http-server]

## Submodules
- [acnhmsgbox][acnhmsgbox]

[View Dependencies](./package.json)  
[View Submodules](./.gitmodules)

# Modules
| Module | Description | Imported Modules | Exported Variables, Constants, Functions, etc. | Used By
| :---: | :---: | :---: | :---: | :---:
| [music.mjs][mus] | Hourly and evently music just like in acnh. | [`time`][time], [`con`][con], [`events`][events], [`hours`][hours] | | [home][root], [sprinkle][sprinkle], [designs][designs], [sets][sets], [island][island], [hhn][hhn]
| [background.mjs][bg] | Randomised backgrounds including evently backgrounds for some acnh events. | [`time`][time], [`con`][con], [`events`][events] [`hours`][hours], [`excluded`][excluded] | | [home][root], [sprinkle][sprinkle], [designs][designs], [sets][sets], [island][island]
| [`time`][time] | Common time variables. | | { `tdy`, `Y`, `M`, `d`, `D`, `h`, `m`, `s`, `ms`, `t`, `Y_M_d_t_s_ms__t`, `D_h`, `D_t` } | [music.mjs][mus], [background.mjs][bg], [clock.mjs][clock], [`events`][events], [`hours`][hours], [`excluded`][excluded]
| [`con`][con] | Common console messages. | | { `cur`, `tdy`, `bg` } | [music.mjs][mus], [background.mjs][bg], [clock.mjs][clock]
| [`events`][events] | ACNH event dates. | [`time`][time] | { `intlmusday`, `maydaytour`, `wedseas`, `bday`, `h`, `toy`, `nye`, `nye_1h`, `nye_30m`, `nye_10m`, `nye_5m`, `nye_hny`, `nye_midn` } | [music.mjs][mus], [background.mjs][bg]
| [`excluded`][excluded] | Makes sure regular backgrounds don't intervene with event backgrounds. | [`events`][events] | `not` | [background.mjs][bg]
| [`hours`][hours] | Hours of the day. | [`time`][time] | { `am_12`, `am_01`, `am_02`, `am_03`, `am_04`, `am_05`, `am_06`, `am_07`, `am_08`, `am_09`, `am_10`, `am_11`, `pm_12`, `pm_01`, `pm_02`, `pm_03`, `pm_04`, `pm_05`, `pm_06`, `pm_07`, `pm_08`, `pm_09`, `pm_10`, `pm_11` } | [music.mjs][mus], [background.mjs][bg]

```mermaid
graph TD;
    time-->events;
    time-->hours;
    time-->music.mjs;
    time-->background.mjs;

    con-->music.mjs;
    con-->background.mjs;

    events-->music.mjs;
    events-->background.mjs;
    events-->excluded;

    excluded-->background.mjs;

    music.mjs-->home
    music.mjs-->sprinkle
    music.mjs-->designs
    music.mjs-->sets
    music.mjs-->island
    music.mjs-->hhn

    background.mjs-->home
    background.mjs-->sprinkle
    background.mjs-->designs
    background.mjs-->sets
    background.mjs-->island
```

# Normal Scripts
These are the regular scripts that make up the website without the imports or exports of modules.
| Script | Description | Used By |
| :---: | :---: | :---: |
| [clock.js][clock] | Displays the current time on the NookPhone. | [home][root]
| [album.js][album] | Download confirmation for downloading my complete album of acnh screenshots and videos. | [home][root]
| [download.js][download] | Download confirmation for whatever file is in the context. | [sprinkle][sprinkle], [designs][designs], [sets][sets]
| [showroom.js][showroom] | Lightbox script for the [Showroom][hhn]. | [hhn][hhn]
| [acnhmsgbox_home.js][msgbox_home] | Creates the message box like in acnh on the home page using [acnhmsgbox][acnhmsgbox]. | [home][root]
| [acnhmsgbox_comingsoon.js][msgbox_comingsoon] | Creates a message box like in acnh on the Coming Soon page using [acnhmsgbox][acnhmsgbox]. | [comingsoon.html][comingsoon]
| [audio-controls.js][audctrls] | Creates shows/hide button that allows you to show or hide audio controls for accessability when autoplay doesn't work. | [home][root], [sprinkle][sprinkle], [designs][designs], [sets][sets], [island][island], [hhn][hhn]
| [footer.js][footer] | Adds the footer to the page. | [home][root], [sprinkle][sprinkle], [designs][designs], [sets][sets], [island][island], [hhn][hhn]

```mermaid
graph LR;
    clock.js-->home

    album.js-->home

    download.js-->sprinkle
    download.js-->designs
    download.js-->sets

    showroom.js-->hhn

    acnhmsgbox_home.js-->home

    acnhmsgbox_comingsoon.js-->comingsoon.html

    audio-controls.js-->home
    audio-controls.js-->sprinkle
    audio-controls.js-->designs
    audio-controls.js-->sets
    audio-controls.js-->hhn

    footer.js-->home
    footer.js-->sprinkle
    footer.js-->designs
    footer.js-->sets
    footer.js-->hhn
```

[root]: [./index.html]
[designs]: [./designs/index.html]
[sets]: [./designs/sets/index.html]
[hhn]: [./hhn/index.html]
[island]: [./island/index/html]
[sprinkle]: [./sprinkle/index.html]
[comingsoon]: [./comingsoon.html]

[mus]: [./scripts/modules/music.mjs]
[bg]: [./scripts/modules/backgrounds.mjs]
[events]: [./scripts/modules/events.mjs]
[hours]: [./scripts/modules/hours.mjs]
[con]: [./scripts/modules/console.mjs]
[time]: [./scripts/modules/time.mjs]
[excluded]: [./scripts/modules/excluded.mjs]

[clock]: [./scripts/clock.js]
[album]: [./scripts/album.js]
[download]: [./scripts/download.js]
[msgbox_home]: [./scripts/acnhmsgbox_home.js]
[msgbox_comingsoon]: [./scripts/acnhmsgbox_comingsoon.js]
[showroom]: [./scripts/showroom.js]
[audctrls]: [./scripts/audio-controls.js]
[footer]: [./scripts/footer.js]

[acnhmsgbox]: [https://npmjs.com/package/acnhmsgbox]
[http-server]: [https://npmjs.com/package/http-server]