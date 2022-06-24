import { useEffect, useState } from "react";

function App() {
    const [value, setValue] = useState("");
    const [entry, setEntry] = useState("");
    const [entries, setEntries] = useState([]);
    const [enteredOperations, setEnteredOperations] = useState([]);
    const [operation, setOperation] = useState("");

    const concatEntries = (singleEntry) => {
        let newNumber = entry.concat(singleEntry);
        setEntry(newNumber);
    };

    const calculate = () => {
        const allEntries = [...entries, entry];
        let tempValue = 0;
        console.log("Entries: ", allEntries);
        console.log("Operations: ", enteredOperations);

        for (let i = 0; i < enteredOperations.length; i++) {
            switch (enteredOperations[i]) {
                case "add":
                    break;
                case "subtract":
                    break;
                case "multiply":
                    break;
                case "divide":
                    break;
                default:
                    return;
            }
        }
    };

    useEffect(() => {
        setValue(entry);
    }, [entry]);

    useEffect(() => {
        if (entry === "") return;
        const allEntries = entries;
        allEntries.push(entry);
        setEntries(allEntries);
        setEntry("");

        const allOperations = enteredOperations;
        allOperations.push(operation);
        setEnteredOperations(allOperations);
    }, [operation]);

    return (
        <section id="calculator">
            <input id="result" type="text" value={value} disabled />
            <div id="controls">
                <div className="number-grid">
                    <div className="number-row">
                        <button
                            onClick={() => concatEntries("7")}
                            className="cell-span-1"
                        >
                            7
                        </button>
                        <button
                            onClick={() => concatEntries("8")}
                            className="cell-span-1"
                        >
                            8
                        </button>
                        <button
                            onClick={() => concatEntries("9")}
                            className="cell-span-1"
                        >
                            9
                        </button>
                    </div>
                    <div className="number-row">
                        <button
                            onClick={() => concatEntries("4")}
                            className="cell-span-1"
                        >
                            4
                        </button>
                        <button
                            onClick={() => concatEntries("5")}
                            className="cell-span-1"
                        >
                            5
                        </button>
                        <button
                            onClick={() => concatEntries("6")}
                            className="cell-span-1"
                        >
                            6
                        </button>
                    </div>
                    <div className="number-row">
                        <button
                            onClick={() => concatEntries("1")}
                            className="cell-span-1"
                        >
                            1
                        </button>
                        <button
                            onClick={() => concatEntries("2")}
                            className="cell-span-1"
                        >
                            2
                        </button>
                        <button
                            onClick={() => concatEntries("3")}
                            className="cell-span-1"
                        >
                            3
                        </button>
                    </div>
                    <div className="number-row">
                        <button
                            onClick={() => concatEntries("0")}
                            className="cell-span-3"
                        >
                            0
                        </button>
                    </div>
                </div>
                <div id="operations">
                    <button onClick={() => setOperation("add")}>+</button>
                    <button onClick={() => setOperation("subtract")}>-</button>
                    <button onClick={() => setOperation("divide")}>/</button>
                    <button onClick={() => setOperation("multiply")}>*</button>
                </div>
            </div>
            <button id="calculate" onClick={calculate}>
                =
            </button>
        </section>
    );
}

export default App;
