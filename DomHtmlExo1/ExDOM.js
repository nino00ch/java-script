// Exercices DOM 1
// 🚥
// Exercices DOM
// Exercise: Level 1
// 1. Create an index.html file and put four p elements as above:

// 2. Get the first paragraph by using document.querySelector(tagname) and tag
// name
const firstParagraph = document.querySelector("p");
console.log(firstParagraph.textContent);
// 3. Get each of the the paragraph using document.querySelector('#id') and by
// their id

const firstParagraphId = document.querySelector("#first");
console.log(firstParagraphId.textContent);

const secondParagraphId = document.querySelector("#second");
console.log(secondParagraphId.textContent);

const thirdParagraphId = document.querySelector("#third");
console.log(thirdParagraphId.textContent);

const fourthParagraphId = document.querySelector("#fourth");
console.log(fourthParagraphId.textContent);

// 4. Get all the p as nodeList using document.querySelectorAll(tagname) and by
// their tag name
const paragraphList = document.querySelectorAll("p");
console.log(paragraphList);
// 5. Loop through the nodeList and get the text content of each paragraph
paragraphList.forEach((paragraph) => {
  console.log(paragraph.textContent);
});
// 5. Change the text content of paragraph the fourth paragraph, Fourth Paragraph
fourthParagraphId.textContent = "Fourth Paragraph";
// 6. Set id and class attribute for all the paragraphs using different attribute setting
const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach((paragraph) => {
  paragraph.setAttribute("id", "allParagraphs");
  paragraph.setAttribute("class", "allParagraphs");
});
// 6. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
fourthParagraphId.textContent = "hi againe : Fourth Paragraph";

// 7. Set id and class attribute for all the paragraphs using different attribute setting
// methods
// Exercise: Level 2
// 1. Change style of each paragraph using JavaScript(eg. color, background,
// border, font-size, font-family)
allParagraphs[0].style.fontSize = "100px";
allParagraphs[1].style.color = "blue";
allParagraphs[2].style.backgroundColor = "green";
allParagraphs[3].style.border = "4px solid pink";
// allParagraphs[0].class="foor"
allParagraphs[3].classList.add("foor");
// allParagraphs[3].setAttribute("class","foor")
// allParagraphs[3].setAttribute("id","foor")
// allParagraphs[3].setAttribute("href","./")
// allParagraphs[3].setAttribute("src","https/")

// 2. Select all paragraphs and loop through each elements and give the first and
// third paragraph a color of green, and the second and the fourth paragraph a
// red color

for (let index = 0; index < allParagraphs.length; index++) {
   if(index%2==0){
    allParagraphs[index].style.color="red"
   }else{
    allParagraphs[index].style.color="green"
   }
    
}

// a. Set text content, id and class to each paragraphx

// Exercise: Level 3
// DOM: Mini project 1
// Exercices DOM 2
// 1. Develop the following application, use the following HTML elements to get
// started with. You will get the same code on starter folder. Apply all the styles
// and functionality using JavaScript only.
// The h1 color is changing every 1 second
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red
// <!DOCTYPE html>
// <html>
// <head>
// <title>JavaScript for Everyone:DOM</title>
// </head>
// <body>
// <div class="wrapper">
// <h1> MyCode challenges in 2021</h1>
// <h2>learning JavaScript Challenge</h2>
// <ul>
// <li>HTML Challenge Done</li>
// <li>CSS Challenge Done</li>
// <li>javaScript Challenge Coming</li>
// <li>Git/Github Challenge Ongoing </li>
// <li>Reactjs Challenge Coming</li>
// <li>Back-end with NodeJS and Express Challenge Co
// <li>DataBase with MongDB Challenge Coming</li>
// </ul>
// </div>
// </body>
// </html>
