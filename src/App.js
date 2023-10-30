import "./App.css";
import AboutPage from "./Components/AboutPage";
import Footer from "./Components/Footer";
import LatestArticleList from "./Components/LatestArticleList";
import MainPage from "./Components/MainPage";

function App() {
  return (
    <div>
      <MainPage />
      <AboutPage />
      <LatestArticleList />
      <Footer />
    </div>
  );
}

export default App;
