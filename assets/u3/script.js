// I like IDs better
const btns = document.querySelectorAll(".buttons button")
const restart = document.querySelector("#start-over")

const opn = document.querySelector("#opening")
const inp = document.querySelector("#opening input")
const start = document.querySelector("#opening button")

const pgElm = document.querySelector("#page")
const options = document.querySelector("#options")
const img = document.querySelector("#page img")
const h = document.querySelector("#page h1")
const p = document.querySelector("#page p")

var page // stores current page object
var username

function hasVal(val) {
	return Boolean(val in page && page[val])
}

function setPage(pg) {
	opn.style.display = "none"
	pgElm.style.display = "block"
	page = pg
	console.log(pg)
	// OPTIONS
	let choose = hasVal("choose") ? pg.choose : "choose"
	options.innerHTML = ""
	switch (choose) {
		case "choose":
			btns.forEach((bt, i) => {
				if (hasVal("options") && pg.options.length > i) {
					bt.innerText = pg.options[i]
					bt.style.display = "inline-block"
				} else bt.style.display = "none" // hide buttons we don't need
			})
			break
		case "random":
			btns.forEach((bt, i) => {
				bt.style.display = "none"
				if (hasVal("options") && pg.options.length > i) {
					let li = document.createElement("li")
					li.innerText = pg.options[i]
					options.appendChild(li)
					if (i == 0) {
						bt.innerText = "Next"
						bt.style.display = "inline-block"
					}
				}
			})
	}

	// IMAGE
	if (hasVal("img")) {
		// if there is an img src, show the elm, otherwise hide
		img.style.display = "block"
		img.src = "/assets/u3/img/"+pg.img
	} else {
		img.style.display = "none"
		img.src = "/assets/u3/img/placeholder.jpg" // placeholder - should never see
	}
	// TITLE
	if (hasVal("title")) {
		h.style.display = "block"
		h.innerText = pg.title
	} else {
		h.style.display = "none"
	}
	// TEXT
	p.innerHTML = pg.text.replace("USER", username)
}

function next(opt) {
	setPage(pages[page.next[opt]]) // page number: current page -> next definition -> num of button just clicked
}
btns.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		let choose = hasVal("choose") ? page.choose : "choose"
		switch (choose) {
			case "choose":
				next(i)
				break
			case "random":
				next(Math.floor(Math.random() * page.options.length))
		}
	})
})
restart.addEventListener("click", () => {
	opn.style.display = "block"
	pgElm.style.display = "none"
})

inp.addEventListener("input", () => {
	start.disabled = inp.value.trim() == ""
})
start.addEventListener("click", () => {
	username = inp.value
	setPage(pages[0]) // initialize first page
})
