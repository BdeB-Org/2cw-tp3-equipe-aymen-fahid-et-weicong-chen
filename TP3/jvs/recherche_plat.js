function rechercheP(){
    const url = `http://localhost:8080/ords/restscott/plats_principaux`; 

    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });
}