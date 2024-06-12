import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center py-12 my-12">
      <FontAwesomeIcon icon={faCircleInfo} className="ri-information-line text-gray-300 px-7" />
      <FontAwesomeIcon icon={faGear} className="ri-settings-3-line text-gray-300" />
      <FontAwesomeIcon icon={faArrowsRotate} className="ri-loop-right-line text-gray-300 px-7" onClick={() => setCount((count) => count=0)} />
      </div>
      <h1 className="text-gray-300 flex items-center justify-center text-9xl font-bold">{count}</h1>
      <div className="text-gray-300 flex items-center justify-center py-12 mt-14">
        <button className="rounded-full outline outline-offset-0 outline-gray-300 p-2 px-4 mr-20" onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button className="rounded-full outline outline-offset-0 outline-gray-300 p-2 px-5 ml-20" onClick={() => setCount((count) => count<=0 ? 0 : count-1)}>
          -
        </button>
      </div>
    </>
  )
}

export default App
