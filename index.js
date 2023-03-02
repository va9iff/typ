let query = (...args) => document.querySelector(...args)

let pages = {
	login: query('#login'),
	success: query("#success")
}

let browse = pageTo => {
	for (let pageName in pages)
		pages[pageName].classList.add("hidden")
	pages[pageTo].classList.remove("hidden")
}

// window.browse = browse

browse("login")