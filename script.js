// Wartet, bis die gesamte Seite geladen ist
document.addEventListener("DOMContentLoaded", function() {
    
    // Holt sich die beiden Formulare
    const patientForm = document.getElementById("form-patient");
    const therapistForm = document.getElementById("form-therapist");

    // Holt sich die "Box"-Container der Formulare
    const patientFormBox = document.getElementById("warteliste-betroffene");
    const therapistFormBox = document.getElementById("warteliste-therapeuten");

    // Funktion, die das Formular durch eine "Danke"-Nachricht ersetzt
    function showThankYouMessage(formBox) {
        formBox.innerHTML = `
            <h3 style="color: var(--color-secondary);">Vielen Dank!</h3>
            <p style="text-align: center;">Wir haben Sie auf die Warteliste gesetzt und werden Sie kontaktieren, sobald PsyMind startet.</p>
        `;
    }

    // Event-Listener für das Patienten-Formular
    patientForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Verhindert das echte Absenden und Neuladen
        
        // Hier könnte man die E-Mail z.B. an Google Analytics senden
        
        // Zeige die Danke-Nachricht
        showThankYouMessage(patientFormBox);
    });

    // Event-Listener für das Therapeuten-Formular
    therapistForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Verhindert das echte Absenden und Neuladen
        
        // Zeige die Danke-Nachricht
        showThankYouMessage(therapistFormBox);
    });

});
