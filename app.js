let apiKey = "ff066e2dc53fd040fca6669e93dab514";

// funcion para que cargue las peliculas...
window.addEventListener("load", () => {
    getMovies();
});

let page = 1; // variable para controla la paginacion

//capturar los botones

let btnAnterior = document.querySelector("#btn-previous");
let btnSiguiente = document.querySelector("#btn-next");
/* 
funcion boton anterior */

// btnAnterior.addEventListener("click", () => {
//     if (pagina > 1) {
//         /*    pagina = pagina -1 */
//         pagina -= 1;
//         //llamar a la funcion que carga la pagina
//         cargarPeliculas();
//     }
// });

// btnSiguiente.addEventListener("click", () => {
//     if (pagina <= 500) {
//         pagina += 1;
//         //llamar a la funcion que carga la pagina
//         cargarPeliculas();
//     }
// });

// funcion que carga las peliculas

const getMovies = async () => {
    try {
        let resMovies = await axios(
            `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-MX&page=${page}`
        );
        if (resMovies.status === 200) {
            console.log(resMovies);
            let movies = "";
            resMovies.data.results.forEach((movie) => {
                movies += `<div id="${movie.id}" class="movie">
                                <a class="movie-link" href=""></a>
                                <img class="movie-img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
                                <h6 class="movie-title">${movie.original_title}</h6>
                           </div>`;
            });
            document.querySelector("#container").innerHTML = movies;
        }
    } catch (error) {
        console.log(error);
    }
};

// const cargarPeliculas = async () => {
//     try {
//         let respuesta = await fetch(
//             `https://api.themoviedb.org/3/movie/popular?api_key=TUAPIKEY&language=es-MX&page=${pagina}`
//         );

//         if (respuesta.status === 200) {
//             let datos = await respuesta.json();
//             let peliculas = "";
//             datos.results.forEach((pelicula) => {
//                 peliculas += `<div class="pelicula">
// <img class= "poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}"  />
// <h3 class= "titulo">${pelicula.title}</h3>
// </div>`;
//             });
//             document.querySelector(".contenedor").innerHTML = peliculas;
//         } else if (respuesta.status === 404) {
//             console.log("la pagina no existe");
//         }
//     } catch (error) {
//         console.log(error);
//     }
//     document.querySelector(".pagina").innerHTML = `Pagina N: ${pagina}`;
// };
