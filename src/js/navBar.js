import React from 'react';
import {
    HomeLink, 
    CourseLink, 
    AboutLink
} from './navLinks.js';

class NavBar extends React.Component{
    constructor(props){
        console.log(props);
        super(props);
        this.topics = [
            <HomeLink topic={props.topic}/>,
            <CourseLink topic={props.topic}/>,
            <AboutLink topic={props.topic}/>
        ]
        this.state = {
            topic:props.topic
        }
    }
    render(){
        const returnElement = ( <div className="container justify-content-center py-2p">
                <ul className="nav justify-content-start">
                    {this.topics}
                </ul>
            </div>)
        return returnElement
    }

}

export default NavBar;