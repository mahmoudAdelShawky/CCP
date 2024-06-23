
// querys 
let mainContainer = document.querySelector('.container');
let question_1 = document.querySelector('.question_1');
let question_2 = document.querySelector('.question_2');
let question_3 = document.querySelector('.question_3');
let question_4 = document.querySelector('.question_4');
let question_5 = document.querySelector('.question_5');
let yes_1 = document.getElementById("yes_1");
let no_1 = document.getElementById("no_1");
let yes_2 = document.getElementById("yes_2");
let no_2 = document.getElementById("no_2");
let yes_3 = document.getElementById("yes_3");
let no_3 = document.getElementById("no_3");
let yes_4 = document.getElementById("yes_4");
let no_4 = document.getElementById("no_4");
let yes_5 = document.getElementById("yes_5");
let no_5 = document.getElementById("no_5");


question_2.style.display = "none";
question_3.style.display = "none";
question_4.style.display = "none";
question_5.style.display = "none";

question_1.addEventListener("click", function (event) {
    event.preventDefault();
})
question_2.addEventListener("click", function (event) {
    event.preventDefault();
})
question_3.addEventListener("click", function (event) {
    event.preventDefault();
})
question_4.addEventListener("click", function (event) {
    event.preventDefault();
})
question_5.addEventListener("click", function (event) {
    event.preventDefault();
})


yes_1.addEventListener('click', function () {
    question_3.style.display = "block";
    yes_1.style.display = "none";
    no_1.style.display = "none";
});
no_1.addEventListener('click', function () {
    question_2.style.display = "block";
    yes_1.style.display = "none";
    no_1.style.display = "none";
});
// ///////////////////
yes_2.addEventListener('click', function () {
    let restart = document.createElement("button");
    let p = document.querySelector('.question_2 p');
    p.innerHTML = "تعديل الخطوات العملية او المنتج والبدء من جديد"
    yes_2.style.display = "none";
    no_2.style.display = "none";
    restart.innerHTML = "بدء من جديد";
    restart.style.marginBottom = '10px';
    question_2.appendChild(restart);
    restart.addEventListener("click", function () {
        location.reload();
    });
});
no_2.addEventListener('click', function () {
    let restart = document.createElement("button");
    let p = document.querySelector('.question_2 p');
    p.innerHTML = "ليست نقطة تحكم حرجة";
    yes_2.style.display = "none";
    no_2.style.display = "none";
    restart.innerHTML = "بدء من جديد";
    restart.style.marginBottom = '10px';
    question_2.appendChild(restart);
    restart.addEventListener("click", function () {
        location.reload();
    });
    mainContainer.style.border = "2px solid #0f0";
});
// ////////////////
yes_3.addEventListener('click', function () {
    let restart = document.createElement("button");
    let p = document.querySelector('.question_3 p');
    p.innerHTML = "نقطة تحكم حرجة";
    mainContainer.style.border = "2px solid #f00";
    yes_3.style.display = "none";
    no_3.style.display = "none";
    restart.innerHTML = "بدء من جديد";
    restart.style.marginBottom = '10px';
    question_3.appendChild(restart);
    restart.addEventListener("click", function () {
        location.reload();
    });
});
no_3.addEventListener('click', function () {
    question_4.style.display = "block";
    yes_3.style.display = "none";
    no_3.style.display = "none";
});
// ///////////////////////
yes_4.addEventListener('click', function () {
    question_5.style.display = "block";
    yes_4.style.display = "none";
    no_4.style.display = "none";
});
no_4.addEventListener('click', function () {
    let restart = document.createElement("button");
    let p = document.querySelector('.question_4 p');
    p.innerHTML = "ليست نقطة تحكم حرجة";
    yes_4.style.display = "none";
    no_4.style.display = "none";
    restart.innerHTML = "بدء من جديد";
    restart.style.marginBottom = '10px';
    question_4.appendChild(restart);
    restart.addEventListener("click", function () {
        location.reload();
    });
    mainContainer.style.border = "2px solid #0f0";
});
// /////////////////////////
yes_5.addEventListener('click', function () {
    let restart = document.createElement("button");
    let p = document.querySelector('.question_5 p');
    p.innerHTML = "ليست نقطة تحكم حرجة";
    yes_5.style.display = "none";
    no_5.style.display = "none";
    restart.innerHTML = "بدء من جديد";
    restart.style.marginBottom = '10px';
    question_5.appendChild(restart);
    restart.addEventListener("click", function () {
        location.reload();
    });
    mainContainer.style.border = "2px solid #0f0";
});
no_5.addEventListener('click', function () {
    let restart = document.createElement("button");
    let p = document.querySelector('.question_5 p');
    p.innerHTML = "نقطة تحكم حرجة";
    yes_5.style.display = "none";
    no_5.style.display = "none";
    restart.innerHTML = "بدء من جديد";
    restart.style.marginBottom = '10px';
    question_5.appendChild(restart);
    restart.addEventListener("click", function () {
        location.reload();
    });
    mainContainer.style.border = "2px solid #f00";
});











