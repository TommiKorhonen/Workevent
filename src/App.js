import EventDashboard from "./components/events/EventDashboard";
import Header from "./components/Header";
import Navbar from "./components/nav/Navbar";



function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Header />
        <EventDashboard />
      </div>
    </>
  );
}

export default App;
