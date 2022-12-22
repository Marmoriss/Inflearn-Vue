<template>
  <div class="container py-4">
    <input ref="inputRef" type="text" value="hello :)" />
    <!-- <LifeCycleChild></LifeCycleChild> -->
    <p id="message">{{ message }}</p>
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import LifeCycleChild from './LifeCycleChild.vue';

export default {
  components: {
    LifeCycleChild,
  },
  setup() {
    // console.log('setup');
    const inputRef = ref(null);
    const message = ref('');
    // onBeforeMount(() => {
    //   console.log('onBeforeMount', inputRef.value);
    // });
    // onMounted(() => {
    //   console.log('onMounted', inputRef.value.value);
    // });

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate', message.value);
      console.log(
        'DOM CONTENTS',
        document.querySelector('#message').textContent,
      );
    });
    onUpdated(() => {
      console.log('onUpdated', message.value);
      console.log(
        'DOM CONTENTS',
        document.querySelector('#message').textContent,
      );
    });
    return { inputRef, message };
  },
};
</script>

<style lang="scss" scoped></style>
