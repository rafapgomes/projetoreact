import './App.css';
import Pessoa  from './components/Pessoa';
import Frase from './components/Frase';
import SayMyName from './components/SayMyName';
function App() {
 
  return (
    <div className="App">
      <h1>testando css</h1>
      <SayMyName nome ="mateus"/>
      <SayMyName nome ="joao"/>
      <SayMyName nome ="lucas"/>
      <Frase/>
      <Frase/>
      <Pessoa nome = "AAA" idade="1" profissao="assa" foto = "https://via.placeholder.com/150"/> 

    </div>
  );
}

export default App;
