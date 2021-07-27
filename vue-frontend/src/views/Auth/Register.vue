<template>
  <div class="row col-md-6 col-sm-12 mx-auto">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Register</h3>
        <form @submit.prevent="registerNow">
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
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              placeholder="Name"
              v-model="user.name"
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
            <label for="email" class="form-label">Email</label>
            <input
              id="email"
              type="email"
              class="form-control"
              placeholder="Email"
              v-model="user.email"
            />
          </div>
          <div class="form-group py-1">
            <button
              :disabled="authLoading"
              class="btn btn-primary w-100"
              type="submit"
            >
              Register
            </button>
          </div>
          <div class="form-group py-1">
            <RouterLink to="/auth/login" class="btn btn-light w-100">
              Already have an account? Login Now
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed } from "vue";

export default {
  setup() {
    const user = ref({
      username: "",
      password: "",
      email: "",
      name: "",
    });

    const store = useStore();
    const authLoading = computed(() => store.getters["auth/isAuth"]);

    const registerNow = () => store.dispatch("auth/registerUser", user.value);

    return {
      user,
      authLoading,
      registerNow,
    };
  },
};
</script>