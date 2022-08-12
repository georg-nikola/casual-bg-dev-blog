import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import ReactWeather, { useOpenWeather } from 'react-open-weather';


const Home = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
      key: '77e690f60404389ceac025cc1410703e',
      lat: '42.6977',
      lon: '23.3219',
      lang: 'en',
      unit: 'metric',
    });
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Title>Casual blog</Card.Title>
            <Card.Text>
              If you are not interested in this app, please accept a simple weather widget as an appology.
            </Card.Text>
          </Card.Body>
        </Card>
      
        <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="Sofia"
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
          showForecast
        />
      </>
    );
};

export default Home