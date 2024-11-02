document.addEventListener("DOMContentLoaded", () => {
    const url = new URL(window.location.href);
    const wonderName = url.searchParams.get("name");
    const wondersData = JSON.parse(localStorage.getItem("wondersData"));
    const wonderDetails = wondersData.find(wonder => wonder.name === wonderName);

    displayWonderDetails(wonderDetails);
});

function displayWonderDetails(wonderDetails) {
    const detailsElement = document.getElementById("wonder-details");

    detailsElement.innerHTML = `
        <h2>${wonderDetails.name}</h2>
        <p>${wonderDetails.summary}</p>
        <p><strong>Location:</strong> ${wonderDetails.location}</p>
        <p><strong>Built Year:</strong> ${wonderDetails.build_year}</p>
        <p><strong>Time Period:</strong> ${wonderDetails.time_period}</p>
        <h3>Useful Links:</h3>
        <ul>
            <li><a href="${wonderDetails.links.wiki}" target="_blank">Wikipedia</a></li>
            <li><a href="${wonderDetails.links.britannica}" target="_blank">Britannica</a></li>
            <li><a href="${wonderDetails.links.google_maps}" target="_blank">Google Maps</a></li>
            <li><a href="${wonderDetails.links.trip_advisor}" target="_blank">TripAdvisor</a></li>
        </ul>
        <h3>Images</h3>
        <div>
   ${wonderDetails.links.images.map(img => `<img src="${img}" alt="${wonderDetails.name}" >`)}
        </div>
    `;
}
