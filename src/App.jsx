
import './App.css';

function App() {
  const titol = 'Benvinguts al curs!';
  const subtitol = 'React i Firebase';

  const emailLink = 'mailto:info@despesapp.com';

  return (
    <div className="container">
      <header>
      <h1>{titol}</h1>
      <h3>{subtitol}</h3>
      <p>La data d'avui és: {new Date().toLocaleDateString('ca-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</p>
      <p>Nombre aleatori: {Math.floor(Math.random() * 101)}</p>
      <a href={emailLink}>Contacta'ns</a>
      </header>
    </div>
  )
}

export default App
