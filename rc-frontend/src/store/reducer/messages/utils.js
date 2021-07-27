export const messageSerializer = (payload) => {
  if (payload.errors) {
    return payload.errors.join(" ");
  }
  return payload.message;
};
