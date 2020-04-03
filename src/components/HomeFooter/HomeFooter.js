import React, { useState } from 'react';
import './HomeFooter.scss';

const HomeFooter = () => {
    
    const [input, setInput] = useState("");

    return (
        <footer className="homeFooter">
            <form className="form">
                <input
                    placeholder="Enter Your Email"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}/>
                <button>
                    Subscribe
                </button>
            </form>
            <div className="footerInformation">
                <div className="footerLogo">AppCo</div>
                <div>All rights reserved by ThemeTags</div>
                <div>Copyrights © 2019.</div>
            </div>
        </footer>
    )
}
export default HomeFooter;