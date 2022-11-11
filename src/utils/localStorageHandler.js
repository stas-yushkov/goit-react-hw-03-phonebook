const localStorageHandler = {
  persist: (key, value) => {
    if (typeof (key) !== 'string') {
      return console.warn('key must be a string');;
    }

    let stringifiedValue = null;

    try {
      stringifiedValue = JSON.stringify(value);
    } catch (error) {
      console.warn(error);
      return error;
    }
    window.localStorage.setItem(
      key,
      stringifiedValue
    );

    return;
  },

  get: key => {
    if (typeof (key) !== 'string') {
      return console.warn('key must be a string');
    }

    let parsedValue = null;

    const value = window.localStorage.getItem(key);

    try {
      parsedValue = JSON.parse(value);
    } catch (error) {
      return console.warn(error);
    }
    return parsedValue;
  }
};

export default localStorageHandler;