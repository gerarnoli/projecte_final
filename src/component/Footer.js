import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="main-Footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h3>LOGO</h3>
                        <ul className="list-unstyled">
                            <li>PEDRO NIETO</li>
                            <li>GERARD ARNAN</li>
                            <li>BAYRON LÓPEZ</li>
                        </ul>
                    </div>

                    {/* Column2 */}
                    <div className="col">
                        <h3>DADES COVID</h3>
                        <ul className="list-unstyled">
                            <li>PEDRO NIETO</li>
                            <li>GERARD ARNAN</li>
                            <li>BAYRON LÓPEZ</li>
                        </ul>
                    </div>

                    {/* Column3 */}
                    <div className="col">
                        <h3>GRUP 3</h3>
                        <ul className="list-unstyled">
                            <li>PEDRO NIETO</li>
                            <li>GERARD ARNAN</li>
                            <li>BAYRON LÓPEZ</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} DADES COVID ORG | Terms of Service | Gungingingan
                        </p>
                </div>
            </div>
        </div>
    );
}

export default Footer
