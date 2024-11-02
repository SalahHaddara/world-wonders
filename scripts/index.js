axios.get('https://www.world-wonders-api.org/v0/wonders')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error("Fetching data unsuccessful with error: ", error);
    });

