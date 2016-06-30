const isAvailable = (function isAvailableIffe() {
  const test = 'test';
  try {
    window.localStorage.setItem(test, test);
    window.localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}());

export function get(key) {
  if (isAvailable) {
    return JSON.parse(window.localStorage.getItem(key));
  }

  return null;
}

export function set(key, value) {
  if (isAvailable) {
    return window.localStorage.setItem(key, JSON.stringify(value));
  }

  return null;
}

export function remove(key) {
  if (isAvailable) {
    return window.localStorage.removeItem(key);
  }

  return null;
}
