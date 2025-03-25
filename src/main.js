import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages, onFetchError, hideSpinner } from './js/pixabay-api';
import { renderImgCard } from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', handlerSearch);

function handlerSearch(evt) {
    evt.preventDefault();
    const formEvt = evt.currentTarget;
    const queryValue = formEvt.elements.query.value.trim();

    if (queryValue === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search term!',
            position: 'topRight',
        });
    } else {
        fetchImages(queryValue)
            .then(data => {
                if (data.hits.length === 0) {
                    iziToast.warning({
                        message:
                            'Sorry, there are no images matching your search query. Please try again!',
                        backgroundColor: '#EF4040',
                        messageColor: '#FFF',
                        iconText: '⚠︎',
                        iconColor: '#FFF',
                        close: true,
                        balloon: true,

                        position: 'topRight',
                    });
                }
                renderImgCard(data.hits);
            })
            .catch(onFetchError)
            .finally(() => {
                formEvt.reset();
                hideSpinner();
            });
    }
}