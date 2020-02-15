import React from 'react';


function Skills(){
    return(
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
            <h2 className="mb-5">Skills</h2>

            <div className="subheading mb-3">Programming Languages &amp; Tools</div>
            <ul className="list-inline dev-icons">
                <li className="list-inline-item col-md-1 col-xs-1 text-center">
                    <i className="devicon-bootstrap-plain"></i>
                </li>
                <li className="list-inline-item col-md-1 col-xs-1 text-center">
                    <i className="devicon-html5-plain"></i>
                </li>
                <li className="list-inline-item col-md-1 col-xs-1 text-center">
                    <i className="devicon-css3-plain"></i>
                </li>
                <li className="list-inline-item col-md-1 col-xs-1 text-center">
                    <i className="devicon-javascript-plain"></i>
                </li>
                <li className="list-inline-item col-md-1 col-xs-1 text-center">
                    <i className="devicon-jquery-plain"></i>
                </li>
                <li className="list-inline-item col-md-1 col-xs-1 text-center">
                    <i className="devicon-react-original"></i>
                </li>
                <li className="list-inline-item col-md-1 col-xs-1 text-center">
                    <i className="devicon-nodejs-plain"></i>
                </li>
                <li className="list-inline-item col-md-1 col-xs-1 text-center">
                    <i className="devicon-git-plain"></i>
                </li>
            </ul>
            <ul className="list-inline dev-icons">
                <li className="list-inline-item col-md-1 col-xs-1 text-center">
                    <i className="devicon-php-plain"></i>
                </li>
                <li className="list-inline-item col-md-1 col-xs-1 text-center">
                    <i className="devicon-wordpress-plain"></i>
                </li>
                <li className="list-inline-item col-md-1 col-xs-1 text-center">
                    <i className="fab fa-joomla"></i>
                </li>
                <li className="list-inline-item col-md-1 col-xs-1 text-center">
                    <i className="devicon-drupal-plain"></i>
                </li>
                <li className="list-inline-item col-md-1 col-xs-1 text-center">
                    <i className="devicon-codeigniter-plain"></i>
                </li>
                <li className="list-inline-item col-md-1 col-xs-1 text-center">
                    <i className="fab fa-hubspot"></i>
                </li>
                <li className="list-inline-item col-md-1 col-xs-1 text-center">
                    <i className="devicon-photoshop-plain"></i>
                </li>
                <li className="list-inline-item col-md-1 col-xs-1 text-center">
                    <i className="devicon-illustrator-plain"></i>
                </li>
                </ul>

                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                <li>
                    <i className="fa-li fa fa-check"></i>
                    PSD to HTML implementation</li>
                <li>
                    <i className="fa-li fa fa-check"></i>
                    WordPress / WooCommerce implementation</li>
                <li>
                    <i className="fa-li fa fa-check"></i>
                    Drupal FrontEnd implementation</li>
                <li>
                    <i className="fa-li fa fa-check"></i>
                    Mobile-First, Responsive Design</li>
                <li>
                    <i className="fa-li fa fa-check"></i>
                    Cross Browser Testing &amp; Debugging</li>
                <li>
                    <i className="fa-li fa fa-check"></i>
                    Cross Functional Teams</li>
                <li>
                    <i className="fa-li fa fa-check"></i>
                    Agile Development</li>
            </ul>
        </div>
        </section>
    )
}
export default Skills; 