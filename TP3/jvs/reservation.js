function reponse(event) {
    event.preventDefault();

    window.alert("Réservation enregistrée avec succès!");

    const date = document.getElementById("form-control").value;
    const heure = document.getElementById("Heure").value;
    const nombrePersonnes = document.getElementById("nombre-personnes").value;

    console.log("Date:", date);
    console.log("Heure:", heure);
    console.log("Nombre de personnes:", nombrePersonnes);
}