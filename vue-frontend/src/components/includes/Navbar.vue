<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">Vue3 Auth</RouterLink>
      <button
        type="button"
        aria-expanded="false"
        class="navbar-toggler"
        data-bs-toggle="collapse"
        aria-label="Toggle navigation"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" aria-current="page" to="/">
              Home
            </RouterLink>
          </li>
          <li class="nav-item dropdown" v-if="isAuth">
            <a
              href="#"
              role="button"
              id="navbarDropdown"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              class="nav-link dropdown-toggle"
            >
              Accounts
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <RouterLink class="dropdown-item" to="/dashboard">
                  Dashboard
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/dashboard/profile">
                  Profile
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown" v-if="!isAuth">
            <a
              href="#"
              role="button"
              id="navbarDropdown"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              class="nav-link dropdown-toggle"
            >
              Authentication
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <RouterLink class="dropdown-item" to="/auth/login">
                  Login
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/auth/register">
                  Register
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="nav-item" v-if="isAuth">
            <RouterLink
              class="nav-link"
              aria-current="page"
              to="/dashboard/logout"
            >
              Logout
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const isAuth = computed(() => store.getters["auth/isAuth"]);

    return {
      isAuth,
    };
  },
};
</script>