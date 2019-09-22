<template>
  <div>
    <Header />
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
import Header from './components/Header'
import Pagination from './components/Pagination'

export default {
  name: 'App',
  components: {
    Header,
    Pagination
  }
}
</script>

<style>
@import "hn-styles";
</style>
