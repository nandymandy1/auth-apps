<template>
  <div id="app">
    <Navbar />
    <Alert v-if="message && type" :message="message" :type="type" />
    <div class="container flex-grow-1 py-5">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import Alert from "@/components/utils/Alert";
import Navbar from "@/components/includes/Navbar";
import Footer from "@/components/includes/Footer";

export default {
  setup() {
    const store = useStore();
    const type = computed(() => store.getters["messages/type"]);
    const message = computed(() => store.getters["messages/message"]);

    return {
      type,
      message,
    };
  },

  components: {
    Alert,
    Footer,
    Navbar,
  },
};
</script>