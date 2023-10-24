<template>
  <div>
    <lzx-friends></lzx-friends>
    <lzx-message></lzx-message>
  </div>
</template>

<script>
import friends from '@/components/friends.vue'
import message from '@/components/message.vue'
export default {
  name: "FriendsLink",
  components: {
    "lzx-friends": friends,
    "lzx-message": message
  }
}
</script>

<style scoped>

</style>
