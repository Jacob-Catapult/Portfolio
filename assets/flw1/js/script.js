const box = document.querySelector(".input")
const btn = document.querySelector(".play")
const hardOpt = document.querySelector("#hard-mode")

const tbody = document.querySelector("tbody")
const res = document.querySelector(".result")

const moves = ["rock", "paper", "scissors"]

var hardMode = false;

btn.addEventListener("click", () => {
  hardMode = hardOpt.checked

  let user = box.value.toLowerCase()
  let result;
  if (moves.includes(user)) {
    let row = document.createElement("tr")
    // generate
    let userNum = moves.indexOf(user)

    let rand = Math.floor(Math.random()*moves.length)
    if (hardMode) {
      rand = userNum+1
      if (rand >= moves.length) rand = 0
    }

    let comp = moves[rand]

    // set row num
    let rowNum = document.createElement("td")
    rowNum.innerText = tbody.children.length+1 // current number of rows + 1
    row.appendChild(rowNum)

    // set user choice
    let uChoice = document.createElement("td")
    uChoice.innerText = user
    row.appendChild(uChoice)

    //set result
    let diff = userNum - rand
    if (userNum === rand) {
      result = "Tie!"
    } else if (diff === 1 || diff === -moves.length+1) { // this supports any number of options as long as winning moves are one off of losing moves
      result = "You win!"
    } else {
      result = "Computer wins!"
    }
    let resElm = document.createElement("td")
    resElm.innerText = result
    row.appendChild(resElm)

    // set comp choice
    let cChoice = document.createElement("td")
    cChoice.innerText = comp
    row.appendChild(cChoice)

    tbody.prepend(row)
  } else {
    result = "Invalid Input"
  }
  res.innerText = result
})

// when, box is focused, detected enter key and trigger button
box.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    ev.preventDefault()
    btn.click()
  }
})
