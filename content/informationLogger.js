
function createNewLogEntry(isAccepted) {
    if(reasonInput.value.trim().length > 0) {
        chrome.storage.local.get(['iconLog'], function (result) {
            let currentIconLog = {
                "categoryNumber": currentMainIcon['categoryNumber'],
                "subcategory": currentSubIcon['subcategory'],
                "subcategoryValue": currentSubIcon['subcategoryValue'],
                "timestamp": Date.now(),
                "accepted": isAccepted,
                "reason": reasonInput.value
            };

            console.log(result['iconLog']['logData']);
            result['iconLog']['logData'].push(currentIconLog);

            chrome.storage.local.set({'iconLog': result['iconLog']}, function () {

            });

            off();
        });
    } else {
        reasonInput.classList.add('empty-input-warning');
    }
}
