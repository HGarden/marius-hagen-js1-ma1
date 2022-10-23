// Question 1

let cat = [
  {
    complain: catcomplain(),
  },
];

function catcomplain() {
  console.log("Meow!");
}

// Question 2

let heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

let p = document.querySelectorAll("p");

for (let i = 0; i < p.length; i++) {
  let paragraphs = p[i];
  console.log(paragraphs);
  paragraphs.style.color = "red";
}

// Question 6

let resultsContainer = document.querySelector(".results");

resultsContainer.style.backgroundColor = "yellow";
resultsContainer.innerHTML = "<p>New paragraph</p>";

// Question 7

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function catslist(list) {
  for (let i = 0; i < list.length; i++) {
    let listofcats = list[i];
    let catsname = listofcats.name;
    console.log(catsname);
  }
}

catslist(cats);

// Question 8

const catcontainer = document.querySelector(".cat-container");
let div = "";
function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {
    let age = "Age unknown";

    if (cats[i].age) {
      age = cats[i].age;
    }

    div += `<div> <h5>${cats[i].name}</h5> <p>${age}</p> </div>`;
  }

  return div;
}

console.log(createCats(cats)); // why does this line need to be here for the innerHTML to show?

catcontainer.innerHTML = div;
