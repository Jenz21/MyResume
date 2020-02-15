import React from 'react';
import ProList from '../components/ProList';
import axios from 'axios';



class Projects extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            proj: []
        }
    }

    componentDidMount(){
        axios.get('/data/projects/data.json').then(res =>{
            this.setState({ proj:res.data});
        });
    }


    render(){

        return(
            <>
                <section className="resume-section p-3 p-lg-5" id="projects">
                    <div className="w-100">
                        <h2 className="mb-5">Projects</h2>

                        {
                            this.state.proj.map((value,index) => {
                                return <ProList key={index} link={value.link} title={value.title} imgSRC={value.imgSRC}/>
                            })
                        }
                    </div>
                </section>

            </>
        )


    }

}


export default Projects; 
