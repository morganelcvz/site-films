fetch("js/details.json")
    .then(response => response.json())
    .then(data => {showdata(data)})
    .catch(error => console.error(error));

    function showdata(data) {
    const results = data.results

    results.forEach(one => {
        // const release = new Date(film.release_date)

        // const datefr = release.toLocaleDateString("fr")

        document.getElementById("oneMovie").innerHTML = `
        <img src="https://image.tmdb.org/t/p/original/${one.poster_path}">
        <div class="film-right">
            <div class="film-title">
                <h1><b>${one.original_title}</b> <span>(1999)</span></h1>
            </div>
            <div class="film-info">
                <div class="f3">
                    <div class="f-info">
                        <p class="genre">${one.genres}</p>
                        <p class="date">23/06/1999</p>
                    </div>
                    
                    <div class="f-staff">
                        <span>Nom prénom</span>
                        <p>Réalisateur</p>
                    </div>

                    <div class="f-staff">
                        <span>Nom prénom</span>
                        <p>Scénariste</p>
                    </div>
                </div>
                <div class="note"><i class="fa-regular fa-star"></i><span>${one.vote_average}</span></div>
                <div class="resume">
                    <h2>Synopsis</h2>
                    <p>${one.overview}</p>
                </div>
            </div>
        </div>
        `;
    });
}
