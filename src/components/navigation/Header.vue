<template>
  <q-header bordered class="bg-white text-dark">
    <q-toolbar>
      <q-btn @click="updateLeftDrawer(!leftDrawer)" flat round icon="fas fa-bars" class="q-mr-sm" />
      <q-toolbar-title class="cursor-pointer">
        <router-link to="/home" tag="span">LawConcept</router-link>
      </q-toolbar-title>
      <q-btn v-for="(item, i) in navigationItems" :key="i" stretch flat :label="item.text" :to="{ path: item.path }" />
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState({
      leftDrawer: state => state.global.leftDrawer,
      navigationItems: state => state.global.navigationItems
    })
  },
  methods: {
    ...mapMutations({
      updateLeftDrawer: 'global/UPDATE_LEFT_DRAWER_STATE'
    })
  }
};
</script>
