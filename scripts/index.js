const editButtonElement = document.querySelector('.profile__edit-button');
const closeButtonElement = document.querySelector('.popup__close-button');
const profilePopup = document.querySelector('.popup_type_profile');
const formElement = profilePopup.querySelector('.popup__form');
const nameInputElement = document.querySelector('.popup__input_type_name');
const jobInputElement = document.querySelector('.popup__input_type_job');
const nameEditElement = document.querySelector('.profile__title');
const jobEditElement = document.querySelector('.profile__subtitle');
const popupEditProfile = document.querySelector('popup_type_profile');
const popupAddElement = document.querySelector('.popup_type_element');
const addButtonElement = document.querySelector('.profile__add-element');
const closeAddButtonElement = document.querySelector('.popup__close-button_add');
const placeTitleInputElement = document.querySelector('.popup__input_type_title');
const imageLinkInputElement = document.querySelector('.popup__input_type_image');
const containerElement = document.querySelector('.elements-grid');
const formAddElement = document.querySelector('#formAddElement');
const inputTitleAddElement = document.querySelector('#formAddElement .popup__input_type_title');
const inputLinkAddElement = document.querySelector('#formAddElement .popup__input_type_image');
const gridElement = document.querySelector('.elements-grid');
const popupDeleteButtonElement = document.querySelector(".popup_type_delete");
const cardTemplate = document.querySelector('#card').content;
const popupImageElement = document.querySelector('.popup_type_image');
const picturePopupElement = document.querySelector('.popup__image');
const captionPopupElement = document.querySelector('.popup__caption');
const closeImageButtonElement = document.querySelector('.popup__close-button_image');

function openPopup(popup) {
  popup.classList.add('popup_opened');
	document.addEventListener('keydown', closePopupEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
	document.removeEventListener('keydown', closePopupEsc);
}

const createCard = (titleValue, linkValue) => {
  const clone = cardTemplate.cloneNode(true);
  const cardElement = clone.querySelector('.element');
  const imageElement = cardElement.querySelector('.element__image');
  const titleElement = cardElement.querySelector('.element__title');
  const likeButtonElement = cardElement.querySelector('.element__like-button');
  const deleteButtonElement = cardElement.querySelector('.element__delete-button');

  imageElement.src = linkValue;
  imageElement.alt = titleValue;
  titleElement.textContent = titleValue;

  likeButtonElement.addEventListener('click', () => {
    likeButtonElement.classList.toggle('element__like-button_active')
  });

  deleteButtonElement.addEventListener('click', () => {
    const card = deleteButtonElement.closest('.element')
    card.remove()
  });

  function handlImagePopup() {
    openPopup(popupImageElement)
    picturePopupElement.src = linkValue;
    picturePopupElement.alt = titleValue;
    captionPopupElement.textContent = titleValue;
  }

  imageElement.addEventListener('click', handlImagePopup);

  return cardElement;
}

function handlEditPopupClick() {
  openPopup(profilePopup)
  nameInputElement.value = nameEditElement.innerText;
  jobInputElement.value = jobEditElement.innerText;
}

function handlCloseEditPopup() {
  closePopup(profilePopup)
}

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  nameEditElement.innerText = nameInputElement.value;
  jobEditElement.innerText = jobInputElement.value;
  closePopup(profilePopup);
}

function handlAddPopupClick() {
  openPopup(popupAddElement)
}

function handlCloseAddPopup() {
  closePopup(popupAddElement)
}

const handleFormAddSubmit = (evt) => {
  evt.preventDefault();
  const title = inputTitleAddElement.value;
  const link = inputLinkAddElement.value;
  const cardElement = createCard(title, link);
  containerElement.prepend(cardElement);
  evt.target.reset();
  buttonDisable(formAddElement.querySelector(config.submitButtonSelector), config);
  closePopup(popupAddElement);
}

initialCards.forEach((card) => {
  const cardElement = createCard(card.title, card.link);
  containerElement.prepend(cardElement);
})

function handlCloseImagePopup() {
  closePopup(popupImageElement)
}

function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

const closePopupButtons = document.querySelectorAll('.popup__close-button');
closePopupButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => {
    closePopup(popup);
  });
  popup.addEventListener('click', (evt) => {
    closePopupOverlay(popup, evt);
  });
});

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

editButtonElement.addEventListener('click', handlEditPopupClick);

closeButtonElement.addEventListener('click', handlCloseEditPopup);

formElement.addEventListener('submit', handleFormProfileSubmit);

addButtonElement.addEventListener('click', handlAddPopupClick);

closeAddButtonElement.addEventListener('click', handlCloseAddPopup);

formAddElement.addEventListener('submit', handleFormAddSubmit);

closeImageButtonElement.addEventListener('click', handlCloseImagePopup);
