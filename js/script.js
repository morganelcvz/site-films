fetch("js/movies.json")
    .then(response => response.json())
    .then(data => {showdata(data)})
    .catch(error => console.error(error));

    function showdata(data) {
    const results = data.results

    results.forEach(film => {
        document.getElementById("myMovies").innerHTML += `
            <div class="movie-card">
                    <img src="https://image.tmdb.org/t/p/original${film.poster_path}">
                    <div class="date-movie">${film.release_date}</div>
                <div class="head-movie">
                    <div class="note"><i class="fa-regular fa-star"></i><span>${film.vote_average}</span></div>
                    <div class="title-movie">${film.title}</div>
                </div>
            </div>
        `;
    });
}