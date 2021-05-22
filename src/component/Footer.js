import React from 'react';
import "./Footer.css";
import Logo from './Logo';

function Footer() {
    return (
        <div className="main-Footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                    <Logo />
                        
                    </div>

                    {/* Column2 */}
                    <div className="col">
                        <h3>DADES COVID</h3>
                        
                    </div>

                    {/* Column3 */}
                    <div className="col">
                        <h3>GRUP 3</h3>
                        <h7>PEDRO NIETO <br/> GERARD ARNAN <br/>BAYRON LÓPEZ</h7>                        
                    </div>
                </div>
                <hr/>
                <div className="row2">
                    {/* Column2 */}
                        <div className="col-sm">
                            &copy;{new Date().getFullYear()} DADES COVID ORG | Terminos de Servicio 
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Footer
