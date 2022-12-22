<template>
  <div>
    <div id="modifiers">
      <div @click="clickDiv">
        DIV 영역
        <p @click="clickP">
          P 영역
          <span @click.stop="clickSpan"> SPAN 영역</span>
        </p>
      </div>
    </div>
    <a href="http://naver.com" @click.prevent="clickA">a 영역</a>
  </div>
</template>

<script>
export default {
  setup() {
    const clickDiv = () => {
      console.log('clickDiv');
      location.href = 'http://naver.com';
    };
    const clickP = () => {
      console.log('clickP');
    };
    const clickSpan = () => {
      console.log('clickSpan');
      // e.stopPropagation();
      alert('좋아요');
    };
    const clickA = () => {
      alert('기능~!~!');
    };
    return { clickDiv, clickP, clickSpan, clickA };
  },
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;
}

#modifiers div {
  background-color: #ccc;
}

#modifiers p {
  background-color: #999;
}
#modifiers span {
  background-color: #666;
  display: block;
}
</style>
