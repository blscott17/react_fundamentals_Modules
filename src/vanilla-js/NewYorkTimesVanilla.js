const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'IvHIjpSl3KLx5UzFopFrZLrEFzw1jLfU'; // lets NYT is
let url; // used to store the url

// the document.querySelector(), Returns the first Element within the document
// that matches the specified selector or group of selectors. If no matches are found, //  null is returned.

// SEARCH FORM
const searchTerm = document.querySelector('.search'); //grabbing the HTML element by class name
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit'); //grab HTML by element type

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

// hide the "Previous"/"Next" navigation when the page loads, before we do a search.
// We don't want it turned on immediately when there are no results to page through.
// nav.style.display = "none";
// take care of some pagination issues, set default values (like displayNav to false
// so that we can be sure it won't be visible until we want it to be.)
let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;
// target.addEventListener()This method will help us identify a target and then add
// an event listener on that target. Event targets can be an element, the document
// object, the window
// NOTE: The submit event fires on a FORM, NOT a BUTTON
// However, the SubmitEvent which is sent to indicate the form's submit action has
// been triggered includes a submitter property, which is the button that was invoked
// to trigger the submit request. The same is true for the nextPage, and previousPage, // except they call click events.
//
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event

searchForm.addEventListener('submit', fetchResults); // Submit Event Type
nextBtn.addEventListener('click', nextPage); // Click Event Type
previousBtn.addEventListener('click', previousPage); // Click Event Type

// more options to append to the url: see this https://developer.nytimes.com/
function fetchResults(e) {
  // event 'e' allows you to interact with the 'e' object
  // default nature of a form element: to submit data, to send a POST request.
  // keeps page from refreshing before Submit button is clicked
  e.preventDefault();
  // Assemble the full URL, using string Interpolation to create our url
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;
  //url = baseURL + "?api-key=" + key + "&page=" + "&q=" + searchTerm.value;
  // console.log(URL: , url);
  if (startDate.value !== '') {
    console.log(startDate.value);
    url += '&begin-date=' + startDate.value; //appending startDate value to url
  }

  if (endDate.value !== '') {
    url += '&end-date=' + endDate.value; //appending endDate value to url
  }

  fetch(url) //Request data from API at url/website
    .then(function (result) {
      //Return the result object from the apifuSnction
      return result.json();
      //JSONify the result/data
    })
    .then(function (json) {
      //pull json object from the returnfrom the previous then
      displayResults(json); //call the displayResults function giving it an argument of JSON
    });
}
function displayResults(json) {
  //function to display results, setting a cap of 10 items p page
  let articles = json.response.docs;
  while (section.firstChild) {
    //checking to see if the section element has any child elements,
    // if it has a firstChild, means it is true, then we are removing the section so that way the
    // page shows the new articles so everytime we
    section.removeChild(section.firstChild);
  }

  if (articles.length >= 10) {
    nav.style.display = 'block'; //shows the nav display if 10 items are in the array
  } else {
    nav.style.display = 'none'; //hides the nav display if less than 10 items are in the array
  }

  if (articles.length === 0) {
    console.log('No results');
  } else {
    for (let i = 0; i < articles.length; i++) {
      let article = document.createElement('article');
      let heading = document.createElement('h2');
      let link = document.createElement('a');
      let img = document.createElement('img');
      let para = document.createElement('p');
      let clearfix = document.createElement('div');

      let current = articles[i];
      console.log('Current:', current);

      link.href = current.web_url;
      link.textContent = current.headline.main;

      para.textContent = 'Keywords: ';

      for (let j = 0; j < current.keywords.length; j++) {
        let span = document.createElement('span');
        span.textContent += current.keywords[j].value + ' ';
        para.appendChild(span);
      }

      if (current.multimedia.length > 0) {
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        img.alt = current.headline.main;
      }

      clearfix.setAttribute('class', 'clearfix');
      // fixes display errors and makes things look nicer

      article.appendChild(heading); //crating the child node in the parent tags
      heading.appendChild(link); // and sends the data thru to the html
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
    }
  }
}

if (articles.length === 10) {
  //checking to see if we have 10 articles
  nav.style.display = 'block'; // revealing our nav bar
  previousBtn.style.display = 'block'; // showing our previous button
  nextBtn.style.display = 'block'; // showing our next button
} else if (articles.length < 10 && pageNumber > 0) {
  // we have less than 10 artciles,
  // and our page number is greater than 0
  nav.style.display = 'block'; // displaying our nav bar
  previousBtn.style.display = 'block'; // showing our previous button
  nextBtn.style.display = 'none'; // hiding our next button
} else {
  nav.style.display = 'none'; // don't show the nav bar
}

function nextPage(e) {
  pageNumber++;
  fetchResults(e);
  console.log('PageNumber:', pageNumber);
}

function previousPage(e) {
  if (pageNumber > 0) {
    pageNumber--;
  } else {
    return;
  }
  fetchResults(e);
  console.log('PageNumber:', pageNumber);
}
