const wonders = document.getElementById('main');

axios.get('https://www.world-wonders-api.org/v0/wonders')
    .then(response => {
        console.log(response.data);

        const wondersData = response.data;
        localStorage.setItem('wondersData', JSON.stringify(wondersData));

        displayWonders(wondersData);
    })
    .catch(error => {
        console.error("Fetching data unsuccessful with error: ", error);
    });

function displayWonders(wondersData) {
    wondersData.forEach((wonder) => {
        const wonderElement = document.createElement('div');

        wonderElement.innerHTML =
            '<h2>' + wonder.name + '</h2>' +
            '<img src="' + wonder.links.images[0] + '" alt="" loading="lazy">';

        wonderElement.addEventListener('click', () => {
            window.location.href = `views/wonder.html?name=${encodeURIComponent(wonder.name)}`;

        })

        wonders.appendChild(wonderElement);
    })
}