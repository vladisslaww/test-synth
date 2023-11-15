import SynthKey from "./SynthKey";
import "./App.css";



function App() {
  const keys = [
    { name: "A", sound: new Audio("a.flac") },
    { name: "S", sound: new Audio("s.flac") },
    { name: "D", sound: new Audio("d.flac") },
  ];
  
  keys.forEach((key) => {
    key.sound.loop = true
  })
  return (
    <div className="app">
      {keys.map((key) => (
        <SynthKey key={key.name} name={key.name} sound={key.sound} />
      ))}
    </div>
  );
}

export default App;
