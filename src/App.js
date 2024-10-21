
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <Card style={{ width: '18rem' }}>
        <img src="https://dummyimage.com/350x220/858d94/d5dade&text=Image+cap" className="card-img-top" alt="..." style={{ width: '18rem' }}></img>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Card>

      <Card style={{ width: '18rem' }}>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </Card>
    </div>
  );
}

export default App;
