let title = document.getElementById("title");
title.style.color = "white";
title.style.backgroundColor = "blue";

let p1 = document.getElementsByClassName("paragraph")[0];
subtitle.setAttribute("class", "paragraph");
let seaImg = document.getElementsByTagName("img")[0];
seaImg.setAttribute("src", "seaimg.jpeg");

let ul = document.querySelector("ul");
ul.setAttribute("class", "list");
let element1 = document.createElement("li");
let element2 = document.createElement("li");
let element3 = document.createElement("li");

ul.appendChild(element1);
ul.appendChild(element2);
ul.appendChild(element3);

element1.textContent = "Home";
element2.textContent = "About";
element3.textContent = "Profile";

let table1 = document.createElement("table");
document.body.appendChild(table1);
table1.setAttribute("class", "tableStyle");
let row1 = document.createElement("tr");
let col1 = document.createElement("td");
let col2 = document.createElement("td");
let col3 = document.createElement("td");
col1.textContent = "name";
col2.textContent = "city";
col3.textContent = "age";

let row2 = document.createElement("tr");
let col4 = document.createElement("td");
let col5 = document.createElement("td");
let col6 = document.createElement("td");
col4.textContent = "Loura";
col5.textContent = "Riyadh";
col6.textContent = "21";
table1.appendChild(row1);
table1.appendChild(row2);

row1.appendChild(col1);
row1.appendChild(col2);
row1.appendChild(col3);
row2.appendChild(col4);
row2.appendChild(col5);
row2.appendChild(col6);
