export default class Actions {
  static click(selector) {
    setTimeout(() => {
      if (selector.charAt(0) === '#') {
        const element = document.getElementById(selector.substring(1, selector.length));
        if (element) element.click();
      } else {
        const elements = document.querySelector(selector);
        if (elements && elements.length) elements[0].click();
      }
    }, 1);
  }

  static setValue(selector, newvalue) {
    setTimeout(() => {
      if (selector.charAt(0) === '#') {
        const element = document.getElementById(selector.substring(1, selector.length));
        if (element) element.value = newvalue;
      } else {
        const elements = document.getElementsByClassName(selector);
        if (elements && elements.length) elements[0].value = newvalue;
      }
    }, 1);
  }

  static setFocus(selector) {
    setTimeout(() => {
      if (selector.charAt(0) === '#') {
        const element = document.getElementById(selector.substring(1, selector.length));
        if (element) element.focus();
      } else {
        const elements = document.getElementsByClassName(selector);
        if (elements && elements.length) elements[0].focus();
      }
    }, 1);
  }

  static scrollToBottom(selector) {
    setTimeout(() => {
      if (selector.charAt(0) === '#') {
        const element = document.getElementById(selector.substring(1, selector.length));
        if (element) element.scrollTo(0, element.scrollHeight);
      } else {
        const elements = document.getElementsByClassName(selector);
        if (elements && elements.length) elements[0].scrollTo(0, elements[0].scrollHeight);
      }
    }, 1);
  }

  static type(selector, text) {
    setTimeout(() => {
      if (selector.charAt(0) === '#') {
        const element = document.getElementById(selector.substring(1, selector.length));
        if (element) {
          element.focus();
          element.value = text;
          element.blur();
        }
      } else {
        const elements = document.getElementsByName(selector).length
          ? document.getElementsByName(selector)
          : document.getElementsByClassName(selector);
        if (elements && elements.length) {
          elements[0].focus();
          elements[0].value = text;
          elements[0].blur();
        }
      }
    }, 1);
  }
}
