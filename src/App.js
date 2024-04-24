import "./App.css";

function App() {
   return (
      <div className="BookingApp">
         <div className="booking-wrapper">
            <div className="booking-container">
               <div className="booking-information">
                  <div className="booking-basic-inform">
                     <p className="booking-customer-name">Customer's name</p>
                     <div className="booking-customer-contact">
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
                  <div className="booking-divider"></div>
                  <div className="booking-details">
                     <div className="booking-service-details">
                        <p className="booking-service-title">Service Details</p>
                        <>
                           <div className="content-servive-details">
                              <div className="service-and-price">
                                 <p className="services">Service's name</p>
                                 <div className="price-and-quanlity">
                                    <p className="quanlity">1x</p>
                                    <p className="price">$50.00</p>
                                 </div>
                              </div>
                           </div>
                           <div className="booking-divider"></div>
                        </>
                        <>
                           <div className="content-servive-details">
                              <div className="service-and-price">
                                 <p className="services">Service's name</p>
                                 <div className="price-and-quanlity">
                                    <p className="quanlity">1x</p>
                                    <p className="price">$50.00</p>
                                 </div>
                              </div>
                           </div>
                           <div className="booking-divider"></div>
                        </>
                        <>
                           <div className="content-service-details">
                              <div className="service-and-price">
                                 <p className="services">Service's name</p>
                                 <div className="price-and-quanlity">
                                    <p className="quanlity">1x</p>
                                    <p className="price">$20.00</p>
                                 </div>
                              </div>
                           </div>
                           <div className="booking-divider"></div>
                        </>
                        <>
                           <div className="content-servive-details">
                              <div className="service-and-price">
                                 <p className="services">Service's name</p>
                                 <div className="price-and-quanlity">
                                    <p className="quanlity">1x</p>
                                    <p className="price">$20.00</p>
                                 </div>
                              </div>
                           </div>
                           <div className="booking-divider"></div>
                        </>
                     </div>
                     <>
                        <div className="booking-balance">
                           <p className="sub-total">Subtotal</p>
                           <p className="price">$140.00</p>
                        </div>
                        <div className="booking-divider"></div>

                        <div className="booking-balance">
                           <p className="sub-total bold-text">Total</p>
                           <p className="price large-font">$140.00</p>
                        </div>

                        <div className="booking-balance">
                           <p className="payment-method">Payment method</p>
                           <p className="price large-font">CARD</p>
                        </div>
                     </>
                  </div>
               </div>
               <button className="booking-button">Button</button>
            </div>
         </div>
      </div>
   );
}

export default App;
