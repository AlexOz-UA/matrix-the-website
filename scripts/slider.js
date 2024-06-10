// Wählen Sie alle Elemente mit der Klasse 'slide' aus
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length; // Gesamte Anzahl der Folien
let currentIndex = 0; // Aktueller Index der sichtbaren Folie

// Funktion zum Aktualisieren der Folien
let updateSlides = () => {
    slides.forEach((slide, index) => {
        // Entfernen Sie alle vorhandenen Klassen, die den Status der Folie anzeigen
        slide.classList.remove('active', 'inactive__left', 'inactive__right');
        
        // Fügen Sie die entsprechende Klasse basierend auf dem aktuellen Index hinzu
        if (index === currentIndex) {
            slide.classList.add('active'); // Aktive Folie
        } else if (index === (currentIndex - 1 + totalSlides) % totalSlides) {
            slide.classList.add('inactive__left'); // Folie links von der aktiven Folie
        } else if (index === (currentIndex + 1) % totalSlides) {
            slide.classList.add('inactive__right'); // Folie rechts von der aktiven Folie
        } else if (index < currentIndex) {
            slide.classList.add('inactive__left'); // Folie links von der aktiven Folie
        } else {
            slide.classList.add('inactive__right'); // Folie rechts von der aktiven Folie
        }
    });
}

// Funktion, um zur nächsten Folie zu wechseln
let moveToNextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Index um 1 erhöhen, zyklisch durch die Folien gehen
    updateSlides(); // Folien aktualisieren
}

// Funktion, um zur vorherigen Folie zu wechseln
let moveToPrevSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Index um 1 verringern, zyklisch durch die Folien gehen
    updateSlides(); // Folien aktualisieren
}

// Funktion, um ein Bild in voller Bildschirmgröße anzuzeigen
let openFoto = (slide) => {
    let fotoWholeScreen = document.querySelector(".wholefoto__container");
    let fotoSrc = (slide.src); // Bildquelle des angeklickten Bildes holen
    fotoWholeScreen.childNodes[3].src = fotoSrc; // Quelle des großen Bildes setzen
    fotoWholeScreen.style.transform = "scale(1)"; // Bild einblenden
    console.log(fotoWholeScreen.childNodes[3]);
}

// Funktion, um das große Bild zu schließen
let fotoRemove = () => {
    let foto = document.querySelector(".wholefoto__container");
    foto.style.transform = "scale(0)"; // Bild ausblenden
}

// Initiales Aufrufen der Funktion zum Aktualisieren der Folien
updateSlides();
