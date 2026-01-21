'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center text-center space-y-6 p-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Something went wrong</h1>
            <p>An error occurred. Please try again.</p>
            <button
              onClick={reset}
              className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
