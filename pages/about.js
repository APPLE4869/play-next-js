import Link from 'next/link'

export default () => (
  <div>
    <img src="/static/football.jpg" alt="my image" />
    <div>About</div>

    <Link href="/">
      <a>Index</a>
    </Link>
  </div>
)
