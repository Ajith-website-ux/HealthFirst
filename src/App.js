import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MainHeader } from './Pages/MainHeader';
import { PicGallery } from './Pages/PicGallery';
import { LifeStyle } from './Pages/LifeStyle';
import { VideoPage } from './Pages/VideoTags';
import { Pics } from './Pages/Fruitz';
import { BMICharts } from './Pages/Charts';
import { SubscribeForm } from './Pages/SubscribeForm';

function App() {
  return (
    <>
    <Navbar />
    <MainHeader />
    <PicGallery />
    <LifeStyle />
    <VideoPage />
    <Pics />
    <BMICharts />
    <SubscribeForm />
    <Footer />
    </>
  );
}

export default App;
