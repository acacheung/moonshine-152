<template>
  <div id="app">
    <svg-defs></svg-defs>
    <transition appear appear-class="fade-enter" appear-active-class="fade-enter-active">
      <div>
        <app-header></app-header>
        <transition name="fade">
          <router-view></router-view>
        </transition>
        <app-footer></app-footer>
      </div>
    </transition>
  </div>
</template>

<script>
  import SvgDefs from '@/components/SvgDefs'
  import AppHeader from '@/components/AppHeader'
  import AppFooter from '@/components/AppFooter'
  export default {
    components: {
      SvgDefs,
      AppHeader,
      AppFooter
    }
  }
</script>
