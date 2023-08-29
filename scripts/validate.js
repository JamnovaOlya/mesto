const showInputError = (inputElement, errorElement) => {
  inputElement.classList.add('.popup__input_type_error');
  errorElement.textContent = inputElement.validationMessage;
};

const hideInputError = (inputElement, errorElement) => {
  inputElement.classList.remove('.popup__input_type_error');
  errorElement.textContent = inputElement.validationMessage;
};

const checkInputValidity = (inputElement, formElement) => {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  if (isInputValid) {
    hideInputError(inputElement, errorElement);
  } else {
    showInputError(inputElement, errorElement);
  }
};

const toggleButtonState = (buttonElement, isActive) => {
  if (isActive) {
    buttonElement.disabled = false;
    buttonElement.classList.remove('popup__button_disabled');
  } else {
    buttonElement.disabled = 'disabled';
    buttonElement.classList.add('popup__button_disabled');
  }
};

const setEventListeners = (formElement) => {
  const inputSelector = Array.from(formElement.querySelectorAll('.popup__input'));
  const submitButtonSelector = formElement.querySelector('.popup__button');
  toggleButtonState(inputSelector, submitButtonSelector);
  inputSelector.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
    checkInputValidity(inputElement, formElement);
    toggleButtonState(submitButtonSelector, formElement.checkInputValidity());
    });
  });
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
   });
};

const enableValidation = () => {
  const formSelector = Array.from(document.querySelectorAll('.popup__form'));
  formSelector.forEach((formElement) => {
  setEventListeners(formElement);
 });
 };

enableValidation();
