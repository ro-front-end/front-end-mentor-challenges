import QrCodeDesign from "../components/qrCodeDesign";
import "./App.css";

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl text-center uppercase font-bold">
        Frontend Challenges
      </h1>
      <section>
        <QrCodeDesign />
      </section>
    </div>
  );
}

export default App;
