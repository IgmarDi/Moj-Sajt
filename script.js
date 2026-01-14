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

// Overlay buttons inside cards
document.querySelectorAll('.card-overlay').forEach(btn => {
    btn.addEventListener('click', function(evt) {
        evt.stopPropagation();
        const parent = this.closest('.card');
        if (!parent) return;
        const id = parent.id;
        if (id === 'slika1Clickable') openGame('rockpaperscissors.html', 'RockPaperScissors');
        else if (id === 'slika2Clickable') openGame('tictactoe.html', 'TicTacToe');
        else if (id === 'slika3Clickable') openGame('memory.html', 'MemoryGame');
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

