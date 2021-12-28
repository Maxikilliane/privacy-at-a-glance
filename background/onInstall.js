


chrome.runtime.onInstalled.addListener(function () {
    var mainCategoryImages, subCategoryImages, dummyDate, iconLog;

    mainCategoryImages = {
        "1":
            {
                "categoryNumber" : 1,
                "imagePath": "res/MainCategory/mainCat1_black.png",
                "description": "Wir sammeln und nutzen Daten über Dich."
            },
        "2":
            {
                "categoryNumber" : 2,
                "imagePath": "res/MainCategory/mainCat2_black.png",
                "description": "Einige der Inhalte, Werbung und Funktionen unseres Dienstes können von Dritten bereitgestellt werden, z.B. von unseren Werbetreibenden. Diese Dritten können bestimmte Informationen über Ihre Nutzung der Dienste sammeln oder erhalten."
            },
        "3":
            {
                "categoryNumber" : 5,
                "imagePath": "res/MainCategory/mainCat5_black.png",
                "description": "Es werden alle Information, die Sie auf unserer Website eingeben oder uns auf andere Weise mitteilen, gespeichert. Solange es notwendig ist oder auch länger, wenn dies vom Gesetz erlaubt oder verlangt wird."
            },
    };


    subCategoryImages =
        {
            "2":
                {
                    "subcategory" : "Personal Information Type",
                    "subcategoryValue" : "Contact Information",
                    "imagePath" : "res/SubCategory/subCat_PIT_Contact.png",
                    "description" : "Es werden Kontaktinformationen gesammelt. Zum Beispiel Ihr Name und Ihre Adresse. Möglicherweise auch Ihre Telefonnummer oder E-Mail-Adresse."
                },
            "4":
                {
                    "subcategory" : "Personal Information Type",
                    "subcategoryValue" : "Payment Information",
                    "imagePath" : "res/SubCategory/subCat_PIT_Finance.png",
                    "description" : "Es werden Zahlungs- und Rechnungsinformationen gespeichert. Es werden auch Kreditinformationen von Kreditbüros geesammelt, die verwendet werden, um Betrug zu verhindern und aufzudecken und um bestimmte Kredit- oder Finanzdienstleistungen anzubieten."
                },
            "8":
                {
                    "subcategory" : "Personal Information Type",
                    "subcategoryValue" : "User Activity",
                    "imagePath" : "res/SubCategory/SubCat_PIT_OnlineAct.png",
                    "description" : "Bestimmte Informationen werden automatisch erfasst und in Serverprotokollen gespeichert. Dies beinhaltet: Details darüber, wie Sie unseren Service genutzt haben, wie z. B. Ihre Suchanfragen, die Zeit, die sie auf der Seite verbringen, die Seiten, die sie besuchen, Mausbewegungen und Klicks, usw."
                },
            "9":
                {
                    "subcategory" : "Purpose",
                    "subcategoryValue" : "Ads",
                    "imagePath" : "res/SubCategory/SubCat_Purpose_Ad.png",
                    "description" : "Diese Informationen werden verwendet, um Ihnen maßgeschneiderte Inhalte anzubieten - beispielsweise auf Sie zugeschnittene Anzeigen und Werbung."
                },
            "10":
                {
                    "subcategory" : "Purpose",
                    "subcategoryValue" : "Analytics",
                    "imagePath" : "res/SubCategory/SubCat_Purpose_Anal.png",
                    "description" : "Die gesammelten Informationen wie demographische Daten, Interessen und Verhaltenesweisen, werden für Forschungs- und Analysezwecke genutzt, um Nutzer besser zu verstehen und die Produkte und Dienstleistungen zu verbessern."
                },
            "11":
                {
                    "subcategory" : "Purpose",
                    "subcategoryValue" : "Legal",
                    "imagePath" : "res/SubCategory/SubCat_Purpose_Legal.png",
                    "description" : "Persönliche Daten werden im notwendigen und angemessenen Rahmen verwendet, um die Rechte, die Privatsphäre, die Sicherheit oder das Eigentum des Dienstes, seiner Mitarbeiter oder Vertreter oder anderer Benutzer zu schützen und um geltendes Recht einzuhalten."
                }
        };



    iconLog = {"logData" : [{}]};

    dummyDate = new Date(2000, 1, 1, 1, 1, 1, 1);
    chrome.storage.local.set({mainCategoryImages: mainCategoryImages}, function () {
        console.log("I was installed");
    });
    

    chrome.storage.local.set({availableMainIcons: mainCategoryImages}, function () {

    });

    chrome.storage.local.set({subCategoryImages : subCategoryImages}, function () {
    });

    chrome.storage.local.set({availableSubIcons: subCategoryImages}, function () {

    });


    chrome.storage.local.set({'lastShownTimestamp': dummyDate.valueOf()}, function () {

    });

    chrome.storage.local.set({'iconLog': iconLog}, function () {

    });
});
