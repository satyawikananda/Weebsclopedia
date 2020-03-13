<template>
  <main>
    <section-one />
    <section-two />
    <section-three />
    <section-four />
    <section-five />
  </main>
</template>

<script>
import sectionOne from "@/components/landingpage/SectionOne.vue";
import sectionTwo from "@/components/landingpage/SectionTwo.vue";
import sectionThree from "@/components/landingpage/SectionThree.vue";
import sectionFour from "@/components/landingpage/SectionFour.vue";
import sectionFive from "@/components/landingpage/SectionFive.vue";
export default {
  name: "Homepage",
  components: {
    "section-one": sectionOne,
    "section-two": sectionTwo,
    "section-three": sectionThree,
    "section-four": sectionFour,
    "section-five": sectionFive
  }
};
</script>
