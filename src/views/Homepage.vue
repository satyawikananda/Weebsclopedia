<template>
  <main>
    <section-one />
    <section-two />
    <section-three />
  </main>
</template>

<script>
import sectionOne from "@/components/landingpage/SectionOne.vue";
import sectionTwo from "@/components/landingpage/SectionTwo.vue";
import sectionThree from "@/components/landingpage/SectionThree.vue";
export default {
  name: "Homepage",
  components: {
    "section-one": sectionOne,
    "section-two": sectionTwo,
    "section-three": sectionThree
  }
};
</script>
