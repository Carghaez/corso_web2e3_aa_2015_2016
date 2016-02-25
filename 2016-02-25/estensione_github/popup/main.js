function main() {
	// Prendiamo l'informazione dei commits
	chrome.storage.sync.get({
		totalCommits: 'ancora non inizializzato'
	}, function(items) {
		document.getElementById('total_commits').textContent = items.totalCommits;
	});
	chrome.browserAction.setBadgeText({ text: '' });
	 chrome.tabs.create({
	    url: 'https://github.com/Carghaez/corso_web2e3_aa_2015_2016'
	  });
}

document.addEventListener('DOMContentLoaded', main);