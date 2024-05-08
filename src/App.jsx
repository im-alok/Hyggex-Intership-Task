import CurrentPage from "./Pages/CurrentPage"
import Navbar from "./components/Common/Navbar"

function App() {
  return (
    <div className='w-100vh h-100vh text-black p-5'>  
      <div className='w-11/12 h-full mx-auto flex flex-col gap-12'>
        <Navbar />
        <CurrentPage />
      </div>
        

    </div>
  )
}

export default App
