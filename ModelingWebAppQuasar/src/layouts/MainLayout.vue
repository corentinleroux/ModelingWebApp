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
          <q-btn flat to="./" no-caps icon="home" label="ModelingWebApp" class="qbuttontitle"/>
          
        </q-toolbar-title>
<q-btn v-if="loggedIn" @click="logoutUser" :class="$q.dark.isActive ? 'bg-primary text-white' : 'bg-white text-blue'" color="primary" icon-right="logout" label="Se deconnecter"  class="logoutbutton"></q-btn>
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
import { mapActions, mapState } from 'Vuex'

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
    to: '/inscription'
  },
  {
    title: 'Connexion',
    icon: mdiGithub,
    to: '/login'
  },
  {
    title: 'Compte',
    caption: 'Accéder à mon compte',
    icon: mdiAccountCircle,
    to: '/account'
  },
  {
    title: 'Github',
    caption:'Accéder au github',
    icon: mdiGithub,
    to: 'https://github.com/corentinleroux/ModelingWebApp'
  },
  {
    title: 'Drawboard Stack 1',
    caption: 'Accéder au Stack 1 : Diagram-vue',
    icon: mdiDrawingBox,
    to: '/editor'
  },
  {
    title: 'Drawboard Stack 2',
    caption: 'Accéder au Stack 2 : Jointjs',
    icon: mdiDraw,
    to: '/editor2'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      version,
      formData: {email: 'test@gmail.fr', password: 'testtest'},
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
  },
  methods:{
    ...mapActions('auth', ['loginUser','logoutUser']),
    submitForm(){
      console.log('fonction de connexion');
      this.loginUser(this.formData)
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn'])
  }
}
</script>
<style scoped>
.logoutbutton {
  margin-right : 10px ;
}

body.body--dark {
  background: #000
}
#q-app > div > header > div.q-toolbar.row.no-wrap.items-center.bg-primary.text-white > div > a > span.q-focus-helper{
  border : none  ; 
}
</style>