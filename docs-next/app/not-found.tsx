import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-purple text-white">
      <div className="text-center px-4">
        <div className="text-8xl font-bold mb-4">404</div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl opacity-90 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="cta-button border-2 border-white text-white hover:bg-white hover:text-purple-600 transition">
            Go Home
          </Link>
          <Link href="/docs" className="cta-button border-2 border-white text-white hover:bg-white hover:text-purple-600 transition">
            View Docs
          </Link>
        </div>
      </div>
    </div>
  )
}
