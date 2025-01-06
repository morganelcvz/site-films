// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTRkOGQ5ODkxNjdlZjBjODE5MDkwZDA4NTg2MjBlOCIsIm5iZiI6MTczNTgwNDYxMC44NDYwMDAyLCJzdWIiOiI2Nzc2NDZjMjViOGY0MjJiNjAxMmUxNWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.IiBc4taQH9FDBM5PuexHYruPI7a-OJ1s3BIjaR3fK9I'
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/movie/movie_id?language=fr-FR', options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.error(err));

fetch("js/details.json")
    .then(response => response.json())
    .then(data => {
        showdata(data) })
    .catch(error => console.error(error))


function showdata(data) {
 
    fetch("js/credits.json")
    .then(response => response.json())
    .then(credit => {
        const memberName = credit.crew.filter(member => member.job == "Writer").map(member => member.name)

        const release = new Date(data.release_date)

        const datefr = release.toLocaleDateString("fr")
    
        const genrelist = data.genres.map(genre => genre.name).join(', ') 
    
        document.getElementById("oneMovie").innerHTML = `
            <img src="https://image.tmdb.org/t/p/original/${data.poster_path}">
            <div class="film-right">
                <div class="film-title">
                    <h1><b>${data.original_title}</b> <span>(1999)</span></h1>
                </div>
                <div class="film-info">
                    <div class="f3">
                                    <div class="note"><i class="fa-regular fa-star"></i><span>${data.vote_average}</span></div>
                        <div class="f-info">
                            <p class="genre">${genrelist}</p>
                            <p class="date">${datefr}</p>
                        </div>

                        ${createWriters(memberName)}
                        
                    </div>
    
                    <div class="resume">
                        <h2>Synopsis</h2>
                        <p>${data.overview}</p>
                    </div>
                </div>
            </div>
            `

            document.getElementById("castId").innerHTML = `
            ${createCast(credit.cast)} 
            `
    })

}

function createWriters (writers){
    let myDiv = ''
    writers.forEach(element => {
        myDiv += `
                <div class="f-staff">
                        <span>${element}</span>
                        <p>Writer</p>
                </div>
        `
    });

    return myDiv
}


function createCast (tableau){
    let myDiv = ''
    let count = 10 
    tableau.forEach(element => {
        count--
        if (count >= 0){
            myDiv  += `
            <div class="actors">
                <div class="actors-profile">
                     <img src="https://image.tmdb.org/t/p/original/${element.profile_path}">
                     <br/>
                     <span>${element.name}</span>
                     <p>${element.character}</p>
                </div>
            </div>
    `
        }

    })

    return myDiv
}

const url = new URLSearchParams(window.location.search);
const id= url.get('id')
