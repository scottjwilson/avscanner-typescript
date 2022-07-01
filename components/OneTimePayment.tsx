import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Image from "next/image";

import Loading from "./Loading";
import { FaStripe } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";

export default function OneTimePayment() {
  const stripe = useStripe();
  const elements = useElements();

  const [cardLoaded, setCardLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [donationAmount, setDonationAmount] = useState(0);

  async function handleSubmit() {
    console.log("hey");
  }

  const cardElementOptions = {
    style: {
      base: {
        color: "#888",
        fontSize: "20px",
      },
      invalid: {
        color: "#fa755a",
        fontSize: "20px",
      },
    },
  };

  return (
    <>
      <div className="p-2 border-4 border-dotted shadow-xl bg-base-100 rounded-lg max-w-2xl mx-auto">
        <div className="flex items-center justify-center text-xs">
          <GrSecure className="ml-1 text-lg text-primary" />
          Secure Transaction with{" "}
          <FaStripe className="ml-1 text-4xl text-primary" />
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex p-2  w-full">
            <Image src="/visa.svg" height={25} width={25} alt="visa" />
            <Image
              src="/mastercard.svg"
              height={25}
              width={25}
              alt="mastercard"
            />
            <Image src="/amex.svg" height={25} width={25} alt="amex" />
          </div>
        </div>

        <form id="payment-form" onSubmit={handleSubmit}>
          <div className="bg-gray-200 p-4 rounded-xl my-2">
            <CardElement
              id="card-element"
              options={cardElementOptions}
              onChange={(e) => {
                e.complete && setCardLoaded(true);
              }}
            />
          </div>

          <button
            className="btn btn-block btn-outline"
            disabled={isLoading || !stripe || !elements || !cardLoaded}
            id="submit"
            type="submit"
          >
            <span id="button-text">{isLoading ? <Loading /> : "Donate"}</span>
          </button>
          {cardLoaded && (
            <p className="text-center text-sm">Your Card Will Now Be Charged</p>
          )}
        </form>
      </div>
    </>
  );
}
