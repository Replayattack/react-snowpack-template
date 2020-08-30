import React from 'react'
import Helmet from 'react-helmet'

function App(): JSX.Element {
  return (
    <div className="min-h-screen flex items-center justify-center antialiased">
      <Helmet>
        <title>Template</title>
      </Helmet>
      <h1 className="text-2xl">
        React template with Snowpack, TypeScript and Tailwind CSS
      </h1>
    </div>
  )
}

export default App
