<template>
  <div class="row">
    <div class="col-md-6 col-sm-12 mx-auto">
      <div class="card" v-if="isAuth">
        <div class="card-body">
          <h3 class="card-text">User</h3>
          <p><span class="form-label">Username </span>{{ user.username }}</p>
          <p><span class="form-label">Name </span>{{ user.name }}</p>
          <p><span class="form-label">Email </span>{{ user.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.getters["auth/user"]);
    const isAuth = computed(() => store.getters["auth/isAuth"]);

    return {
      user,
      isAuth,
    };
  },
};
</script>