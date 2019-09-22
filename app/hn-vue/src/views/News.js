import { mapActions, mapState } from 'vuex'
import Card from '../components/Card'
import Loading from '../components/Loading'

export default {
  name: 'NewsPage',
  components: {
    Card,
    Loading
  },
  computed: {
    ...mapState('news', ['news', 'loading'])
  },
  watch: {
    '$route.params.topic': function (newVal, oldVal) {
      if (newVal === oldVal) return
      this.FETCH_NEWS({ type: newVal })
    }
  },
  mounted () {
    console.log(this)
    this.FETCH_NEWS({ type: 'news' })
  },
  methods: {
    ...mapActions('news', ['FETCH_NEWS'])
  },
  render () {
    return <div>{this.loading ? <Loading /> : this.news.map(n => <Card key={n.id} {...n} />)}</div>
  }
}
