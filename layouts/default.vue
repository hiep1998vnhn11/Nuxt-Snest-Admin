<template>
  <div>
    <header class="gridx">
      <vs-navbar
        v-model="indexActive"
        class="topnavbar"
        color="primary"
        text-color="rgba(255,255,255,0.7)"
        active-text-color="rgba(255,255,255,1)"
      >
        <div slot="title" class="themelogo">
          <img
            src="@/assets/images/logo-80.png"
            width="40"
            height="40"
            alt="Dashboard"
          />
          <span class="logo-text">
            Snest Admin Temblade
          </span>
        </div>
        <div slot="title">
          <div class="hiddenDesktop cursor-pointer" @click.stop="activeSidebar">
            <vs-icon icon="menu"></vs-icon>
          </div>
        </div>
        <vs-spacer></vs-spacer>
        <vs-dropdown
          vs-trigger-click
          left
          class="cursor-pointer pr-2 pl-2 ml-1 mr-1"
        >
          <a class="text-white-dark" href="#">
            <vs-icon>
              <i class="fas fa-bell"></i>
            </vs-icon>
          </a>
          <vs-dropdown-menu class="topbar-dd">
            <vs-dropdown-item>Action</vs-dropdown-item>
            <vs-dropdown-item>Another Action</vs-dropdown-item>
            <vs-dropdown-item>Something</vs-dropdown-item>
            <vs-dropdown-item>Here</vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
        <vs-dropdown
          vs-trigger-click
          left
          class="cursor-pointer pr-2 pl-2 ml-1 mr-1"
        >
          <a class="text-white-dark" href="#">
            <vs-icon> <i class="fas fa-comment"></i></vs-icon>
          </a>
          <vs-dropdown-menu class="topbar-dd">
            <vs-dropdown-item>Action</vs-dropdown-item>
            <vs-dropdown-item>Another Action</vs-dropdown-item>
            <vs-dropdown-item>Something</vs-dropdown-item>
            <vs-dropdown-item>Here</vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
        <vs-dropdown
          vs-trigger-click
          left
          class="cursor-pointer pr-2 pl-2 ml-1 mr-md-3"
        >
          <a class="text-white-dark user-image" href="#"
            ><img src="@/assets/images/users/3.jpg" alt="User"
          /></a>
          <vs-dropdown-menu class="topbar-dd">
            <vs-dropdown-item
              ><vs-icon icon="person_outline" class="mr-1"></vs-icon> My
              Profile</vs-dropdown-item
            >
            <vs-dropdown-item
              ><vs-icon icon="sentiment_very_satisfied" class="mr-1"></vs-icon>
              My Balance</vs-dropdown-item
            >
            <vs-dropdown-item
              ><vs-icon icon="mail_outline" class="mr-1"></vs-icon>
              Inbox</vs-dropdown-item
            >
            <hr class="mb-1" />
            <vs-dropdown-item
              ><vs-icon icon="gps_not_fixed" class="mr-1"></vs-icon> Account
              Setting</vs-dropdown-item
            >
          </vs-dropdown-menu>
        </vs-dropdown>
      </vs-navbar>
    </header>

    <vs-sidebar
      default-index="1"
      color="primary"
      class="sidebarx"
      spacer
      v-model="isSidebarActive"
      :click-not-close="doNotClose"
    >
      <div class="header-sidebar text-center" slot="header">
        <vs-avatar
          size="70px"
          src="https://randomuser.me/api/portraits/men/85.jpg"
        />
        <h4>
          Steave Jobs<br />
          <small>varun@gmail.com</small>
        </h4>
      </div>
      <template v-for="(sidebarLink, index) in sidebarLinks">
        <vs-sidebar-item
          :icon="sidebarLink.icon"
          :to="sidebarLink.url"
          :key="`sidebarLink-${index}`"
          :index="index"
        >
          <span class="hide-in-minisidebar">{{ sidebarLink.name }}</span>
        </vs-sidebar-item>
      </template>

      <div class="footer-sidebar" slot="footer">
        footer
      </div>
    </vs-sidebar>

    <div class="main-container-fluid">
      <nuxt />
    </div>
  </div>
</template>

<script>
import sidebarLinks from '@/utils/sidebarlinks.js'

export default {
  data: () => ({
    active: 'home',
    indexActive: 0,
    showToggle: false,
    doNotClose: false,
    windowWidth: window.innerWidth,
    sidebarLinks: sidebarLinks
  }),
  computed: {
    //This is for mobile trigger
    isSidebarActive: {
      get() {
        return this.$store.state.isSidebarActive
      },
      set(val) {
        this.$store.commit('IS_SIDEBAR_ACTIVE', val)
      }
    }
  },
  methods: {
    //This is for sidebar trigger in mobile
    activeSidebar() {
      this.$store.commit('IS_SIDEBAR_ACTIVE', true)
    },
    handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth
      this.setSidebar()
    },
    setSidebar() {
      if (this.windowWidth < 1170) {
        this.$store.commit('IS_SIDEBAR_ACTIVE', false)
        this.doNotClose = false
      } else {
        this.$store.commit('IS_SIDEBAR_ACTIVE', true)
        this.doNotClose = true
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.handleWindowResize)
    })
    this.setSidebar()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize)
    this.setSidebar()
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
