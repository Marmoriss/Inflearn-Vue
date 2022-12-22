<template>
  <main>
    <div class="container py-4">
      <MyButton class="my-button" id="mybutton" @click="sayHello"></MyButton>
      <LabelInput label="이름" data-id="id입니당"></LabelInput>
      <hr />
      <FancyButton>Click! <span style="color: red">@@@</span></FancyButton>
      <!-- <FancyButton v-slot="{ fancyMessage }">{{ fancyMessage }}</FancyButton> -->
      <FancyButton>
        <template v-slot="{ fancyMessage }">{{ fancyMessage }}</template>
      </FancyButton>
      <hr />
      <AppCard>
        <!-- <template #[slotArgs]>제목입니다.</template> -->
        <!-- <template #default>내용입니다.</template> -->
        <!-- slot 안써도 암묵적으로 default ~!
        <template #footer>Footer입니다.</template> -->
        <template #header="{ headerMessage }">
          {{ headerMessage }}
        </template>
        <template #default="{ childMessage, helloMessage }">
          디폴트입니다. {{ message }}
          <br />
          {{ childMessage }}
          <br />
          {{ helloMessage }}
        </template>
        <template #footer="{ footerMessage }">
          {{ footerMessage }}
        </template>
      </AppCard>
      <hr />
      <AppCard> 게시글입니다. </AppCard>
    </div>
  </main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from '@/components/AppCard.vue';
import { ref } from 'vue';

export default {
  components: {
    MyButton,
    LabelInput,
    FancyButton,
    AppCard,
  },
  setup() {
    const sayHello = () => {
      alert('안녕하세요 :)');
    };
    const slotArgs = ref('header');
    const message = ref('안녕하세요:)');
    return { sayHello, slotArgs, message };
  },
};
</script>

<style lang="scss" scoped></style>
