<template>
  <div class="card">
    <div class="card-header">Child Componenet</div>
    <div class="card-body">
      <p>appendMessage : {{ appendMessage }}</p>

      <Deep></Deep>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';
import Deep from './DeepChild.vue';
export default {
  components: {
    Deep,
  },
  setup() {
    const appendMessage = inject('app-message');

    return { appendMessage };
  },
};
</script>

<style lang="scss" scoped></style>
