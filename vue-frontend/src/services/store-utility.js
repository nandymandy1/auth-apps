import store from "../store";

const getters = (moduleName, property = undefined) => {
  if (!property) {
    return store.getters[`${moduleName}`];
  }
  return store.getters[`${moduleName}/${property}`];
};

const dispatchers = (moduleName, action, payload = undefined) =>
  store.dispatch(`${moduleName}/${action}`, payload);

const committers = (moduleName, commit, payload = undefined) =>
  store.commit(`${moduleName}/${commit}`, payload);

export { getters, committers, dispatchers };
