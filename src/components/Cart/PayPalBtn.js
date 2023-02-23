import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayPalBtn() {
   return (
      <div className="btn px-1" >
         <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
         </PayPalScriptProvider>
      </div>
   );
}

export default PayPalBtn;