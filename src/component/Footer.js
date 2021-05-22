import React from 'react';
import "./Footer.css";
import Logo from './Logo';

function Footer() {
    return (
        <div className="main-Footer">
            <div className="container">
                <div className="row">
                    
                    <div className="col">
                    <Logo />
                        
                    </div>

                    {/* Column2 */}
                    <div className="col">
                            &copy;{new Date().getFullYear()} DADES COVID ORG | Terminos de Servicio 
                    </div>

                    {/* Column3 */}
                    <div className="col">
                        <h5>GRUP 3
                        PEDRO NIETO GERARD ARNAN BAYRON LÓPEZ  </h5>                      
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Footer
