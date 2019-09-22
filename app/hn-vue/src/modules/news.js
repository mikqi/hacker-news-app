import axios from 'axios'

const initialState = () => ({
  news: [],
  loading: false,
  menu: [],
  page: 1,
  topic: 'news'
})

const mutations = {
  NEXT_PAGE: state => (state.page = state.page + 1),
  PREV_PAGE: state => (state.page = state.page > 1 ? state.page - 1 : state.page),
  RESET_PAGE: state => (state.page = 1),
  TOGGLE_LOADING: state => (state.loading = !state.loading),
  SET_NEWS: (state, news) => (state.news = news),
  SET_MENU: (state, menu) => (state.menu = menu),
  SET_TOPIC: (state, topic) => (state.topic = topic)
}

const actions = {
  async FETCH_NEWS ({ commit, state }) {
    commit('TOGGLE_LOADING')
    try {
      const { data } = await axios.get(`https://api.hnpwa.com/v0/${state.topic}/${state.page}.json`)
      commit('SET_NEWS', data)
    } finally {
      commit('TOGGLE_LOADING')
    }
  },

  async FETCH_MENU ({ commit }) {
    try {
      const { data } = await axios.get('https://api.hnpwa.com/v0')
      const menus = data.endpoints.filter(menu => menu.maxPages)
      commit('SET_MENU', menus)
    } catch (e) {
      console.error(e)
    }
  }
}

export default {
  namespaced: true,
  state: initialState,
  mutations,
  actions
}
