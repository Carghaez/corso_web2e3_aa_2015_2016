function ce_labbiamo_fatta() {
	if (richiesta.readyState == 4 && richiesta.status == 200) {
		// andiamo a confrontare i documenti html (i responseText)
		console.log(richiesta.responseText);
	}
	if (richiesta.status == 404) {
		console.log("Errore 404: Pagina non trovata!");
	}
}

var richiesta = new XMLHttpRequest();
richiesta.addEventListener('readystatechange', ce_labbiamo_fatta);
richiesta.open("GET", "URL", true);
richiesta.send();