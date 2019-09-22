import { mapActions } from 'vuex'

export default {
  name: 'NewsPage',
  mounted () {
    this.FETCH_NEWS({ type: 'news' })
  },
  methods: {
    ...mapActions('news', ['FETCH_NEWS'])
  },
  render (h) {
    return <div>Hello World</div>
  }
}
