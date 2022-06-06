# Contributing Guidelines
If you wish to contribute to this project, you may  
a) submit ideas, bugs, feature via ISSUES page  
b) fix a problem, implement a desired new feature and create a pull request.

## In order to ensure a stable and secure code base, please:
* always VERIFY that your proposed change remains stable and functional in any circumstance.
* always use SECURE CODING practices and strive to maintain consistency in code-style
* have PATIENCE, it takes time to REVIEW your proposed change and make sure it's risk-free
* update the service worker files by using the workox command.

## Workbox
Production-ready service worker libraries and tooling. [Made by Google](https://developer.chrome.com/docs/workbox/the-ways-of-workbox/)

If you do not already have npm, run the following command in terminal to install it:
```
npm install
```

If you do not already have [workbox-cli](https://developer.chrome.com/docs/workbox/modules/workbox-cli/) installed, run the following command in terminal to install it:
```
npm install workbox-cli --global
```

Then, run the following command in terminal to ensure the service worker files are up-to-date with your change:
```
workbox generateSW workbox-config.js
```

## The following actions are FORBIDDEN and will lead to immediate REJECTION of proposed change:
* Defining unused functions.
* Defining unused variables.
* Storing values that never change in variable, if it is never changed, then make it a constant (if possible)
* Calling deprecated functions, please do not use them
* Using code obfuscation techniques
* Including binaries (NO exe, NO apk, NO intermediary binaries)
* Linking libraries not used in mainstream (please create issue, if good reason)
* Adding unused files or assets