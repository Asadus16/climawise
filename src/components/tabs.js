import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faWind, faSmog, faWater, faEye } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

export default function Tabs({ weatherData }) {
  if (!weatherData) return null;

  const { current, location } = weatherData;

  return (
    <div className="tabs">
      <p className="heading">Today's Highlights</p>

      {current.is_day !== 0 ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="orange" className="size-6" width="100" height="100">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor" class="size-6" width="85" height="85">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      )}

      <div className="tabs1">
        <div className="wind_tab">
          <div className="wind">Wind</div>
          <div className="wind_items">
            <div className="wind_value">
              <p>
                {current.wind_kph} <span> kph</span>
              </p>
            </div>
            <div className="direction">
              <FontAwesomeIcon icon={faLocationArrow} size="lg" />
              <div className="pole">{current.wind_dir}</div>
            </div>
          </div>
        </div>
        <div className="humid_tab">
          <div className="humid">Humidity</div>
          <div className="humid_value">
            <p>
              {current.humidity} <span>%</span>
            </p>
          </div>
        </div>
      </div>
      <div className="tabs2">
        <div className="air_tab">
          <div className="air">Air Pressure</div>
          <div className="air_value">
            <p>
              {current.pressure_mb} <span> mb</span>
            </p>
          </div>
        </div>
        <div className="visible_tab">
          <div className="visible">Visibility</div>
          <div className="visible_value">
            <p>
              {current.vis_km} <span> km</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
