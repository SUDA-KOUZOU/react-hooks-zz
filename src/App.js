import React, { useState } from 'react'

const App = () =>  {
const [count, setCount] = useState(0)

const increment = () => setCount(count + 1)
const decrement = () => setCount(count - 1)

const increment2 = () => setCount(previousCount => previousCount + 1)
const decrement2 = () => setCount(previousCount => previousCount - 1)

const reset = () => setCount(0)
const multipe2 = () => setCount(count * 2)
const divided_by_3 = () => setCount(previousCount => 
  previousCount % 3 === 0 ?  previousCount = previousCount / 3 : previousCount 
)

return ( 
  <>
    <div>count: {count}</div>
    <div>
      <br />
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={divided_by_3}>３の倍数の時だけ３で割る</button>
    </div>
    <div>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
    </div>
    <div>
      <button onClick={reset}>Reset</button>
      <button onClick={multipe2}>X2</button>
    </div>
  </>
  )
}

export default App;
