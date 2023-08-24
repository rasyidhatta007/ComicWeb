import './App.css'
import NavigationBar from './components/NavigationBar'
import Intro from "./components/Intro"
import Korea from "./components/Korea"
import Japan from "./components/Japan"

import "./style/landingPage.css"

function App() {
  return (
      <div>
        {/* Intro Section */}
          <div className="myBG">
            <NavigationBar />
            <Intro />
          </div>
        {/* end of intro */}

        {/* Korea Section */}
          <div className="korea">
            <Korea/>
          </div>
        {/* End of Korea */}

        {/* Japan Section */}
        <div className="japan">
          <Japan/>
        </div>
        {/* End of Japan */}
        
      </div>
  );
}

export default App
