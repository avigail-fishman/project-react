import { useState } from "react";
import { buttonStyle, contactContainerStyle, inputStyle } from "../css/contactUsCss";

function AddItem({addItemByManager}) {

    const [nameValue, setNameValue] = useState("");
    const [priceValue, setPriceValue] = useState("");
    const [imageValue, setImageValue] = useState("");
    const [discraptionValue, setDiscraptionValue] = useState("");

    // פונקציית הוספה מוצר חדש ע"י המנהל
    const addNewItem=()=>{
        const newItem={ name: nameValue, price: priceValue, img: imageValue, discraption: discraptionValue};
        addItemByManager(newItem);
        setDiscraptionValue("");
        setImageValue("");
        setNameValue("");
        setPriceValue("");
      }
    
    return <>

    <div style={contactContainerStyle}>
        <form>
            <input
                type="text"
                value={nameValue}
                placeholder="הכנס שם מוצר"
                onChange={(e) => setNameValue(e.target.value)}
                style={inputStyle}
                required
            />
            <input
                type="text"
                value={priceValue}
                placeholder="הכנס  מחיר מוצר"
                onChange={(e) => setPriceValue(e.target.value)}
                style={inputStyle}
                required

            />
            <input
                type="text"
                value={imageValue}
                placeholder="הכנס תמונה "
                onChange={(e) => setImageValue(e.target.value)}
                style={inputStyle}
                required

            />
            <input
                type="text"
                value={discraptionValue}
                placeholder="הכנס תאור מוצר"
                onChange={(e) => setDiscraptionValue(e.target.value)}
                style={inputStyle}
                required

            />

            <button
                type="button"
                onClick={() => addNewItem()}
                style={buttonStyle}>
                להוספת מוצר
            </button>

        </form>
        </div>
    </>
    
  }
  
  export default AddItem;