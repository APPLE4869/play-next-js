import "../scss/app.scss"
import Link from 'next/link'

export default () => (
  <div>
    <img src="/static/football.jpg" alt="my image" />
    <div className="example">Welcome to next.js!</div>

    <Link href="/about">
      <a>about</a>
    </Link>
  </div>
)
