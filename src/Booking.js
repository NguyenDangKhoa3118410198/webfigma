import React from "react";
import "./styles/css/booking.css";

export default function Booking() {
   return (
      <div className="booking">
         <div className="booking__wrapper">
            <div className="booking__container">
               <div className="booking__info">
                  <div className="booking__info_customer-detail">
                     <p className="booking__info__customer-name">
                        Customer's name
                     </p>
                     <div className="booking__info__customer-contact">
                        <p>
                           {"{"}
                           phone number
                           {"}"}
                        </p>
                        <p>
                           {"{"}
                           booking date, booking time
                           {"}"}
                        </p>
                     </div>
                  </div>
                  <div className="booking__divider"></div>
                  <div className="booking__info-details">
                     <div className="booking__service">
                        <p className="booking__service__title">
                           Service Details
                        </p>
                        <>
                           <div className="booking__service__wrapper">
                              <div className="booking__service__content">
                                 <div className="booking__service__item">
                                    <p className="booking__service__item__name">
                                       Service's name
                                    </p>
                                 </div>
                              </div>
                              <div className="booking__divider"></div>
                           </div>
                           <div className="booking__service__wrapper">
                              <div className="booking__service__content">
                                 <div className="booking__service__item">
                                    <p className="booking__service__item__name">
                                       Service's name
                                    </p>
                                 </div>
                              </div>
                              <div className="booking__divider"></div>
                           </div>
                           <div className="booking__service__wrapper">
                              <div className="booking__service__content">
                                 <div className="booking__service__item">
                                    <p className="booking__service__item__name">
                                       Service's name
                                    </p>
                                 </div>
                              </div>
                              <div className="booking__divider"></div>
                           </div>
                           <div className="booking__service__wrapper">
                              <div className="booking__service__content">
                                 <div className="booking__service__item">
                                    <p className="booking__service__item__name">
                                       Service's name
                                    </p>
                                 </div>
                              </div>
                              <div className="booking__divider"></div>
                           </div>
                        </>
                     </div>
                     <div className="booking__balance">
                        <div className="booking__balance__content">
                           <p className="booking__balance__label">Subtotal</p>
                           <p className="booking__balance__price">$140.00</p>
                        </div>
                        <div className="booking__divider"></div>

                        <div className="booking__balance__content">
                           <p className="booking__balance__label weight-500">
                              Total
                           </p>
                           <p className="booking__balance__price font--large">
                              $140.00
                           </p>
                        </div>

                        <div className="booking__balance__content">
                           <p className="booking__balance__label weight-400">
                              Payment method
                           </p>
                           <p className="booking__balance__price">CARD</p>
                        </div>
                     </div>
                  </div>
               </div>
               <button className="booking__button">Make new booking</button>
            </div>
         </div>
      </div>
   );
}
