import { useState } from "react";

function App() {
    const [value, setValue] = useState("0");

    return (
        <section id="calculator">
            <input id="result" type="text" value={value} disabled />
            <div id="controls">
                <div className="number-grid">
                    <div className="number-row">
                        <button className="cell-span-1">7</button>
                        <button className="cell-span-1">8</button>
                        <button className="cell-span-1">9</button>
                    </div>
                    <div className="number-row">
                        <button className="cell-span-1">4</button>
                        <button className="cell-span-1">5</button>
                        <button className="cell-span-1">6</button>
                    </div>
                    <div className="number-row">
                        <button className="cell-span-1">1</button>
                        <button className="cell-span-1">2</button>
                        <button className="cell-span-1">3</button>
                    </div>
                    <div className="number-row">
                        <button className="cell-span-3">0</button>
                    </div>
                </div>
                <div id="operations">
                    <button>+</button>
                    <button>-</button>
                    <button>/</button>
                    <button>*</button>
                </div>
            </div>
        </section>
    );
}

export default App;
