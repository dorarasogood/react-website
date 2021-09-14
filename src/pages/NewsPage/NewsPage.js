import Accordion from 'react-bootstrap/Accordion';
import './NewsPage.css';
import { useTranslation } from 'react-i18next';
import newsObj from './news.json';

function NewsPage() {
  const { t } = useTranslation();

  let newsList = [];
  let newsEventKey = 0;
  for(let news in newsObj){
    let newsItem = (
      <Accordion.Item eventKey={newsEventKey} key={news}>
        <Accordion.Header>{t(newsObj[news]["title"])}</Accordion.Header>
        <Accordion.Body>
          {t(newsObj[news]["content"])}
        </Accordion.Body>
      </Accordion.Item>
    );
    newsList.push(newsItem);
    newsEventKey++;
  }

  return(
    <div className="accordionBox">
      <Accordion>
        {newsList}
      </Accordion>
    </div>
  );
}

export { NewsPage };