import { mapActions, mapState, mapMutations } from 'vuex'
import Card from '../components/Card'
import Loading from '../components/Loading'

export default {
  name: 'NewsPage',
  components: {
    Card,
    Loading
  },
  computed: {
    ...mapState('news', ['news', 'loading', 'page'])
  },
  watch: {
    '$route.params.topic': {
      handler: function (newVal, oldVal) {
        if (newVal === oldVal) return
        this.SET_TOPIC(newVal)
        this.FETCH_NEWS()
      },
      immediate: true
    },

    page: function (newVal, oldVal) {
      if (newVal === oldVal) return
      this.FETCH_NEWS()
    }
  },
  methods: {
    ...mapActions('news', ['FETCH_NEWS']),
    ...mapMutations('news', ['SET_TOPIC'])
  },
  render () {
    return <div>{this.loading ? <Loading /> : this.news.map(n => <Card key={n.id} {...n} />)}</div>
  }
}
