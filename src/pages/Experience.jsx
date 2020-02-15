import React from 'react';
import ExpList from '../components/ExpList';
import axios from 'axios';


class Experience extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            exp: []
        }
    }

    componentDidMount(){
        axios.get('/data/experience/data.json').then(res =>{
            this.setState({ exp:res.data});
        });
    }


    render(){
        
        return(
            <>
                <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                    <div className="w-100">
                        <h2 className="mb-5">Experience</h2>

                        { 
                            this.state.exp.map((value, index) => {
                                return <ExpList key={index} title={value.title}  description={value.description} subtitle={value.subtitle} date={value.date}/>
                            })
                        }

                    </div>
                </section>

            </>
        )

      

    }

}

export default Experience;

