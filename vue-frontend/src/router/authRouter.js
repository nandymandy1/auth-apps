import AuthView from "@/views/Auth/index.vue";

const AuthRouter = {
  path: "/auth",
  name: "AuthView",
  component: AuthView,
  meta: { public: true },
  redirect: "/auth/login",
  children: [
    {
      path: "login",
      name: "Login",
      component: () => import("@/views/Auth/Login.vue"),
    },
    {
      path: "register",
      name: "Register",
      component: () => import("@/views/Auth/Register.vue"),
    },
  ],
};

export default AuthRouter;
