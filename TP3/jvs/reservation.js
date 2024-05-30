function reponse(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Show a window alert
    window.alert("Réservation enregistrée avec succès!");

    // Get the form data
    const date = document.getElementById("form-control").value;
    const heure = document.getElementById("Heure").value;
    const nombrePersonnes = document.getElementById("nombre-personnes").value;

    // Log the form data to the console
    console.log("Date:", date);
    console.log("Heure:", heure);
    console.log("Nombre de personnes:", nombrePersonnes);
}