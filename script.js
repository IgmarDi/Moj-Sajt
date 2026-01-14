// ==================== HOME DUGME ====================
document.getElementById("homeBtn").addEventListener("click", function () {
    openGame('numberguess.html', 'PronađiBroj');
});

// ==================== KONTAKT FORMA ====================
document.getElementById("kontaktForm").addEventListener("submit", function(e){
    e.preventDefault();
    const ime = document.getElementById("ime").value;
    const email = document.getElementById("email").value;
    const poruka = document.getElementById("poruka").value;

    alert(`Hvala ${ime}! Vaša poruka je poslata.\nEmail: ${email}\nPoruka: ${poruka}`);
    document.getElementById("kontaktForm").reset();
});

// ==================== DARK MODE TOGGLE ====================
(function() {
    const darkToggle = document.getElementById('darkModeToggle');
    function applyDarkMode(enabled) {
        if (enabled) document.body.classList.add('dark');
        else document.body.classList.remove('dark');

        if (darkToggle) {
            darkToggle.setAttribute('aria-label', enabled ? 'Switch to light mode' : 'Switch to dark mode');
            darkToggle.classList.add('toggled');
            setTimeout(() => darkToggle.classList.remove('toggled'), 420);
        }

        try { localStorage.setItem('darkMode', enabled ? '1' : '0'); } catch (e) {}
    }

    if (darkToggle) {
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

// ==================== OTVARANJE IGARA ====================
function openGame(gameFile, gameName) {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        window.location.href = gameFile;
    } else {
        window.open(gameFile, gameName, 'width=650,height=750,resizable=yes,scrollbars=no');
    }
}

// Slika 1 - Top Results
document.getElementById('slika1Clickable').addEventListener('click', function() {
    openGame('topresults.html', 'TopResults');
});

// Slika 2 - Random Game
document.getElementById('slika2Clickable').addEventListener('click', function() {
    openGame('randomgame.html', 'RandomGame');
});

// Slika 3 - Challenges
document.getElementById('slika3Clickable').addEventListener('click', function() {
    openGame('challenges.html', 'Challenges');
});

// Sve Igre sekcija - kartice
document.getElementById('pronadi-clickable').addEventListener('click', function() {
    openGame('numberguess.html', 'PronađiBroj');
});

document.getElementById('papir-clickable').addEventListener('click', function() {
    openGame('rockpaperscissors.html', 'RockPaperScissors');
});

document.getElementById('tictactoe-clickable').addEventListener('click', function() {
    openGame('tictactoe.html', 'TicTacToe');
});

document.getElementById('memory-clickable').addEventListener('click', function() {
    openGame('memory.html', 'MemoryGame');
});

document.getElementById('blackjack-clickable').addEventListener('click', function() {
    openGame('blackjack.html', 'Blackjack');
});

document.getElementById('flappy-clickable').addEventListener('click', function() {
    openGame('flappybird.html', 'FlappyBird');
});

document.getElementById('colormatch-clickable').addEventListener('click', function() {
    openGame('colormatch.html', 'ColorMatch');
});

document.getElementById('simon-clickable').addEventListener('click', function() {
    openGame('simon.html', 'Simon');
});

// Overlay buttons inside cards
document.querySelectorAll('.card-overlay').forEach(btn => {
    btn.addEventListener('click', function(evt) {
        evt.stopPropagation();
        const parent = this.closest('.card');
        if (!parent) return;
        const id = parent.id;
        if (id === 'slika1Clickable') openGame('topresults.html', 'TopResults');
        else if (id === 'slika2Clickable') openGame('randomgame.html', 'RandomGame');
        else if (id === 'slika3Clickable') openGame('challenges.html', 'Challenges');
        else if (id === 'papir-clickable') openGame('rockpaperscissors.html', 'RockPaperScissors');
        else if (id === 'tictactoe-clickable') openGame('tictactoe.html', 'TicTacToe');
        else if (id === 'memory-clickable') openGame('memory.html', 'MemoryGame');
        else if (id === 'pronadi-clickable') openGame('numberguess.html', 'PronađiBroj');
        else if (id === 'blackjack-clickable') openGame('blackjack.html', 'Blackjack');
        else if (id === 'flappy-clickable') openGame('flappybird.html', 'FlappyBird');
        else if (id === 'colormatch-clickable') openGame('colormatch.html', 'ColorMatch');
        else if (id === 'simon-clickable') openGame('simon.html', 'Simon');
    });
    
    btn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

// ==================== O NAMA DUGME ====================
document.getElementById("oNamaBtn").addEventListener("click", function () {
    alert("Hvala što si posetio moj sajt! 😊");
});

