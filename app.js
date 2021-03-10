// Afficher des chiens !

const API_URL = "https://dog.ceo/api/breeds/image/random/";
const nbDogsInput = document.querySelector('#nbDogs')
const getDogsBtn = document.querySelector('#getDogs')
const wrapper = document.querySelector('#wrapper');

function getDogCard(dogImage) {
	return `
		<div class="dog">
			<img src="${dogImage}"/>
		</div>
		`;
}

async function showDogsNumber() {
	wrapper.innerHTML=''
	const dogsNumber = nbDogsInput.value;
	const API_URL_COMPLETE = API_URL + dogsNumber;

	const res = await fetch(API_URL_COMPLETE);
	const data = await res.json()
	console.log(data)
	const images = data.message;
	for(let image of images) {
		wrapper.innerHTML+=getDogCard(image)
	}
}


getDogsBtn.addEventListener('click', showDogsNumber)