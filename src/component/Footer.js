import React from 'react';
import "./Footer.css";
import LogoFooter from './logos/logoFooter';

function Footer() {
    return (
        <div className="main-Footer">
            <div className="container">
                <div className="row">
                    
                    <div className="col">
                    <LogoFooter />
                        
                    </div>

                    {/* Column2 */}
                    <div className="col">
                        Pedro Nieto, Gerard Arnan i Bayron López 
                    </div>
                    

                    {/* Column3 */}
                    <div className="col">
                           &copy;{new Date().getFullYear()} DADES COVID <br></br> INS PEDRALBES 2021
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Footer
