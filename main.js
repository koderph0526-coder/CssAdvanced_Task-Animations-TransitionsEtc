// const ghibliUrl = "https://ghibliapi.vercel.app"; Documentation link for the API I'm using
const url = "https://ghibliapi.vercel.app/films"; //Movies endpoint
const urlGhibliPeople = "https://ghibliapi.vercel.app/people"; //People endpoint
// Fetching html documents to manipulate/change here
const movieBtnR = document.querySelector("#movieBtnRnd");
const charBtnR = document.querySelector("#charBtnRnd");
const randMovContCard = document.querySelector(".movieCardCont");

let movies = [];

async function ghibliMoviesData(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const films = await data;
    films.forEach((film) => {
      movies.push(film);
      // console.log(`${film.original_title}`); //checking connection
    });
    // const createdCard = {}; // Think I don't need this? Keeping it for className note for now.
    // createdCard.className = "centerCenter"; //Hot tip from Mikkel: is more widely acceptible to use [], see example below and adhere this from here on.
  } catch (err) {
    console.error(err, "API not found");
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
  imgM.src = data.image;
  console.log(imgM);
  const figure = document.createElement("figure");
  figure["className"] = "cardImg";
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

//logic to check for card -> remove if content is present
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
  cardCheck(); // Checking if the card is empty
  const flowerCont = document.querySelector("#flowerSpin"); //fetching the tag I want to append the created js element into
  const loadingImg = document.createElement("img"); // creating the img element + assigning a class w/keyframes
  loadingImg.src = "/icons/sakura.png";
  loadingImg.className = "loadSpin";
  const loadTxt = document.createElement("p"); //Adding text
  const loadingTxt = document.createTextNode("Loading, please wait");
  //Appending to html
  loadTxt.append(loadingTxt);
  flowerCont.appendChild(loadingImg);
  flowerCont.appendChild(loadTxt);
  setTimeout(() => {
    flowerCont.removeChild(loadingImg); // NB: remove will remove parent element here removeChild should be used so the tag doesnt disapear -Leah
    flowerCont.removeChild(loadTxt); // NB: remove will remove parent element here removeChild should be used so the tag doesnt disapear -Leah
  }, 1500); // removes after 1.5s

  // think easiest thing to do is load the element with a class toggle to the display + rotating class with a setTimeout for 3.5s
  setTimeout(() => {
    // ghibliMoviesData(url);
    const randomMovIndex = Math.floor(Math.random() * movies.length);
    // console.log(movies[randomMovIndex]);
    cardCreate(movies[randomMovIndex]);
  }, 1700); // 1.7s time limiter for smooth overlap
  // add  listButton only after asking for random movie -> Use same logic as cardCheck to avoid multiplying?
  listCreate(); //Callback to avoid overcomplicating one function - simpler logic
});

//fetching dataset on a random character and displays in a card
let characters = {}
charBtnR.addEventListener("click", (e) => {
  cardCheck();
  // Add empty array stored in varaible(character) outisde of the function then use if to check if it's using the character var 
    // if(? === character){
    //   continue;
    // } Ok so not this, how to get it to skip imgs?
  // Add different loading animtaion? Or make the sakura one reusable?
});

// Fetches full list, applied to the button - activated when clicked.
const movListBtn = document.createElement("button");
function listCreate() {
  const listCont = document.querySelector("#fullList"); //Fetching the tag to append the list to
  movListBtn.className = "listBtn";
  const listBtnTxt = document.createTextNode("View all movies");
  movListBtn.append(listBtnTxt);
  listCont.appendChild(movListBtn);

  // apiFetch and cardCreate()?
  // Add grid styling
  //btn reaction -> show full list
}
movListBtn.addEventListener("click", (e) => {
  // ghibliMoviesData(url);
  cardCreate(movies);
  movies.forEach((film) => {
    randMovContCard[film];
  });
  const gridDiv = document.createElement("div");
  gridDiv["className"] = "divGrid";
  gridDiv.append(randMovContCard);
});

// let createCard; //A variable to store the fetched data in once I manage to fetch it.

//Set limit of movies to fetch width "https://ghibliapi.vercel.app/films?limit=250" --> Am asking for max, to keep in mind that they'll likely add more movies over time.
// NOTE: The search function may be more complex than I thought, think I can do it at some point, but perhaps not in time for the deadline...
// Logic work(?) to get search to function: fetch all films info, in this case title, store in a variable call allGhibliFilms and run the array throught a loop for each search to let it match the title.
