"use strict";
document.querySelector("#toggle-mode").addEventListener("click", function () {
	document.documentElement.classList.toggle("dark");
	if (document.documentElement.classList.contains("dark")) {
		this.src = "dist/img/sun.svg";
		this.title = "passer en mode clair";
		this.alt = "passer en mode clair";
	} else {
		this.src = "dist/img/moon.svg";
		this.title = "passer en mode sombre";
		this.alt = "passer en mode sombre";
	}
});
