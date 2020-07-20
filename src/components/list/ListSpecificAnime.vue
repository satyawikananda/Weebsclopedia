<template>
  <div id="list-detail">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="title font-weight-reguler">{{
          title
        }}</v-list-item-title>
        <v-list-item-subtitle>{{ detail }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider class="mt-2 mb-2 mx-auto" style="width:95%;" />
  </div>
</template>
<script>
export default {
  props: ["title", "detail"]
};
</script>
