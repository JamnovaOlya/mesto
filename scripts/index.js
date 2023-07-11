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
  nameInputElement.value = nameEditElement.innerText;
  jobInputElement.value = jobEditElement.innerText;
}

function handlCloseClick() {
  popupElement.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  popupElement.classList.remove('popup_opened');
  nameEditElement.innerText = nameInputElement.value;
  jobEditElement.innerText = jobInputElement.value;
}

editButtonElement.addEventListener('click', handlEditClick);

closeButtonElement.addEventListener('click', handlCloseClick);

formElement.addEventListener('submit', handleFormSubmit);

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

const popupCloseEditProfile = document.querySelector("popup_type_profile");

button.addEventListener('click', () => {
  closePopup(popupCloseEditProfile);
});


const initialCards = [
  {
    name: 'Водопады Моссбро',
    link: 'https://images.unsplash.com/photo-1685471178855-c1fb31d4b6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9zc2JyYWUlMjBmYWxsc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
  },
  {
    name: 'Сеул',
    link: 'https://images.unsplash.com/photo-1570192076494-f399d7681378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D&w=1000&q=80'
  },
  {
    name: 'Гора Сечеда',
    link: 'https://images.unsplash.com/photo-1685990678036-bbb4f85dc3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D&w=1000&q=80'
  },
  {
    name: 'Коала зоопарка Дуйсбурга',
    link: 'https://images.unsplash.com/photo-1684361822885-100cc43b7f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D&w=1000&q=80'
  },
  {
    name: 'Динан',
    link: 'https://images.unsplash.com/photo-1567404412779-b7316fd42107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D&w=1000&q=80'
  },
  {
    name: 'Каппадокия',
    link: 'https://images.unsplash.com/photo-1684863941689-2962fb53bc0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D&w=1000&q=80'
  }
];

const popupAddElement = document.querySelector('.popup_type_element');
const addButtonElement = document.querySelector('.profile__add-element');
const closeAddButtonElement = document.querySelector('.popup__close-button');
const placeTitleInputElement = document.querySelector('.popup__input_type_title');
const imageLinkInputElement = document.querySelector('.popup__input_type_image');


const containerElement = document.querySelector('.elements');
const formAddElement = document.querySelector('.popup__form');
const inputTitleAddElement = document.querySelector('.popup__input_type_title');
const inputLinkAddElement = document.querySelector('.popup__input_type_image');
const gridElement = document.querySelector('.elements-grid');

const template = document.querySelector('#element').content.querySelector('.element');


const popupDeleteButtonElement = document.querySelector(".popup_type_delete");

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

popupDeleteButtonElement.addEventListener('click', () => {
  closePopup(popupDeleteButtonElement);
});

const createCard = ({titleValue, linkValue}) => {
  const clone = template.content.cloneNode(true);
  const cardElement = clone.querySelector('.element');
  const imageElement = cardElement.querySelector('.element__image');
  const titleElement = cardElement.querySelector('.element__title');
  const likeButtonElement = cardElement.querySelector('.element__like-button');
  const deleteButtonElement = cardElement.querySelector('.element__delete-button');

  titleElement.textContent = titleValue;
  imageElement.src = linkValue;

imageElement.addEventListener('click', () => {
  const cardLink = imageElement.getAttribute('src');
  const cardTitle = titleElement.textContent;
  openPopupImage(cardLink, cardTitle);
})

likeButtonElement.addEventListener('click', () => {
  likeButtonElement.classList.toggle('element__like-button_active')
})

deleteButtonElement.addEventListener('click', () => {
  const card = deleteButtonElement.parentElement;
  card.remove()
})

  return cardElement;
}

const handleFormAddSubmit = (evt) => {
  evt.preventDefault();
  const title = inputTitleAddElement.value;
  const link = inputLinkAddElement.value;
  containerElement.prepend();
  handlClosePopupClick();
}

initialCards.forEach((card) => {
  const cardElement = createCard(card);
  containerElement.prepend(cardElement);
})







