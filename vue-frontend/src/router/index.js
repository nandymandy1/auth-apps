import authGuard from "./guard";
import AuthRouter from "./authRouter";
import PublicRoutes from "./publicRouter";
import DashboardRouter from "./dashboardRouter";
import { createRouter, createWebHistory } from "vue-router";

const routes = [...PublicRoutes, AuthRouter, DashboardRouter];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

router.beforeEach(authGuard);

export default router;
