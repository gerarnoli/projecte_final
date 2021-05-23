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
                        {/* <h5>GRUP 3 </h5> */}
                        <h7>Pedro Nieto, Gerard Arnan i Bayron López</h7> 
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Footer
