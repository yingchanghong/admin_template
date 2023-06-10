export const useTimeOut = (nums: number) => {
  const count = ref(nums)
  const timer = ref()
  timer.value = setInterval(() => {
    if (count.value <= 0) {
      clearInterval(timer.value)
    } else {
      count.value--
    }
  }, 1000)
  return count
}