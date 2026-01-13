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

// Tic Tac Toe Game
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const gameStatus = document.getElementById('gameStatus');
const resetBtn = document.getElementById('resetBtn');

cells.forEach(cell => {
    cell.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        
        if (board[index] !== '' || !gameActive) {
            return;
        }
        
        board[index] = currentPlayer;
        this.textContent = currentPlayer;
        
        checkWinner();
        
        if (gameActive) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            gameStatus.textContent = `Igrač ${currentPlayer} je na redu!`;
        }
    });
});

function checkWinner() {
    let hasWinner = false;
    
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameStatus.textContent = `Igrač ${currentPlayer} je pobedio! 🎉`;
            gameActive = false;
            hasWinner = true;
            break;
        }
    }
    
    if (!hasWinner && board.every(cell => cell !== '')) {
        gameStatus.textContent = "Rezultat je nerešen!";
        gameActive = false;
    }
}

resetBtn.addEventListener('click', function() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    gameStatus.textContent = 'Igrač X počinje!';
    cells.forEach(cell => {
        cell.textContent = '';
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

