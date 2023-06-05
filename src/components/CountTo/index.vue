<template>
  <h2>
    <p> {{ Math.round(output) }}+ </p>
  </h2>
</template>

<script lang="ts" setup>
import { TransitionPresets } from "@vueuse/core"
const props = defineProps({
  startVal: { type: Number, default: 0 },
  endVal: { type: Number, default: 0 },
  duration: { type: Number, default: 1500 }
})
const count = ref(props.startVal);
watchEffect(() => {
  count.value = props.startVal;
});
watch(() => props.endVal, (news) => {
  run();
  count.value = news;
})
let output = useTransition(count)
const run = () => {
  output = useTransition(count, {
    duration: props.duration,
    transition: TransitionPresets.easeOutExpo,
  })
}
</script>
