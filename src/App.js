import { createContext, useRef, useState } from "react";
import './App.css';
import Barcode from "./barcode";
import CreateBarcode from "./barcode";

function App() {
  const [barcodeVal, setBarcodeVal] = useState("")
  const barcode = useRef()
  const createBarcodeImage = (e) => {
    e.preventDefault()
    setBarcodeVal(barcode.current.value)
  }
  return (
    <div className="App">
      <form>
        <input ref={barcode} type='text' />
        <input type="submit" onClick={(e) => createBarcodeImage(e)} value="create barcode"/>
      </form>
      <Barcode barcodeVal={barcodeVal} />
    </div>
  );
}

export default App;
