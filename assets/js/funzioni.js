function bubblesort(vettore)
{
	var scambiato;
	var j = 0;
	var i;
	do{
		scambiato = false;
		i = 0;
		j++;
		while (i < vettore.length - j)
		{
			if(vettore[i] > vettore[i+1])
			{
				// Scambiamo di posto
				var temp = vettore[i];
				vettore[i] = vettore[i+1];
				vettore[i+1] = temp;
				scambiato = true;
			}
			i++;
		}
	}while(scambiato);

	return vettore;
}

function console_Arraylog(vettore)
{
	var stringa_temp = "";
	for(var i = 0; i < vettore.length -1 ; ++i)
		stringa_temp += vettore[i] + ", ";
	stringa_temp += vettore[vettore.length -1];

	console.log(stringa_temp);
}