<template>
  <q-drawer v-model="persistLeft" :mini="!leftDrawer" side="left" persistent bordered>
    <q-scroll-area class="fit"></q-scroll-area>
  </q-drawer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    persistLeft: true
  }),
  computed: {
    ...mapState({
      leftDrawer: state => state.global.leftDrawer
    })
  }
};
</script>
