import React from 'react'

function Footer() {
    return (
        <div className="footer container">
            <div className="footer-adress">
                <h3>
                    Chic Maillot
                </h3>
                <p>boulevard jean paul2, Au carrefour saint joseph</p>
                <p>Lomé-togo</p>
            </div>
            <div className="footer-contacts">
                <h3>Contacts</h3>
                <p>-228-80-40-01-45</p>
                <p>store@yahoo.fr</p>
            </div>
            <div className="footer-newsletter">
                <h3>S'inscrire au news letters</h3>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input placeholder="Your email adress" type="text" />
                </div>
                <button className="subscribe-btn">S'inscire</button>
            </div>
        </div>
    )
}

export default Footer