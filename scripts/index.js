const wonders = document.getElementById('main');

axios.get('https://www.world-wonders-api.org/v0/wonders')
    .then(response => {
        console.log(response.data);
        displayWonders(response.data);
    })
    .catch(error => {
        console.error("Fetching data unsuccessful with error: ", error);
    });

function displayWonders(wondersData) {
    wondersData.forEach((wonder) => {
        const wonderElement = document.createElement('div');
        const wonderLink = document.createElement('a');


        wonderElement.innerHTML =
            '<h2>' + wonder.name + '</h2>' +
            '<img src="' + wonder.links.images[0] + '" alt="">';

        wonderElement.addEventListener('click', () => {
            window.location.href = `wonder.html?${wonder.id}`;
        })

        wonders.appendChild(wonderElement);

    })
}