let icon_data = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'cat',
		family: 'fas',
		color: 'orange',
		categories: 'animal'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'crow',
		family: 'fas',
		color: 'orange',
		categories: 'animal'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'dog',
		family: 'fas',
		color: 'orange',
		categories: 'animal'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'dove',
		family: 'fas',
		color: 'orange',
		categories: 'animal'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'dragon',
		family: 'fas',
		color: 'orange',
		categories: 'animal'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'horse',
		family: 'fas',
		color: 'orange',
		categories: 'animal'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'hippo',
		family: 'fas',
		color: 'orange',
		categories: 'animal'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'fish',
		family: 'fas',
		color: 'orange',
		categories: 'animal'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'carrot',
		family: 'fas',
		color: 'green',
		categories: 'vegetable'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'apple-alt',
		family: 'fas',
		color: 'green',
		categories: 'vegetable'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'lemon',
		family: 'fas',
		color: 'green',
		categories: 'vegetable'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'pepper-hot',
		family: 'fas',
		color: 'green',
		categories: 'vegetable'
	},
	{
		name: 'astronaut',
		prefix: 'fa-',
		type: 'user-astronaut',
		family: 'fas',
		color: 'blue',
		categories: 'user'
	},
	{
		name: 'graduate',
		prefix: 'fa-',
		type: 'user-graduate',
		family: 'fas',
		color: 'blue',
		categories: 'user'
	},
	{
		name: 'ninja',
		prefix: 'fa-',
		type: 'user-ninja',
		family: 'fas',
		color: 'blue',
		categories: 'user'
	},
	{
		name: 'secret',
		prefix: 'fa-',
		type: 'user-secret',
		family: 'fas',
		color: 'blue',
		categories: 'user'
	}
];

// Milestone 1
// Partendo dalla struttura dati fornita, 
// visualizzare in pagina un box per ogni 
// icona, in cui è presente il nome dell'icona e l'icona stessa.

// creo un container principale
let container = document.createElement("div");

let select = `
	<div>
		<select name="icon_data" id="icon_data">
		<option value="all">All</option>
		<option value="animal">Animal</option>
		<option value="vegetable">Vegetables</option>
		<option value="user">User</option>
		</select>
	</div>`

	document.writeln(select);

let select_data = document.getElementById('icon_data');
	var value_select = select_data.value;
// 	console.log(value_select);

	select_data.addEventListener('change', (event) => {
		let valore = event.target.value;
		console.log(valore);

		for(key in icon_data) {
			let icon = `
			<div>
				<div>
					${icon_data[key].name}
					<i style="color:${icon_data[key].color};" class="${icon_data[key].family} ${icon_data[key].prefix}${icon_data[key].type}"></i>
				</div>
			</div>`
			
			if (valore == icon_data[key].categories) {
				document.writeln(icon);
			}
		
		}

		
		
		

  });

// let select_data = document.getElementById('icon_data');
// var value_select = select_data.value;
// console.log(value_select);

// if(value_select == "Animal") {

// }


// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa
//  proprietà per visualizzare le icone del colore corrispondente.

// Milestone 3
// Aggiungere alla pagina una select in cui le options 
// corrispondono 
// ai vari tipi di icone (animal, vegetable, user).
//  Quando l'utente seleziona un tipo dalla select, 
//  visualizzare solamente le icone corrispondenti.
