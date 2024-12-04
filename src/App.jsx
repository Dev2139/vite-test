import './App.css';
import photo1 from "./Colombia.png"
import photo2 from "./India.png"
import photo3 from "./Indonesia.png"
import photo4 from "./Malaysia.png"
import photo5 from "./Peru.png"
import photo6 from "./Singapore.png"
import photo7 from "./Vietnam (1).png"
import photo8 from "./Cambodia.png"
function App() {
  const handleLoginClick = () => {
    window.location.href = "./3.html";  
  };

  return (
    <div className="globalPresenceHome">
      <div className="globalPresenceSection">
        <h2 className="globalPresenceTitle">Global Presence</h2>
        <div className="globalPresenceWrap">
          <a href="https://www.redbus.co/" target="_blank" rel="noopener noreferrer">
            <picture>
              <source type="image/webp" />
              <img
                className="geo-image"
                loading="lazy"
                src={photo1}
                alt="redBus Colombia"
                title="redBus Colombia"
              />
            </picture>
            <div className="globalPresenceGeoTitle">Colombia</div>
          </a>

          <a href="https://www.redbus.in/" target="_blank" rel="noopener noreferrer">
            <picture>
              <source type="image/webp" />
              <img
                className="geo-image"
                loading="lazy"
                src={photo2}
                alt="redBus India"
                title="redBus India"
              />
            </picture>
            <div className="globalPresenceGeoTitle">India</div>
          </a>

          <a href="https://www.redbus.id/" target="_blank" rel="noopener noreferrer">
            <picture>
              <source type="image/webp" />
              <img
                className="geo-image"
                loading="lazy"
                src={photo3}
                alt="redBus Indonesia"
                title="redBus Indonesia"
              />
            </picture>
            <div className="globalPresenceGeoTitle">Indonesia</div>
          </a>


          <a href="https://www.redbus.my/" target="_blank" rel="noopener noreferrer">
            <picture>
              <source type="image/webp" />
              <img
                className="geo-image"
                loading="lazy"
                src={photo4}
                alt="redBus Malaysia"
                title="redBus Malaysia"
              />
            </picture>
            <div className="globalPresenceGeoTitle">Malaysia</div>
          </a>


          <a href="https://www.redbus.pe/" target="_blank" rel="noopener noreferrer">
            <picture>
              <source type="image/webp" />
              <img
                className="geo-image"
                loading="lazy"
                src={photo5}
                alt="redBus Peru"
                title="redBus Peru"
              />
            </picture>
            <div className="globalPresenceGeoTitle">Peru</div>
          </a>



          <a href="https://www.redbus.sg/" target="_blank" rel="noopener noreferrer">
            <picture>
              <source type="image/webp" />
              <img
                className="geo-image"
                loading="lazy"
                src={photo6}
                alt="redBus Singapore"
                title="redBus India"
              />
            </picture>
            <div className="globalPresenceGeoTitle">Singpore</div>
          </a>
          <a href="https://www.redbus.vn/" target="_blank" rel="noopener noreferrer">
            <picture>
              <source type="image/webp" />
              <img
                className="geo-image"
                loading="lazy"
                src={photo7}
                alt="redBus Vietnam"
                title="redBus Vietnam"
              />
            </picture>
            <div className="globalPresenceGeoTitle">Vietnam</div>
          </a>

          <a href="https://www.redbus.com.kh/" target="_blank" rel="noopener noreferrer">
            <picture>
              <source type="image/webp" />
              <img
                className="geo-image"
                loading="lazy"
                src={photo8}
                alt="redBus Cambodia"
                title="redBus Cambodia"
              />
            </picture>
            <div className="globalPresenceGeoTitle">Cambodia</div>
          </a>

        </div>
      </div>

      <div className="loginButton">
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
}

export default App;
