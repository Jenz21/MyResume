import React from 'react';
import bgproject from "../images/mac.png";


const bg = {
    backgroundImage: `url(${bgproject})`
};

class ProList extends React.Component{

    render(){

        return(
            <>
            <div className="project_wrap col-md-4 mb-5">
                <a href={this.props.link} target="_blank" rel="noopener noreferrer"> 
                    <div className="bgwrap" style={bg}>
                        <div className="imgwrap">
                            <div className="textoverlay">
                                {this.props.title ? <h3>{this.props.title}</h3> : ''}
                            </div>
                            {this.props.imgSRC ? <img className="img-fluid" src={this.props.imgSRC} alt={this.props.title} /> : ''}
                        </div>
                    </div>
                </a>
            </div>
            </>
         );

    }


}

export default ProList;