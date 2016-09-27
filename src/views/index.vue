<template>
  <h1>{{ msg }}</h1>
</template>

<script>
module.exports = {
  data() {
    // interesting, is it?
    console.log(document.title, this.$route.title);
    document.title = 'new title';

    return {
      msg: 'Hello World!',
    };
  },
};
</script>

<style>
</style>
