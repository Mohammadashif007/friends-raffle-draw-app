window.onload = function () {
    const inputField = document.getElementById("inputField");
    const inputBtn = document.getElementById("inputBtn");
    const toggleDiv = document.getElementById("toggleDiv");
    // const nameList = document.getElementById("nameList");
    const display = document.getElementById("display");
    const giveATry = document.getElementById("giveATry");
    const firstPosition = document.getElementById("firstPosition");
    const secondPosition = document.getElementById("secondPosition");
    const thirdPosition = document.getElementById("secondPosition");

    inputBtn.addEventListener("click", () => {
        if (toggleDiv.classList.contains("hidden")) {
            toggleDiv.classList.remove("hidden");
        } else {
            toggleDiv.classList.add("hidden");
        }
    });



    const participantName = [];
    inputField.addEventListener("keypress", (event) => {
        if(event.key == 'Enter'){
            let newName = event.target.value.split(', ');
            if(newName[0] !== ""){
                newName.forEach(name => {
                    participantName.push(name);
                    let item = createListItem(name);
                    toggleDiv.appendChild(item);
                    event.target.value = "";
                })
            }
        }
    })

    giveATry.addEventListener('click', () => {
        if(participantName.length == 0){
            alert("Please input some name first");
        }
        else {
            let shuffleName = shuffle(participantName);
        }
    })

};



function createListItem(name){
    let p = document.createElement('p');
    p.className = 'border p-4 mb-2';
    p.innerHTML = name;
    return p;
}


function shuffle(arr){
    let shuffledArr = [...arr];
    for(let i = shuffledArr.length-1; i > 0; i--){
        let rand = Math.floor(Math.random() * (i+1));
        let temp = shuffledArr[rand];
        shuffledArr[rand] = shuffledArr[i];
        shuffledArr[i] = temp;
    }
    return shuffledArr
}


// console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]));