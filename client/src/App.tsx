import { useEffect, useState } from 'react'
import type { ApiResponseTypeExample } from 'shared'

// Example
export function App() {
  const [state, setState] = useState<ApiResponseTypeExample>({
    message: '',
    success: false,
  })

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3333', { signal })
        if (!res.ok) {
          throw new Error('Fetch data was not ok')
        }
        const data: ApiResponseTypeExample = await res.json()
        setState(data)
      } catch (error: unknown) {
        if (error instanceof Error) {
          if (error.name !== 'AbortError') {
            console.error('Fetch error:', error)
          }
        }
      }
    }
    fetchData()

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <main>
      <h1>
        {state.message} - {state.success ? 'Success' : 'Failure'}
      </h1>
    </main>
  )
}
