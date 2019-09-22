<template>
  <div>
    <Header :menu="menu" />
    <Pagination />
    <div class="news-view">
      <div class="news-list">
        <div class="view">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Header from './components/Header'
import Pagination from './components/Pagination'

export default {
  name: 'App',
  components: {
    Header,
    Pagination
  },
  computed: {
    ...mapState('news', ['menu'])
  },
  mounted () {
    this.FETCH_MENU()
  },
  methods: {
    ...mapActions('news', ['FETCH_MENU'])
  }
}
</script>

<style>
@import "hn-styles";
</style>
