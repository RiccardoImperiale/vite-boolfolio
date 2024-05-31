<script>
import AppHeader from './components/AppHeader.vue'
import AppHero from './components/AppHero.vue'
import SectionAbout from './components/SectionAbout.vue'
import SectionWorks from './components/SectionWorks.vue'
// import AnimationEnd from './components/AnimationEnd.vue'
import SectionContact from './components/SectionContact.vue'
import CustomCursor from './components/CustomCursor.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
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
    <AppHeader />
    <AppHero />
    <SectionAbout />
    <SectionWorks />
    <!-- <AnimationEnd /> -->
    <SectionContact />
    <CustomCursor />
</template>

<style scoped></style>
