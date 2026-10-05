// const ghibliUrl = "https://ghibliapi.vercel.app"; Documentation link for the API I'm using
const url = "https://ghibliapi.vercel.app/films"; //Movies endpoint
const urlGhibliPeople = "https://ghibliapi.vercel.app/people"; //People endpoint
// Fetching html documents to manipulate/change here
const movieBtnR = document.querySelector("#movieBtnRnd");
const charBtnR = document.querySelector("#charBtnRnd");

// console.log(urlFilms);
// console.log(urlGhibliPeople);
let movie;

movieBtnR.addEventListener("click", async (e) => {
  const res = await fetch(url);
  const data = await res.json();
  const films = await data;
  films.forEach((film) => {
    console.log(`${film.title} `);
    console.log(`${film.original_title}`); //mainly just checking that it now has acces to all data requested from this endpoint
  });
  // Adjusting a set loadingtime that also allows for a loading icon to be displayed
  setTimeout(() => {
    createCard.forEach(film);
  }, 4000); // Setting it to load for 4 seconds
});
async function ghibliMoviesData(url) {
  // try {
  //   fetch(urlFilm)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .finally(console.log("Found Api"));
  // } catch (err) {
  //   console.error(err);
  // }
}
function movieFetch(url) {
  ghibliMoviesData(url);
  const engTitle = document.createElement("h2");
  engTitle.textContent = "";
  console.log(engTitle);
  const jpnTitle = document.createElement("h3");
  jpnTitle.textContent = "";
  const imgM = document.createElement("img");
  const releaseD = document.createElement("p");
  const runTime = document.createElement("p");
  const movieDescript = document.createElement("p");
}
ghibliMoviesData(url);
movieFetch(url);
let createCard; //A variable to store the fetched data in once I manage to fetch it.

//Set limit of movies to fetch width "https://ghibliapi.vercel.app/films?limit=250" --> Am asking for max, to keep in mind that they'll likely add more movies over time.
// NOTE: This may be more complex than I thought, think I can do it at some point, but perhaps not in time for the deadline...
// Logic work to get seach to function: fetch all films info, in this case title, store in a variable call allGhibliFilms and run the array throught a loop for each search to let it match the title.
