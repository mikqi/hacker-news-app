export default {
  name: 'Header',
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
            <a>news</a>
          </div>
        </nav>
      </header>
    )
  }
}
