<template>
  <v-card shaped>
    <v-card-title>
      <h4 class="title font-reguler text-black">{{ title }}</h4>
    </v-card-title>
    <v-card-text>
      <span class="font-weight-reguler display-1">{{ value }}</span>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: ["title", "value"]
};
</script>
