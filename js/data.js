let icon_data = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'cat',
		family: 'fas',
		color: 'orange',
		categories: 'animal',
		element: 'all'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'crow',
		family: 'fas',
		color: 'orange',
		categories: 'animal',
		element: 'all'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'dog',
		family: 'fas',
		color: 'orange',
		categories: 'animal',
		element: 'all'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'dove',
		family: 'fas',
		color: 'orange',
		categories: 'animal',
		element: 'all'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'dragon',
		family: 'fas',
		color: 'orange',
		categories: 'animal',
		element: 'all'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'horse',
		family: 'fas',
		color: 'orange',
		categories: 'animal',
		element: 'all'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'hippo',
		family: 'fas',
		color: 'orange',
		categories: 'animal',
		element: 'all'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'fish',
		family: 'fas',
		color: 'orange',
		categories: 'animal',
		element: 'all'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'carrot',
		family: 'fas',
		color: 'green',
		categories: 'vegetable',
		element: 'all'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'apple-alt',
		family: 'fas',
		color: 'green',
		categories: 'vegetable',
		element: 'all'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'lemon',
		family: 'fas',
		color: 'green',
		categories: 'vegetable',
		element: 'all'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'pepper-hot',
		family: 'fas',
		color: 'green',
		categories: 'vegetable',
		element: 'all'
	},
	{
		name: 'astronaut',
		prefix: 'fa-',
		type: 'user-astronaut',
		family: 'fas',
		color: 'blue',
		categories: 'user',
		element: 'all'
	},
	{
		name: 'graduate',
		prefix: 'fa-',
		type: 'user-graduate',
		family: 'fas',
		color: 'blue',
		categories: 'user',
		element: 'all'
	},
	{
		name: 'ninja',
		prefix: 'fa-',
		type: 'user-ninja',
		family: 'fas',
		color: 'blue',
		categories: 'user',
		element: 'all'
	},
	{
		name: 'secret',
		prefix: 'fa-',
		type: 'user-secret',
		family: 'fas',
		color: 'blue',
		categories: 'user',
		element: 'all'
	}
];

// Milestone 1
// Partendo dalla struttura dati fornita, 
// visualizzare in pagina un box per ogni 
// icona, in cui è presente il nome dell'icona e l'icona stessa.

// creo un container principale
let container = document.createElement("div");

container.classList.add("container");

document.body.append(container);

let select_data = document.getElementById('icon_data');
	var value_select = select_data.value;
	console.log(value_select);

	for (let key in icon_data) {
		let icon = `
		<div>
			<div class = "icon-div">
			<i style="color:${icon_data[key].color};" class="icon-style ${icon_data[key].family} ${icon_data[key].prefix}${icon_data[key].type}"></i>
				<span class="icon-name">${icon_data[key].name}</span>
			</div>
		</div>` 
		;
		container.innerHTML += icon;
	}



	select_data.addEventListener('change', (event) => {
		let valore = event.target.value;
		console.log(valore);

		container.innerHTML = "";
		for (let key in icon_data) {
			let icon = `
		<div>
			<div class = "icon-div">
			<i style="color:${icon_data[key].color};" class="icon-style ${icon_data[key].family} ${icon_data[key].prefix}${icon_data[key].type}"></i>
				<span class="icon-name">${icon_data[key].name}</span>
			</div>
		</div>` 
		;
			
		if (valore === icon_data[key].categories) {
			container.innerHTML += icon;
		} else if (valore === icon_data[key].element){
			container.innerHTML += icon;
		}
		

		
		};
  });


// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa
//  proprietà per visualizzare le icone del colore corrispondente.

// Milestone 3
// Aggiungere alla pagina una select in cui le options 
// corrispondono 
// ai vari tipi di icone (animal, vegetable, user).
//  Quando l'utente seleziona un tipo dalla select, 
//  visualizzare solamente le icone corrispondenti.
