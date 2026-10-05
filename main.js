// const ghibliUrl = "https://ghibliapi.vercel.app"; Documentation link for the API I'm using
const url = "https://ghibliapi.vercel.app/films"; //Movies endpoint
const urlGhibliPeople = "https://ghibliapi.vercel.app/people"; //People endpoint
// Fetching html documents to manipulate/change here
const movieBtnR = document.querySelector("#movieBtnRnd");
const charBtnR = document.querySelector("#charBtnRnd");
const randMovContCard = document.querySelector(".movieCardCont");

// console.log(urlFilms);
// console.log(urlGhibliPeople);
let movie;

movieBtnR.addEventListener("click", (e) => {
  // Adjusting a set loadingtime that also allows for a loading icon to be displayed
  // think easiest thing to do is load the element with a class toggle to the display + rotating class with a setTimeout for 3.5s
  setTimeout(() => {
    ghibliMoviesData(url);
    const createCard = {}; // Had to make this into an empty array to place the items into
    createCard.className = "centerCenter"; //Hot tip from Mikkel: is more widely acceptible to use [], see example below and adhere this from here on.
    // createCard.append(randMovContCard);
    // const randomMovIndex = Math.floor(Math.random() * films.length);
    // const randomMovie = [randomMovIndex];
  }, 4000); // Setting it to load for 4 seconds
});

async function ghibliMoviesData(url) {
  // let randomFilm = Math.floor(Math.random);
  try {
    const res = await fetch(url);
    const data = await res.json();
    const films = await data;
    films.forEach((film) => {
      console.log(`${film.title} `);
      console.log(`${film.original_title}`); //mainly just checking that it now has acces to all data requested from this endpoint
    });
    films.forEach((film) => {
      const divCont = document.createElement("div");
      divCont["className"] = "randoResCard";
      const engTitle = document.createElement("h2");
      const engTitleTxt = document.createTextNode(film.title);
      engTitle.append(engTitleTxt);
      console.log(engTitle);
      const jpnTitle = document.createElement("h3");
      const jpnTitleTxt = document.createTextNode(film.original_title);
      jpnTitle.append(jpnTitleTxt);
      const imgM = document.createElement("img");
      imgM[films.image];
      const figure = document.createElement("figure");
      figure.append(imgM);
      const movieDescript = document.createElement("p");
      const releaseD = document.createElement("p");
      const runTime = document.createElement("p");

      divCont.appendChild(engTitle);
      divCont.appendChild(jpnTitle);
      randMovContCard.append(divCont);
    });
  } catch (err) {
    console.error(err);
  }
}
function movieFetch(url) {
  ghibliMoviesData(url);
}
// ghibliMoviesData(url);
// movieFetch(url);
let createCard; //A variable to store the fetched data in once I manage to fetch it.

//Set limit of movies to fetch width "https://ghibliapi.vercel.app/films?limit=250" --> Am asking for max, to keep in mind that they'll likely add more movies over time.
// NOTE: This may be more complex than I thought, think I can do it at some point, but perhaps not in time for the deadline...
// Logic work to get seach to function: fetch all films info, in this case title, store in a variable call allGhibliFilms and run the array throught a loop for each search to let it match the title.
