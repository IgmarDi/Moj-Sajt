// Home dugme
document.getElementById("homeBtn").addEventListener("click", function () {
    alert("Dobrodošli na Home sekciju! 🎉");
});// Kontakt forma
document.getElementById("kontaktForm").addEventListener("submit", function(e){
    e.preventDefault(); // sprječava refresh stranice
    const ime = document.getElementById("ime").value;
    const email = document.getElementById("email").value;
    const poruka = document.getElementById("poruka").value;

    alert(`Hvala ${ime}! Vaša poruka je poslata.\nEmail: ${email}\nPoruka: ${poruka}`);

    // Opcionalno: očisti formu nakon slanja
    document.getElementById("kontaktForm").reset();
});

// Dark mode toggle
(function() {
    const darkToggle = document.getElementById('darkModeToggle');
    function applyDarkMode(enabled) {
        if (enabled) document.body.classList.add('dark');
        else document.body.classList.remove('dark');

        if (darkToggle) {
            // update accessible label and animate
            darkToggle.setAttribute('aria-label', enabled ? 'Switch to light mode' : 'Switch to dark mode');
            darkToggle.classList.add('toggled');
            setTimeout(() => darkToggle.classList.remove('toggled'), 420);
        }

        try { localStorage.setItem('darkMode', enabled ? '1' : '0'); } catch (e) {}
    }

    if (darkToggle) {
        // Ako postoji sačuvana preferenca, koristi je. Inače koristi sistemsku preferencu.
        let saved = null;
        try { saved = localStorage.getItem('darkMode'); } catch (e) { saved = null; }

        if (saved === '1' || saved === '0') {
            applyDarkMode(saved === '1');
        } else {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyDarkMode(prefersDark);
        }

        darkToggle.addEventListener('click', function() {
            applyDarkMode(!document.body.classList.contains('dark'));
        });
    }
})();
// Kontakt forma
document.getElementById("kontaktForm").addEventListener("submit", function(e){
    e.preventDefault(); // sprječava refresh stranice
    const ime = document.getElementById("ime").value;
    const email = document.getElementById("email").value;
    const poruka = document.getElementById("poruka").value;

    alert(`Hvala ${ime}! Vaša poruka je poslata.\nEmail: ${email}\nPoruka: ${poruka}`);

    // Opcionalno: očisti formu nakon slanja
    document.getElementById("kontaktForm").reset();
});
// Kontakt forma
document.getElementById("kontaktForm").addEventListener("submit", function(e){
    e.preventDefault(); // sprječava refresh stranice
    const ime = document.getElementById("ime").value;
    const email = document.getElementById("email").value;
    const poruka = document.getElementById("poruka").value;

    alert(`Hvala ${ime}! Vaša poruka je poslata.\nEmail: ${email}\nPoruka: ${poruka}`);

    // Opcionalno: očisti formu nakon slanja
    document.getElementById("kontaktForm").reset();
});


// Ponuda dugme
document.getElementById("ponudaBtn").addEventListener("click", function () {
    alert("Pogledajte detalje naše ponude!");
});
// Kontakt forma
document.getElementById("kontaktForm").addEventListener("submit", function(e){
    e.preventDefault(); // sprječava refresh stranice
    const ime = document.getElementById("ime").value;
    const email = document.getElementById("email").value;
    const poruka = document.getElementById("poruka").value;

    alert(`Hvala ${ime}! Vaša poruka je poslata.\nEmail: ${email}\nPoruka: ${poruka}`);

    // Opcionalno: očisti formu nakon slanja
    document.getElementById("kontaktForm").reset();
});

// O nama dugme
document.getElementById("oNamaBtn").addEventListener("click", function () {
    alert("Kontaktirajte nas putem emaila ili telefona!");
});

// Funkcija za otvaranje igrice - radi na desktop i mobile
function openGame(gameFile, gameName) {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Na mobilnom - direktno navigiraj na stranicu
        window.location.href = gameFile;
    } else {
        // Na desktop-u - otvori novi prozor
        window.open(gameFile, gameName, 'width=650,height=750,resizable=yes,scrollbars=no');
    }
}

// Slika 1 - Rock Paper Scissors
document.getElementById('slika1Clickable').addEventListener('click', function() {
    openGame('rockpaperscissors.html', 'RockPaperScissors');
});

// Slika 2 - Tic Tac Toe
document.getElementById('slika2Clickable').addEventListener('click', function() {
    openGame('tictactoe.html', 'TicTacToe');
});

// Slika 3 - Memory Game
document.getElementById('slika3Clickable').addEventListener('click', function() {
    openGame('memory.html', 'MemoryGame');
});

// Overlay buttons inside cards (prevent double-open and call openGame)
document.querySelectorAll('.card-overlay').forEach(btn => {
    btn.addEventListener('click', function(evt) {
        // prevent the overlay click from bubbling to parent and opening twice
        evt.stopPropagation();
        const parent = this.closest('.card');
        if (!parent) return;
        const id = parent.id;
        if (id === 'slika1Clickable') openGame('rockpaperscissors.html', 'RockPaperScissors');
        else if (id === 'slika2Clickable') openGame('tictactoe.html', 'TicTacToe');
        else if (id === 'slika3Clickable') openGame('memory.html', 'MemoryGame');
    });
    // allow keyboard activation
    btn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

// Kontakt forma
document.getElementById("kontaktForm").addEventListener("submit", function(e){
    e.preventDefault(); // sprječava refresh stranice
    const ime = document.getElementById("ime").value;
    const email = document.getElementById("email").value;
    const poruka = document.getElementById("poruka").value;

    alert(`Hvala ${ime}! Vaša poruka je poslata.\nEmail: ${email}\nPoruka: ${poruka}`);

    // Opcionalno: očisti formu nakon slanja
    document.getElementById("kontaktForm").reset();
});

