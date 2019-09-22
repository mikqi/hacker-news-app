import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Pagination',
  computed: {
    ...mapState('news', ['page'])
  },
  methods: {
    ...mapMutations('news', ['PREV_PAGE', 'NEXT_PAGE'])
  },
  render () {
    const { page, PREV_PAGE, NEXT_PAGE } = this
    return (
      <div class="news-list-nav">
        <a onClick={() => PREV_PAGE()}>&lt; Prev</a>
        {page}
        <a onClick={() => NEXT_PAGE()}>Next &gt;</a>
      </div>
    )
  }
}
