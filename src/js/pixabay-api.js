import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const spinner = document.querySelector('.loader');

function showSpinner() {
    spinner.style.display = 'flex';
}

export function hideSpinner() {
    spinner.style.display = 'none';
}

export function fetchImages(query) {
    const API_KEY = '49502034-df263a01178fc9ef1a0cdcc0b';
    showSpinner();
    return fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
    ).then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }
        return response.json();
    });
}

export function onFetchError(error) {
    iziToast.error({
        title: 'Error',
        message:
            'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
    });
}