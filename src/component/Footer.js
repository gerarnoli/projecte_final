import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="main-Footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                    <img src={require('../images/logo.png')} alt="logo" />
                        
                    </div>

                    {/* Column2 */}
                    <div className="col">
                        <h3>DADES COVID</h3>
                        
                    </div>

                    {/* Column3 */}
                    <div className="col">
                        <h5>GRUP 3</h5>
                        
                    </div>
                </div>
                <hr/>
                <div className="row">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} DADES COVID ORG | Terms of Service 
                        </p>
                </div>
            </div>
        </div>
    );
}

export default Footer
