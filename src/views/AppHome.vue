<script>
import AppHero from '../components/AppHero.vue'
import SectionAbout from '../components/SectionAbout.vue'
import SectionWorks from '../components/SectionWorks.vue'
// import AnimationEnd from '../components/AnimationEnd.vue'
import SectionContact from '../components/SectionContact.vue'
import CustomCursor from '../components/CustomCursor.vue';

export default {
    name: 'AppHome',
    components: {
        AppHero,
        SectionAbout,
        SectionWorks,
        // AnimationEnd,
        SectionContact,
        CustomCursor
    }
}
</script>

<template>
    <AppHero />
    <SectionAbout />
    <SectionWorks />
    <!-- <AnimationEnd /> -->
    <SectionContact />
    <CustomCursor />
</template>

<style scoped></style>
