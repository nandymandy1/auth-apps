<template>
  <div :class="['alert', `alert-${type}`]">{{ message }}</div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
