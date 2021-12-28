# Privacy-Icons Browser Extension

This extension was developed for a diary study as part of a paper about visualizing privacy policies with icons. For further information about this study, please submit an issue or otherwise get in contact with the maintainers of this repository. We will gladly share our seminar paper with you. In addition to the extension, this repository contains the icon set that resulted from our first study. The set can be found in the folder ['iconset'](./iconset/).

The extension works on Chrome and Firefox browsers. Every hour of browsing it displays a popup with two icons and a descriptive text next to them. These elements are chosen randomly from a set of predetermined icons, but are meant to emulate possible privacy policies that the visited page might imposed. The user can then close the popup by either hitting the 'Accept' or 'Decline' button, but only after they entered a reason for their choice.


## Installation

### For Firefox:
1. Download the file 'icon_extension-1.7-fx.xpi' from the repository's main folder (alternatively download the whole repository and find the file within the downloaded folder).
2. Open Firefox and type 'about:addons' in the browser's address bar.
3. Click on the cogwheel at the top right and select 'Install add-on from file'.
4. Browse to the file downloaded in the first step and open it.
5. The extension is now added to your Firefox.


### For Chrome:
1. Download the whole repository as .zip ('Clone or download' in the top right, then Download as .zip).
2. Extract the .zip file. You need to keep the extracted files on your PC for as long as you want the extension to work.
3. Open chrome and type 'chrome://extensions' in the browser's address bar.
4. Enable Developer Mode by clicking the toggle switch next to "Developer mode".
5. Click the "load unpacked" button and select the extension directory.
6. The extension is now added to Chrome.


## Data logging

While using the extension, some user data is stored locally. The stored logs include the following data:
- Timestamp of when the popup was displayed
- Which icons were shown
- Which button was pressed (accept/decline)
- The user's text input (reason)

Sensible data, such as IP-Addresses or which sites were visited are **not** being logged. The data is only stored locally and not transmitted.

### Reading logged data on Firefox:

1. Open Firefox and type 'about:debugging' into the address bar
2. Click on 'This Firefox' in the menu on the left
3. Locate the entry for the icon extension and click 'Inspect'
4. A developer Window should open. Click on the header tab 'Console'
5. Copy and paste the following code segment into the console:
```javascript
window.browser.storage.local.get(null, function(items) {
var blob = new Blob([JSON.stringify(items, null,' ')], {type: "text/plain"});
var url = URL.createObjectURL(blob);
window.browser.tabs.create({ url: url });
window.browser.downloads.download({ url: url });
});
```
6. A warning might pop up if this is the first time you paste code into the developer console. Read the warning, then type 'allow paste' into the console.
7. Press enter to run the pasted code fragment. A window with the logged data should pop up, which can be saved.

For more detailed instructions with screenshots please [see here](https://drive.google.com/open?id=1xKIsF-0Wtd1TfMIvmG24_sJ-F1UkTl1L) (German instructions)


### Reading logged data on Chrome:

1. Open chrome and go to this link: https://chrome.google.com/webstore/search/Storage%20Area%20Explorer?hl=de
2. Install the plugin "Storage Area Explorer" by "jusio", which should be the first result.
3. Type 'chrome://extensions' into the browser's address bar
4. Find the entry for the icon extension, and click on the link 'background page (inactive)'
5. A developer window should pop up. Click on the double-arrow ">>" and choose 'Storage Explorer' from the dropdown menu
6. Click the 'Export' Button and choose 'To file'
7. The log data should now be saving and can be found in your default Chrome downloads folder (ctrl + j)

For more detailed instructions with screenshots please [see here](https://drive.google.com/open?id=1Syfe0kH2Qq1IpiOQhIaVMGY82XiWEg03) (German instructions)


