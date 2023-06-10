<template>
  <header>
    <div class="header bg-white w-full relative hp-48">
      <Locale class="locale" />
    </div>
    <TabBar class="bar" />
  </header>
</template>

<style lang="less" scoped>
.header {
  border-bottom: 1px solid #eee;

  .locale {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
