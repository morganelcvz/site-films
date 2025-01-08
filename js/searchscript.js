const params = new URLSearchParams(window.location.search);
const searchMovie = params.get('searchMovie')

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTRkOGQ5ODkxNjdlZjBjODE5MDkwZDA4NTg2MjBlOCIsIm5iZiI6MTczNTgwNDYxMC44NDYwMDAyLCJzdWIiOiI2Nzc2NDZjMjViOGY0MjJiNjAxMmUxNWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.IiBc4taQH9FDBM5PuexHYruPI7a-OJ1s3BIjaR3fK9I'
    }
};

fetch(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=fr-FR&page=1&region=fr`, options)
    .then(response => response.json())
    .then(data => { showdata(data) })
    .catch(error => console.error(error))

function showdata(data) {
    const results = data.results

    results.forEach(film => {
        const release = new Date(film.release_date)

        const datefr = release.toLocaleDateString("fr")
        document.getElementById("myMovies").innerHTML += `
      <a href="movies.html?id=${film.id}">
          <div class="movie-card">
                  <img src="${film.poster_path == null ? 'https://placehold.co/280x420?text=Movie+Poster' : `https://image.tmdb.org/t/p/original${film.poster_path}`}">
                  <div class="date-movie">${datefr}</div>
              <div class="head-movie">
                  <div class="note"><i class="fa-regular fa-star"></i><span>${film.vote_average}</span></div>
                  <div class="title-movie">${film.title}</div>
              </div>
          </div>
          </a>
      `;
    });
}

