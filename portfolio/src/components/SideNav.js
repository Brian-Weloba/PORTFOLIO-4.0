import React from "react";
import "../styles/SideNav.css";

let nav = false;

function SideNav() {
    //handle opening the navbar
    function openNav() {
        const items = document.getElementsByClassName("sidenavItem");
        for (let i = 0; i < items.length; i++) {
            items[i].style.padding = "20px 8px 20px 60px";
            items[i].style.opacity = "1";
        }
        document.getElementById("mySidenav").style.width = "15rem";
        document.getElementById("ham2").style.margin = "0 0 6px .5rem"
        document.getElementById("sidenavDiv").style.height = "20em"
        nav = true;
    }

    //handle closing the navbar
    function closeNav() {
        const items = document.getElementsByClassName("sidenavItem");
        for (let i = 0; i < items.length; i++) {
            items[i].style.padding = "20px 8px 20px 0";
            items[i].style.opacity = "0";
        }
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("ham2").style.margin = "0 0 6px 0"
        document.getElementById("sidenavDiv").style.height = "0"
        nav = false;
    }

    //handle opening and closing the navbar
    function toggleNav() {
        nav ? closeNav() : openNav();
    }

    return (
        //side navbar
        <div className={"menuCont"}>
            <div id={"sideBar"} className={"sideBar"}>
                <div className={"hamburgerMenu"}  onClick={toggleNav}>
                    <div className={"hamburgerLine"} id={"ham1"}/>
                    <div className={"hamburgerLine"} id={"ham2"}/>
                    <div className={"hamburgerLine"} id={"ham3"}/>
                </div>
            </div>
            <div className={"sideNav"} id={"mySidenav"}>
                <div className={"sidenavDiv"} id={"sidenavDiv"}/>
                <div className={"sidenavList"}>
                    <a id={"item1"} className={'sidenavItem'} href={"#"} onClick={closeNav}>HOME</a>
                    <a id={'item2'} className={'sidenavItem'} href={"#"} onClick={closeNav}>ABOUT</a>
                    <a id={'item3'} className={'sidenavItem'} href={"#"} onClick={closeNav}>PROJECTS</a>
                    <a id={'item4'} className={'sidenavItem'} href={"#"} onClick={closeNav}>TIMELINE</a>
                    <a id={'item5'} className={'sidenavItem'} href={"#"} onClick={closeNav}>CONTACT</a>
                </div>
            </div>
        </div>
    )
}

export default SideNav;