import { mapMutations } from 'vuex'

export default {
  name: 'Header',
  props: {
    menu: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    ...mapMutations('news', ['RESET_PAGE', 'SET_TOPIC']),
    handleClick (topic) {
      let currentUri = window.location.pathname
      if (!currentUri.includes(topic)) {
        this.RESET_PAGE()
        this.SET_TOPIC(topic)
      }
    }
  },
  render () {
    return (
      <header ref="root" class="header" style={{ backgroundColor: '#3eaf7c' }}>
        <nav class="inner">
          <div class="container-logo">
            <a>
              <span>Vue HN</span>
            </a>
          </div>
          <div class="fadein">
            {this.menu.map((m, idx) => (
              <router-link to={`/${m.topic}`} key={idx}>
                <span onClick={() => this.handleClick(m.topic)}>{m.topic}</span>
              </router-link>
            ))}
          </div>
        </nav>
      </header>
    )
  }
}
