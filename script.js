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

