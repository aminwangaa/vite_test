import React from "react"
import Home from "./pages/home/index"

const env = import.meta.env

const a = "222"
console.log(env)
console.log(globalThis, "---")

const App = () => {
  return (
    <div>
      <Home />
    </div>
  )
}

export default App
