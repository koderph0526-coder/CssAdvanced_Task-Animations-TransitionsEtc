// const ghibliUrl = "https://ghibliapi.vercel.app"; Documentation link for the API I'm using
const url = "https://ghibliapi.vercel.app/films"; //Movies endpoint
const urlGhibliPeople = "https://ghibliapi.vercel.app/people"; //People endpoint
// Fetching html documents to manipulate/change here
const movieBtnR = document.querySelector("#movieBtnRnd");
const charBtnR = document.querySelector("#charBtnRnd");
const randMovContCard = document.querySelector(".movieCardCont");

// console.log(urlFilms);
// console.log(urlGhibliPeople);
let movie = [];

async function ghibliMoviesData(url) {
  // let randomFilm = Math.floor(Math.random);
  try {
    const res = await fetch(url);
    const data = await res.json();
    const films = await data;
    films.forEach((film) => {
      movie.push(film);
      // console.log(movie);
      // console.log(`${film.title} `);
      // console.log(`${film.original_title}`); //checking connection
    });
    const createdCard = {};
    createdCard.className = "centerCenter"; //Hot tip from Mikkel: is more widely acceptible to use [], see example below and adhere this from here on.
  } catch (err) {
    console.error(err);
  }
}
ghibliMoviesData(url);

//Creating the card and appending the data
function cardCreate(data) {
  // ghibliMoviesData(url);
  const divCont = document.createElement("div");
  divCont["className"] = "randoResCard";
  const engTitle = document.createElement("h2");
  const engTitleTxt = document.createTextNode(data.title);
  engTitle.append(engTitleTxt);
  const jpnTitle = document.createElement("h3");
  const jpnTitleTxt = document.createTextNode(data.original_title);
  jpnTitle.append(jpnTitleTxt);
  const imgM = document.createElement("img");
  imgM.src = data.image; //No?
  console.log(imgM);
  const figure = document.createElement("figure");
  figure.append(imgM);
  const movieDescript = document.createElement("p");
  const movDescrTxt = document.createTextNode(data.description);
  movieDescript.append(movDescrTxt);
  const releaseD = document.createElement("p");
  const releaseDtxt = document.createTextNode(
    `Release year: ${data.release_date}`,
  );
  releaseD.append(releaseDtxt);
  const runTime = document.createElement("p");
  const runTtxt = document.createTextNode(
    `Run-time: ${data.running_time} minutes`,
  );
  runTime.append(runTtxt);

  divCont.appendChild(engTitle);
  divCont.appendChild(jpnTitle);
  divCont.appendChild(figure);
  divCont.appendChild(movieDescript);
  divCont.appendChild(releaseD);
  divCont.appendChild(runTime);
  randMovContCard.append(divCont);
}

//logic to check for card -> remove ifcontent is present
function cardCheck() {
  //Checking if there is "children"/content in the variable
  if (randMovContCard.innerHTML != "") {
    while (randMovContCard.firstChild) {
      randMovContCard.removeChild(randMovContCard.lastChild);
      //firtChild - lastChild logic ensures that everything is removed
    }
  }
}

//Random button listener
movieBtnR.addEventListener("click", (e) => {
  cardCheck();
  // Adjusting a set loadingtime that also allows for a loading icon to be displayed
  const flowerCont = document.querySelector("#flowerSpin"); //fetching the tag I want to append the created js element into
  // creating the img element and adding a class that also has keyframe animation attached
  const loadingImg = document.createElement("img");
  loadingImg.src = "/icons/sakura.png";
  loadingImg.className = "loadSpin";
  //Adding text
  const loadTxt = document.createElement("p");
  const loadingTxt = document.createTextNode("Loading, please wait");
  loadTxt.append(loadingTxt);
  flowerCont.appendChild(loadingImg);
  flowerCont.appendChild(loadTxt);
  setTimeout(() => {
    flowerCont.remove(loadingImg); // NB: remove will remove parent element here removeChild should be used so the tag doesnt disapear
    flowerCont.remove(loadTxt); // NB: remove will remove parent element here removeChild should be used so the tag doesnt disapear
  }, 2800); // removing the loading icon on a set time

  // think easiest thing to do is load the element with a class toggle to the display + rotating class with a setTimeout for 3.5s
  setTimeout(() => {
    // ghibliMoviesData(url);
    const randomMovIndex = Math.floor(Math.random() * movie.length);
    console.log(movie[randomMovIndex]);
    cardCreate(movie[randomMovIndex]);
  }, 3000); // 3s time limiter
  // Add a button to clcik that gives the full list below the card?
  listCreate(); //Callback to avoid overcomplicating one function - sompler logic
});
// Function, applied on the button activated when clicked, that fetches full list
function listCreate() {
  const listCont = document.querySelector("#fullList"); //Fetching the tag to append the list to
  const movListBtn = document.createElement("button");
  movListBtn.className = "listBtn";
  const listBtnTxt = document.createTextNode("View all movies");
  movListBtn.append(listBtnTxt);
  listCont.appendChild(movListBtn);

  movListBtn.addEventListener("click", (e) => {
    ghibliMoviesData(url);
    films.forEach((film) => {});
    // apiFetch and cardCreate()?
    // Add grid styling
    const gridDiv = document.createElement("div");
    gridDiv[className] = "divGrid";
    gridDiv.append(randMovContCard);
  });
}

// function movieFetch(url) {
//   ghibliMoviesData(url);
// }
// ghibliMoviesData(url);
// movieFetch(url);
let createCard; //A variable to store the fetched data in once I manage to fetch it.

//Set limit of movies to fetch width "https://ghibliapi.vercel.app/films?limit=250" --> Am asking for max, to keep in mind that they'll likely add more movies over time.
// NOTE: This may be more complex than I thought, think I can do it at some point, but perhaps not in time for the deadline...
// Logic work to get seach to function: fetch all films info, in this case title, store in a variable call allGhibliFilms and run the array throught a loop for each search to let it match the title.
