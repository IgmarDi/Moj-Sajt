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

