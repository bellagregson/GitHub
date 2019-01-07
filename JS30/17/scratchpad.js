
  // Sort this list with including "The", "An", "A"
  const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

  const articles = ["The ", "An ", "A "];
  const bandsList = document.querySelector("#bands");
  let bandsSorted = [];
  let n;
  let p;
  

  function sortList() {

    // for each item in the list:
    // check if it contains an article
    // if true, skip the # of characters in the article + 1 space
    // check the first word after the article
    // base your comparison onthis

    bandsSorted = bands.map((band, i) => {
      articles.forEach(article => {
        n = band.includes(article);
        if (n) {
          return p = article.length;
          console.log(band, n, article, article.length);
        }
        
      })
      .sort((a,b))
    })

   /*bandsSorted = bands.sort((a,b) => {
      console.log(a);
      return -1;
    });*/


    showList();
  }

  function showList() {
    bandsList.innerHTML = bandsSorted.map((band,i) => {
      return `<li>${band}</li>`;
    }).join("");
  }

sortList();




let firstA, firstB;

  function sortList() {

      bands.sort((a, b) =>  {
        
        console.log("a: ", a);

        articles.forEach((article, i, n) => {
          if(a.includes(article)) {
            //console.log("found: " + a + ", " + article);
            firstA = a.substr(article.length)
            console.log("firstA: " + firstA)
          } else if (b.includes(article)) {
            //console.log("found: " + b + ", " + article);
            firstB = b.substr(article.length)
            console.log("firstB: " + firstB)
          }

        })
        if(a.substr(article.length) > b.substr(article.length)) {
          return a-b;
        } else {
          return b-a;
        }

          //return firstA-firstB;
      });
      
      console.log(bands.reverse());
    }


