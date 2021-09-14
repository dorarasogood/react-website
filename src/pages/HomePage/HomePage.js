import { ImageBanner } from '../../components/ImageBanner/ImageBanner';
import './HomePage.css'

function HomePage(props) {
  return(
    <div className="imageBannerBox">
      <ImageBanner 
        darkMode = {props.darkMode}
      />
    </div>
  );
}

export { HomePage };