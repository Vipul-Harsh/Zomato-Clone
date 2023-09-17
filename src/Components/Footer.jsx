import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="gog">
      <footer>
       

        <section class="">
          <div className="girl">
            <div class="me-5 d-none d-lg-block">
              <span style={{ color: "black" }}>
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" />
              </span>
            </div>

            <div className="set3">
              <select name="languages" className="lene">
                <option value="India">Jaipur</option>
                <option value="Delhi">Dlehi</option>
                <option value="amritsar">Amritsar</option>
                <option value="agra">Agra</option>
                <option value="Mumbai">Mumbai</option>
                <option value="India">Jaipur</option>
                <option value="Delhi">Dlehi</option>
                <option value="amritsar">Amritsar</option>
                <option value="agra">Agra</option>
                <option value="Mumbai">Mumbai</option>
                <option value="India">Jaipur</option>
                <option value="Delhi">Dlehi</option>
                <option value="amritsar">Amritsar</option>
                <option value="agra">Agra</option>
                <option value="Mumbai">Mumbai</option>
              </select>
              <div>
                <select name="languages" className="lene">
                  <option value="India">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      style={{
                        color: "rgba(241, 48, 48, 0.719)",
                        height: "20px",
                        "margin-left": "10px",
                      }}
                    />
                    ENGLISH
                  </option>
                  <option value="Delhi">HINDI</option>
                </select>
              </div>
            </div>
          </div>

          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3 text-secondary"></i>About company
                </h6>
                <p className="di">
                  <nav className="hai">
                    <a
                      href="https://www.zomato.com/who-we-are"
                      class="sc-elhb8j-17 iFsnCv"
                    >
                      <p class="sc-elhb8j-16 dxcfRo">Who We Are</p>
                    </a>
                    <a
                      href="https://blog.zomato.com/"
                      class="sc-elhb8j-17 iFsnCv"
                    >
                      <p class="sc-elhb8j-16 dxcfRo">Blog</p>
                    </a>
                    <a
                      href="https://www.zomato.com/careers"
                      class="sc-elhb8j-17 iFsnCv"
                    >
                      <p class="sc-elhb8j-16 dxcfRo">Work With Us</p>
                    </a>
                    <a
                      href="https://www.zomato.com/investor-relations"
                      class="sc-elhb8j-17 iFsnCv"
                    >
                      <p class="sc-elhb8j-16 dxcfRo">Investor Relations</p>
                    </a>
                    <a
                      href="https://www.zomato.com/report-fraud"
                      class="sc-elhb8j-17 iFsnCv"
                    >
                      <p class="sc-elhb8j-16 dxcfRo">Report Fraud</p>
                    </a>
                    <a
                      href="https://blog.zomato.com/press-kit"
                      class="sc-elhb8j-17 iFsnCv"
                    >
                      <p class="sc-elhb8j-16 dxcfRo">Press Kit</p>
                    </a>
                    <a
                      href="https://www.zomato.com/contact"
                      class="sc-elhb8j-17 iFsnCv"
                    >
                      <p class="sc-elhb8j-16 dxcfRo">Contact Us</p>
                    </a>
                  </nav>
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">ZOMATOVERSE</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Blinkit
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Zomato
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Feeding India
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Hyperpure
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Privacy
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Security
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Terms
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Sitemap
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i class="fas fa-home me-3 text-secondary"></i>{" "}
                  Jaipur,Rajasthan. 10012, US
                </p>
                <p>
                  <i class="fas fa-envelope me-3 text-secondary"></i>
                  info@example.com
                </p>
                <p>
                  <i class="fas fa-phone me-3 text-secondary"></i> + 01 234 567
                  88
                </p>
                <p>
                  <i class="fas fa-print me-3 text-secondary"></i> + 01 234 567
                  89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="text-center p-4">
          <p class="sc-elhb8j-5 kBllqA">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2023 © Zomato™ Ltd.
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
