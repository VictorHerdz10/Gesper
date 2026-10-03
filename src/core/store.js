const state = {};
const listeners = new Map();

export const store = {
  get(key) {
    return state[key];
  },

  set(key, value) {
    state[key] = value;
    this._emit(key, value);
  },

  subscribe(key, fn) {
    if (!listeners.has(key)) listeners.set(key, new Set());
    listeners.get(key).add(fn);
    return () => listeners.get(key).delete(fn);
  },

  _emit(key, value) {
    if (listeners.has(key)) {
      listeners.get(key).forEach((fn) => fn(value));
    }
  },
};