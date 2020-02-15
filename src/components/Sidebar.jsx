import React from 'react';
import Logo from "../images/mypic.jpg";
import { Link } from "react-scroll";



class Sidebar extends React.Component{

    render(){

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                {/* <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    
                </a> */}
                <Link activeClass="" to="page-top" className="navbar-brand js-scroll-trigger" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                    {/* <a className="nav-link js-scroll-trigger" href="#about">About</a> */}
                    <span className="d-block d-lg-none"><img className="imgmyprofile rounded-circle" src={Logo} alt="Jennifer Jomuad" /></span>
                    <span className="d-none d-lg-block">
                        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={Logo} alt="Jennifer Jomuad" />
                    </span>
                </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link activeClass="active" to="about" className="nav-link js-scroll-trigger" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                            {/* <a className="nav-link js-scroll-trigger" href="#about">About</a> */}
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="" to="skills" className="nav-link js-scroll-trigger" spy={true} smooth={true} duration={500} >
                            {/* <a className="nav-link js-scroll-trigger" href="#about">About</a> */}
                            skills
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link activeClass="" to="experience" className="nav-link js-scroll-trigger" spy={true} smooth={true} duration={500} >
                            {/* <a className="nav-link js-scroll-trigger" href="#about">About</a> */}
                            Experience
                        </Link>
                        {/* <a className="nav-link js-scroll-trigger" href="#experience">Experience</a> */}
                    </li>
                    <li className="nav-item">
                        <Link activeClass="" to="education" className="nav-link js-scroll-trigger" spy={true} smooth={true} duration={500} >
                            {/* <a className="nav-link js-scroll-trigger" href="#about">About</a> */}
                            Education
                        </Link>
                        {/* <a className="nav-link js-scroll-trigger" href="#education">Education</a> */}
                    </li>
                    <li className="nav-item">
                        <Link activeClass="" to="projects" className="nav-link js-scroll-trigger" spy={true} smooth={true} duration={500} >
                            {/* <a className="nav-link js-scroll-trigger" href="#about">About</a> */}
                            Projects
                        </Link>
                        {/* <a className="nav-link js-scroll-trigger" href="#projects">Projects</a> */}
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
                    </li> */}
                </ul>
            </div>
            <Link activeClass="" to="page-top" className="scrollTOP" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
                <i className="fas fa-arrow-up"></i>
            </Link>
        </nav>
        )


    }


}

export default Sidebar; 