import React from 'react'
import "./ExtraNavbar.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const ExtraNavbar = () => {
    return (
        <>
            <div className="ExtraNavbar">
                <div className="ExtraNavbar-box">
                    <div className="ExtraNavbar-box-left">
                        <div className="ExtraNavbar-box-email">
                            rushabhnahata10@gmail.com
                        </div>
                        <div className="ExtraNavbar-box-phone">
                            7620707855
                        </div>
                    </div>

                    <div className="ExtraNavbar-box-right">
                        <div className="ExtraNavbar-box-social">
                            <div className="ExtraNavbar-box-social-facebook">
                                <div className="ExtraNavbar-box-social-icon"><FacebookIcon/></div>
                                <p className="ExtraNavbar-box-social-name">Facebook</p>
                            </div>

                            
                            <div className="ExtraNavbar-box-social-facebook">
                                <InstagramIcon/>Instragram
                            </div>
                            <div className="ExtraNavbar-box-social-facebook">
                               <TwitterIcon/> Twitter
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExtraNavbar