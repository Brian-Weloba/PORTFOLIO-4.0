import React from "react";
import "../styles/SideNav.css";

var nav = false;

function SideNav() {
    //handle opening the navbar
    function openNav() {
        // document.getElementById("hl").style.borderTop = "2.5px solid #e64719";
        document.getElementById("mySidenav").style.width = "15rem";
        document.getElementById("ham2").style.margin = "0 0 6px .5rem"
        document.getElementById("item1").style.padding = "20px 8px 20px 60px";
        document.getElementById("item1").style.opacity = "1";
        document.getElementById("item2").style.padding = "20px 8px 20px 60px";
        document.getElementById("item2").style.opacity = "1";
        document.getElementById("item3").style.padding = "20px 8px 20px 60px";
        document.getElementById("item3").style.opacity = "1";
        document.getElementById("item4").style.padding = "20px 8px 20px 60px";
        document.getElementById("item4").style.opacity = "1";
        document.getElementById("item5").style.padding = "20px 8px 20px 60px";
        document.getElementById("item5").style.opacity = "1";
        document.getElementById("sidenavDiv").style.height = "20em"
        nav = true;
    }

    //handle closing the navbar
    function closeNav() {
        // document.getElementById("hl").style.borderTop = "2.5px solid white";
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("ham2").style.margin = "0 0 6px 0"
        document.getElementById("item1").style.padding = "20px 8px 20px 0px";
        document.getElementById("item1").style.opacity = "0";
        document.getElementById("item2").style.padding = "20px 8px 20px 0px";
        document.getElementById("item2").style.opacity = "0";
        document.getElementById("item3").style.padding = "20px 8px 20px 0px";
        document.getElementById("item3").style.opacity = "0";
        document.getElementById("item4").style.padding = "20px 8px 20px 0px";
        document.getElementById("item4").style.opacity = "0";
        document.getElementById("item5").style.padding = "20px 8px 20px 0px";
        document.getElementById("item5").style.opacity = "0";
        document.getElementById("sidenavDiv").style.height = "0"
        nav = false;
    }

    function toggleNav() {
        nav ? closeNav() : openNav();
    }

    return (
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