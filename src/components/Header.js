import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <p>Thank you so much for being a part of our wedding!</p>
                <p>We had the time of our lives.</p>
                <p>Your presence was enough, but if you feel inclined to send a gift, <br/>
                  please use the registry links below.
                </p>
                <p>
                  Love, <br/>
                  Harriet and Josh
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a className="amazon" href="https://www.amazon.com/wedding/harriet-groppe-josh-prince-cambridge-august-2018/registry/JWJH8SJRV4A1" target="_blank">Amazon</a></li>
                <li><a href="https://www.crateandbarrel.com/gift-registry/harriet-groppe-and-josh-prince/r5735657" target="_blank">Crate & Barrel</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
