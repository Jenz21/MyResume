import React from 'react';
import EduList from '../components/EduList';
import axios from 'axios';


class Education extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            edu: []
        }
    }

    componentDidMount(){
        axios.get('/data/education/data.json').then(res =>{
            this.setState({ edu:res.data});
        });
    }


    render(){

        return(
            <>
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                    <div className="w-100">
                        <h2 className="mb-5">Education</h2>

                        {
                            this.state.edu.map((value,index) => {
                                return <EduList key={index} title={value.title} subtitle={value.subtitle} date={value.date}/>
                            })
                        }
                    </div>
                </section>

            </>
        )


    }

}


export default Education; 