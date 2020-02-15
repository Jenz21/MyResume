import React from 'react';

class EduList extends React.Component{

    render(){
        let Title = this.props.title ? <h3 className="mb-0">{this.props.title}</h3> : '';
        let Subtitle = this.props.subtitle ? <div className="subheading mb-3">{this.props.subtitle}</div> : '';
        let Date = this.props.date ? <span className="text-primary">{this.props.date}</span> : '';

        return(
            <>
                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-3">
                    <div className="resume-content">
                        {Title}
                        {Subtitle}
                    </div>
                    <div className="resume-date text-md-right">
                        {Date}
                    </div>
                </div>
            </>
        );
    }
}


export default EduList;