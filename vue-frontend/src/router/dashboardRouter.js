import store from "../store";
import DashboardView from "@/views/Dashboard/index.vue";

const DashboardRouter = {
  path: "/dashboard",
  name: "DashboardView",
  redirect: "/dashboard",
  meta: { private: true },
  component: DashboardView,
  children: [
    {
      path: "",
      name: "DashboardHome",
      component: () => import("@/views/Dashboard/Dashboard.vue"),
    },
    {
      path: "profile",
      name: "Profile",
      component: () => import("@/views/Dashboard/Profile.vue"),
    },
    {
      path: "logout",
      name: "Logout",
      beforeEnter: (to, from, nxt) => {
        store.dispatch("auth/logoutUser");
        nxt();
      },
    },
  ],
};

export default DashboardRouter;
