const showInputError = (inputElement, errorElement, config) => {
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(config.errorClass);
};

const hideInputError = (inputElement, errorElement, config) => {
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(config.errorClass);
};

const checkInputValidity = (inputElement, formElement, config) => {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if (isInputValid) {
    hideInputError(inputElement, errorElement, config);
  } else {
    showInputError(inputElement, errorElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some(input => !input.validity.valid);
};

const toggleButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) {
    buttonDisable(buttonElement, config);
  } else {
    buttonEnable(buttonElement, config);
  }
};

const buttonDisable = (buttonElement, config) => {
  buttonElement.disabled = true;
  buttonElement.classList.add(config.inactiveButtonClass);
}

const buttonEnable = (buttonElement, config) => {
  buttonElement.disabled = false;
  buttonElement.classList.remove(config.inactiveButtonClass);
}

const setEventListeners = (formElement, config) => {
  const inputSelector = Array.from(formElement.querySelectorAll(config.inputSelector));
  const submitButtonSelector = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputSelector, submitButtonSelector, config);
  inputSelector.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
    checkInputValidity(inputElement, formElement, config);
    toggleButtonState(inputSelector, submitButtonSelector, config);
    });
  });
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
};

enableValidation(config);
