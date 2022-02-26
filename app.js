// Afficher des chiens !

const slurp = (pointer) => document.querySelector(pointer);

const API_URL = 'https://dog.ceo/api/breeds/image/random/';

const nbDogsInput = slurp('#nbDogs');
const getDogsBtn = slurp('#getDogs');
const wrapper = slurp('#wrapper');

const DogCard = (url) => {
	const container = document.createElement('dog');
	const img = document.createElement('img');
	img.src = `${url}`;
	container.append(img);
	return container;
};

const getUrl = ({ dogNumber }) => {
	return `${API_URL}${dogNumber}`;
};

const showDogsNumber = async () => {
	try {
		wrapper.innerHTML = '';
		const dogNumber = nbDogsInput.value;
		const API_URL_COMPLETE = getUrl({ dogNumber });

		const res = await fetch(API_URL_COMPLETE);
		const data = await res.json();
		console.log(data);

		const { message: imagesUrl } = data;
		imagesUrl.forEach((url) => wrapper.append(DogCard(url)));
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

getDogsBtn.addEventListener('click', showDogsNumber);
