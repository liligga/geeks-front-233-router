import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About/About'
import PostList from './pages/PostList/PostList'
import Layout from './components/Layout/Layout'
import SinglePost from './pages/SinglePost/SinglePost'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='about' element={<About/>} />
          
            <Route path='posts' element={<PostList/>} />
            <Route path='posts/:id' element={<SinglePost/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
