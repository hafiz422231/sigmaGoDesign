import React from 'react'
import './loginPage.css';
import ButtonComponent from '../../components/button/buttonComponent';
import { FaWindows , FaLock } from 'react-icons/fa';


const LoginPage = () => {
    return (
        <div id="login-container">
            <div className="container-fluid w-100">
                
                <div className="main-wrapper">
                    
                    <div className="overlay">
                    </div>

                    <div className="page-logo">
                        <img alt="logo" src="mainLogo.png" className="main-logo" />
                    </div>

                        <div className="form-section">

                            <form>
                                
                                <div className="form-group">
                                    <input type="email" placeholder="Email" className="" />
                                </div>

                                <div className="form-group">
                                    <input type="password" placeholder="Password" className="" />
                                </div>

                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="radio" className="form-check-input" name="optradio" />
                                        I Accept <span>terms and conditions & privacy policy</span>
                                    </label>
                                </div>

                                <ButtonComponent 
                                title="login"
                                className="login"
                                isSet={false}
                                />       

                            </form>

                        </div>
                
                    <div className="bottom-wrapper col-md-12 col-12 col-sm-12">
                        
                        <span>OR</span>
                        
                        <ButtonComponent 
                        title="login with saml" 
                        className="login-saml btn-sm"
                        isset={true}
                        icon={<FaLock style={{ position: 'absolute' , left: '14px' , top: '7px' ,fontSize: '17px' }} />}
                        />
                        
                        <ButtonComponent 
                        title="login with windows" 
                        isset={true}
                        icon={<FaWindows style={{ position: 'absolute' , left: '14px', top: '7px' , fontSize: '17px' }} />}
                        className="login-windows btn-sm" />

                    </div>

                </div>

            </div>
        </div>
    )
}

export default LoginPage;
