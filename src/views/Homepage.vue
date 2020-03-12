<template>
  <main>
    <section-one />
    <section-two />
  </main>
</template>

<script>
import sectionOne from "@/components/landingpage/SectionOne.vue";
import sectionTwo from "@/components/landingpage/SectionTwo.vue";
export default {
  name: "Homepage",
  components: {
    "section-one": sectionOne,
    "section-two": sectionTwo
  }
};
</script>
