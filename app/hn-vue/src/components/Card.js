/* eslint-disable camelcase */

export default {
  functional: true,
  name: 'Card',
  render (_h, context) {
    const { title, points, user, id, time_ago, comments_count, url, domain } = context.props
    return (
      <li class="news-item">
        <span class="score">{points}</span>
        <span class="title">
          <a href={url} target="_blank" rel="noopener">
            {title}
          </a>
          <span class="host"> {domain}</span>
        </span>
        <br />
        <span class="meta">
          {user ? (
            <span class="by">
              by <router-link to={`/user/${user}`}>{user}</router-link>
            </span>
          ) : (
            ''
          )}
          <span class="time"> {time_ago}</span>
          {comments_count ? (
            <span class="comments-link">
              {' '}
              |{' '}
              <router-link
                to={`/comments/${id}`}
                state={{ title, points, user, time_ago, url, domain }}
              >
                comments: {comments_count}
              </router-link>
            </span>
          ) : (
            ''
          )}
        </span>
      </li>
    )
  }
}
