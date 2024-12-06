import './App.css';
import { TemperatureConvertor, TodoList } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TemperatureConvertor />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
