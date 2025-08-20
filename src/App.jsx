import { useState } from "react";
import QrCodeDesign from "../components/qrCodeDesign";
import "./App.css";
import CardDesign from "../components/cardDesign";

function App() {
  const [filter, setFilter] = useState("challenge-one");

  return (
    <div className="p-8">
      <div className="bg-black/80 p-4">
        <select
          name="filter"
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-cyan-200 p-4 rounded-xl text-lg font-semibold"
        >
          <option value="challenge-one">Challenge One</option>
          <option value="challenge-two">Challenge Two</option>
          <option value="challenge-three">Challenge Three</option>
        </select>
      </div>

      <section>{filter === "challenge-one" && <QrCodeDesign />}</section>
      {filter === "challenge-two" && (
        <section className="bg-[#f5d13f] min-h-[84vh] p-8">
          <CardDesign />
        </section>
      )}
    </div>
  );
}

export default App;
