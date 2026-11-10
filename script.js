const API_KEY="e8940fb5";

const NO_POSTER="na.png";


const searchForm=document.getElementById("searchForm");

const searchInput=document.getElementById("searchInput");

const search=document.getElementById("search");

const message=document.getElementById( "msg");

const results=document.getElementById("results");


async function getMovies(query){

    message.textContent="Loading....";

    results.innerHTML="";

    const url="https://www.omdbapi.com/?apikey="+API_KEY+"&s="+query; 

    // encodeURIComponent(query)


    try{

        const response= await fetch(url);

        const data=await response.json();


        if(data.Response==="False"){

            message.textContent=data.Error;

            return;

        }

        message.textContent="Displaying results";

        showMovies(data.Search);

    }

    catch(err){

        message.textContent=err;

    }

}


function showMovies(movies){

    for (const movie of movies){

        if(movie.Poster==="N/A"){

            movie.Poster=NO_POSTER;

        }

        results.innerHTML+=`<a class="card" href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">

             <img src="${movie.Poster}" alt="${movie.Title}">

            <h3>${movie.Title}</h3>

            <h3>${movie.Year}</h3>

        </a>`

    }

}


searchForm.addEventListener("submit",function(e){

    e.preventDefault();

    const abc=searchInput.value.trim();

    getMovies(abc);

})


