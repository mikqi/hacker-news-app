import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Pagination',
  computed: {
    ...mapState('news', ['page', 'menu'])
  },
  methods: {
    ...mapMutations('news', ['PREV_PAGE', 'NEXT_PAGE'])
  },
  render () {
    const { page, menu, PREV_PAGE, NEXT_PAGE } = this
    const maxPages =
      menu.length > 0 ? menu.filter(m => window.location.pathname.includes(m.topic))[0].maxPages : 1
    return (
      <div class="news-list-nav">
        {page <= 1 ? '' : <a onClick={() => PREV_PAGE()}>&lt; Prev</a>}
        {page}
        {page < maxPages ? <a onClick={() => NEXT_PAGE()}>Next &gt;</a> : ''}
      </div>
    )
  }
}
