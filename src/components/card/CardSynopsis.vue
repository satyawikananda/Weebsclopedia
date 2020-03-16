<template>
  <v-card shaped elevation="6">
    <v-card-title>
      <h4 class="title font-reguler text-black">Synopsis anime</h4>
    </v-card-title>
    <v-card-text>
      <span class="font-weight-reguler body-2">{{ synopsis }}</span>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: ["synopsis"]
};
</script>
