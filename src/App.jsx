import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Work from "./components/Work";
import Project from "./components/Projects";
import Contact from "./components/Contact";
const App = () => {
  return (
    <div className="">
      <Sidebar />
      <Main />
      <Work />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
