// const ghibliUrl = "https://ghibliapi.vercel.app"; Documentation link for the API I'm using
const urlFilms = "https://ghibliapi.vercel.app/films"; //Movies endpoint
const urlGhibliPeople = "https://ghibliapi.vercel.app/people"; //People endpoint
console.log(urlFilms);
console.log(urlGhibliPeople);

async function ghibliMoviesData(urlFilm) {
  try {
    fetch(urlFilm)
      .then((res) => res.json())
      // .then(data => )
      .finally(console.log("Found Api"));
  } catch (err) {
    console.error(err);
  }
}

//Set limit of movies to fetch width "https://ghibliapi.vercel.app/films?limit=250" --> Am asking for max, to keep in mind that they'll likely add more movies over time.
// NOTE: This may be more complex than I thought, think I can do it
// Logic work to get seach to function: fetch all films info, in this case title, store in a variable call allGhibliFilms and run the array throught a loop for each search to let it match the title.
