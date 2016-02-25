// Qui ci va il corpo della nostra estensione
// Lo script che ogni mezz'ora controlla i commits

function getTitle(html)
{
	return html.match('<title>(.*)?</title>')[1];
}

function getTotalCommits(html)
{
	/* Ricerca del testo
	var indice = html.search('   commits');
	var commits = parseInt((html.substring(indice-50, indice-20)).trim());
	console.log('i commits attuali sono: '+commits);
	*/
	/* Utilizzando il DOM
	document.write(html);
	var a = document.getElementById('js-repo-pjax-container');
	a = a.getElementsByClassName('text-emphasized')[0];
	var commits = parseInt(a.textContent.trim());
	console.log('i commits attuali sono: '+commits);
	*/
	var indice = html.search('   commits');
	return parseInt((html.substring(indice-50, indice-20)).trim());
}

function onStateChange()
{
	if (this.readyState == 4)
	{
		switch(this.status)
		{
			case 200:
				// Tutto è andato ok!
				// andiamo a confrontare i documenti html (i responseText)
				//console.log(getTitle(this.responseText));
				var commits = getTotalCommits(this.responseText);
				chrome.storage.sync.set({totalCommits: commits});
				break;
			case 404:
				// Pagina non trovata!
				console.log("Errore 404: Pagina non trovata!");
				break;
			default:
				console.log(this.status);
				break;
		}
	}
}

function onCommitsChanged(changes, namespace) {
	for (var key in changes)
	{
		var storageChange = changes[key];
		var nuoviCommits = storageChange.newValue - storageChange.oldValue;

		chrome.browserAction.setBadgeBackgroundColor({ color: '#FF0000' });
		chrome.browserAction.setBadgeText({ text: nuoviCommits.toString() });
	}
}

function inviaRichiesta() {
	console.log("0");
	var url = 'https://github.com/Carghaez/corso_web2e3_aa_2015_2016';
	var richiesta = new XMLHttpRequest();
	richiesta.addEventListener('readystatechange', onStateChange);
	richiesta.open("GET", 'http://cors.io/?u='+url, true);
	richiesta.send();
	console.log("1");
}

chrome.storage.onChanged.addListener(onCommitsChanged);

var ogni_ora = 3600000;
var ogni_minuto = 60000;
setInterval(inviaRichiesta, 15000);

console.log("HEY HEY HEY");