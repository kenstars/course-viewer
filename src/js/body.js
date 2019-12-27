import React from 'react'

class HomeBody extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="d-flex flex-column align-items-start padding-top-5p padding-bottom-5p bg-body-color padding-left-4">
                <h1 className="flex-item">Pluralsight Administration</h1>
                <div className="flex-item padding-y-10">React, Redux and React Router for ultra responsive web apps.</div>
                <button type="button" className="btn btn-primary flex-item">Learn More</button>
            </div>
        
        )
    }
}

class AboutBody extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="padding-left-1-3">
                <h1>
                    About
                </h1>
                <div>
                    This App uses React, Redux, React Router and many other helpful libraries.
                </div>
            </div>
        
        )
    }
}

class CoursesBody extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            courses:["React", "Redux", "React-router"],
            input_value:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(e){
        if(this.state.input_value){
        this.setState({
                courses:[...this.state.courses, this.state.input_value],
                input_value:""
            })
        }
        e.preventDefault();
    }

    addCourses(){
        return this.state.courses.map((ele_obj)=>{
            return (
                <li>{ele_obj}</li>
            )
        })
    }
    handleChange(e){
        this.setState({input_value:e.target.value})
    }

    render(){
        return (
            <div className="padding-left-1-3">
                <h1>
                    Courses
                </h1>
                <ul>
                    {this.addCourses()}
                </ul>
                <h1 className="padding-top-10">
                    Add Courses
                </h1>
                <form>
                    <div className="input-group">
                        <input id="course-name" className="form-control" type="text" onChange={this.handleChange} value={this.state.input_value}/>
                        <span className="input-group-btn">
                            <button className="btn btn-defaut btn-outline-secondary" onClick={this.handleClick}>save</button>
                        </span>
                    </div>
                </form>
            </div>
        
        )
    }
}


class NotFound extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="padding-left-1-3">
                <h2>
                    Ooops! Page not found.
                </h2>
            </div>
        
        )
    }
}

class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            topic:props.topic,
            classes:["body","container", "justify-content-center"]
        }
    }

    componentWillReceiveProps(props){
        this.setState({
            topic:props.topic
        })
    }

    renderSwitch(caseOpt){
        switch(caseOpt){
            case 'Home':
                return (
                    <HomeBody />
                )
            case 'About':
                return (
                    <AboutBody />
                )
            case 'Courses':
                return (
                    <CoursesBody />
                )
            case '404':
                return (
                    <NotFound />
                )
        }
    }

    render(){
        return (
        <div className={this.state.classes.join(" ")}>
                {this.renderSwitch(this.state.topic)}
            </div>
        )
    }

}

export default Body;