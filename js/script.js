const titleElem = document.querySelector(".randomAppear");
const numbers = fiveRandomNum();
titleElem.innerHTML = numbers

setTimeout(function () {
    titleElem.innerHTML = '';
}, 3000);


function fiveRandomNum() {

    const numbers = [];

    for (i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        if (!numbers.includes(randomNumber)) { // se "randomNumbers" NON è incluso in "numbers"
            numbers.push(Math.floor(Math.random() * 100) + 1)
        }
    }

    return numbers;
}

const RandomNumbers = numbers;
console.log(RandomNumbers)

