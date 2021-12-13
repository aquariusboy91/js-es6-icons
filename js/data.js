let icon_data = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'cat',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'crow',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'dog',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'dove',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'dragon',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'horse',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'hippo',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'fish',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'carrot',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'apple-alt',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'lemon',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'pepper-hot',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'astronaut',
		prefix: 'fa-',
		type: 'user-astronaut',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'graduate',
		prefix: 'fa-',
		type: 'user-graduate',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'ninja',
		prefix: 'fa-',
		type: 'user-ninja',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'secret',
		prefix: 'fa-',
		type: 'user-secret',
		family: 'fas',
		color: 'blue'
	}
];

// Milestone 1
// Partendo dalla struttura dati fornita, 
// visualizzare in pagina un box per ogni 
// icona, in cui è presente il nome dell'icona e l'icona stessa.

// creo un container principale
let container = document.createElement("div");

for(key in icon_data) {
	let icon = `
	<div>
		<div>
			${icon_data[key].name}
			<i style="color:${icon_data[key].color};" class="${icon_data[key].family} ${icon_data[key].prefix}${icon_data[key].type}"></i>
		</div>
	</div>`
	document.writeln(icon);
	console.log(icon);
}

console.log(container);

// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa
//  proprietà per visualizzare le icone del colore corrispondente.
