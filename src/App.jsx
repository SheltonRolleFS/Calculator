import { useEffect, useState } from "react";

// Component Imports
import { Button } from "./components/Button";

function App() {
    const [result, setResult] = useState("0");
    const [value, setValue] = useState("");
    const [entry, setEntry] = useState("");
    const [operation, setOperation] = useState("");
    const [waitingNumber, setWaitingNumber] = useState(null);

    const concatEntries = (singleEntry) => {
        let newNumber = entry.concat(singleEntry);
        setEntry(newNumber);
    };

    const calculate = (intA, intB, operation) => {
        console.log("A: ", intA);
        console.log("B: ", intB);
        console.log("Operation: ", operation);
        let result;
        switch (operation) {
            case "add":
                result = intA + intB;
                break;
            case "subtract":
                result = intA - intB;
                break;
            case "multiply":
                result = intA * intB;
                break;
            case "divide":
                result = intA / intB;
                break;
            default:
                break;
        }
        setOperation("");
        return result;
    };

    const updateOperation = (newOperation) => {
        if (waitingNumber === null) {
            setWaitingNumber(entry);
            setOperation(newOperation);
            setEntry("");
            return;
        }
        if (operation === "") {
            setOperation(newOperation);
        } else if (operation !== "") {
            const result = calculate(
                parseFloat(waitingNumber),
                parseFloat(entry),
                operation
            );
            setResult(result);
            setWaitingNumber(result);
            setOperation(newOperation);
        }
        setEntry("");
    };

    useEffect(() => {
        setValue(entry);
    }, [entry]);

    useEffect(() => {
        console.log(result);
    }, [result]);

    const clear = () => {
        setEntry("");
        setOperation("");
        setWaitingNumber(null);
        setResult("0");
    };

    // useEffect(() => {
    //     if (entry !== "") {
    //         if (waitingNumber === null) {
    //             setWaitingNumber(entry);
    //         } else {
    //             const result = calculate(
    //                 parseFloat(waitingNumber),
    //                 parseFloat(entry),
    //                 prevOperation !== "" ? prevOperation : operation
    //             );
    //             setWaitingNumber(result);
    //         }
    //         setEntry("");
    //     }
    // }, [operation]);

    return (
        <section id="calculator">
            <input id="result" type="text" value={value} disabled />
            <div id="controls">
                <div className="number-grid">
                    <div className="number-row">
                        <Button
                            label="7"
                            className="cell-span-1"
                            onClick={() => concatEntries("7")}
                        />
                        <Button
                            label="8"
                            className="cell-span-1"
                            onClick={() => concatEntries("8")}
                        />
                        <Button
                            label="9"
                            className="cell-span-1"
                            onClick={() => concatEntries("9")}
                        />
                    </div>
                    <div className="number-row">
                        <Button
                            label="4"
                            className="cell-span-1"
                            onClick={() => concatEntries("4")}
                        />
                        <Button
                            label="5"
                            className="cell-span-1"
                            onClick={() => concatEntries("5")}
                        />
                        <Button
                            label="6"
                            className="cell-span-1"
                            onClick={() => concatEntries("6")}
                        />
                    </div>
                    <div className="number-row">
                        <Button
                            label="1"
                            className="cell-span-1"
                            onClick={() => concatEntries("1")}
                        />
                        <Button
                            label="2"
                            className="cell-span-1"
                            onClick={() => concatEntries("2")}
                        />
                        <Button
                            label="3"
                            className="cell-span-1"
                            onClick={() => concatEntries("3")}
                        />
                    </div>
                    <div className="number-row">
                        <Button
                            label="0"
                            className="cell-span-3"
                            onClick={() => concatEntries("0")}
                        />
                    </div>
                </div>
                <div id="operations">
                    <Button label="+" onClick={() => updateOperation("add")} />
                    <Button
                        label="-"
                        onClick={() => updateOperation("subtract")}
                    />
                    <Button
                        label="*"
                        onClick={() => updateOperation("multiply")}
                    />
                    <Button
                        label="/"
                        onClick={() => updateOperation("divide")}
                    />
                </div>
            </div>
            <div id="actions">
                <Button
                    label="="
                    className="calculate"
                    onClick={() =>
                        setValue(
                            calculate(
                                parseFloat(waitingNumber),
                                parseFloat(entry),
                                operation
                            )
                        )
                    }
                />
                <Button label="clear" onClick={() => clear()} />
            </div>
        </section>
    );
}

export default App;
