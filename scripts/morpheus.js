// Wählen Sie die erforderlichen HTML-Elemente aus
let morpheusPhrase = document.querySelector(".phrase__container").childNodes[0];
let redPill = document.querySelector(".red-pill");
let topPage = document.querySelector(".start-page__main");
let loaderBg = document.querySelector('.loader__bg');

// Funktion, um vorhandenen Text zu löschen und neuen Text mit bestimmten Intervallen und Verzögerungen zu schreiben
deleteAndWriteText('.phrase__container', [ 'Hello, I wonder what took you here, stranger...', 'Anyways, if you are already here...You take the blue pill, the story ends. You wake up in your bed and believe whatever you want to believe. You take the red pill, you stay in Wonderland. And I show you how deep the rabbit hole goes.'], 75, 25, 1000);

// Hauptfunktion zum Löschen und Schreiben von Text
function deleteAndWriteText(elementId, phrases, intervalWrite, intervalDelete, delay) {
    // Holen Sie das Element, in das der Text geschrieben wird
    let element = document.querySelector(elementId);
    let currentPhraseIndex = 0;

// Funktion, um Text Zeichen für Zeichen zu schreiben
let writeText = (phrase, callback) => {
        let index = 0;
        let intervalId = setInterval(() => {
            if (index < phrase.length) {
                element.textContent += phrase[index];
                index++;
            } else {
                clearInterval(intervalId);
                setTimeout(callback, delay); // Warten vor dem Ausführen des Rückrufs
            }
        }, intervalWrite);
    }

// Funktion, um Text Zeichen für Zeichen zu löschen
let deleteText = (callback) => {
        let text = element.textContent;
        let index = text.length;
        let intervalId = setInterval(() => {
            if (index > 0) {
                text = text.slice(0, -1);
                element.textContent = text;
                index--;
            } else {
                clearInterval(intervalId);
                setTimeout(callback, delay); // Warten vor dem Ausführen des Rückrufs
            }
        }, intervalDelete);
    }

// Funktion, um jede Phrase im Array zu verarbeiten
let processPhrases = () => {
        if (currentPhraseIndex < phrases.length) {
            writeText(phrases[currentPhraseIndex], () => {
                if (currentPhraseIndex < phrases.length - 1) {
                    deleteText(() => {
                        currentPhraseIndex++;
                        processPhrases(); // Rekursiver Aufruf, um die nächste Phrase zu bearbeiten
                    });
                } else {
                    currentPhraseIndex++;
                    processPhrases();
                }
            });
        }
    }

    // Starten Sie die Verarbeitung der Phrasen
    processPhrases();
}

// Funktion, um den Morpheus-Text aufzulösen und zum Matrix-Effekt zu wechseln
let dissolveMorpheus = () => {
    // Die oberste Seite ausblenden
    topPage.style.opacity = "0";
    // Die Deckkraft des Matrix-Canvas reduzieren
    document.querySelector("#Matrix").style.opacity = 0.3;
    setTimeout(() => {
        topPage.style.top = "100%"; // Die oberste Seite aus dem Sichtfeld bewegen
        topPage.remove(); // Das oberste Seitenelement aus dem DOM entfernen
    }, 1500);
}

// Funktion, um die letzte Phrase anzuzeigen und dann eine Rückruffunktion auszuführen
let lastPhrase = (elementId, callback) => {
    let element = document.querySelector(elementId);

// Funktion, um den aktuellen Text zu löschen
let deleteText = (callback) => {
        let text = element.textContent;
        let index = text.length;
        let intervalId = setInterval(() => {
            if (index > 0) {
                text = text.slice(0, -1);
                element.textContent = text;
                index--;
            } else {
                clearInterval(intervalId);
                setTimeout(() => {
                    // Schreiben Sie die letzte Phrase nach dem Löschen
                    writeText("Erinnere dich... alles, was ich anbiete, ist die Wahrheit. Nicht mehr.", callback);
                }, 500);
            }
        }, 10);
    }

// Funktion, um Text Zeichen für Zeichen zu schreiben
let writeText = (phrase, callback) => {
        let index = 0;
        let intervalId = setInterval(() => {
            if (index < phrase.length) {
                element.textContent += phrase[index];
                index++;
            } else {
                clearInterval(intervalId);
                callback(); // Rückruf ausführen, nachdem das Schreiben abgeschlossen ist
            }
        }, 75);
    }

    // Verzögerung vor dem Starten des Textlöschvorgangs
    setTimeout(() => {
        deleteText(callback);
    }, 200);
}
