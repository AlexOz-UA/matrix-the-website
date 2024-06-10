// Wählen Sie die Canvas-Elemente nach ihren IDs aus
let canvas1 = document.querySelector('#Matrix');
let canvas2 = document.querySelector('#Matrix2');
let canvas3 = document.querySelector('#Matrix3');

// Speichern Sie die Canvas-Elemente in einem Array zur einfacheren Handhabung
let canvasArray = [canvas1, canvas2, canvas3];

// Iterieren Sie über jedes Canvas-Element
canvasArray.forEach((canvas) => {
    // Holen Sie den 2D-Zeichenkontext für das aktuelle Canvas
    const context = canvas.getContext('2d');

    // Setzen Sie die Canvas-Dimensionen auf die Größe des Fensters
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Definieren Sie die Zeichen, die im Matrix-Effekt verwendet werden
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';

    // Kombinieren Sie alle Zeichen zu einer Zeichenkette
    const alphabet = katakana + latin + nums;

    // Definieren Sie die Schriftgröße für die Zeichen
    const fontSize = 16;
    // Berechnen Sie die Anzahl der Spalten basierend auf der Canvas-Breite und der Schriftgröße
    const columns = canvas.width / fontSize;

    // Initialisieren Sie ein Array, um die y-Position jeder Spalte zu verfolgen
    const rainDrops = [];
    for(let x = 0; x < columns; x++) {
        rainDrops[x] = 1; // Starten Sie jeden Tropfen oben auf dem Canvas
    }

    // Funktion zum Zeichnen der Zeichen
    const draw = () => {
        // Erstellen Sie ein halbtransparentes schwarzes Rechteck, um das Canvas leicht zu löschen
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Setzen Sie die Farbe und den Schriftstil für die Zeichen
        context.fillStyle = '#0F0'; // Grüne Farbe
        context.font = fontSize + 'px monospace'; // Monospace-Schriftart für einheitliche Breite

        // Schleife durch jede Spalte und zeichnen Sie Zeichen
        for(let i = 0; i < rainDrops.length; i++) {
            // Wählen Sie ein zufälliges Zeichen aus dem Alphabet
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            // Zeichnen Sie das Zeichen an der aktuellen Position
            context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
            
            // Setzen Sie die y-Position des Tropfens zufällig zurück, um einen fallenden Effekt zu erzeugen
            if(rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }

            // Bewegen Sie den Tropfen um eine Einheit nach unten
            rainDrops[i]++;
        }
    };

    // Rufen Sie die draw-Funktion alle 30 Millisekunden auf, um einen Animationseffekt zu erzeugen
    setInterval(draw, 30);
});
