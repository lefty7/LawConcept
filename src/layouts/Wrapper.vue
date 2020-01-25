<template>
  <q-layout view="hHh LpR fFf">
    <TopHeader />

    <!-- Drawers -->
    <LeftDrawer />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import TopHeader from '../components/navigation/Header';
import LeftDrawer from '../components/drawers/Left';

export default {
  name: 'Wrapper',
  components: { TopHeader, LeftDrawer }
};
</script>
