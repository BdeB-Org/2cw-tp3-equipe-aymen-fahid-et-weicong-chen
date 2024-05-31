function rechercheD() {
    const url = `http://localhost:8080/ords/restscott/desserts`; 

        fetch(url)
            .then((resp) => resp.json())
            .then(function (data) {
                console.log(data);
            })
            .catch(function (error) {
                console.log(JSON.stringify(error));
            });
}