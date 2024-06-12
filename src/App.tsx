import "./App.css";
import "./animation.css"
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Horario from "./components/Horario";
import Location from "./components/Location";
import Sobre from "./components/Sobre";
import Tickets from "./components/Tickets";
import Contato from "./components/contato";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        width: "100vw",
        gap: "2rem",
        backgroundColor: "#880808",
      }}
    >
      <Header />
      <Hero />
      <Sobre />
      <Horario />
      <Tickets />
      <Location />
      <Form />
      <Contato />
    </div>
  );
}

export default App;
