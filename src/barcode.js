const Barcode = require('react-barcode');

function CreateBarcode(props) {
    const { barcodeVal } = props
    return (
        <>
            { barcodeVal && <Barcode value={barcodeVal} height="50" fontSize="0" displayValue={true} /> }
        </>
    );
}

export default CreateBarcode;