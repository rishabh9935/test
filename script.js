const courses = [
    {
        name : "Angular",
        price : "2.9"
    },
    {
        name : "React",
        price : "2.5"
    },
    {
        name : "Java",
        price : "2.6"
    },
    {
        name : "C++",
        price : "2.8"
    }
];

function generate(){
const ul = document.querySelector(".list-group");
ul.innerHTML = "";
courses.forEach(course => {

    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");
    const price = document.createTextNode("$ " +course.price);
    span.appendChild(price);

    li.appendChild(span)
    ul.appendChild(li)
});
console.log(courses);
}

generate();

// window.addEventListener("load", generate);

const button = document.querySelector(".sort-btn");
button.addEventListener("click" , () => {
courses.sort((a,b) => a.price - b.price);
generate();
});

// function ascSort() {
//     courses.sort((a,b) => a.price - b.price);
// generate();
// } //ani

const button1 = document.querySelector(".des");
button1.addEventListener("click" , () => {
courses.sort((a,b) => b.price - a.price);
generate();
});


