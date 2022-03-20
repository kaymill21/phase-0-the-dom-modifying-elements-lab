// Write your code here!
const newElement = document.querySelector('main')
document.body.remove(newElement);

const newHeader = document.createElement('h1')
newHeader.id = 'victory';
newHeader.innerHTML = 'kayla is the champion';
document.body.append(newHeader);


// const p = document.createElement('p');
// p.innerHTML = 'Kayla is the champion';

// document.getElementById(newHeader).appendChild(p);




// const element = document.createElement("div");
// document.body.append(element);
// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }

// element.append(ul);


// const newHeader = document.createElement("H1");
// newHeader.id ="victory";
// document.body.append(newHeader);