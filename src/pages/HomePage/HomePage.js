import { ImageBanner } from '../../components/ImageBanner/ImageBanner';
import './HomePage.css'
import { useTranslation } from 'react-i18next';

function HomePage(props) {
  const { t } = useTranslation();
  return(
    <div>
      <h1 className="welcomeTitle">{t('HomePage.welcomeTitle')}</h1>
      <div className="imageBannerBox">
        <ImageBanner 
          darkMode = {props.darkMode}
        />
      </div>
    </div>
  );
}

export { HomePage };