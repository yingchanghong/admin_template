<template>
  <header>
    <div class="header">
      <Locale class="locale" />
    </div>
    <TabBar class="bar"/>
  </header>
</template>

<style lang="less" scoped>

.header {
  width: 100%;
  height: 48px;
  position: relative;
  background: blue;
  .locale {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
}

</style>
