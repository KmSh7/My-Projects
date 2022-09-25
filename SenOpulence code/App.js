import "./App.css";
import titleImage from "./components/pictures/senopulance.png";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Help from "./components/Help";
import React, { useState } from "react";
import logo from "./components/pictures/logo.png";
import Media from "react-media";
import Categories from './components/mock.json'
import srcIcon from "./components/pictures/srch5.png";
import {MDBFooter, MDBContainer, MDBRow, MDBCol,MDBIcon} from "mdb-react-ui-kit";
import facebook from "./components/pictures/facebook.png";
import instagram from "./components/pictures/instagram.png";
import youtube from "./components/pictures/youtube.png";
import pinterest from "./components/pictures/pinterest.png";


function App() {
  const fontfamily = {
    fontFamily: "Darker Grotesque",
    fontWeight: "800",
    color: "#555454",
  };
  const srchicon = {
    height: "30px",
    width: "30px",
    marginTop: "7px",
  };

  const [search, setSearch] = useState(Categories);
  const [filterCat,setFilterCat]=useState(Categories);
  function sameAsSearch() {
    var mainoffer = document.getElementById("mainoffer");
    var cat = document.getElementById("categories");
    var box = document.getElementById("box");
    if (cat.style.display == "none") {
      mainoffer.style.display = "flex";
      cat.style.display = "flex";
      box.style.display = "none";
    }
  }
  const closeMenu=()=>{
    document.getElementById("totop").click();
    document.getElementById("click-nav").classList.remove("click-nav-apply");
    document.getElementById("line1").classList.remove("hr1doit");
    document.getElementById("line2").classList.remove("hr1doit");
    document.getElementById("line3").classList.remove("hr1doit");
    document.getElementById("menu").classList.remove("menu-apply");
    document.getElementById("btn1").classList.remove("nav-btn-apply");
    document.getElementById("btn2").classList.remove("nav-btn-apply");
    document.getElementById("btn3").classList.remove("nav-btn-apply");
    document.getElementById("phone1").classList.remove("forphone-apply");
    document.getElementById("phone2").classList.remove("forphone-apply");
    document.getElementById("phone3").classList.remove("forphone-apply");
    document.getElementById("phone4").classList.remove("forphone-apply");
    document.getElementById("phone5").classList.remove("forphone-apply");
    document.getElementById("src").classList.remove("src-container-apply");
  }
  const openMenu = () => {

    document.getElementById("click-nav").classList.toggle("click-nav-apply");
    document.getElementById("line1").classList.toggle("hr1doit");
    document.getElementById("line2").classList.toggle("hr1doit");
    document.getElementById("line3").classList.toggle("hr1doit");
    document.getElementById("menu").classList.toggle("menu-apply");
    document.getElementById("btn1").classList.toggle("nav-btn-apply");
    document.getElementById("btn2").classList.toggle("nav-btn-apply");
    document.getElementById("btn3").classList.toggle("nav-btn-apply");
    document.getElementById("phone1").classList.toggle("forphone-apply");
    document.getElementById("phone2").classList.toggle("forphone-apply");
    document.getElementById("phone3").classList.toggle("forphone-apply");
    document.getElementById("phone4").classList.toggle("forphone-apply");
    document.getElementById("phone5").classList.toggle("forphone-apply");
    document.getElementById("src").classList.toggle("src-container-apply");
  };
  const width1="(max-width:500px)";

  const input1=()=>{
    return(
      <>
                    <input
                className="searchbar"
                value=""
                type="text"
                placeholder="search"
                onChange={(event) => {
                  setSearch(
                    Categories.filter(
                      val=>{
                        if(event.targer.value==="")
                        {
                          return val;
                        }
                        else if(val.source_name.toLocaleLowerCase().includes(event.target.value.toLowerCase()))
                        {
                          return val;
                        }

                      }
                    )
                  );
                }}
              ></input>
      </>
    )
  }
  const test1=(con)=>{
    if(con==="all")
    {
      setSearch(Categories)
      document.getElementById("btn1").click();
    }else{
   const result= Categories.filter(val=>{
    return val.category===con;
    })
setSearch(result);
document.getElementById("btn1").click();
}
  }
  const clickHome=()=>{
    document.getElementById("btn1").click();
    // document.getElementById("phone1").click();
    console.log("clicked home");
  }
  const input2=()=>{
    return(
      <>
              <input
                className="searchbar"
                // value={search}
                type="text"
                placeholder="Search for..."
                onChange={(event) => {
                  setSearch(
                    Categories.filter(val=>{
                      if(event.target.value=="")
                      {
                        return val
                      } 
                      else{ 
                        if(val.source_name.toLowerCase().includes(event.target.value.toLowerCase()))
                          {return val;}
                      }
                    })
                  );
                }
              }
              ></input>
      </>
    )
  }
  const clicklines=()=>{
    document.getElementById("click-nav").click();
  }
  const phoneView=()=>{
 return (
  <>
              <div id="menu"  className="menu">
              <div id="src" className="src-container">
                <input
                className="src"
                type="text"
                placeholder="search"
                onChange={(event) => {
                  setSearch(
                    Categories.filter(val=>{
                      if(event.target.value=="")
                      {
                        return val
                      } 
                      else if(val.source_name.toLowerCase().includes(event.target.value.toLowerCase())){
                        return val;
                      }
                    })
                  );
                }
              }
                ></input><span onClick={clickHome} ><img  className="src-click" src={srcIcon}></img></span>
              </div>
              <Link onClick={closeMenu} to="/senopulence" className="app-nav">
                <button id="btn1" className="nav-btn">
                  {" "}
                  Home{" "}
                </button>
              </Link>
              <Link onClick={closeMenu} to="/About" className="app-nav">
                <button id="btn2" className="nav-btn">
                  {" "}
                  About{" "}
                </button>
              </Link>
              <Link onClick={closeMenu} to="/Help" className="app-nav">
                <button id="btn3" className="nav-btn">
                  {" "}
                  Help{" "}
                </button>
              </Link>
              <span onClick={closeMenu} id="cat" className="app-nav">
                <span id="phone1" onClick={()=>{test1("all")}} className=" forphone">All</span>
                <span id="phone2" onClick={()=>{test1("men")}} className="forphone">Men</span>
                <span id="phone3" onClick={()=>{test1("women")}} className="forphone">Women</span>
                <span id="phone4" onClick={()=>{test1("accessories")}} className="caccessories forphone">Accessories</span>
                <span id="phone5" onClick={()=>{test1("jewelry")}} className=" forphone">Jewelry</span>
              </span>
            </div>

  </>
 )
  }

  const pcView=()=>{
    return(
      <>
              <span id="cat" className="category">
                <span onClick={()=>{test1("all")}} className="cat-item all">All</span>
                <span onClick={()=>{test1("men")}} className="cat-item men">Men</span>
                <span onClick={()=>{test1("women")}} className="cat-item women">Women</span>
                <span onClick={()=>{test1("accessories")}} className="cat-item accessories">Accessories</span>
                <span onClick={()=>{test1("jewelry")}} className="cat-item jewelry">Jewelry</span>
              </span>
      </>
    )
  }
  const adStyle={
    width:"100%",
    height:"45vw",
    marginTop:"2px",
    marginBottom:"0%",
    border:"1px solid black"
  }
  return (
    <div style={fontfamily} id="test" className="app-flex-container">
      <div id="top"></div>
      <div id="b1" className="app-flex-item offer-bar">
        BIG <span style={{ fontSize: "30px", fontWeight: "500" }}>SALE</span>{" "}
        ENERGY - up to{" "}
        <span style={{ fontSize: "30px", fontWeight: "500" }}>70%</span>{" "}
        DISCOUNT
      </div>

      <div id="b4" className="app-flex-item routing">
        <Router>
          <nav className="nav-bar sticky-top" >
          <div className="app-flex-item title">
        <span className="title-logo">
          {" "}
          <img
            src={titleImage}
            alt="senOpulance"
            id="b2"
            className="titleImage"
          ></img>
          <img src={logo} className="logo"></img>
        </span>
      </div>
            <div id="searchbar" className="searchbar-container">
              <Media query={width1}>
                {
                  matches=>{
                   return matches?input1():input2();
                  }
                }
              </Media>
            </div>
            <Media query={width1}> 
            {
              matches=>{
                return matches?phoneView():pcView();           
              }
            }
            </Media>
            <span onClick={clicklines} ><img  className="src-icon" src={srcIcon}></img></span>
            <span id="click-nav" onClick={openMenu} className="click-nav">
              <span id="line1" className="hr1"></span>
              <span id="line2" className="hr1"></span>
              <span id="line3" className="hr1"></span>
            </span>
            <div id="menu" className="menu">
              <Link to="/senopulence" className="app-nav">
                <button onClick={closeMenu} id="btn1" className="nav-btn">
                  {" "}
                  Home{" "}
                </button>
              </Link>
              <Link to="/About" className="app-nav">
                <button onClick={closeMenu} id="btn2" className="nav-btn">
                  {" "}
                  About{" "}
                </button>
              </Link>
              <Link to="/Help" className="app-nav">
                <button onClick={closeMenu} id="btn3" className="nav-btn">
                  {" "}
                  Help{" "}
                </button>
              </Link>
            </div>
          </nav>

          <main className="main-view">
            <Routes>
              <Route path="/senopulence" element={<Home srchValue={search} setValue={setSearch} />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/Help" element={<Help />}></Route>
            </Routes>
          </main>
        </Router>
      </div>
      <MDBFooter className="mdb-footer">
        <MDBContainer>
          <MDBCol>
            <pre style={{overflow:"visible"}}>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100084147156447"><img className="reach-us" src={facebook}></img></a>
            <a target="_blank" href="https://www.instagram.com/senopulence/"><img className="reach-us" src={instagram}></img></a>
            <a target="_blank" href="https://www.youtube.com/channel/UCiLWPfg35fTxJZTZtmX2H2Q"><img className="reach-us" src={youtube}></img></a>
            <a target="_blank" href="https://www.pinterest.com/sensopulence/"><img className="reach-us" src={pinterest}></img></a>
            <div className="footer-line"></div>
            </pre>
          </MDBCol>
        </MDBContainer>
        <MDBContainer className="cont2">
          <MDBRow>
            <center><h4>Contact Us</h4>
            <a  className="email-us" target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSXNvRkGGxhQxmXZfHkFTMBPXBSsBcbHccGxfMNlCJTsWjHclpMqkJdBlthxfMhjlnKFC">sensopulence@gmail.com</a>
            
            <h4 className="footer-links">Useful Links</h4>
            <button onClick={()=>{
              document.getElementById("totop").click()
              document.getElementById("btn2").click()
              }
              } className="ftr-btn email-us">About Sen Oplulence</button><br/>
            <button onClick={()=>{
                            document.getElementById("totop").click()
                            document.getElementById("btn3").click()
            }} className="ftr-btn email-us">FAQs</button><br/>
            <a href="#top" id="totop" className="ftr-btn email-us">Go To Top ^</a><br/>
            </center>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}

export default App;
//1A@vrockpokeysenopulence
{/*
<Media query={(max-width:"500px")}/>
 */}