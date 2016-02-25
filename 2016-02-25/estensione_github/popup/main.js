function main() {
	// Prendiamo l'informazione dei commits
	chrome.storage.sync.get({
		totalCommits: 'ancora non inizializzato'
	}, function(items) {
		document.getElementById('total_commits').textContent = items.totalCommits;
	});
}

document.addEventListener('DOMContentLoaded', main);