<script>
import AppHero from '../components/AppHero.vue'
import SectionAbout from '../components/SectionAbout.vue'
import SectionWorks from '../components/SectionWorks.vue'
import AnimationEnd from '../components/AnimationEnd.vue'
import SectionContact from '../components/SectionContact.vue'

export default {
    name: 'AppHome',
    components: {
        AppHero,
        SectionAbout,
        SectionWorks,
        AnimationEnd,
        SectionContact
    }
}
</script>

<template>
    <AppHero />
    <SectionAbout />
    <AnimationEnd />
    <SectionWorks />
    <SectionContact />
</template>

<style scoped></style>
