const state = () => ({
  isSidebarActive: false,
  themeColor: '#2962ff'
})

const mutations = {
  //This is for Sidbar trigger in mobile
  IS_SIDEBAR_ACTIVE(state, value) {
    state.isSidebarActive = value
  }
}

export default {
  state,
  mutations
}
