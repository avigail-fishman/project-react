import { useParams } from "react-router-dom";

function Payment(){

    const {sum} = useParams();

    return<>
    <h1>דף תשלום</h1>
    <h1>המחיר לתשלום הוא: {sum}</h1>
    {/* <h2>{sum}</h2> */}
    <button onClick={() =>alert("קבלה נשלחה למייל")}>אישור לתשלום</button>
    </>
}
export default Payment;