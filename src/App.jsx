import './App.css';
// import LikeImage from './components/LikeImage';
// import LikePost from './components/LikePost';
import LikePostHoc from './components/HOCs/LikePostHoc';
import LikeImgHoc from './components/HOCs/LikeImgHoc';
import LikeImageRender from './components/Renderprops/LikeImageRender';
import LikePostRender from './components/Renderprops/LikePostRender';

function App() {
  return (
    <div>
      <h1>Blogs post using HOC</h1>
      <LikeImgHoc/>
      <LikePostHoc/>

      {/* <h1>Using code duplicity</h1>
      <LikeImage/>
      <LikePost/> */}

      <h1>Blogs Post using Render Props</h1>
      <LikeImageRender/>
      <LikePostRender/>
      
    </div>
  );
}

export default App;
