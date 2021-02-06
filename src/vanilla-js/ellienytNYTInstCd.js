const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; // api endpoint, stays constant
const key = 'b2e02612e179494c9f1f57577b582a0a'; // lets NYT know what user is using API, gives access to API
let url; // variable used to store url

// document. references HTML file, queryselector returns first element
const searchTerm = document.querySelector('.search'); //grabbing the HTML elements by class name
const startDate = document.querySelector('.start-date'); //grabbing the HTML elements by class name
const endDate = document.querySelector('.end-date'); //grabbing the HTML elements by class name
const searchForm = document.querySelector('form'); //grabbing the HTML element by element type
const submitBtn = document.querySelector('.submit'); //grabbing the HTML elements by class name
const nextBtn = document.querySelector('.next'); //grabbing the HTML elements by class name
const previousBtn = document.querySelector('.prev'); //grabbing the HTML elements by class name
const nav = document.querySelector('nav'); //grabbing the HTML element by element type
const section = document.querySelector('section'); //grabbing the HTML element by element type

nav.style.display = 'none'; // hiding the nav display

let pageNumber = 0; // setting the initial page number to 0
// console.log('PageNumber:', pageNumber);

searchForm.addEventListener('submit', fetchResults); // creating an event listener for the form through submit button
// fetchResults is the action that happens when eventListner is fired
nextBtn.addEventListener('click', nextPage); // creating an event listener for the next page button
// nextPage is the action that happens when eventlistner is fired
previousBtn.addEventListener('click', previousPage); // creating an event listener for the previos page button
// previousPage is the action that happens when the eventlistener is fired

function fetchResults(e) {
  //e is an event, by having e, you can interact with the "e" object
  console.log(e);
  e.preventDefault(); // this the page from refreshing before the submit button is hit
  console.log(e);
  url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`;
  // using string interpolation to create our URL
  // url = baseURL + '?apikey=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
  console.log('URL:', url);

  if (startDate.value !== '') {
    // if start date is not blank
    console.log(startDate.value); // console log start date
    url += '&begin_date=' + startDate.value; // appending start date value to url
  }

  if (endDate.value !== '') {
    // if end date is not blank
    console.log(endDate.value); // console log end date
    url += '&end_date=' + endDate.value; // appending end date value to url
  }

  fetch(url) // requesting information from the api
    .then(function (result) {
      // returns the result object from the api
      console.log(result, 'line 43'); // console log of result
      return result.json(); // jsonofyies the result
    })
    .then(function (json) {
      // pull json object from the return from the previous then
      console.log(json);
      displayResults(json); // call the displayResults function giving it an arguement of json
    });
  console.log('this is a test');
}

function displayResults(json) {
  //  function to display results, setting a cap of 10 items per page
  // console.log('Display Results', json);
  // console.log(json.response.docs);

  while (section.firstChild) {
    // checking to see if the section element has any child elements,
    // if it does, then we are removing the section so that way the page shows the new articles
    // everything time we click next/previous buttons
    section.removeChild(section.firstChild);
  }

  let articles = json.response.docs;
  // console.log(articles);

  if (articles.length === 0) {
    // checking to see if there are any articles
    console.log('No results'); // console log no reesults
  } else {
    // if we do have articles
    for (let i = 0; i < articles.length; i++) {
      // loop through the article array
      // console.log(i);
      let article = document.createElement('article'); //creating all the HTML element to display
      // our article
      let heading = document.createElement('h2');
      let link = document.createElement('a');
      let img = document.createElement('img');
      let para = document.createElement('p');
      let clearfix = document.createElement('div'); // bug fix

      let current = articles[i]; // setting up variable to the current article
      console.log('Current:', current); // console log current article

      link.href = current.web_url; // grabbing the web_url out of the current object setting it to
      // our <a href=""> href
      link.target = 'blank'; // setting our target property in the <a> tag to 'blank'
      link.textContent = current.headline.main; // setting the text that represents our link, to
      //the main headline from our current article object <a>Headline</a>

      para.textContent = 'Keywords: '; // setting the text content in our <p> tag 'Keywords: '

      for (let j = 0; j < current.keywords.length; j++) {
        //
        let span = document.createElement('span');
        span.textContent += current.keywords[j].value + ', ';
        para.appendChild(span);
      }

      if (current.multimedia.length > 0) {
        // checking for multimedia data
        img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
        // we are taking the first index in the multimedia array and creating the the src
        // and alt
        img.alt = current.headline.main;
      }

      clearfix.setAttribute('class', 'clearfix'); //targets the clearfix class in the css
      // fixes display errors and makes things look nicer

      article.appendChild(heading); //creating the child node in the parent tags and sends
      // the data through to the html
      heading.appendChild(link);
      article.appendChild(img);
      article.appendChild(para);
      article.appendChild(clearfix);
      section.appendChild(article);
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
}

function nextPage(e) {
  // function that is fired when next button is clicked
  // console.log('Next button clicked');
  pageNumber++; // incrementing our page number up by one
  fetchResults(e); // running our fetchResult function
  console.log('Page Number:', pageNumber);
}

function previousPage(e) {
  // function that is fired when previous button is clicked
  // console.log('Previous button clicked');
  if (pageNumber > 0) {
    //checking to see if we are on a page greater than page 0
    pageNumber--; // decrementing our page number by one
    fetchResults(e); // running our fetchResult function
  } else {
    return; // if we are on page 0, nothing happens
  }
  fetchResults(e); // running our fetchResult function
  console.log('Page:', pageNumber);
}
