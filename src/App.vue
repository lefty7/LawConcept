<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { ConsoleService } from './services/console';

export default {
  name: 'LawConcept',
  beforeCreate() {
    ConsoleService.disableConsoleLogInProduction();
    console.warn(`LawConcept is running on ${process.env.MACHINE}.`);
  }
};
</script>
