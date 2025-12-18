import React from 'react';

function Footer() {
    return (
        <footer style={{ background: "rgb(250,250,250)" }}>
            <div className='container border-top mt-5'>
                <div className='row mt-5'>
                    <div className='col'>
                        <img src='/Images/logo.svg' alt='logo' style={{ width: "40%" }} />
                        <p>&copy; 2010 – 2024, Not Zerodha Broking Ltd.
                            All rights reserved.</p>
                    </div>

                    <div className='col'>
                        <p>Company</p>
                        <a className="text-muted text-decoration-none" href="#">About</a><br />
                        <a className="text-muted text-decoration-none" href="#">Products</a><br />
                        <a className="text-muted text-decoration-none" href="#">Pricing</a><br />
                        <a className="text-muted text-decoration-none" href="#">Referral programme</a><br />
                        <a className="text-muted text-decoration-none" href="#">Careers</a><br />
                        <a className="text-muted text-decoration-none" href="#">Zerodha.tech</a><br />
                        <a className="text-muted text-decoration-none" href="#">Press & media</a><br />
                        <a className="text-muted text-decoration-none" href="#">Zerodha cares (CSR)</a><br />
                    </div>

                    <div className='col'>
                        <p>Support</p>
                        <a className="text-muted text-decoration-none" href="#">Contact</a><br />
                        <a className="text-muted text-decoration-none" href="#">Support portal</a><br />
                        <a className="text-muted text-decoration-none" href="#">Z-Connect blog</a><br />
                        <a className="text-muted text-decoration-none" href="#">List of charges</a><br />
                        <a className="text-muted text-decoration-none" href="#">Download & resources</a><br />
                    </div>

                    <div className='col'>
                        <p>Account</p>
                        <a className="text-muted text-decoration-none" href="#">Open an account</a><br />
                        <a className="text-muted text-decoration-none" href="#">Fund transfer</a><br />
                        <a className="text-muted text-decoration-none" href="#">60 day challenge</a><br />
                    </div>
                </div>

                <div className='mt-5 text-muted' style={{ fontSize: "14px" }}>
                    <p>Zerodha Broking Ltd.: Member of NSE & BSE | SEBI Registration no.: INZ000031633
                        CDSL: Depository services through Zerodha Securities Pvt. Ltd. | SEBI Registration no.: IN-DP-100-2015
                        Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 | SEBI Registration no.: INZ000038238
                        Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru – 560078, Karnataka, India.
                        For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com.
                        Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
                        Benefits: Effective communication, Speedy redressal of the grievances.</p>

                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors.
                        KYC is one time exercise while dealing in securities markets – once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.
                        Dear Investor, as subscribing to an IPO, there is no need to issue a cheque. Please write your bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account.
                        In the business we don't give stock tips, and have not authorized anyone to give stock tips on our behalf. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here."</p>
                </div>

                <div className='row'>
                    <a className=" col-2 text-muted text-decoration-none" href="#">NSE</a>
                    <a className=" col-2 text-muted text-decoration-none" href="#">NSE</a>
                    <a className=" col-2 text-muted text-decoration-none" href="#">NSE</a>
                    <a className=" col-2 text-muted text-decoration-none" href="#">NSE</a>
                    <a className=" col-2 text-muted text-decoration-none" href="#">NSE</a>
                    <a className=" col-2 text-muted text-decoration-none" href="#">NSE</a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
