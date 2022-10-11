import './App.css';
import Home from './components/Home/Home';
import Friend from './components/Friend/Friend';
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendInfo from './components/FriendInfo/FriendInfo';
import Post from './components/Post/Post';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/post' element={<Post></Post>}>
          <Route path=':postId' element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path='/friend' element={<Friend></Friend>}></Route>
        <Route path='/friend/:friendId' element={<FriendInfo></FriendInfo>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
