import React from 'react'

export default function ExampleComponent({id, title, completed}) {
  return (
    <div className={`w-48 rounded-lg flex items-center justify-center gap-2 p-4 flex-col bg-blue-800 text-blue-100`}>
          <span>{id}</span>
          <span className={`text-lg font-sans font-bold`}>{title}</span>
          {completed ? <span>Nice Work!</span> : <span>Try Again</span>}
    </div>
  )
}
