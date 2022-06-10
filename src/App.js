import logo from './logo.svg';
import './App.css';
import ComponentA from './ComponentA';

function App() {
  const DatosContacto = {
    nombre: 'Pepe',
    apellido: 'Reyes',
    email: 'contacto@gmail.com',
    conectado: false,
  }
  return (
    <div className="App">
      <header className="App-header">
        <ComponentA contacto={DatosContacto}/>
      </header>
    </div>
  );
}

export default App;
