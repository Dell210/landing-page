import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Horario from "./components/Horario";
import Location from "./components/Location";
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
        backgroundColor: "#00bfff",
      }}
    >
      <Header />
      <Hero />
      <Horario />
      <Tickets />
      <Location />
      <Form />
      <Contato />
    </div>
  );
}

export default App;
