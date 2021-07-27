import store from "../store";

const authGuard = (to, from, nxt) => {
  let isAuth = store.getters["auth/isAuth"];

  if (to.meta.private) {
    if (isAuth) {
      return nxt();
    } else {
      return nxt({
        query: {
          redirect: true,
        },
        path: "/auth/login",
      });
    }
  }

  if (to.meta.public) {
    if (!isAuth) {
      return nxt();
    } else {
      return nxt({
        query: {
          redirect: true,
        },
        path: "/dashboard",
      });
    }
  }

  return nxt();
};

export default authGuard;
