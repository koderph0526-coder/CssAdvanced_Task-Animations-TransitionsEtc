# CSS Advanced Assignment 3: Using Animation, Transition & Transform

Due **_Thursday_** by 11:59pm (01.10.26)

- Canvas link to the assignment:
  'https://jobloop.instructure.com/courses/557/assignments/10965'

Jump to the [Css Task](#css-task)

# & Javascript Advanced Oppgave 3: API-oppgave

Due **_Sunday_** by 11:59pm (04.10.26)

-Canvas linkt to the assignment:
'https://jobloop.instructure.com/courses/557/assignments/11020'

Jump straight to the [Js Task](#js-tasks)

COMMENT: As the Js task to use an API that I had in mind fell through, I am considering combining these two tasks into one. Meaning I'll add the task goals, demands and task segments below the Css ones if I do this.

### Comment 07.10.26:

Still have a ways to go, but the proof of concept is getting there. Need to:

- movListBtn Needs to function/fetch all the movies and place in grid -> fix []
- Repeat cardCreate, but fetch characters from the movies instead! []
- Fix it so the "View all movies" button doesn't load everytime a user asks for a random movie []
  (Think this could be done by pulling it out the random button function and rather making a check-if the button has been clicked? Possibly just use the same logic as cardCheck?)
- Adjust some css for the randomCard And full list cards []
- Clean Up comments, is too much I know... []
- Still need description to images/icons used []
- Still want to make a functional search function []

## Css task:

### Goal CCC Assignment:

"Målet med denne oppgaven er å hjelpe deg å øve på å bruke CSS-animation, Transition og transform for å lage interaktive og visuelt tiltalende elementer på en nettside. Du vil bruke kreativiteten din og de CSS-teknikkene du har lært til å designe en engasjerende layout eller interaktiv komponent."
( ---> Yeh yeh, I'll translate it later >.<, prefer doing most coding in English, if ya'll don't mind. Also have half a mind to combine this and the Js task about API. Did indeed combine them)

### Krav til oppgaven:

1. Sideoppsett og Struktur: [x]

- Lag en enkel nettside med minst 3 forskjellige seksjoner (for eksempel: header, hovedinnhold, footer). [x]
- Inkluder minst én knapp, én lenke og ett bilde på siden.[x]

2. Animation: [x]

- Bruk CSS @keyframes for å animere minst ett element på siden. Animasjonen skal inkludere minst to eller tre trinn (bruk prosentverdier som 0%, 50%, 100%). [x]

#### Eksempler på animasjoner:

- En ball som hopper.
- En tekst som fader inn og beveger seg.
- En knapp som endrer farge og skaleres når den hovres på.

3. Transition: [x]

- Legg til jevne Transition på elementer som knapper, lenker eller bilder. [x]
- Bruk transition for å lage effekter ved hover eller når et element får fokus (for eksempel endre bakgrunnsfarge, endre størrelse). [x]

#### Eksempler på Transitions:

- Endre fargen på en knapp når den hovres på.
- Skaler et bilde jevnt når brukeren hovrer på det.
- En tekstblokk som endrer opasitet når brukeren hovrer på den.

4. Transform: [x]

- Bruk CSS-transformasjoner på minst ett element. [x]
- Bruk rotate, scale, translate eller skew for å få elementet til å bevege seg eller endre størrelse eller orientering. [x]

#### Eksempler på transformasjoner:

- Roter et element når siden lastes.
- Få et bilde til å zoome inn når brukeren hovrer på det.
- Skew (skjev) en tittel eller overskrift for å gi en 3D-effekt.

5. Kombinere Animation, Transition og Transform: [x]

- Prøv å kombinere animasjoner, overganger og transformasjoner på ett element.[x]
- For eksempel kan en knapp skalere opp og endre farge når brukeren hovrer på den, og teksten inni kan også animere med en fade-in effekt ved hjelp av keyframes.[x]

### Bonusutfordring (Valgfritt):

Lag et interaktivt meny- eller kort-design som bruker en kombinasjon av animasjoner, overganger og transformasjoner. Når brukeren hovrer på menyen eller kortet, skal flere transformasjoner og overganger anvendes (for eksempel skalering, rotasjon, endring av farge eller posisjon).

## JS tasks:

### Krav til oppgaven: []

For å sikre at du utfordrer deg selv, må prosjektet ditt inkludere en viss grad av kompleksitet, for eksempel:

1. Et API med flere ulike endepunkter som du bruker i prosjektet ditt. []
2. Et API med et endepunkt som aksepterer parametere i URL-en. [] (???)
3. API-data som må kjøres gjennom en løkke for å hente/generere innhold. []

Prosjektet ditt må oppfylle minst **to** av disse kriteriene.

### Tips for gjennomføring

- Dokumentasjonen til de fleste offentlige API-er gir deg detaljer om hvordan du bruker dem, hvilke endepunkter de har, og hvilke parametere som aksepteres. Les dokumentasjonen nøye! 🤓
- Ikke bruk API-er som krever nøkkel (vi har ikke gått gjennom hvordan du sikrer API-nøkler ennå).

#### Anbefalinger

Dette er en perfekt anledning til å lage noe som kan skille seg ut i porteføljen din! Jeg anbefaler sterkt at du jobber med designet for å få prosjektet til å se flott ut.
Tidligere studenter hos Kodehode har hatt suksess med å bruke API-er som dette for å lage spennende prosjekter.

## My notes:

- I want to create a little platform to easily search for ghibli movies, characters and perhaps also vehichles in/from the movies or possibly to show what movies was released/published during a specific year?
- However as I am currently having some computer issues with opening specific folders, and way to high memory usage of cpu and gpu, I am unable to access the images I had in mind and am for now putting up a proof of concept with animations of placeholder images and design of the pages layout.
- As the css task has a faster approaching deadline it works in my favor that I focus on the design and styling for now.
- Will put the search function on hold and rather focus on getting two seperate buttons(one for movies one for characters) to fetch data via the API link from random movies and print it to html with preset css styling, as to display it like a card. This goives me a better opotunity to get the css right while also letting me practice using API and I'll return to making a search function that will print the matching searchresults as seperate cards accordingly.
- I also want to add a button that asks if the used would like a full list of Ghibli movies, and when said button had been pressed and the list is printed I also want js reveal another "button", in all honesty a selction/option field that allows the user to sort the movies alphabetically, by airing/release date and by length, as well as the reverse options for each of those sorting options
- ! NOTE: I want to add an icon that's spinning slowly, I'm thinking a sakura flower or an umbrella, that only appear while the api is being asked to fetch data and print it.

## Must do!: (Note to self really)

- Comments!!!! -> cleanUP []
- Add description to img! []
- Clean up css -> DRY; DRY; DRY!! []
- Fix the JS(almost there) [] and append!! [x]

!! Search regEx to find solutions for the search field to accept input, use filter and include methods to sort/compare with movie titles.
