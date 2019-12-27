import React from 'react'

export function MainLink(props){
    return (
        <li key={props.id} className="nav-item border-right">
            <a className={props.classSet.join(" ")} href={props.hrefComp}>
                {props.textComp}
            </a>
        </li> 
    )
}

export function HomeLink(props){

    let classNameList = ["nav-link", "home-link"]
    if (props.topic === "Home"){
        classNameList.push("active")
    }
    return (
        <MainLink hrefComp="./" textComp="Home" classSet={classNameList} id="home-nav"/>
    )
}
export function CourseLink(props){

    let classNameList = ["nav-link", "home-link"]
    if (props.topic === "Courses"){
        classNameList.push("active")
    }
    return (
        <MainLink hrefComp="./courses" textComp="Courses" classSet={classNameList} key="courses-nav"/>
    )
}
export function AboutLink(props){

    let classNameList = ["nav-link", "home-link"]
    if (props.topic === "About"){
        classNameList.push("active")
    }
    return (
        <MainLink hrefComp="./about" textComp="About" classSet={classNameList} key="about-nav"/>
    )
}


