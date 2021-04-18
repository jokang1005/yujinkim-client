import React from "react"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <nav>
            <div className="nav-icon">
                <h4 className="nav-yujinkim">Yujin Kim</h4>
            </div>

            <div className="nav-buttons">
                <Link to="/photography" className="tab">PHOTOGRAPHY</Link>
                <Link to="/travels" className="tab">TRAVELS</Link>
                <Link to="/blog" className="tab">BLOG</Link>
            </div>
        </nav>
    )
}

export default Header