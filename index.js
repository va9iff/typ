let query = (...args) => document.querySelector(...args)

let pages = {
	login: query('#login'),
	success: query("#success")
}

let browse = pageTo => {
	for (let pageName in pages)
		pages[pageName].classList.add("hidden")
	setTimeout(
	()=>{
		pages[pageTo].classList.remove("hidden")
	},0)
}

// window.browse = browse

browse("login")

query('.submitBtn').onclick = e => {
	e.preventDefault()
	browse("success")
}