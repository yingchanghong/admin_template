<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <svg v-if="color === '#fff'" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em"
        height="1em" viewBox="0 0 512 512" class="iconify iconify--ion">
        <path fill="currentColor"
          d="m478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4ZM334.83 362L368 281.65L401.17 362Zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9Z">
        </path>
      </svg>
      <template v-else>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24"
          class="option-icon" data-v-764effdf="">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
            class="css-c4d79v"></path>
        </svg>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </template>
    </span>
    <template #dropdown>
      <el-dropdown-menu :split-button="true">
        <el-dropdown-item v-for="item in Locale" :key="item.value" @click="changeLocale(item.value)">{{ item.label
        }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang='ts'>
import { Locale } from "~/utils/type"
import { authStore } from '~/store/auth'
import { ArrowDown } from '@element-plus/icons-vue'
const { locale } = useI18n()
const store = authStore()
defineProps({
  color: {
    type: String,
    default: ''
  }
})
const changeLocale = (languge: string) => {
  locale.value = languge
  store.setLocale(languge)
}
</script>

<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
}

.option-icon {
  cursor: pointer;
  width: 16px;
  height: 16px;
}

.el-dropdown {
  outline: none;
  box-shadow: none;

  &:hover {
    .option-icon {
      color: #eee;
    }
  }

  &:focus-visible {
    outline: none;
  }

  &:hover {
    border: none;
    outline: none;
  }

  &-link {
    &:focus-visible {
      outline: none;
      border: none;
    }
  }
}
</style>
