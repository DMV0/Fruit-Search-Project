const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	
	fruit.map((fruitResult) => {
		let lowerCaseResult = fruitResult.toLowerCase();
		if (lowerCaseResult.includes(str))
		{
			results.push(fruitResult);
		}
	})
	return results;
}

function searchHandler(e) {
	clearSuggestions();
	let input = document.getElementById('fruit').value.toLowerCase()
	let searchResults = search(input);
	showSuggestions(searchResults, input);
}

function clearSuggestions(){
	while (suggestions.firstChild)
	{
		suggestions.removeChild(suggestions.firstChild);
	}
}

function showSuggestions(results, inputVal) {
	if (inputVal === ""){
		return;
	}
	results.map((searchSuggestion) => {
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(searchSuggestion));
		suggestions.appendChild(li);
	})
}

function useSuggestion(e) {
	document.getElementById('fruit').value = e.target.childNodes[0].nodeValue;
	clearSuggestions();
}

function highlightSuggestion(e) {
	e.target.style.backgroundColor = "orangered";
	console.log(e.target.childNodes[0].nodeValue);
}

function unhighlightSuggestion(e) {
	e.target.style.backgroundColor = "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener("mouseover", highlightSuggestion);
suggestions.addEventListener("mouseout", unhighlightSuggestion);