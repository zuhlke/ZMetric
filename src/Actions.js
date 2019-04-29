export default class Actions {
  static click(selector) {
    setTimeout(() => {
      const elements = document.querySelectorAll(selector);
      if (elements) elements[0].click();
    }, 1);
  }

  static setValue(selector, newValue) {
    setTimeout(() => {
      const elements = document.querySelectorAll(selector);
      if (elements) elements[0].value = newValue;
    }, 1);
  }

  static setFocus(selector) {
    setTimeout(() => {
      const elements = document.querySelectorAll(selector);
      if (elements) elements[0].focus();
    }, 1);
  }

  static scrollToBottom(selector) {
    setTimeout(() => {
      const elements = document.querySelectorAll(selector);
      if (elements && elements.length) elements[0].scrollTo(0, elements[0].scrollHeight);
    }, 1);
  }

  static type(selector, text) {
    setTimeout(() => {
      const elements = document.querySelectorAll(selector);
      if (elements && elements.length) {
        elements[0].focus();
        elements[0].value = text;
        elements[0].blur();
      }
    }, 1);
  }

}
