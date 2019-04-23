<template>
  <div id="app">
    
    <wsNavBar :navData='navList'></wsNavBar>
    <frontPage></frontPage>
    <introPage id='introPage'></introPage>
    <workHistory id='workHistory'></workHistory>
    <educationHistory id='educationHistory'></educationHistory>
    <resumeSection id='resumeSection'></resumeSection>
    <boxingSection id='boxingSection'></boxingSection>
    <brownieSection id='brownieSection'></brownieSection>
    <hobbiesSection id='hobbiesSection'></hobbiesSection>
    
  </div>
</template>

<script>

import wsNavBar from './components/wsNavBar.vue'
import frontPage from './components/frontPage.vue'
import introPage from './components/introPage.vue'
import workHistory from './components/workHistory.vue'
import educationHistory from './components/educationHistory.vue'
import hobbiesSection from './components/hobbiesPage.vue'
import boxingSection from './components/boxingPage.vue'
import brownieSection from './components/browniePage.vue'
import resumeSection from './components/resumePage.vue'

export default {
  components: {
    'wsNavBar': wsNavBar,
    'frontPage': frontPage,
    'introPage': introPage,
    'workHistory': workHistory,
    'educationHistory': educationHistory,
    'hobbiesSection': hobbiesSection,
    'resumeSection': resumeSection,
    'boxingSection': boxingSection,
    'brownieSection': brownieSection,
    },

  name: 'app',
  
  data: function() {
    return {
        //stores component sections for use as nav shortcuts
        navList: [
          {
            link:'introPage',
            name: 'Introduction'
          },
          {
            link:'workHistory',
            name: 'Work'
          },
          {
            link:'educationHistory',
            name: 'Education'
          },
          {
            link:'resumeSection',
            name: 'Resume'
          },
          {
            link:'boxingSection',
            name: 'Boxing App'
          },
          {
            link:'brownieSection',
            name: 'Brownie Point App'
          },
          {
            link:'hobbiesSection',
            name: 'Hobbies'
          },
        ]
    }
  }
}
</script>

<style scoped>
/* #app {
    max-width: 1000px;
    width:90%;
    margin: auto;
} */
</style>
