<template>
  <div class="row col-md-6 col-sm-12 mx-auto">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Login</h3>
        <form @submit.prevent="loginNow">
          <div class="form-group py-1">
            <label for="username" class="form-label">Username</label>
            <input
              type="text"
              id="username"
              class="form-control"
              placeholder="Username"
              v-model="user.username"
            />
          </div>
          <div class="form-group py-1">
            <label for="password" class="form-label">Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="user.password"
            />
          </div>
          <div class="form-group py-1">
            <button
              :disable="authLoading"
              class="btn btn-primary w-100"
              type="submit"
            >
              Login
            </button>
          </div>
          <div class="form-group py-1">
            <RouterLink to="/auth/register" class="btn btn-light w-100">
              Need an account? Register Now
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { dispatchers, getters } from "@/services";

export default {
  setup() {
    const user = ref({
      username: "",
      password: "",
    });

    const authLoading = computed(() => getters("auth", "isAuth"));
    const loginNow = () => dispatchers("auth", "loginUser", user.value);

    return {
      user,
      loginNow,
      authLoading,
    };
  },
};
</script>