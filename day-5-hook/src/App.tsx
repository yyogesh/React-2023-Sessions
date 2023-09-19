import './App.css';
import Card from './components/Card';
import Component from './components/ComponentA';
import withLogging from './components/withLogging';

const cards = ['A', 'B', 'C']

const EnhasncedCard = withLogging(Card);

function App() {
  return (
    <div className="App">
      <div className='card-container'>
        {
          cards.map(card => <Card key={card} card={card} />)
        }
      </div>

      <hr />
      <Component component="A" />
      <Card />
      <EnhasncedCard />
    </div>
  );
}

export default App;
