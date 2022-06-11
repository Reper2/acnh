# Reper2's ACNH Website
> ![favicon](./favicon.ico)  
> Reper2's ACNH Website is a NookPhone which includes a download link to Reper2's acnh album, DodoCodes.com profile link, Sprinkle order files, Nookazon profile link, Custom Designs, Island Preview, Happy Home Network gallery, ACNH Apps. The same hourly and evently music from ACNH plays here too!
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
| [music.mjs][mus] | Hourly and evently music just like in acnh. | [`time`][time], [`con`][con], [`events`][events], [`hours`][hours] | | [index.html (root)][root], [index.html (sprinkle)][sprinkle], [index.html (designs)][designs], [index.html (designs/sets)][sets], [index.html (island)][island], [index.html (hhn)][hhn]
| [background.mjs][bg] | Randomised backgrounds including evently backgrounds for some acnh events. | [`time`][time], [`con`][con], [`events`][events] [`hours`][hours], [`excluded`][excluded] | | [index.html (root)][root], [index.html (sprinkle)][sprinkle], [index.html (designs)][designs], [index.html (designs/sets)][sets], [index.html (island)][island], [index.html (hhn)][hhn]
| [clock.mjs][clock] | Sends the current time to console in the format, "It is currently `time.Y_M_d_t_s_ms__t`" | [`time`][time], [`con`][con] | | [index.html (root)][root], [index.html (sprinkle)][sprinkle], [index.html (designs)][designs], [index.html (designs/sets)][sets], [index.html (island)][island], [index.html (hhn)][hhn]
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
    time-->clock.mjs;

    con-->music;
    con-->background.mjs;
    con-->clock.mjs;

    events-->music.mjs;
    events-->background.mjs;
    events-->excluded;

    excluded-->background.mjs;

    music.mjs-->website
    background.mjs-->website
    clock.mjs-->website
```

# Normal Scripts
These are the regular scripts that make up the website without the imports or exports of modules.
| Script | Description | Used By |
| :---: | :---: | :---: |
| [acnhmsgbox_home.js][msgbox_home] | Creates the message box like in acnh on the home page using [acnhmsgbox][acnhmsgbox]. | [index.html (root)][root]
| [acnhmsgbox_comingsoon.js][msgbox_comingsoon] | Creates a message box like in acnh on the Coming Soon page using [acnhmsgbox][acnhmsgbox]. | [comingsoon.html][comingsoon]
| [album.js][album] | The `downloadAlbum()` function. When triggered, asks you to confirm you want to download the ginormous zip file that has my entire album of acnh screenshots and videos. | [index.html (root)][root]
| [download.js][download] | The `downloadFile(filename)` function. When triggered, asks you to confirm you want to download the file in context. | [index.html (sprinkle)][sprinkle], [index.html (designs)][designs], [index.html (designs/sets)][sets], [index.html (hhn)][hhn]
| [footer.js][footer] | Appends the footer to the page. | [index.html (root)][root], [index.html (sprinkle)][sprinkle], [index.html (designs)][designs], [index.html (designs/sets)][sets], [index.html (island)][island], [index.html (hhn)][hhn]

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
[clock]: [./scripts/modules/clock.mjs]
[excluded]: [./scripts/modules/excluded.mjs]

[download]: [./scripts/download.js]
[footer]: [./scripts/footer.js]
[album]: [./scripts/album.js]
[msgbox_home]: [./scripts/acnhmsgbox_home.js]
[msgbox_comingsoon]: [./scripts/acnhmsgbox_comingsoon.js]

[acnhmsgbox]: [https://npmjs.com/package/acnhmsgbox]
[http-server]: [https://npmjs.com/package/http-server]