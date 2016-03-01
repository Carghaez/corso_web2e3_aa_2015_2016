function ce_labbiamo_fatta() {
	if (this.readyState == 4 && this.status == 200) {
		// andiamo a confrontare i documenti html (i responseText)
		console.log(this.responseText);
	}
	if (this.status == 404) {
		console.log("Errore 404: Pagina non trovata!");
	}
}

var richiesta = new XMLHttpRequest();
richiesta.addEventListener('readystatechange', ce_labbiamo_fatta);
richiesta.open("GET", "URL", true);
richiesta.send();

var richiesta2 = new XMLHttpRequest();
richiesta2.addEventListener('readystatechange', ce_labbiamo_fatta);
richiesta2.open("GET", "URL", true);
richiesta2.send();