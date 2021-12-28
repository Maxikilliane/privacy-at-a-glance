
let mainCategoryIcon, subCategoryIcon, overlay, mainContainer, iconContainer, textContainer, overlayBox, mainInformationText, subInformationText, acceptButton, declineButton,
    buttonContainer, lastShownTimestamp, currentMainIcon, currentSubIcon, reasonInput, questionText, heading;

let currentTime = Date.now();


chrome.storage.local.get('lastShownTimestamp', function(result) {
    if((currentTime - result['lastShownTimestamp']) / 1000 >= 3600) {
       createOverlay();
       createOverlayBox();
       createMainContainer();
       createIcons();
       createButtons();
       createInformationText();
       createInputField();
       createQuestion();
       appendAllChildren();
       setNewTimestamp();

       on();
    }
});

function createMainContainer() {
    mainContainer = document.createElement('div');
    mainContainer.setAttribute('id', 'icon-main-container');
    mainContainer.classList.add('icon-extension-row');
    heading = document.createElement('h4');
    heading.setAttribute('id', 'popup-function-heading');
    heading.classList.add('icon-extension-row');
    heading.innerHTML = "Informationen über aktuelle Webseite";
    mainContainer.appendChild(heading);
}

function createInputField() {
    reasonInput = document.createElement('textarea');
    reasonInput.setAttribute('id', 'reason-input');
    reasonInput.setAttribute('placeholder', 'Bitte Grund für ihre Auswahl eingeben');
    reasonInput.setAttribute('rows', '5');
    reasonInput.addEventListener('input', function() {
      if(reasonInput.value.trim().length > 0) {
        acceptButton.setAttribute('id', 'accept-button');
        declineButton.setAttribute('id', 'decline-button')
      }
    });

}

function createButtons() {
    createAcceptButton();
    createDeclineButton();
    createButtonContainer();
}

function createButtonContainer() {
    buttonContainer = document.createElement('div');
    buttonContainer.classList.add('icon-extension-row');
    buttonContainer.appendChild(acceptButton);
    buttonContainer.appendChild(declineButton);
    buttonContainer.setAttribute('id', 'buttonContainer');
}

function createAcceptButton() {
    acceptButton = document.createElement('button');
    acceptButton.innerHTML = "Annehmen";
    acceptButton.setAttribute('id', 'accept-button-inactive');
    acceptButton.classList.add('fs-button');
    acceptButton.addEventListener('click', function () {
        createNewLogEntry(true);
    });
}

function createDeclineButton() {
    declineButton = document.createElement('button');
    declineButton.innerHTML = "Ablehnen";
    declineButton.classList.add('fs-button');
    declineButton.setAttribute('id', 'decline-button-inactive');
    declineButton.addEventListener('click', function () {
        createNewLogEntry(false);
    });
}

function createQuestion() {
  questionText = document.createElement('h4');
  questionText.setAttribute('id', 'icon-question-text');
  questionText.innerHTML =  "Möchten Sie das zulassen?"
}

function createInformationText() {
    textContainer = document.createElement('div');
    textContainer.setAttribute('id', 'icon-text-container');
    textContainer.classList.add('icon-extension-col-9');

    mainInformationText = document.createElement('h4');
    mainInformationText.setAttribute('id', 'icon-main-information-text');

    subInformationText = document.createElement('h4');
    subInformationText.setAttribute('id', 'icon-sub-information-text');

    textContainer.appendChild(mainInformationText);
    textContainer.appendChild(subInformationText);
    mainContainer.appendChild(textContainer);
}

function createOverlayBox() {
    overlayBox = document.createElement('div');
    overlayBox.setAttribute('id', 'overlayBox');
}

function appendAllChildren() {
    overlay.appendChild(overlayBox);
    overlayBox.appendChild(mainContainer);
    overlayBox.appendChild(questionText);
    overlayBox.appendChild(reasonInput);
    overlayBox.appendChild(buttonContainer);
    document.body.appendChild(overlay);
}

function createOverlay() {
    overlay = document.createElement('overlay');
    overlay.setAttribute('id', 'overlay');
}

function createIcons() {
    mainCategoryIcon = document.createElement('img');
    subCategoryIcon = document.createElement('img');
    setupIconContainer();
    setupIcons();
}

function setupIcons() {
    chooseMainIcon();
}

function setupIconContainer() {
    iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-extension-row');
    iconContainer.setAttribute('id', 'icon-image-container');
    iconContainer.classList.add('icon-extension-col-3');

    iconContainer.appendChild(mainCategoryIcon);
    iconContainer.appendChild(subCategoryIcon);
    mainContainer.appendChild(iconContainer);
}


function displayMainIcon() {
    setMainIconAsUsed();
    chooseSubIcon();

    mainCategoryIcon.setAttribute('src', chrome.runtime.getURL(currentMainIcon['imagePath']));
    mainCategoryIcon.setAttribute('id', 'mainCategoryIcon');
    mainCategoryIcon.classList.add('icon-extension-col-7');
}

function displaySubIcon() {
    setSubIconAsUsed();
    setIconDescription();

    subCategoryIcon.setAttribute('src', chrome.runtime.getURL(currentSubIcon['imagePath']));
    subCategoryIcon.setAttribute('id', 'subCategoryIcon');
    subCategoryIcon.classList.add('icon-extension-col-5');
}

function setIconDescription() {
    let description = "" + currentMainIcon['description'] + "</br></br>" + currentSubIcon['description'];
    mainInformationText.innerHTML = currentMainIcon['description'];
    subInformationText.innerHTML = currentSubIcon['description'];
}



function setNewTimestamp() {
    chrome.storage.local.set({'lastShownTimestamp': Date.now().valueOf()}, function() {

    });
}

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
