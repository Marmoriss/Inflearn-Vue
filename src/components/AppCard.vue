<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" header-message="헤더 메세지"></slot>
    </div>
    <div v-if="$slots.default" class="card-body">
      <slot :child-message="childMessage" hello-message="안녕하세요~!">
        #Body
      </slot>
    </div>
    <div v-if="hasFooter" class="card-footer text-muted">
      <slot name="footer" footer-message="푸터 메세지"></slot>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { ref } from 'vue';

export default {
  setup(props, { slots }) {
    const childMessage = ref('자식 컴포넌트 메세지');
    // context.slots
    const hasFooter = computed(() => !!slots.footer); // !!는 js 이중 부정이다. !!이후의 값에 대하여 boolean값을 반환한다. null과 undefined는 false이고, 빈 배열과 빈 객체는 true이다.
    return { childMessage, hasFooter };
  },
};
</script>

<style lang="scss" scoped></style>
