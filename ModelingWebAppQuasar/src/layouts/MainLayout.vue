<template>
  <q-layout view="lHh Lpr fFf">
    <q-header elevated>
      <q-toolbar :class="$q.dark.isActive ? 'bg-black text-white' : 'bg-primary text-white'">
        <q-btn
          flat
          dense
          round
          :icon="mdiMenu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          ModelingWebApp
        </q-toolbar-title>

        <q-btn flat round @click="$q.dark.toggle()" :icon="$q.dark.isActive ? mdiBrightness2 : mdiBrightness5" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import { version } from '@quasar/extras/package.json'

import {
  mdiMenu,
  mdiBrightness2,
  mdiBrightness5,
  mdiSchool,
  mdiAccountCircle,
  mdiDraw,
  mdiDrawingBox,
  mdiGithub
} from '@quasar/extras/mdi-v5'

const linksData = [
  {
    title: 'Inscription',
    caption:'Créer un compte',
    icon: mdiSchool,
    link: '/inscription'
  },
  {
    title: 'Connexion',
    icon: mdiGithub,
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Compte',
    caption: 'Accéder à mon compte',
    icon: mdiAccountCircle,
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Github',
    caption:'Accéder au github',
    icon: mdiGithub,
    link: 'https://github.com/corentinleroux/ModelingWebApp'
  },
  {
    title: 'Dashboard',
    caption: 'Accéder à mon dashboard',
    icon: mdiDrawingBox,
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Drawboard',
    caption: 'Créer un diagrammer',
    icon: mdiDraw,
    link: 'https://facebook.quasar.dev'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      version,
      mdiMenu,
      mdiBrightness2,
      mdiBrightness5,
      mdiSchool,
      mdiDrawingBox,
      mdiAccountCircle,
      mdiDraw,
      mdiGithub,
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
