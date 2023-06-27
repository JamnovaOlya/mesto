const editButtonElement = document.querySelector('.profile__edit-button');
const closeButtonElement = document.querySelector('.popup__close-button');
const popupElement = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');
const nameInputElement = document.querySelector('.popup__input_type_name');
const jobInputElement = document.querySelector('.popup__input_type_job');
const nameEditElement = document.querySelector('.profile__title');
const jobEditElement = document.querySelector('.profile__subtitle');

function handlEditClick() {
  popupElement.classList.add('popup_opened');
  nameInputElement.value = nameEditElement.textContent;
  jobInputElement.value = jobEditElement.textContent;
}

function handlCloseClick() {
  popupElement.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  popupElement.classList.remove('popup_opened');
  nameEditElement.textContent = nameInputElement.value;
  jobEditElement.textContent = jobInputElement.value;
}

editButtonElement.addEventListener('click', handlEditClick);

closeButtonElement.addEventListener('click', handlCloseClick);

formElement.addEventListener('submit', handleFormSubmit);

