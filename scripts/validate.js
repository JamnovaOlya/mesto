const showInputError = (inputElement, errorElement) => {
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (inputElement, errorElement) => {
  inputElement.classList.remove('popup__input_type_error');
  errorElement.textContent = '';
  errorElement.classList.remove('popup__input-error_active');
};

const checkInputValidity = (inputElement, formElement) => {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  const submitButtonSelector = formElement.querySelector('.popup__button');
  if (isInputValid) {
    hideInputError(inputElement, errorElement);
  } else {
    showInputError(inputElement, errorElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some(input => !input.validity.valid);
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = 'disabled';
    buttonElement.classList.add('popup__button_disabled');
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove('popup__button_disabled');
  }
};

const setEventListeners = (formElement) => {
  const inputSelector = Array.from(formElement.querySelectorAll('.popup__input'));
  const submitButtonSelector = formElement.querySelector('.popup__button');
  toggleButtonState(inputSelector, submitButtonSelector);
  inputSelector.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
    checkInputValidity(inputElement, formElement);
    toggleButtonState(inputSelector, submitButtonSelector);
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
