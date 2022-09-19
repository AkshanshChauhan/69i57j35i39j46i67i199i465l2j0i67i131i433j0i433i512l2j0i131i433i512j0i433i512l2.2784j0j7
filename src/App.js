import simple from './logo.svg';
import bgimage from './img/bgimage.svg';
import step1 from './img/step1.svg';
import step2 from './img/step2.svg';
import step3 from './img/step3.svg';
import step4 from './img/step4.svg';
import call from './img/call.svg';
import heart from './img/heart.svg';
import next from './img/nextarrow.svg';
import create from './img/create.svg';
import doc from './img/document.svg';
import esign from './img/esign.svg';
import cardimg1 from './img/cardimg1.svg';
import quit from './img/quit.svg';
import bulb from './img/bulb.svg';
import fb from './img/fb.svg';
import insta from './img/insta.svg';
import message from './img/message.svg';
import rarr from './img/rightArrow.svg';
import larr from './img/leftArrow.svg';
import lawyers from './img/lawyersbg.svg';
import opt1 from './img/opt1.svg';
import opt2 from './img/opt2.svg';
import opt3 from './img/opt3.svg';
import opt4 from './img/opt4.svg';
import opt5 from './img/opt5.svg';
import opt6 from './img/opt6.svg';
import opt7 from './img/opt7.svg';
import opt8 from './img/opt8.svg';
import bail from './img/bail.svg';
import robert from './img/robert.svg';
import optsecnd from './img/opt2active.svg';
import robpic from './img/robertPic.svg';
import robrating from './img/rating.svg';
import min from './img/note.svg';
import heart2 from './img/heart2.svg';
import affid from './img/affi.svg';
import cas from './img/case.svg';
import payimg from './img/payment.svg';
import './style.css';
import React from 'react';
import {useEffect} from 'react';
import mywalletbg from './img/walletBg.svg';
import wallet from './img/wallet.svg';
import paycard from './img/payop1.svg';
import payupi from './img/payop2.svg';
import paynet from './img/payop3.svg';
import myprofile1 from './img/myprofile1.svg'
import myprofile2 from './img/myprofile2.svg'
import myprofile3 from './img/myprofile3.svg'
import myprofile4 from './img/myprofile4.svg'
import myprofile5 from './img/myprofile5.svg'
import myprofile6 from './img/myprofile6.svg'
import myprofile7 from './img/myprofile7.svg'

function login() {
    document.getElementById("login").innerHTML ="<div class='lgpop'><div class='leftlogin2'><div class='lgtext'>Consult lawayers online instantly with The Online Attorney</div></div><div class='rightlogin'><cross id='offlog'>x</cross><div class='rloghead'>Enter OTP</div><div class='mong'><div class='rlogsub'>OTP has been sent to you on your mobile number +91 88765 45690 </div><div class='linkedit' href='#'>Edit</div></div><div class='rlogsub2'>Enter OTP</div><div class='otp'><input type='rel' maxLength='1' minLength='1'></input><input type='rel' maxLength='1' minLength='1'></input><input type='rel' maxLength='1' minLength='1'></input><input type='rel' maxLength='1' minLength='1'></input></div><button class='vrotp' id='welcome'>Verify OTP</button></div></div>";
    document.getElementById("login").style.transform = "scaleX(100%) scaleY(100%)";
    document.getElementById("offlog").addEventListener("click", ()=> {
        document.getElementById("login").innerHTML ="";
        document.getElementById("login").style.transform = "scaleX(0%) scaleY(0%)";
    });
    document.getElementById("welcome").addEventListener("click", ()=> {
        document.getElementById("welcomelog").innerHTML = "<div class='welcomebox'><div class='lwel'><div class='wel'>Welcome,</div><div class='namelog'>Rahul David</div></div><div class='rwel'></div></div>";
        document.getElementById("login").style.transform = "scaleX(0%) scaleY(0%)";
        document.getElementById("loginful").innerHTML = "";
    });
    scrollTo(0, 0);
}

function bailsec() {
    document.getElementById("bail").style.height = "max-content";
    document.getElementById("bailimg").setAttribute("src", optsecnd);
}

function main() {
    let bg = document.getElementById("mainbg");
    let head = document.getElementById("mainhead");
    let page1 = document.getElementById("1page1");
    let page2 = document.getElementById("1page2");
    let page3 = document.getElementById("1page3");
    let page4 = document.getElementById("1page4");
    let page5 = document.getElementById("1page5");
    let page6 = document.getElementById("1page6");
    let page7 = document.getElementById("1page7");
    let secondpg = document.getElementById("2page");
    let thirdpg = document.getElementById("affidPage");
    page1.style.display = "";
    page2.style.display = "";
    page3.style.display = "";
    page4.style.display = "";
    page5.style.display = "";
    page6.style.display = "";
    page7.style.display = "";
    bg.setAttribute("src",bgimage);
    secondpg.style.display = "";
    thirdpg.style.display = "";
}

function lawyer() {
    let bg = document.getElementById("mainbg");
    let page1 = document.getElementById("1page1");
    let page2 = document.getElementById("1page2");
    let page3 = document.getElementById("1page3");
    let page4 = document.getElementById("1page4");
    let page5 = document.getElementById("1page5");
    let page6 = document.getElementById("1page6");
    let page7 = document.getElementById("1page7");
    let secondpg = document.getElementById("2page");
    let thirdpg = document.getElementById("affidPage");
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    page7.style.display = "none";
    bg.setAttribute("src",lawyers);
    secondpg.style.display = "grid";
    thirdpg.style.display = "";
}

function affidpg() {
    let bg = document.getElementById("mainbg");
    let page1 = document.getElementById("1page1");
    let page2 = document.getElementById("1page2");
    let page3 = document.getElementById("1page3");
    let page4 = document.getElementById("1page4");
    let page5 = document.getElementById("1page5");
    let page6 = document.getElementById("1page6");
    let page7 = document.getElementById("1page7");
    let secondpg = document.getElementById("2page");
    let thirdpg = document.getElementById("affidPage");
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    page7.style.display = "none";
    bg.setAttribute("src",lawyers);
    secondpg.style.display = "none";
    thirdpg.style.display = "flex";
}

function myprofileopt() {

}

function robertpg() {
    let cards = document.getElementById("cards");
    cards.style.display = "none";
    document.getElementById("robpage").style.display = "grid";
};

function App() {
    useEffect(()=>{
        document.getElementById("paycancl").addEventListener("click", ()=>{
            document.getElementById("paymentbox").style.display = "none";
        });

        document.getElementById("legalnotice").addEventListener("click", ()=>{
            document.getElementById("paymentbox").style.display = "flex";
        });

        document.getElementById("movetoslide2").addEventListener("click", ()=>{
            document.getElementById("paymentbox").style.display = "none";
            document.getElementById("mywalletpage").style.display = "flex";
            document.getElementById("mywalletpageHead").style.display = "grid";
            document.getElementById("mainbg").setAttribute("src", mywalletbg);
            let bg = document.getElementById("mainbg");
            let page1 = document.getElementById("1page1");
            let page2 = document.getElementById("1page2");
            let page3 = document.getElementById("1page3");
            let page4 = document.getElementById("1page4");
            let page5 = document.getElementById("1page5");
            let page6 = document.getElementById("1page6");
            let page7 = document.getElementById("1page7");
            let secondpg = document.getElementById("2page");
            let thirdpg = document.getElementById("affidPage");
            page1.style.display = "none";
            page2.style.display = "none";
            page3.style.display = "none";
            page4.style.display = "none";
            page5.style.display = "none";
            page6.style.display = "none";
            page7.style.display = "none";
            secondpg.style.display = "none";
            thirdpg.style.display = "none";
        });
    });

    return (
        <div className="main" id='main'>
            <div className='paypage1' id='paymentbox'>
                <div className='bgwhite' id='slide1'>
                    <div className='payNav'>
                        <div>
                            <div className='payHead'>Insufficient wallet balance !</div>
                            <div className='paySub'>Available Balance:</div>
                        </div>
                        <div>
                            <div className='payRem'>₹ 0.00</div>
                        </div>
                    </div>
                    <div className='payLine'></div>
                    <img className='payImg' src={payimg}></img>
                    <div className='payText jscent'>Minimum wallet balance required to talk with John Smith is Rs.100.00.
    Please recharge your wallet.</div>
                    <div className='bottomBtns'>
                        <button id='paycancl'>Cancel</button><span></span><button id='movetoslide2'>Recharge</button>
                    </div>
                </div>
            </div>
        <div className='loginPop' id='login'></div>
        <div className='navbarmob'>
            <img src={simple} className="logo"/>
        </div>
        <div>
        <div className="navbar">
        <div className="innerNav">
            <img src={simple} className="logo"/>
            <div className="login" id='welcomelog'>LOG IN</div>
        </div>
        <div className="links">
            <a onClick={main}>HOME</a>
            <a onClick={lawyer}>LAWYERS</a>
            <a onClick={affidpg}>AFFIDAVIT</a>
            <a>CONTACT</a>
            <div className='myprofile'>
                <a>MY PROFILE</a>
                <div className='myprofiledropdown'>
                    <div className='myprofileopt'><img src={myprofile1}></img>My Profile</div>
                    <div className='myprofileopt'><img src={myprofile2}></img>Payments</div>
                    <div className='myprofileopt'><img src={myprofile3}></img>Help & Support</div>
                    <div className='myprofileopt'><img src={myprofile4}></img>Wishlist</div>
                    <div className='myprofileopt'><img src={myprofile5}></img>Wallet</div>
                    <div className='myprofileopt'><img src={myprofile6}></img>My Loyalty Status</div>
                    <div className='myprofileopt'><img src={myprofile7}></img>Recent Services</div>
                    <button className='joinasadv'>Join as Advocate</button>
                </div>
            </div>
            
        </div>
        </div>
        <img className="bgimg" src={bgimage} id='mainbg'></img>
        </div>
        <div className="box" id='loginful'>
            <div className="logindata">
                <div className="mobile">
                    <p>Mobile no</p>
                    <div className="numInp">
                        <div>91(IN)</div>
                        <input type="tel" placeholder="Mobile No"></input>
                    </div>
                </div>
                <div className="mobile">
                    <p>Name</p>
                    <div className="numInp">
                        <input type="tel" placeholder="Enter your name"></input>
                    </div>
                </div>
                <div onClick={login} className="signup">
                    <button>Sign Up</button>
                    <div className="agr">
                        <input type="checkBox"></input>I agree Terms Conditions<br></br>Already Registered? Login
                    </div>
                </div>
            </div>
        </div>
        <div className="ourpro" id='1page1'>
                    <div className="heading" id='mainhead'>OUR PROCESS</div>
                    <div className="line"></div>
                    <div className="cote">
                    A team of highly skilled Calgary criminal lawyers dedicated to defending you with a smart,
                    <br></br>assertive, strategic, defence.
                    </div>
                    <div className='secondopt'></div>
                    <div className="proBox">
                    <div className="process">
                        <div className="step">
                            <img className="innerLogo" src={step1}></img>
                        </div>
                        <div className="steptext">
                            <div className="bold">Sign Up</div>with The Online Attorney
                        </div>
                    </div>
                    <div className="process">
                        <div className="step">
                            <img className="innerLogo" src={step2}></img>
                        </div>
                        <div className="steptext">
                            Put your money in<div className="bold">Wallet</div>
                        </div>
                    </div>
                    <div className="process">
                        <div className="step">
                            <img className="innerLogo" src={step3}></img>
                        </div>
                        <div className="steptext">
                            <div className="linew">Click on <img className="txtpic" src={call}></img> to call</div><div className="linew">and <img className="txtpic" src={message}></img> to chat</div>
                        </div>
                    </div>
                    <div className="process">
                        <div className="step">
                            <img className="innerLogo" src={step4}></img>
                        </div>
                        <div className="steptext">
                            <div className="linew"><div className="bold">Rate & Review</div>&nbsp;Lawyers</div>after consultation
                        </div>
                    </div>
                    </div>

                <div className="cards">
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                           
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        </div>
                    </div>
        </div>

        <div className="ourpro lof" id='2page'>
                    <div className="heading">PREFERENCES</div>
                    <div className="line"></div>
                <div className="pg2opt">
                    <img src={rarr} className="arrow"></img>
                    <div className="optp2"><img src={opt1}></img><p>Sexual Offences</p></div>
                    <div className="optp2" onClick={bailsec}><img src={opt2} id="bailimg"></img><p>Bail</p></div>
                    <div className="optp2"><img src={opt3}></img><p>Internet crime</p></div>
                    <div className="optp2"><img src={opt4}></img><p>Domestic Offences</p></div>
                    <div className="optp2"><img src={opt5}></img><p>Youth Chargers</p></div>
                    <div className="optp2"><img src={opt6}></img><p>Firearm & Weapons</p></div>
                    <div className="optp2"><img src={opt7}></img><p>Assaults & Threats</p></div>
                    <div className="optp2"><img src={opt8}></img><p>Property, Fraud & Theft</p></div>
                    <img src={larr} className="arrow"></img>
                </div>
                <div className="bail" id='bail'>
                    <img src={bail} className="criminal"></img>
                    <div className="heading" id='mainhead'>BAIL LAWYERS</div>
                    <div className="line"></div>
                    <div className="cote">
                    A team of highly skilled Calgary criminal lawyers dedicated to defending you with a smart,<br></br>
assertive, strategic, defence.
                    </div>
                </div>
                <div className='robertpage' id='robpage'>
                <div className='robertDav' >
                <div className='leftrob'>
                <div className='heading3'>ROBERT DAVID</div>
                <div className='downthehead'>Named by the Calgary Herald in 2007 as a “Compelling Calgarian” to watch, Tonii Roulston 
has since built a reputation as a tough criminal lawyer known for her strategic thinking and 
effectiveness in the courtroom. Devoting her entire legal career of 21 years to defending 
people charged with criminal offences, Tonii Roulston’s career has been defined by taking 
on a variety of tough and high-profile cases. She defends the rights of clients who are 
accused of the most serious charges such as murder and sexual assaults, but also a range 
from domestic assaults to firearm charges. She recently successfully defended the rights 
of a young man charged with refusal while driving a tractor in the Didsbury area.
<br></br>
Currently, Tonii conducts about 2-3 homicide trials per year to ensure she can devote time 
to all the clients who have put their trust in her. She considers every charge she defends 
just as serious, as the consequences to the client can have a lasting impact.
<br></br>
Tonii’s experience in high profile cases and her vast experience with serious charges, gives 
her a unique perspective to ensure that she will develop a strategic plan for success in 
your case, no matter what you have been charged with.</div>
                <div><div className="charg">Charge</div>
                <div className="chargh">₹ 100/Min</div>
                </div>
                </div>
                <div className="rightrob">
                    <img className="robpic" src={robpic}></img>
                    <button className="btnrob">Consult Now</button>
                    <div className="rating"><img className="imgrob" src={robrating}></img><p className="review">See Reviews</p></div>
                    <img className='heart2' src={heart2}></img>
                </div>
    </div>
    <div className="addsev">
        <div className="heading w6">ADDITIONAL SERVICES</div>
        <div className="line"></div>
        <div className="subhead">Please select any additional services if you want and consult with your lawyers, if you haven't done
            your recharge yet then recharge and continue our services. 
        </div>
        <div className="boxcards">
            <div className="boxcard" id='legalnotice'>
                <div className='money'>₹ 50</div>
                <img className="mid" src={min}></img>
                <div className="subheadw6 cnt">Legeal Notice</div>
                <div className="subtext cnt smalltx">Notice is the legal concept describing a
                    requirement that a party be aware of legal process
                     affecting their rights, obligations or duties.
                </div>
            </div>
            <div className="boxcard">
                <div className='money'>₹ 45</div>
                <img className="mid" src={affid} ></img>
                <div className="subheadw6 cnt">Affidavit</div>
                <div className="subtext cnt smalltx">An affidavit is a written statement voluntarily made by
an affiant or deponent under an oath or affirmation
which is administered by a person who is authorized
to do so by law.
                </div>
            </div>
            <div className="boxcard">
                <div className='money'>₹ 35</div>
                <img className="mid" src={cas} ></img>
                <div className="subheadw6 cnt">Case File</div>
                <div className="subtext cnt smalltx">A case file or casefile is a collection of evidence or
documents relating to a legal, medical, or 
social work case.
                </div>
            </div>
        </div>
        <div className='exp'>
            <div className='lexp'>
            <div className='w6 medium topborder padrt'>EXPERIENCE</div>
            </div>
            <div className='rexp'>
                <div className='grhead gapp'>10 Years</div>
                <div className='grsub'>Over the last 20 years, including 3 years at Student Legal Assistance as a 
law student and 1 year at Calgary Legal Guidance as an articling student, 
Robert David’s practice has focused primarily on defending individuals, 
both adult and youth, at the trial level. She has successfully defended 
individuals against all criminal offences including: murder, organized 
crime, sexual assault, impaired driving/DRE, drug offences, domestic 
assault, white collar crime, child pornography, and internet based crimes. 
She prides herself on defending all of her clients with the same level of 
intensity and professionalism regardless of the charges they face.</div>
            <div className='grid grid-col mid-h-mr'>
                <div>
                    <div className='grhead gapp'>Location</div>
                    <div className='grsub'>Bangalore, India</div>
                </div>
                <div>
                    <div className='grhead gapp'>Languages Spoken</div>
                    <div className='grsub'>English, Hindi</div>
                </div>
            </div>
            <div>
                <div className='grhead gapp'>Speciality Area</div>
                <div className='grsub'>Bail, Divorce, Homoside, Drugs Addict</div>
            </div>
            </div>
            
        </div>
    </div>                    
                </div>
                <div className="cards wid" id="cards">
                    <div className="card" onClick={robertpg}>
                        <div className="cardleft">
                            <img src={robert}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">Robert</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox wid">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                           
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        
                    </div>
                    <div className="card">
                        <div className="cardleft">
                            <img src={cardimg1}></img>
                            <div className="minifont">Charge</div>
                            <div className="price">&#x20b9; 100/Min</div>
                        </div>
                        <div className="cardright">
                            <div>
                            <div className="name">John Smith</div>
                            <div className="addr">Bangalore, India</div>
                            </div>
                            <div className="innerCardBox">
                                <div>
                                    <div className="cardinnerhead">Rattings</div>
                                    <div className="cardinnerout">4.5</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Works</div>
                                    <div className="cardinnerout">500+</div>
                                </div>
                                <div>
                                    <div className="cardinnerhead">Reviews</div>
                                    <div className="cardinnerout">12</div>
                                </div>
                            </div>
                            <img className="heart" src={heart}></img>
                            <button className="button">View</button>
                        </div>
                        </div>
                    </div>
        </div>
                
                <div className='affid' id='1page2'>
                    <div className="heading">AFFIDAVIT</div>
                        <div className="line"></div>
                        <div className="cote">
                        An affidavit is a written statement voluntarily made by an affiant or deponent under an oath or affirmation
                        <br></br>which is administered by a person who is authorized to do so by law.
                    </div>
                    <div className='affidsteps'>
                        <div className='affidstep'>
                            <img src={create}></img>
                            <div className='text'>Create</div>
                        </div>
                        <img className='arrowimg' src={next}></img>
                        <div className='affidstep'>
                            <img src={esign}></img>
                            <div className='text'>eSign</div>
                        </div>
                        <img className='arrowimg' src={next}></img>
                        <div className='affidstep'>
                            <img src={doc}></img>
                            <div className='text'>Document</div>
                        </div>
                    </div>
                    <div className='createaffid'>
                        <button>Create an Affidavit</button>
                    </div>
                </div>
                <div className='tempcards' id='1page3'>
                    <div className='tempcard'>
                        <div className='cardtempbg1'></div>
                        <div className='tempcarddata'>
                            <div className="head">What’s Coming for Legal
                            <br></br>Departments in 2022? (Adv.)</div>
                            <div className='cursive'><i>By <span className='name'>Bob Ambrogi </span> February 3, 2022</i></div>
                            <p>Corporate legal departments have seen some significant 
changes over the past couple of years. The ongoing 
explosion of data volumes and rapid adoption of new 
communications technologies have made e-discovery 
operations more complex and expensive to manage, 
convincing many departments to move operations 
in-house. The requirements of privacy regulations, and the 
data inventory, discovery, and production capabilities 
necessary to meet......</p>
                        <span className='rmore'>Read More</span>
                        </div>
                    </div>
                    <div className='tempcard'>
                        <div className='cardtempbg2'></div>
                        <div className='tempcarddata'>
                            <div className="head">Legal Publisher and AI Studio 
        Launch Joint Venture 
        ‘To Revolutionize the World of 
        Legal Problem Solving’</div>
                            <div className='cursive'><i>By <span className='name'>Bob Ambrogi </span> February 3, 2022</i></div>
                            <p>Two Canadian companies, Edmonton-based AltaML, an AI 
studio devoted to building tools “to elevate human 
potential,” and Ottawa-based Compass Law, an 
independent Canadian legal publisher, are teaming up to 
launch a joint venture, Jurisage AI, in order to leverage 
their expertise in.....</p>
                        <span className='rmore'>Read More</span>
                        </div>
                    </div>
                    <div className='tempcard'>
                        <div className='cardtempbg3'></div>
                        <div className='tempcarddata'>
                             <div className="head">In Move To Become Leading 
Provider Of Law Firm Analytics, 
BigHand Acquires Iridium 
Technology</div>
                            <div className='cursive'><i>By <span className='name'>Bob Ambrogi </span> February 3, 2022</i></div>
                            <p>In a move to become the leading provider of business 
intelligence, financial and operational analytics for larger 
law firms, BigHand has acquired Iridium Technology, 
creating a combined organization with more than 3,600 
customers worldwide — including some 81% of the Am 
Law 200 — and more than 350 employees......</p>
                        <span className='rmore'>Read More</span>
                        </div>
                    </div>
                    <div className='tempcard'>
                        <div className='cardtempbg1'></div>
                        <div className='tempcarddata'>
                            <div className="head">What’s Coming for Legal
                            <br></br>Departments in 2022? (Adv.)</div>
                            <div className='cursive'><i>By <span className='name'>Bob Ambrogi </span> February 3, 2022</i></div>
                            <p>Corporate legal departments have seen some significant 
changes over the past couple of years. The ongoing 
explosion of data volumes and rapid adoption of new 
communications technologies have made e-discovery 
operations more complex and expensive to manage, 
convincing many departments to move operations 
in-house. The requirements of privacy regulations, and the 
data inventory, discovery, and production capabilities 
necessary to meet......</p>
                        <span className='rmore'>Read More</span>
                        </div>
                    </div>
                    <div className='tempcard'>
                        <div className='cardtempbg2'></div>
                        <div className='tempcarddata'>
                            <div className="head">Legal Publisher and AI Studio 
        Launch Joint Venture 
        ‘To Revolutionize the World of 
        Legal Problem Solving’</div>
                            <div className='cursive'><i>By <span className='name'>Bob Ambrogi </span> February 3, 2022</i></div>
                            <p>Two Canadian companies, Edmonton-based AltaML, an AI 
studio devoted to building tools “to elevate human 
potential,” and Ottawa-based Compass Law, an 
independent Canadian legal publisher, are teaming up to 
launch a joint venture, Jurisage AI, in order to leverage 
their expertise in.....</p>
                        <span className='rmore'>Read More</span>
                        </div>
                    </div>
                    <div className='tempcard'>
                        <div className='cardtempbg3'></div>
                        <div className='tempcarddata'>
                             <div className="head">In Move To Become Leading 
Provider Of Law Firm Analytics, 
BigHand Acquires Iridium 
Technology</div>
                            <div className='cursive'><i>By <span className='name'>Bob Ambrogi </span> February 3, 2022</i></div>
                            <p>In a move to become the leading provider of business 
intelligence, financial and operational analytics for larger 
law firms, BigHand has acquired Iridium Technology, 
creating a combined organization with more than 3,600 
customers worldwide — including some 81% of the Am 
Law 200 — and more than 350 employees......</p>
                        <span className='rmore'>Read More</span>
                        </div>
                    </div>
                    <div className='tempcard'>
                        <div className='cardtempbg1'></div>
                        <div className='tempcarddata'>
                            <div className="head">What’s Coming for Legal
                            <br></br>Departments in 2022? (Adv.)</div>
                            <div className='cursive'><i>By <span className='name'>Bob Ambrogi </span> February 3, 2022</i></div>
                            <p>Corporate legal departments have seen some significant 
changes over the past couple of years. The ongoing 
explosion of data volumes and rapid adoption of new 
communications technologies have made e-discovery 
operations more complex and expensive to manage, 
convincing many departments to move operations 
in-house. The requirements of privacy regulations, and the 
data inventory, discovery, and production capabilities 
necessary to meet......</p>
                        <span className='rmore'>Read More</span>
                        </div>
                    </div>
                    <div className='tempcard'>
                        <div className='cardtempbg2'></div>
                        <div className='tempcarddata'>
                            <div className="head">Legal Publisher and AI Studio 
        Launch Joint Venture 
        ‘To Revolutionize the World of 
        Legal Problem Solving’</div>
                            <div className='cursive'><i>By <span className='name'>Bob Ambrogi </span> February 3, 2022</i></div>
                            <p>Two Canadian companies, Edmonton-based AltaML, an AI 
studio devoted to building tools “to elevate human 
potential,” and Ottawa-based Compass Law, an 
independent Canadian legal publisher, are teaming up to 
launch a joint venture, Jurisage AI, in order to leverage 
their expertise in.....</p>
                        <span className='rmore'>Read More</span>
                        </div>
                    </div>
                    <div className='tempcard'>
                        <div className='cardtempbg3'></div>
                        <div className='tempcarddata'>
                             <div className="head">In Move To Become Leading 
Provider Of Law Firm Analytics, 
BigHand Acquires Iridium 
Technology</div>
                            <div className='cursive'><i>By <span className='name'>Bob Ambrogi </span> February 3, 2022</i></div>
                            <p>In a move to become the leading provider of business 
intelligence, financial and operational analytics for larger 
law firms, BigHand has acquired Iridium Technology, 
creating a combined organization with more than 3,600 
customers worldwide — including some 81% of the Am 
Law 200 — and more than 350 employees......</p>
                        <span className='rmore'>Read More</span>
                        </div>
                    </div>
                </div>
                <div className='btn' id='1page4'>
                    <button className='button2'>LOAD MORE BLOGS</button>
                </div>

                <div className='rcr' id='1page5'>
                    <div className='headingrcr'><img src={quit}></img><p>REAL CLIENT REVIEWS</p></div>
                    <div className='rvboxs'>
                        <div className='rvbox'>
                            <p>I am satisfied with Tonii Roulston’s representation,
everything was resolved as expected. 5 stars.</p>
                            <br></br>
                            <i>K.S.</i>
                        </div>
                        <div className='rvbox'>
                            <p>I would recommend Tonii Roulston and her firm to 
anyone</p>                   <br></br>
                            <i>L.E.</i>
                        </div>
                    </div>
                    <div className='btn'>
                        <button className='button2'>LOAD MORE BLOGS</button>
                    </div>
                </div>
                <div className='anotherBg' id='1page6'>
                    <img src={bulb}></img>
                    <div className="heading4">OUR VISION</div>
                    <div className="line"></div>
                    <p>Vaish Associates Advocates strives to be a multi-skilled knowledge based law firm, driven by ethics
and human values, delivering excellence and value in the field of legal services.</p>
                </div>

                <div className='trouble' id='1page7'>
                    <div className='trhead'>I'M IN TROUBLE, WHAT SHOULD I DO NOW?</div>
                    <div className='line'></div>
                    <div className='mini'>Let us take the stress out of your legal process. Our team is here to help you.</div>
                    <div className='trsteps'>
                        <div className='trstep'>
                            <div className='trsubhead'>Analysis/Strategize</div>
                            <div className='trtext'>We will review your 
charges, the evidence 
against you, provide you 
with a legal opinion and 
develop a step-by-step 
plan for the best outcome</div>
                        <div className='numbers'>1</div>
                        </div>
                        <div className='trstep'>
                            <div className='trsubhead'>Negotiate</div>
                            <div className='trtext'>Our goal is to avoid a 
criminal record or worse, 
jail. We start by 
negotiating with the 
Crown by finding the 
problems with the 
investigation, having you 
take personal steps, and 
obtaining a background of 
your good character.</div>
                        <div className='numbers'>2</div>
                        </div>
                        <div className='trstep'>
                            <div className='trsubhead'>Trial</div>
                            <div className='trtext'>If the charges will not be 
withdrawn or resolved 
favourably to you then we 
will exhaustively and 
meticulously prepare 
against the witnesses and 
prepare you fully for trial. 
Our lawyers have extensive 
trial experience and will 
use all tools available to us: 
experts, witnesses, Charter 
applications etc. to provide 
you with a 
skilful/vigorous/compelling 
and effective defence.</div>
                        <div className='numbers'>3</div>
                        </div>
                    </div>
                </div>

                <div className='affidpage' id='affidPage'>
                    <div className='heading large w5 margin0'>AFFIDAVIT</div>
                    <div className='line margin0'></div>
                    <div className='subhead medium margin10'>An affidavit is a written statement voluntarily made by an affiant or deponent under an
oath or affirmation which is administered by a person who is
authorized to do so by law.</div>
                    <br></br><br></br>
                    <div className='grid grid-col widthfull botdashline'>
                        <div className='flex gap10 clicked pad5px relative-down-2px'><div className='carbo sel'>1</div>CREATE</div>
                        <div className='flex gap10 unclicked pad5px relative-down-2px'><div className='carbo'>2</div>E-SIGNATURE</div>
                        <div className='flex gap10 unclicked pad5px relative-down-2px'><div className='carbo'>3</div>DOCUMENT</div>
                    </div>
                    <div className='form wd8'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeYAAAIBCAYAAACcOhxoAAByMUlEQVR4Xu2dB3hURff/IZ1AChAghN5770WKFBsoAmLB3hBFEERfGyq++oINAUVBsIENUIoKKl16kSK99x46pJDG/3v4ZfkvMZvsZufO3rv3u8+zTwK598yZz8ydc2fmzDn58vFDAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiRAAiTgvwTy+2/V3K9ZYmKi4RzCw8OvuK8RryQBEiABErArAcMNkl3Bst7eEbhw4UL+K1euuN0/jbrWk1pkZGQEiB745PoSlp6eHoTrA92RL9fhereulfLdlZtL2bnWAffn1D7/ul+4BAYGpjvaKiAgIF3+7dADv6eFhISkREVFXfs/d/jwGhLwNwJuD3x5qfj58+dDNm/eXPvs2bNFcf8VGYyyk+MYzOSnDEC5DbJyjQyCmQNDtgOI0zUuVc8cxESOy4/onJqaGpzTYCu6yDU5yZGy5JpMvV1empaWluuALdfkNlDL33O7RuTg69DbmaOjX1wRfeWa3NpE6pbbNSkpKSG5XeMAg2tDpWx3jJyULXV159pMLtn2w6yN4k67Ot8jBtFdnTP7p1vGVmRKP3SnfpnXuiU3L8+0N/eI/kFBQWnOMvDvVMe/5W8lSpQ4VrNmzU01atTYWqlSpV3ly5ffExERkVCwYMEMb8rmvSRgJQKGGeb169dX/+qrr56YOXNmDxjowgJFBi4MzM6GMKtRdWWYr9NTBh9XBk4e/kyDK+W5bAtclw/XudVW7l7nljBeRAIkkCsBzJzT4+LijlatWnVbgwYN1rRu3fqvJk2arImNjT2X6828gARI4HoCO3fuLDN06NCXK1asuBt/EcvHLxmwD7APeNUHIiMjLzZr1mzV8OHDB+3atasMx10SIAE3CGC5OuzLL7+8v2nTpitkckyDbN4XkswlUa8GSravedvX39sGY8wqjDW9z507F+rG0MRLSMCeBPbs2RP3zDPPjCxUqNBFfx8UWD8aJPYB3/cB7Dtf7Nev30f79u2Lteeoy1qTQA4EVqxYUb9t27bzOVj5frBiG7AN7NYH2rdvP3/JkiVNOEiTAAlkEpg9e/aNcMxYa7fBgPWlAWQfME8fgAf3lmnTpt3GgZkEbE9g6tSpt1eoUGEPByjzDFBsC7aFXftAyZIlj3zyySdPyBFN2w/OBGBPAj/99FPXMmXKHLDrIMB60wCyD5ivD2Df+fxbb731Eo2zPe2SrWv966+/dpKD/xyYzDcwsU3YJnbvAwh9m/Diiy++ffz48ShbD9SsvH0I/Pnnn20rV6680+4PP+tPA8g+YN4+IBHEHnrooS/osW0f22Tbmm7atKly48aNV3NAMu+AxLZh27AP/P8+cM8993xL42xbk+X/FT906FBMjx49pvCh58DPPsA+YJU+IIF0unfvPmXLli0V/X+UZg1tRQDRdUJeeOGFYcj8wkhRDKvIPsA+YLk+0KZNm0USu99WAzcr698EpkyZcgfSsJ23ylsy9eSMjn2AfSBrH0AQpEV///13Lf8erVk7WxCQUJstWrSQ2NeWe0umzmwz9gH2Aec+IDG2ly5d2sgWgzcr6b8E/ve//w1mwgMObjRw7AP+0gfq1q37z8KFC1v476jNmvk1AZwDjLzllltm+8sDyXrQuLAPsA9IH6hTp87GefPmtfbrAZyV808C8GSsULNmza0czDiYsQ+wD/hbH6hSpcrOWbNmdfTP0Zu1sjqBIFcVuHTpUsSZM2eKeFtBLIXnu3JFtqjVfESefORn5veKLLdnLrnnCwgISM/8+xX8Lnmh5Trnv2fg3xnQKUB+Zv17Vi0dMhzX4b7/UwAfeKpfLSu7j/N9zn931iXrfSLP1X2e0pNyJNBCJpdrOnsqJ7frRWcpJ7fr+HefElD3AGZfjazy0e3yZ8gYgnPEFVQ+/6oo7tq1q8qAAQM+mz59+oA777xTVgb5IQHTEHBpmC9cuBB1+fLlMG81dTyUyNWc2KhRo1VFixaNL1CgQFJoaOjl4ODg1JCQkBT5yu8yyDuMk/zbYcTwe4rDEDqMoRgD59/FoDkbI/m3yHC676rxcL7P2cC6MrKim8PoO64X4yz/59AxKyMZlBxlZ/2bQ8/suIpMVYZZ5KuU5aofqNbZ2/7G+70m4GxkXb3Q5Wro5blZuXJly969e09NSUkJUf2C7nUtIWD37t2VBw4cOGby5MkD77777hkqZFIGCRhK4Oeff+6CoPAJKESJR3aXLl1mnjhxIgoB5gNh9AMMVZ7CSYAEfE5g8eLFTcPCwi6rGkOMkhMXF3fku+++65mYmGjYypLPG4MKWIpATkvZhdLS0oJV1aZq1arbS5QoIeeh+SEBErABgYyMDNkuulZTM86aRbmjR4/GIYjS6KSkpHAY50lIhJHrioANmo9V9CEBl4YZHbRgenp6oCrdYmJi4lXJohwSIAHzE5CtFIfPh2hrxr1mB0UY55LISjUS23ehCQkJXxQsWPCq/wk/JOALAi4Ns3RQeeNVoZS8KRcuXPiMClmUQQIkQAJGEICza+EhQ4a8K+MeHNcmwC/GpXOnEeVTJgk4CLg0zMnJyWGYMSshJYYZnfySEmEUQgIkYAkCmTNmS808xTi/8cYbw2T8u3jx4hj42fDEgSV6m38p6dIwY7+lgKqlJ3lAJYG5f6FjbUiABHIikHmqQiUk2fs13EHLMXOWVUM4qn4UGRl59XQHPySgi4BLw5yamhqiSgnno0uqZFIOCZCAuQnkdGY/j5qLUdZinDFjDn333XeHyNFInCT5CIl8rh7Z5IcEdBDIyTAr88iWM70MQqGjOVkGCZiHgGrDjFgDGZ06dfodwUGqI8FOJaNriqXsQsOHD39dVg8xix5epEiRZKPLpHwSEAIunbtwVMql0fYUHR6oa8FAPL2X15MACViTgOrgM3DKytexY8c5H3/8cZ8aNWpIuGDDP/DQDn/vvfdegYF+LT4+vpDhBbIAEtBomJWFmmSrkQAJ2JOAhNGVI5y33nrr/BEjRvSrVq3aNh0kJJ7D6NGjB2Np+9WzZ8+G6iiTZdibgMsZs6qjUoLXEWrT3qhZexKwFwEjvLIdseqR+W7h2LFjH23QoMFaI6k6AqTInvPIkSMHv/7668MQwTDCyDIpmwRcGmY4fynbY+ZSNjsaCdiPgOo95qwE27dvvxLL2k82a9ZshQ66sr336aefDhg6dOh/EZAkSkeZLMOeBFzuI6uM+iWOXzoSKtizCVlrEjAngazJX4zQsnXr1utWr17dp3///mMlaYbqMrIeGcW4GPD5558/I8vbmDm/jDDDF1SXSXkkkO2MGVFv8qteyoZx5llA9jcSsBEB1c5frtA1bdp0E2ayj3Xo0GGODrwycx4/fnzfl19++f2DBw/G6CiTZdiLgK49Znpl26tfsbYkcJWArpWyhg0bbh81atTT2Hv+TQd62ev++uuvH3v11VffO3DgQDEdZbIM+xDIdilbOh2WbFQel7qaZ9k+WFlTEiABo/eYsxKuXbv2Hpxx7oscy2m//fZbN6NbAKuKgZMmTXpE8k1j5jygbNmyp40uk/LtQSAnw6wssxS9su3RmVhLEnAmoNswS9lVqlQ5vHv37n7IDpUwZcqU3qrCCufUspMnT+4tdcVLwctSPnsBCXhLIFvDLG+CqveYOWP2tql4PwlYi4CkfNThAJaVSuXKlY9gBjsQEQdTvvvuu0c0Gef7caSqwM6dOwci9/wha7UUtTUbAS1e2WKUde01mQ0w9SEBuxLQ5fyVHV8sK8fjSNOg0NDQyxMnTnwcxz+Vbc1lV54Y/xkzZvTAsnbo9u3b+1WvXv2AXdud9faegKvOekXljFmMsi/enL3HQwkkQAJWJRAXF3fu8OHDr4WFhSV/9tlnAzCmGZ6Zavbs2V0kbsPmzZsHy563VdlRb98ScLmUrdL5K3OvyVJ5WX3bLCydBKxPwJczZge90qVLn0aM69ckkY4YZ6RyVJY1z1UL/frrr90SExMLbdq0qW+dOnV2W78lWQPdBLQ4fxkRmk83KJZHAiTgGQGzrJQVK1YsATGu3yhUqNAlxNj+D4xmuGc18fzq+fPnd0TQk3Hr169/BmFDt3sugXfYmYDLfReVS9lcxrZzF2Pd7UwAz74pVsoKFy6cdPr06Q/E3wWZooZg5mx4MoqFCxfeOHjw4I+xrP0Ul7Xt/BR4XneXM2bVhpnOX543Du8gASsTMMuM2cGwaNGiiRcuXHi/QIECScOGDXv9/Pnzhse7lplz3759v1y3bt1TCIKiJRuWlfsMdf8/AtlG/soMMKLsHLMZ9prY4CRAAvoJmG21LDIyMuWZZ575GFmihuB3LXGulyxZ0kaWtdesWVNbfwuwRCsSyGkpW5lh5mzZil2DOpOAdwR8EWDEHY0jIiJSkQ9grCyzI1PUO6pnzpIqMuvZ6aVLl97w3HPPfYaZ85OcObvTSva+RsuMWQIN0Djbu6Ox9vYjYOaVMjiCpT755JPjsKT9PJzD4lW2jquAJsuWLWv91FNPfblixYr6KsujLP8j4NIwqzzzZ9Y3Z/9rTtaIBMxDwOzHJGGc0x555JGv3nnnnReKFClyRgc5pKhsPmDAgLEw0g11lMcyrEkgJ8PsMvOUp1WlYfaUGK8nAesTsMJzD0ewjAceeGAiPLUHIbfycR3UYZybPfvss+OQP7qejvJYhvUIuDTM4gCmqjpWeEBV1ZVySIAE/o+A7OGazfkru7aBcb4C4zzp/ffffw4BSbTEucZec2Px1l6wYEFL9hcSyErA5axYpWFmgBF2PBKwHwEz7zFnbQ2ZOT/44IOT33333UGxsbHHdLQWgo80hEPYmEWLFjXTUR7LsA4Bl4ZZ9TlmK7w5W6fZqCkJWIOA1Zw+e/fu/dPIkSOfKV++/F4dhDdu3Fgfx7cm0DjroG2dMrQsZfsq/Zt1moGakoD/ETBbgBF3Cd9zzz3TEbrz2QoVKhiahEKOVclny5YttXHOeezcuXNvcFdHXuffBLQsZXOP2b87EWtHAtkRsPIqWffu3Wd/+OGH/StVqrTLqNZ1PlYlM2d4a3/GPWejaFtLrhbDbNU3Z2s1JbUlAXMRsNIec3bkxDiPHj26b40aNbboILt169Za/fr1+3zevHmtdJTHMsxLQNmRqJyqmPmAXjEvBmpGAiSgmoCVZ8wOFrfddtv8jz76qF+1atW0xLkW4zxo0KAxiLFN46y6Q1pInpY9Zi5lW6hHUFUSUETAX577m2++edEnn3zSp169eusVoclRDJa168EhbDxmzq11lMcyzEeAAUbM1ybUiAT8goDVl7KdG6FTp05L4K39dP369dfpaJzt27fXkD1nOoTpoG2+MrQtZZuv6tSIBEjAaAL+sJztYNS+ffuVWNZ+RtfMWby1Bw4c+AkcwloY3U6Uby4CWpy//GVJy1xNR21IwNwE/NHpU4zzmDFjnmjatOlKHfQ3b95cV845z5kzp42O8liGOQhoWcpWGUXMHNioBQmQQG4EMpey03O7zmp/b9269VpZ1m7UqNEaHbpv27atJmbOY7jnrIO2OcrQMmMWw0zjbI4GpxYkoIuAPy1jZ2XWsmXL9R9//HEfXTPnzGXtMUuWLGmsq/1Yju8IaDHMVgvL57vmYMkk4D8E/Mn5K7tWEeMMb+0nW7VqtURHq23atEmWtcczfKcO2r4tQ9txKd9Wk6WTAAnoJmAH3xLMmDdhWbtvs2bNluvgKxHC5Jwz8znroO27MrTMmH1XPZZMAiTgKwJ2MMzCtkmTJltk5tymTZtFRrF2xNUW+UgZ2UjyOa9Zs6a2UeVRrm8JaDHM/rzX5NvmY+kkYF4C/r6U7UxejDPCd/Zp27btQiNaxDmudqZxboxzzmNXrVpV14jyKNO3BHQtZVsiYbpvm4Klk4B/EZBZnp1eyhF8ZKcsaxs5c3buIcuXL28l3trI61zdv3oOa6NrxkzSJEACNiNgl6Vs52Zt0KDBDixrP4FIYX/oaG4Y59Yyc8Z550o6ymMZegjoMswZeqrDUkiABMxCwE5L2c7M69atu1sihCEYyXwdbbF48eK2L7744kicdy6vozyWYTwBXUvZzCxlfFuyBBIwFQE5Jomv3wUYcQdy7dq1944aNeqpjh07/unO9d5eM3v27C6DBw8etWfPnjhvZfF+3xPQMmP2fTWpAQmQgG4CgYGB6fLVXa5ZysucOffr0KHDXB06zZo16/YhQ4YMO3z4cBEd5bEM4wgEuRKtMlIXA4wY14CUTAIkYF4CderU2b1hw4Z+ON70OaJ2tTVa08mTJ98fERFx8cSJEy+XKFHiotHlUb4xBLQYZjt5ZhrTTJRKAtYkwJfyfPnEWxvG+Ul4UH+6cOHCDka2ZHp6esCECRP6BAcHp54+ffrVokWLJhpZHmUbQ0BLEgs7emca01yUSgLWImDnpWznlhLjPGLEiGeQAOMvo1sQxjlo3Lhx/eAdPuDixYsuJ19G60H5eSfAfMx5Z8c7SYAEciEAw5xGSP9HQI5Sibc2YmwvNZpJampqEM5Uv/DNN988mpSUlN/o8ihfLYFs36ZUZ4PiUrbaRqM0ErAKAQOWsq8aGRibAImGFR4ebqqjmImJiaJftoZQdJUIYQip2ee5554bg2NO7Yxsx7NnzxYeOnTo2zExMfEoZ7qRZVG2WgJavLK5lK220SiNBCxC4EpQUJCyGbNEEnMcvypQoECG2YyytAl0uiJ6Zfd1tFnDhg23SspImTk7x8A2ok3j4+OLvfHGG8OYLtIIusbJ5P6DcWwpmQRsTUBeyFUaZoGJvMR1pk2b1iUjI0PLNpxTA+YWiyG7WfK1e4SF80mXvXv3pt94443zEBSkNma20UZ2lB07dlR78803h+3cufOxqlWrHjSyLMpWQ0CLYeZStprGohQSsBqB0NDQZFU6y9L1Dz/88ODUqVN7Z5GZ1SjmZkRVqZSbHGc9HL+LrvJSIcFXMpKTk0NzE6Li7wsWLOj4wQcf/AfOYM/hOFWqCpmUYRwBHpcyji0lk4DtCYSEhKSohJCSkhIkX5Uy7SBLXmq+/fbbR1q1arUE9f3RDnW2ch21LAdxxmzlLkLdSSBvBAoWLHhF5Yw5b1rwLgcBOKYVEE/trVu3licVcxNweY5Zpdo0zCppUhYJWIcADPNl62jr/5pu2rSp3pw5c27x/5pau4bavLKtjYnakwAJ5IWA6qXsvOjAe/4/gbS0tMC1a9c2OXfuXAi5mJcAl7LN2zbUjAQsT4AzZvM14ZEjR8pgn16L05n5am8NjbTMmAUFl7Ot0SGoJQmoJIDzxozVrBKoAlkXLlyIQmSwYAWiKMIgAq4Msxy6UxbGjUbZoNajWBIwOQHJdGR0EA2TIzCdeoiaViAhIaGg6RSjQtcIaFnKJm8SIAF7EoiMjDyP87r2rLxJa42z02HyNal6VAsE+MSwG5AACRhGoFChQpeQglDpWWbDlLWJYDiABXOP2dyNrWWPmUvZ5u4E1I4EjCIgM2YsZ583Sj7lek5A9pe5x+w5N5138ByzTtosiwRsRkAMc3R09FmbVdvU1YVRDqFhNnUTcSnb3M1D7UjA2gQk5SC+p6xdC//SHkvZEtaUx6VM3KxcyjZx41A1ErA6AcyYL1aoUGGP1evhT/rLjFmMsz/Vyd/qQucvf2tR1ocETESgcOHCyY0aNVoTGBiYYSK1bK1K5oyZkb9M3Au0GGY6f5m4B1A1EjCYQMeOHf/ErHmvwcVQvJsEMGOWpWwaZjd5+eIyLYbZFxVjmSRAAuYgUK9evZ1PP/30KITnNF0e4LwGP8ntvtz+npeWEZkq5KanpwfQ+SsvLaDvHl17zFzG0temLIkETEfg0UcfnfDf//73xVKlSh1RoZwKAyV6SJ7ivH6y6uD8b2/kZtXHIVdkqpIrZ5mlHKSCVBbhMa8ced+/CdABgL2CBEjAcAI4MpWMQkbOnTt37YQJE57asmVLvdOnTxeV0JCSJ9hTZyRVBiqvFc+ufKN0MkIutxfz2vJ67qNh1sOZpZAACYBAp06dlsAgrz116lTM8ePHS545c6YokipEXrx4MRIGOlwM9aVLlwpJPOfLly+HyleO9kgISfkpBly+4lmMJdlA+ZmRkREA43V19U9i/Mv/O2Dj9yBH3H/n3+X/cF+g09+u/i4Gy/k6kSPy5euQmXmvlHlttillOv/bcY2o5KTXNV3k/2VJ2dno5mKARY6y2a2nL0LsvHoJZGuYpVM5OroKdfh2poIiZZCAfxAoWrSoZJw6mPl1WSkY66vGz+l7zRg6/7/DeGb+DBTD6jCGzgZIfncYWPmZ03XORjbz2muG22H8s74MOBtvxz3OlZPyHcZf/t9ZH0cdnF8q5Fq5BrHG048dO1by/ffffzU+Pr6Yil5Aw6yConEyOGM2ji0lkwAJeEEAoTzpm5LJb+fOnWXGjh07QJVhdrwAhIeH532T3Yu25a05E9Di/CUqcNbMrkgCJEACeSMgS/oqVzGdZ+Z504h3GUlAy3EpGmUjm5CySYAESMAzAlzK9oyX7qtdJrFw3mPRrRTLIwESIAESuI6ALDkrW3amYTZ379IyYzY3AmpHAiRAAqYnoMwjW2rq7Khm+prbUEEthplL2TbsWawyCZCAaQk4AoyYVkGbK6bN+cvmnFl9EiABEvCWgLJZM52/vG0KY+/XMmM2tgqUTgIkQAIk4AkB7jF7Qkv/tVoMM5ey9TcsSyQBEiABVwRomM3dN7QsZYthpnE2d0egdiRAAvYhwKVsc7e1lhmzuRFQOxIgARKwBAFle8w8Dmvu9tY2YzY3BmpHAiRAAvYhwONS5m5rzpjN3T7UjgRIgARIwGYEGPnLZg3O6pIACZAAl7LN3Qc4YzZ3+1A7EiABElBOgIZZOVKlArUYZnpkK20zCiMBEiABrwhwj9krfIbfrMUwG14LFkACJEACJOA2AU6W3EblkwtpmH2CnYWSAAmQgO8IcMbsO/bulKzFMPPtzJ2m4DUkQAIkoIcA95j1cM5rKVoMc16V430kQAIkQAIkYDcCWgwzZ8x261asLwmQgJkJcMZs5tbJl09L5C9zI6B2JEACJGAvArLHnJycrCzEp73oGV9bzpiNZ8wSSIAESMBUBDhjNlVz/EsZLYbZ3AioHQmQAAmQAAmYhwANs3nagpqQAAmQgBYCnDFrwZznQmiY84yON5IACZCANQnQMJu73WiYzd0+1I4ESIAElBOgYVaOVKlAGmalOCmMBEiABMxPgIbZ3G2kxTBnnmO+Ym4U1I4ESIAESIAEfE9Ai2H2fTWpAQmQAAmQAAlYgwANszXaiVqSAAmQAAnYhAANs00amtUkARKwPAFuB1q+Cd2rAA2ze5x4FQmQAAmQAAloIUDDrAUzCyEBEiAB8xBgYiHztEV2mtAwm7t9qB0JkAAJkIDNCNAw26zBWV0SIAES4IzZ3H2Ahtnc7UPtSIAESIAEbEYgW8OsOiqMvJ3hazO0rC4JkAAJkAAJeE4gW8PMZQ7PQfIOEiABEiABElBBgEvZKihSBgmQAAmQAAkoIuDSMKtezlakL8WQAAmQAAl4SYCrol4CNPh2zpgNBkzxJEACJEACJOAJARpmT2jxWhIgARLwEwJhYWEM8WnStqRhNmnDUC0SIAESMIoAl7KNIqtGLg2zGo6UQgIkQAKWIRAQEJBhGWVtqCgNsw0bnVUmARKwNwHOmM3d/jTM5m4fakcCJEACygnQMCtHqlSgFsPMTqC0zSiMBEiABLwiEBgYmO6VAN5sKAEthtnQGlA4CZAACZCARwQ4WfIIl/aLaZi1I2eBJEACJOBbApwx+5Z/bqXTMOdGiH8nARIgAT8jQK9sczcoDbO524fakQAJkAAJ2IwADbPNGpzVJQESIAHOmM3dB2iYzd0+1I4ESIAElBPgHrNypEoF0jArxUlhJEACJGB+AsHBwanm19K+GtIw27ftWXMSIAGbEggJCUmxadUtUW3mY7ZEM1FJEiABEsinLBsUDPNl8jQvAc6Yzds21IwESIAEDCEQGhpKw2wIWTVCaZjVcKQUEiABErAMAS5lm7upaJjN3T7UjgRIgASUE6BhVo5UqUAaZqU4KYwESIAEDCOgbI+ZsbINayMlgrUYZnYCJW1FISRAAiSghEBQUFCaEkEUYggBLYbZEM0plARIgARIwGMCsowdFhaW5PGNvEEbgSBtJbEgEiABtwlcvHgxf2pqakhGRkZgenp64OXLl8MSEhIKJSUlheP/g+Wblpbm+Bkk1+Lf8lP+/9pzLTMjCb8oP2UwdgzKhQoVuhgREXExPDz8kgSbwDclMjKSOXrdbiHrXij9oECBAjTMJm5CGmYTNw5VsweBS5cuBSQmJoYfPHiw/K5du6rt27evYv/+/audOHGi5IULF6Lxt4JihGGcQ8UAi6HO/AbJTxjvAPk6/l9+d5AToyxbSRKCEcY5VQy0/JTjMjJA45sMg3wuNjb2yKBBg47i5zH5lixZ8mhcXNzh4sWLn8S1cg2XPn3fHZXsMTva3vfVoQauCNAws2+QgGYCmA0HxsfHl9izZ0/lHTt21Hj22WebbN68ud7hw4fL4P+Lwwjn16zSv4qLjo6+EBUVda5o0aKnK1SosPu1117bUrly5V3lypXbX6ZMmQNFihQ5gy9nXb5uqDyUX7BgwUuyWpKHW3mLJgLZGuYrV674fGDQVH8WQwJaCJw+fbqAzIbXrl3b9IUXXqgnP/fv318ehjhGiwIeFnLu3LlI+R44cKDsunXrGuD2uzDTvhITE3NKZtPVqlXb+vbbb29s1KjR6po1a26BAT+F5XEuhXvI2ReXwzAnyCqJL8pmme4R4IzZPU68igQ8JgDDW2Ljxo31V69e3eLuu+9utWnTprow0DGYEVvS6VJm8sePHy8m3/Xr19fDEvm9GOAvli5d+lCTJk1Wjh8/fjEM9RrMqvfBUHM27XGP0XND4cKFz+IlKkFPaSwlLwR0GmYl+yN5qSTvIQFdBLZv314OM8zGy5cvv6F79+5tdu7cWQ17yOG6ytdRDgxyPqyqXf2eP38+At+aW7ZsqTlx4sRHS5UqdViM84cffrioRYsWS6tXr76NS95qWgW8lbzQyYsUY2WraROjpOg0zEbVgXJJwKcEDh06FPP33383nTt37s29evVqJ3vH8KAu4FOlDCxcDHJ2Hzid5QOL0vL95ZdfusFIH2nevPlyzKRn33jjjfMqVap0xEC1/Fq0OPHBgU+JAx58BXbiZSnZr4H5Y+XkrT9zD0KeQK+/zz333Hvi8OKPrFgnexKQPeMlS5Y0eeONN16rX7/+uswQh14/KyqeN7PJEK9wGIPdzz///Lt4eWkDdn61gqDjCcB+fyh8E96Bcfaqj4nj1+TJk7vp0JllKCag2jAPHDjwXRpmxY1EcT4hAM/poj/88EN3zIx/wHEimQF6NVDa7f5ixYrF33XXXZO/++67nseOHYv2SSNatNCjR48WQb/7ztFnMiMqetT/6tatu0HGd4sisLfaNMz2bn/W/noCWJbOD4/qMiNHjnwa+6YrMh1nPBoQ7WaAczMe4hnctm3bRZ999tljOLddkn3OPQLYy6+IbYG5eelPmG2nDhs27HkEqeGpG/dwm+sqGmZztQe18R2BDRs2VBsyZMjrtWvX3pSXwZD35LyiILM+eHSv/uSTT56EgY71XUtbp2T4M9Rq3br1Yk/6lgSYeeCBB75E0BquUlinqa/XlIbZqi1HvVURwNGmKmKQa9WqtdmTJUNPrvVkYPX3axGB7PINN9ywZNy4cY/gbHeEqnb0VzlinLt16/aTGNzc+ga8sA8OHTr0ZXFS9FcetqiXGGZEhjmfW4O7+3fuMdui2/hFJbdt21YBg9gr4rnqbv/mder22eFEl9qpU6c5U6ZMuePUqVMF/aJTGVQJnCeP/vLLL3t36NBhTokSJY4h1GYSgsCkgGEyoradrVev3obBgwcPEyOO7RglR60MqgrFZiHA41LsEiQAAkeOHCkybdq0u+65556n/vnnn/qE4hsCKSkpQfDc7rRy5crmd9xxx7TFixePadOmzRrfaGPuUhHT/Bw0/A7L079t3bq1JmKtl4P3dmGJhS3nyXGGfGuVKlUOf/DBB+auCLVzjwBnzO5x4lXWJ4AkESE///xzl86dO/+JjDuXOftVN/tVwbJ8+fL73nzzzVcQGrS49Xsba0ACXhDAcl55LmV7AZC3mp4AMjblx6ys3qOPPvq5pEBUYUQowzij3qpVq6WyvH327Nkw03cuKkgCRhCgYTaCKmWahQCW/iKHDx8+CPvIO2hMjTOmqtki49XZZ555ZiQycpU1S1+iHiSgjQANszbULEgjAcySA+bPn9/q9ttvnx4cHCzhDXkW2QMGZvE4x/GqVRLkBdsQwRq7D4siAW0E6PylDTUL8iUBOHcVhRPMEwho8SwiTsX5UpfcypYAJuHh4Yl4eUjBvnei5M7F9wKOFCXh/1LheZsmf5OfEkM5PT09EHGqAyRdKzJABeHfQXCiCklOTi6Ab9jly5fD5He8mITj91D5m/yUr9ybmz6Ov7uKke3u/aquW7NmTdM+ffp89cgjj4zH7Hk0UlAeVCWbckjADAS0GObMN20z1Jc62JDAsmXLGvXt2/e12bNnd4PhMhUBOYcqafjgPbsDMbfXItHDHvGoxfGX44hXfx6GOQletskSizvTEKdnJjRIx70ZMusXoyyVEsOM368aaTG4YqQzv8HyUwwxMl1JNqgofKPhwRuNM8PF8aJSEi8uknyiPI7gxCJ8bqQYcVOByqIMZsuRo0aNeh5HgZrPnDnz7UznvSviO4CXGmayM3PjUbdcCWgxzLlqwQtIwAACZ86cCUPA/vvuvffeIThKUt6AIvIkEmdMz1WsWHEv0iOubtq06Sp8V5QsWfIYjPGFPAlUcJMk5cBMOlQMHsKPVt28eXNdOTaGvMuNYbDL4BxsIQXFKBeBl65WmDl/9/TTT49C/utxMMonlBdCgSSgmQANs2bgLE4PAeRBLvPKK6+8OGnSpEdhVFzO/hy5hY3WSpai69SpswmhFP9q2bLlEvy+EedQTyBmtERu8vmnaNGiSVBCvufwlaXheZLRCIkT4hAFrR4yabVZtGhRRywdV0tNTQ3xucJOCuAFrMj//ve/N+Fl32rWrFnvCVusKqRjhSFVViRkpUG+aANZYeCHBExPgIbZ9E1EBT0hgL1UOQbV7PHHHx+G4BTtcrvX031TV4Y8u/+XZPQyM77ppptmI5rVHzAY/5QrVy4+N53M8nd4Qcu57n3yxRL4L8isVQZsW86YMaPH8uXLW588ebKEWXTF8n3+efPmdd64cWN9nH3eL3vxEmhD2kC2AuTf999//9U9esff5JicY/9efmJL4Uzx4sVPyBaC3Ct7+pJsA/8vHPghAW0EaJi1oWZBRhPA3mgIZsj3vvPOO69jWbOiEeWJIc/OCDsbeMw+T+Hc7ZIuXbrM7Nix41wY56PYDzVCHW0yYcRktnlAvuA8FbPour/++usd+N6JUxw1xOFMmzI5FISXheLy9VQXzKzzYZZ9RWbWWA5PkKNZMNLHsd9/qH///kew1XC0bNmyB/DdHxMTE4/vKaSwvORpObyeBNwhYIqHyR1FeQ0J5ERA4ip/+OGHzyE14/MSltBIWq5m2UgWcKhr164z5DgW9o/XYGD3y4Ebs0vxoFsnX+xFT5SZ6tSpU+9dtWpVcziZWfIIE14s8uGbH8v0wUiLGI099+g9e/ZUQB1bSF+C0c4niTZkS0KMtCSGGDBgwC5kHdsooS9lll6mTBnLrIYY+XxQtkEEVJ9jHjRo0HC8Zbt9LMOgalGsnxKQgBNIafcVli21n03GgJ0mA/Orr776piQLwJKvLV92scwd8+2339518803/4bZtTixaTsjnvV8tc7z1phhZxQpUuRsw4YN1913332TxowZ8wSW+RtKJicmjvDTAcdX1RLDrPLhomH2VUv6f7nYU6yCozK/6zQEjrJwfnbbyy+/PBTLupX9n7R7NcQycgS2E+667bbbZmJ/VlYMtBlos5SFJe74tm3bLkLfeAvOaB1wIsDjpXX3aPMqWxGgYbZVc1u2svAUbiJezroHZEmxJ+n0cJSoOmbIXAnKpgfBm7sIonPd2a5du/mShlB3G5mlPPgbnG7evPnKl1566W1EnWuNLRdTHjuz7CBgJ8VpmO3U2tas6y+//HITZqxbdQ7AGGTjJekFXggaW5Oafq0RvKTwhAkT7scL1GJ4Q9s6exe8vS9Irmn4QTy9bt26Gtze098fLV0iDbOlm8/vlZ8+ffqtiJC1U5dRlkhbWJpcKNmNJE2k3wM2oIL79u0rCee8fjgytkFXu5m1HNkDx0vldmzxvbdw4cIWjPltQIfzR5E0zP7Yqv5RJ3EwwllgOVurZe8SnrYHJBMVjl/F+gdB39YCXtyVkCHqIzmKpKsNfV2OGGJXDmkSehWOi1/PnTv3BgRKKeDb1mHppiZAw2zq5rGtchMnTrwbjjUSctFwo4yjMYk9e/b8EUFKmtoWuIEVF0PUvXv3KTgzbEsHsax9WM5N33XXXT/+9ttvHZlz2sCOZ2XRNMxWbj3/1F1mynFxcYd1GGWcUT0wYsSIZ5DQIco/aZqjVuAb/emnnz6m21dARx/Kaxl48Tz52GOPjVuxYkUDc7QStTANAdWG+fnnnx9GRwfTNK/lFJHcuzqMssRXxjncWYgJ3dxykCyssHi3P/TQQ+NzOqKp82xyXo2qyvukv8txKxmLLdy0VF0lARpmlTQpyxsC4uglYRBVDnrZyULGp7NwxnmXZ069aa283yuZwL7++ut76tWrJxHFDN+qsEoZCFyy5osvvrhfItvlnS7v9AsCNMx+0YyWr4TsQ+pY5qxcufIOGIV7kaM41PLQLF6BDRs2VMNe6/eSfMJhPO02W8760iCxu5G69NvVq1fXtXjzUn1vCNAwe0OP96oggLjLdXXMnpBsAv5ddPBS0WaqZEj0MDlaJXv9VpnZGqWn80tJhQoV9iDk5+PgwyAlqjqbleSIYUY4vYuqOhv3mK3U+r7Xdfv27eXbt28/T1X/y04OBrx0xDaeuGXLlkq+rzE1yI4AMld1QjKQ1Ub2A6vJFi/2Bx988AusLFRlr7EZARpmmzW4iaore7xybMTIAVOOQg0cOPBdel2bqOFdqCJxyHHO90s7h/XM7lmoW7fu+mnTpt1Kp1rz92FlGtIwK0NJQR4QkD3eZ599doTkxTXKMCMs4rn//ve//+FZUQ8axseXxsfHF3r99ddfxVnfM0b1C7PKzWl/Xc70Dx069GVZ+vdxE7F4HQRomHVQZhnOBJKTk/N//PHHfcTRxTFIqnb6QXq+U6NHj+6DFwCG1bRY95OwlZK1Cik2t5jViPpCL3GSe/jhhyfs2rWrtMWalOp6SoCG2VNivN5bAlOnTr09Njb2qLeDmytjLrK//PLL3t7qyft9S0ByXt9yyy2/ZmnnDGiVIX4DgYGBqTBWKaGhoZflJQ/H4M5J0A44kh3CsbsDcKDaW758+b3iSCWhXUuVKnVIZp5yXE72b3FfMmRoz+vtbb+XWO50YvRt31RZui2TuqsESFneE1i7dm1NvPW/hT3fkt5Ku3JFVsGv/8TExMRj+folZIb6zlv5vN+3BBo3brxl7969T44dO/YZxN2uJ06qCExyMSIi4rov/u8S/pYghhY+BcliqMXg4pvuqEFGRkZAampqcEpKSihWbMKSkpIKYM82AkvnxXFuOEb644kTJ2KxVBx75MiRUtj+KJyenm6KMRMvIfmc+/pff/3V7sknn/xqxowZg7t16yb5yfnxNwKqZ8zIXfs/Oin4Wy9RUx/ZP+zRo8cUb2cMru6X5evx48c/mJCQwLzJaprMFFKwtB0A4xkOYxmKrYkgjC8ByI2dX5VykBUgWx7iIIhTAuWWL1/e8Keffuoie7qIof6DBP6QviUzdKP6riu5jtWC7FaHZBUAZ/LvY55wVT3BRHJomE3UGH6siuwbvvrqq29KKEwjBrfChQuf/uSTT57wY4Ssmo8IYAZdFHm5m0isb6z2jG/QoMFaWQ43oh/nJjOrgRYnuffee+85+lL4qHMYVSwNs1FkKdeZgBz3MCr9nxyJeuedd15grlv2OaMJyOx0x44dZbGMfDPCug6Hkf4bS+dJuRlUI/8uS/xy+oD93+jW1yifhlkjbJsWtXXr1gqyHGjE4BQUFJQq2yfnzp1jiE2b9i9fVVuWwA8cOFBCjDR8GsZJuFesCLl0JlN98sD5eYJxviQrUjwa6KveoLhcGmbFQCnuOgIyUDz++ONjjTDKGOgyJDISg4ew0/maAJzJ8kvmrOHDhw+U0K++mEXLcar//Oc/b8t+vK95sHwvCdAwewmQt+dIQBJGSKAPIwxzp06d/sCZzjJsAhIwE4H9+/eXQJao3jjWtCA4OPhagg4jnoGsMsUzXVJI4oW4gJmYUBcPCdAwewiMl7tNQGYQEk7QiAGpRo0am5H8op7byvBCEtBMACs50WKgZQat06O7QIECiUOGDHmd3tqaG1xlcTTMKmlSloOAeIliCXucEUa5RIkSx6ZMmXIHaZOAFQjgLHZJWeLWGclM9pzffffdgXQIs0IPyUZHGmaLNpzJ1Z48eXI3lVnLHAZeZgMY5AbxrLLJOwDV+xeBf/75p2rfvn1HGbW1k/UlWI50ISztU3hWAtgcFiNAw2yxBrOAunv27CmF5bslRsyWH3rooS/g3MIctRboB1Tx3wQwgw36/vvvuzdt2nSFEc9HVpkSgvTHH3+8k21hMQI0zBZrMJOrm5iYmP+tt956yRGDWOURkXr16q1DaMbKJkdA9UggVwIy7j722GOf6fDerlKlyvYFCxa0zFUpXmAeAqoN8wsvvPAOnQ7M0766NZFwhkggsC+72YA3RhoxsE9K8gvd9WF5JGAUATlKOGbMmMeRZGO30bPnJk2arJSkIEbVhXIVE1BtmBkrW3EDWUicxEhHyMIvVA8ykozgpZdeeouOLBbqDFTVbQJ//vlnm0aNGq1W/dxklXfnnXf+dOzYsWi3FeOFviNAw+w79v5W8i+//NJZYlarGGCcZ9c33HDDIomw5G+8WB8ScBCQ2eytt976iwTNUfH8ZCdD4tTLGWe8QJsiaxZbPwcCKg2zDKaylM3sUvbrchLo/7bbbvtV9aBStGjR+NmzZ3ewH1HW2G4EDh06VExCe0qYWdXPkUOeeITjbPX9dmNrufrSMFuuyUyp8KRJk3pJ8nmVA4rMHpAo4F0sYYeYstJUigQUE5AX3D59+nxspHGuWbPmppUrVzI4j+K2UyqOhlkpTlsKk32r9u3bL1BplEUW9t3WwAu7ki2hstK2JYDnqXD//v0/MNI4d+3adQZjzJu4i9Ewm7hxLKLahAkTHkBM4BSVhhmBRBIkzrZFEFBNElBKID4+vtBTTz012ijjLFmwhg0b9rxSpSlMHQEjDDOPS6lrH7NLkn0xBOtfqNIoi6wuXbrMRCpHBuI3ewegfoYRwLMV07t3769VP1sOeTimteevv/5qZlgFKDjvBMQwq9obdDh/SZ7SvGvEO61EYPz48Q/K7Fbl4CHRin7//ff2VuJAXUnACAKSqQrLztNUPl/Osm6//fYZPEJlRMt5KZOG2UuANr5dHFVuuummP1QPGk8++eQYzpZt3LFY9esIbNiwoVr9+vXXqn7ORB6WytNGjRrVl8hNRoCG2WQNYiF1JBKXqtUWx6BTpkyZ/UuXLm1sIQxUlQQMJ/Dbb791cI6o500UvawGHlmvtm7cuLGK4ZVgAdkS4PIyO4YyApKx5ocffngQsbELKhMKQT169JjasGFDyeHMDwmQQCYB+FzMR4yIYZJdTf7rypUryths3769Brak+jLwiDKk3gvijNl7hnaUsHjx4qYS/CPr27c3/5bZMiIg1bYjT9aZBHIjgNjaBRDydrw3z5ire0uWLHl07ty5N+SmA/+ungBnzOqZ2lKiOPdhGfve06dPx6gE0LNnzykIfrBVpUzKIgF/IYBwt0kvvvji/zLjaiutFhzASiIiWB/4doQqFUxhuRKgYc4VES9wh8DevXsrzZs37yZ3rnX3mtKlSx9EkP2p2LOWWMH8kAAJZEMAL677EA3vPRjpM6oBzZo1q+uSJUvaqJZLeTkToGFmD1FCYOHChR337NmjNCJXx44d5yLf8kYlClIICfgxgVtuueX3u+6660fVVcQecySCBfU9efJkhGrZlOeaAA0ze4fXBBDGL/rXX3/tnpKSkqf41fAm/ZcO0dHRZ+++++7voqKiLnutIAWQgJ8TKFKkSOKAAQM+FG9q1VVdsGBBJ3w7qpZLeTTM7AMGEti6dWvN1atXN8lrEdl5kzZv3nxF06ZN1+RVJu8jAbsRqFWr1t7HHntMMlGlqaw7Zs2FpkyZct+pU6cKqZRLWT42zJnn69gOfkoAKRi7IttTlKrqhYSEpOCI1GR4eEtmKn5IgATcJABnyamtW7de7OblLi/Luools2bEEqCHtrdg3byfS9luguJl2RM4cOBACdVOXzVq1NjSrl07yUzFDwmQgAcEEOv6mMyaCxUqdNGD2/51adZVLHhmRyGBzOP00PaGqvv30jC7z4pXZkNg7dq1jVQ7fXXo0GEuzlAeI3ASIAHPCXTu3PnPVq1aLfX8zpzvgINnB86aVVPNXl6QnmJYij8SkKhA//nPf24Sz01v6ydLZ/KWjmQV8Yi1PRtv/OneyuT9JGBHAiVKlDj/448/jkeWqHbJycnKsrGdP38+auDAgZ/CA3wHntVAB1tJQynbT2FhYclwQjuNLahTsbGxx/DzNHQ5JoFKIiMjLxQsWPBSREQEn2s3OiUNsxuQeEn2BOCNHbtq1aqWKvg4ls7q1KmzsW7dujwipQIqZdiWQPv27Re2bNlymcOb2vHi6y2QXbt2VZGvO3JCQ0NT5Wy1GOpSpUodrlq16vbRo0dvr1at2nb8vkOiBMJgK3VUc0cvK1xDw2yFVjKpjlu2bKnj7kPqbhVuvPFGWcY+6+71vI4ESODfBDBTPff5559/u2zZstaXL18O8wUjlBuMl/cS8sVYUWvOnDk3BQYG5pOjkGKoa9eu/c+IESNW4/TFiipVquyAzl7ti/uijlrLVB0rGyHj3mY+Zq1NqKUwiTaEgiRyvpIvHtgzK1asqK9FeRZCAn5OAL4fcTh2uEzV8+mOnLxkuMLM+YzM7mEn3pkxY8bNu3fvLoVEOP8ObuDn7ZVr9VQbZmRAeYeGOVfslroAcXQLy8PkzsPq7jVYfpsXHx/PCEOW6glU1swEhg0b9jxmqbJcrOTl2Wg5WNq+2Lhx47/79+//EYz0LZLf3cx8tepGw6wVtyULw8y2ARy0Lqh6UAMCAq4MHTr0FUvCoNIkYFICMpZjmXi7qudUpxw4iyVimXvVG2+88dry5csbnjlzRpkjm0mbK2e1aJgt2WxalR41alRflQ8pnETOMsWc1iZkYTYhAE9qpVtOKp97d2WJZ/e999476bvvvuuJ2AnFbdJ011eThtmWze52pRMSEgLwkHzr7kPlznUSghMZqkq6rQQvJAEScIsAPLNbxsTEnHTnOTT7NViluyRntD/88MNnYacquAXAghcxwIgFG83XKh86dKjMpk2b6jrrkV0iCk/0bNiw4WqcYT7lyT28lgRIIHcC9evXX+8vkfTgq1QQnuatnn/++dG33XbbvJdffvmt9evX1/A3ZzEa5tz7Na/IQgBHpKodPny4tPN/Z5eIwl1wOO+YgkTvfyP4QKq79/A6EiAB9wgg6EdSp06d/kAQEL/K1IYVtopwbhtyzz33TH8LHxjo6u4RMf9VNMzmbyPTaYigIi0QBShalWKYKZ9AZpxNquRRDgmQwPUEWrRosaxixYp7/JHLjh07qg0fPvy1Xr16zXz99deHINtdRavXk4bZ6i2oWf+jR48WXrlyZSvMkJWdMyxfvvx+DBp7NVeFxZGAbQhUqlRptxHxs80EECt5VWXmfNddd80cOXJkXys7iek0zMoGcjN1Brvpsn379hobNmyor7LeMlsuXry4HL3ihwRIwAACOHp0RZazM880G1CCeUQiylhtxPAf+fjjj0/65ZdfOptHM/c1cWmYVedQ9mYP0v3q8EqjCUybNq0XEqYXU1kO3uSXqJRHWSRAAv8mgJMPyyVGtT+zcTihIhxoCI5fdn7kkUe+R7CSEZs3b65s+XrLcSm8YUncUq+jxYiBl8hfyEB0LRuJ5QHZtAKLFy9uivOER1T0C4cMyUaDPet6NkXKapOAVgLixazy+bWKLHimr5s4ceLdls4nTcOs9VmxRGEHDx4sfvvtt89Q/SDK+WV4eMdYAgKVJAGLE/j7779rY9a8TfVzbAV5kjyjX79+H2Ev+roTJZZpUhpmyzSVFkXFcD788MMTJGym6gfwiSee+AxnE7maoqUlWQgJ5Ms3bty4hyVhjOpn2SryJLHHrFmzOlju7DMNMx9fBwFkqCn1wAMPfGWEUUaC9XQMEo+QNgmQgD4C2FYM/uSTT56oUKHCbqsYU9V6li5d+sAHH3zQH/G3w/WR97IklYZZgA4ePPh/3GP2slF8cPvatWtr3nLLLb+pfigc8iQnq+xb+6BqLJIEbE1AZotr1qyp/eabb77Spk2bBXFxcYcQ4Oc8vLYlyI/ylTFPZOYldaQn8h3XhoWFJfbp0+eTffv2xZqtMwSZTSHqYw4CklACy8wj1q1b19gojSpXrrxLzlcaJZ9ySYAEsicQHh4uxnezfI8fPz4G39j9+/dXgC9JeZy6iLlw4UIUgghd/WJSFYn4+IWSkpLC8S2QmpoanPkNSklJCU1LSwuCF3RocnKykuxPuk7wiL5YsXsGhrkysle9gjS268zSX2iYzdISJtEDD2Dg9OnTu/ft2/cdJCyvolotOc7gePDgKbkWe13nVJdBeSRAAu4TiI2NPY+r5XvdUSoY5WAY3hCHIU5PTw+CEQ6EEQ6DUQvDrLugGGr5XYw3vhFi0M+ePVtYDD2CEZVG3vY4eEJHw48kQq6BDNP5k8yZM+cm0ffPP/987qabblrkPjnjrqRhNo6t5SSLE9b48eP7IHjOf7H3UsSICjiMsuRaxRLaIvzMMKIcyiQBEvCOQFRUlCxr5yl+PcaSABjxqzNrMdRIfFMWkbjKyxchNKvv3LmzhhjD+Pj4YrgmxDtNvb9748aN9bBC+A2OVL3Yo0ePnzAupXsvNe8SaJjzzs6v7sSbbvDYsWP7vv3220PlDdfoypUrV25fkyZNVhtdDuWTAAnoJ4D0jPLCLUkz5HsJ30P4LhNNYKjDMN5EwkiXgz9TrX/++ac+vg0lquDp06d9dnQSy/hl4Q81Wmb2WA2YkLncrx8eSqRh9gl2cxUqRhlems8hEPwQ/B6hQ7v27dvPL1u2rOSI5YcESMBGBAoXLpyM6spXnv814hiMyUBhiXWNlI43zJs37yaZwcKAu1y1c94SU4nu5MmTxV977bX3ZHkeOn2OrTbzZOSiV7bKpja3LFm+fu+9954rUKBAIjTV4o2JB/P0/PnzW5mbDLUjARLwBQGZUcM4txo0aNBwxNHf6AtPccyWE4cOHfoy9tl9vsx+rQ1omH3RHfWXKUcmPv3008clLKYuoyzl9O7d+xt4fhbUX2OWSAIkYBUCcETNj5lzFZw3frZZs2bLobcsj2uZPEg5WI6/9P777w/AOKkz2ZPr5qFhtkrX9U7Pr7/++l7Jhayzs1erVm0blqsaeac57yYBErATAexHlxg9evSTDRs2XIPARCmqxyxXZ6fhAHf+ww8/fNYUM2caZv/v8rNnz75Rot+o7uA5yStatGj8d99919P/6bKGJEACRhBAJMI4nBr5D3K479E1dkVGRl74+OOP+xhRH49k0jB7hMtyFyObU11589TVsaUcmZmPGTPmCcvFp7Vc61JhEvBvAjKGLFmypHGvXr2+Cw0NTdIxjpUoUeL41KlTb/cpWRpmn+I3tHCcHyzbsWPHP3V0ZkcZNWrU2OrzTm0oVQonARLQTQBHqwp+9tlnj1apUmW7jvFMohT+/vvv7XXX81p5NMw+Q29owejI4UgcPl5HJ3aUgZeAOYiH3czQilE4CZCAbQnI7Pm2226biX1iCQpiqHNYgwYN1iLGeB2fwKZh9gl2QwuFh2MQzikPwtKPnB80tPOKfBy/Snj66adHYU/ImrlPDW0NCicBElBJAJHFij3//PPDJBGH0eMbEvvMQipcQyIj5shEtWEWYMwupbIbei5r2rRptyIm7lFHpzUygwsCh+yHB2UfeDKGeq4p7yABEiABzwnAxgTh+OejZcqU2W+0ce7Xr99H2lNGGmSYGWXM876m5I7NmzdXwhLM30Z3VpGP84YrfLoPo4QYhZAACViVwK+//tqxZs2am7KOdyomIw4ZiKV9aeTIkU9rZUTDrBW3oYUhSHwhBPSYaLRRDggISMM+zy9btmypbGiFKJwESIAEciGAWAkNb7jhhoWqxz1n4w5P7WPISNVWW2PQMGtDbWhBSMmWf8SIEf0c4TZVvDFm19GDg4MvI03kaOQ1LWlohSicBEiABNwkgMQYVZHGcZZq4+wsr127dgvgR1PKTZW8u4yG2Tt+Zrl7wYIFLY0+iC9OXq+88sqbcnTBLPWmHiRAAiQgBMSWdenSZQYmJYaE88RKYcaAAQM+QMIL4/1ppDKIE3pB1ZtGpvMX95g1PisnTpyI7Ny5s6HnlZF55Qw8vQdKdiqNVWNRJEACJOA2gb1795aUYCSq7FlWOfAEvzBp0qRebiuU1wtpmPNKzhz3yRK2BF/HErPymLKOTinHEuD80JdG2RxtTi1IgARcE5BQnrfffvs0o4xz/fr110rwJkPbgIbZULyGC0fKtNblypXba1QnRDaqU2KUTZN1xXCiLIAESMDqBHbs2FEWDqozjBoXxc9GUlYaxomG2TC0hguWJew77rhjulGdT2bKkm0FAUvMkQrNcKIsgARIwF8IiG0zyiEMW3tnJ0+e3M0wVjTMhqE1XPCECRMeMCqwu3hfv/76669pcXQwnBQLIAESsCOBdevWVUdcB0OS+Nx4443zjhw5YkxUMNVe2YMGDRouUVns2Al01nnTpk2Va9eu/Y8Rs2XJgTpw4MB3sVRTQGedWBYJkAAJqCaA7b5WRiS/CAwMTH/33XcHqtb3qjzVM2YaZkOa6Tqh4oQFzu8ZdVb5nnvumWTYm6DxeFgCCZAACVxH4Pvvv+8eExNzUvVEpnLlyruQ6KK2ctw0zMqRGi5QHL7i4uIOqexkDiPfqlWrxdu3by9veCVYAAmQAAloIiB5nd9+++0XVJ9ekXHz2WefHaH8xAoNs6aeoagYSefYo0ePqSqNskMWcpDuXLhwYQtFqlIMCZAACZiGgIQsvvfee5WELHZerSxZsuTR+fPnt1JaURpmpTgNF/bTTz91lQhcqg2zeGB//vnnDxleARZAAiRAAj4i8Pfff9eqW7fuesf4qWo78OGHH56g1LeKhtlHPSQPxR47dqww3P//UG2URV7//v0/ZOrGPDQKbyEBErAUARxzukN1LufChQuflS3GvIDgWdS8UDPRPbNmzeqydOlStUsmqF/z5s2XIwbsiKioqMsmqi5VIQESIAHlBBB45LcHHnjg68zZshL5OMES/e233z6kbNbMGbOSdjFcyMGDB4vj3Nx81bPl4sWLH585c+bNhleABZAACZCASQhs3LixsvOStopxtVSpUocXLVrU3NMqupwxq3xz8FQpXu8egTlz5tyE2XKelkpclYBzeBmPPvro+A4dOsxzTwteRQIkQALWJwCjvPupp576BAGaklXVBkdMS2GZ/D5PgzJxKVtVC2iWg9CbUVgmeTQlJSVEZdGIiLNWDDOyi6WplEtZJEACJGB2At26dZt+ww03LFap5x9//NEFSTQqeSKThtkTWia6Fk4FnVauXNlMpUphYWHJcPgaUbVq1YMq5VIWCZAACViBAGJBnMGs+eOCBQteUqXvvn37KsyePburJ/JomD2hZZJrT506VQhHpO5NTk5WGh7zlltu+Q3f2SapJtUgARIgAe0E2rVrtwhbeXNVFjxjxoyeR48eLeyuTBpmd0mZ6Dqcu2u8bNkypZ7YxYoVO/nYY4+Nw88LJqoqVSEBEiABrQQQpvMSgo5MwvEpZWPh1q1bay9ZsqStuxWhYXaXlEmuu3TpUoC8fZ08ebKESpWQRHwG9laWqpRJWSRAAiRgRQJt2rRZjCOjK1TpnpSUFPbrr792Q1wIt3yCtBjmK1eu5FdVQbvLwRGpcnPnzu2skgPeEONxhu8rnFlW5o2oUj/KIgESIAGdBHDM6XTXrl2n45SKMifYVatWtdq7d29Fd+qhxTC7owivcY8AjPLN+/fvd6tx3ZOYL1/nzp3/aNq0qeQn5YcESIAESAAEEFHxd6SG3KkKxoEDB8ovX77creOtNMyqqGuQg+XrqN9+++3O9PT0QFXFYZZ8TiLehIeHp6uSSTkkQAIkYHUC1apVO9ipU6c/VdUDR1uDMLG6RRJn5CaThjk3Qib6OxwIamzYsKGeSpWwr/wXzi6vUymTskiABEjAHwhg1jwbkxZJEKTkgzzNzeCdXSo3YTTMuREy0d8XL17cHikei6lSCRFuLmMfZWZsbOw5VTIphwRIgAT8hUDt2rU3YeIimaeUfMQoi3HOTRgNc26ETPJ3NGgRhN9sl5GRocyRrnr16tvatm27wCRVpBokQAIkYCoCOD4aj3PN8wMCAq6oUAyO0PkWLFjQCV7aOY7j2RpmxslW0QRqZcBxoByWsmuqlIpD9HPKlSvHKF8qoVIWCZCA3xBABLCMFi1aLBNfHFWVQrKMeocPH85xOZszZlW0DZaDveWGyL0cp6oYxMK+BMeGPwoUKKDkTVCVXpRDAiRAAmYigJXFrRUqVNinSic58rpr165qOcmjYVZF22A5a9eubQJvbGXthXjYO+rVq/ePwWpTPAmQAAlYmgDiZx/NTAeppB4IEhXxzz//1KdhVoLTd0KQcDtUDLNKDWTfRAK2q5RJWSRAAiTgbwTglX2ldevWi1Vt8Yqf0LZt22pdvHgxyBUrZTMwf2sMM9VHPPlULmNj+TqpWbNmysLNmYkVdSEBEiAB1QRq1aq1KTo6+qwqucg4VfnMmTNFaJhVEfWBnN27d1fF21WUqqLLli17oEaNGltUyaMcEiABEvBnAlhdPAJH2QPe1BEz7mu3w/mrDAxzUY8Ns6ppuzcV4b3/R0CcBRITE5WleBSjXLJkyWPkSwIkQAIkkDsBOTYFw7w/9ytdXyFHpRzGWYwyVkFLemyYvVEg671MYuEdTSxll5ZGVfXBssxmdDRlicBV6UU5JEACJGBGArLPXL58+b3e6uYYx3GOOfzQoUPlfGqYva2Mne+XNGEqUzxifzlZ3P/tzJR1JwESIAFPCZQpU0ZZzAfEzQ7EhMvl8Vc6f3naOpqvRwMqNcxwYDgnR6U0V4PFkQAJkIClCZQuXfoQ0kAqqwPCK8dwxqwMp15BqampwTgu5dJJwFNtChcufIb7y55S4/UkQAJ2JxAZGXkhJCTksioOGNcLw6k3ODt5nDGromyQHEnxiAPpuaYJc7f4ihUr7paoX+5ez+tIgARIgATy5ZMsUxERERdUsZAZ8+XLl2mYVQHVKSc5OTkMy9mhqsqsXLnyriJFiiSqkkc5JEACJGAHAmFhYcnw0VE2dsIzO0a2Kt2eMfOolHm6WUJCQkFXjZcXLbGMfTQv9/EeEiABErAzAVnGllS5qhjAsTdatirdNsyqCqYc7wmIW70qw4zUZfmKFi16ynutKIEESIAE7EUgODg4Vb6qai2robJVScOsiqhGOWlpaUGuGs9TNfDGlwoHhvOe3sfrSYAESMDuBOCRnR4UFJSmioNMuBA3O1s/Ly3OXwwwkvemlIZTxQ+dKlX2SfKuDe8kARIgAXsSkC1eldu84jvkU8Nsz2ZUU2uVhlk6FZazM9RoRikkQAIkYB8CsnIpK5iqaiz7yx4bZpVvBqoqYkc5qmbLwk5kueoIdmTLOpMACZCAuwRk7FQ5fsp47Gp817KU7W7FeZ2xBPCGFgJnMmXJMIzVltJJgARIwDwEZMbs8PdxzhSVVw3Fy1v2rbO7n4Y5r1Q13ScNp2r5GYY56MKFC8rSR2pCwGJIgARIwOcEYJSvOeKqSCoEw5ziamynYfZ5c+esgDQejLMST0Asw+RDGDiXyblNjoLqkQAJkIDPCCBKVyiOOClbcZSjVzTMPmtO7wrGgfZklS76CAOnLO62dzXj3SRAAiRgHQIS7AnhkSNUaSwnZLiUrYqmZjmZM+ar+xAq9jVOnTpVDB2MKyWa25HFkQAJWJuABHtKTEy8lrfA2/FYYkq4mnRxgDZ5X5EZM5Y8UkRNFfsaktsZSzJhJq821SMBEiABUxFAJqhIHJe6ZjO9HY8RhTFeJl7ZVZKG2VRN/29lEDQ9uWDBggmq1Dxy5EhZCQWnSh7lkAAJkIAdCGC1MUb8dFR9YJhPY+JFw6wKqE454iAQHR19VlWZyGhSFG9+ytJIqtKLckiABEjAzASOHj1aSqV+Mq5jfM/WsZczZpWkDZAlhrlw4cJnVImW3M6YNZdWJY9ySIAESMAOBA4cOFBeZT1lXMeK6JXsZNIwqyRtgCwxzLIXoUq07JOgg1VQJY9ySIAESMDfCWClseDx48fjVNUTe8tppUuXPuRKnhbDrDKspCowVpETERGRFhMToyxVIxy/gmCYy1ml/tSTBEiABHxNAPEforDHrOyoKWbKiT43zL6GavXyY2Njj6mMXb5r165q6GjKDspbnS/1JwESIIGcCIjjF2bMyvaYo6KizsXFxR3x6YyZTe4dAWnA8PDwJO+k/P+7d+/eXQ2hOZUdlFelF+WQAAmQgBkJHDp0qJzKqImlSpU6jD1ml069WpagzQjaSjpVqFBhT6FChS6o0hmdrKx8VcmjHBIgARLwZwKbNm2qp/KoVMWKFXfJcSnOmC3cazBjPqrSMxtBRmIxa65qYSRUnQRIgAS0EMDqYrAYZlWFybZktWrVtmM5O9szzFIOZ8yqaBsoRxwFqlevvl1VEYhek3/Dhg0NVcmjHBIgARLwVwLHjh0ruWfPnsqq6icBo+rWrbshJ3laDDO9sr1rUnhmp9evX3+td1Kuv3v58uVt4uPjuc+sEiplkQAJ+B2Bbdu21cJJloqqKibe2JhobfW5YVZVITvLqVGjxlbMnJU5gOENsMrOnTu5nG3nTsW6kwAJ5EgASSsC1q5d20SFs6wj6UXt2rU3lilT5mieDLPK4zkqZdm1H8kblnjyqao/DsxHr1ixopUqeZRDAiRAAv5GQNLkLl26tD0cv/J7WzdH0os2bdoswnJ2tqE4HWVoWcr2tkK8P18+LH8cqVevXo77Ep5wkk6yYMGCzjifV9CT+3gtCZAACdiFwMaNG+v9/fffjVXVt3jx4idbtGixNDd5Wgyz7DFznzm3psj573CtT2jatOmKgICAbGOr5kU6Ol0DLGdXy8u9vIcESIAE/J3A7Nmzu6pM+tOoUaM1ZcuWPZgbNy2GOTcl+Hf3CLRs2XJpsWLFTrh3de5XwdswbtGiRTfmfiWvIAESIAF7EYDTV/m5c+d2VlXroKCg9Pbt288rUaJErjEpaJhVUdcgR45MwTt7g6qi0tPT86Hj3YpgIzGqZFIOCZAACfgDgXnz5t0EJ9k8ryg6nL0cLMRHqHXr1n+5w4aG2R1KJrkGs+WL7dq1m6fSmW7NmjXNsaRd3yRVpBokQAIk4HMChw8fjpkxY8ZdmLzk2enL4ezlqEzjxo1XuRuPgobZ513AMwU6der0hyS18Owu11cjP3OBn3/+uZcqeZRDAiRAAlYngNlyp5UrVzZXVQ9J33vbbbf9UqRIEbeOvNIwqyKvSU6lSpX2tmrVaonK4ubMmXPLunXraqiUSVkkQAIkYEUCCFkc+f333z+YkJCg7MRKlSpVdmJ/eYG7PGiY3SVlkusQMzvp5ptvnhUWFpasSqUjR46Uxqz5bhymz/OyjSpdKIcESIAEfElAHL4WL17cXqUOt956669IRuT2SicNs0r6mmTJAfWaNWtuUVWc7IVMnz79LkYCU0WUckiABKxIAKE3S4wdO/bZ5OTkUFX6wwv7+B133PGzJ/JomD2hZZJrq1ateqhz586zVaqzffv2mjJrVimTskiABEjASgQwBvZctWqV0oiIGKt/r1WrVo6xsbMy0mKYGVxEfdfs3r37VKSDVBaiU3KNTpo06RHuNatvK0okARIwPwFk3Kv6xRdf9ElJSQlUpS2cvU7fddddP+JnoicytRhmTxTite4RkKVseGjPce9q967av39/+YkTJz7q3tW8igRIgAT8gwBOpwRhCbv/li1b6qisUdu2bRciMNRyT2XSMHtKzCTXFypUKOOee+75Vt7IVKo0efLk+3FUoLVKmZRFAiRAAmYm8Pvvv98KT+wHVOoYHh6ecP/9938dExNzSYncHTt2lI2Ojj4DYRKX2etvv379RiBtVrAS5SjkGgFkPinYu3fvb1S0kbOMrl27zjx69GhhoiYBEiABfyewefPmSg0bNlyjehzt1q3bT2fPng3PCz/OmPNCzST3SGIL7F/8oHrWjBnzzT/99BMdwUzSzlSDBEjAGALnzp0L++STTwatX79eSQYpRxjOqKiocw888MBXON7q0d5yjrXkjNmYTmCEVLyRFbjvvvsmqn7bK1++/D54J9YzQmfKJAESIAEzEPj444/7FChQIEXF+JkZKvnqCjOWsL+Kj48vpLSOqg3zM8888xGXspU20XXCZE9Y5daDo5Pi7N10LGlHG6c5JZMACZCAbwj8+eefbZHnXlIwer1d6ywDySoOIkBJU29qxaVsb+iZ5F7kaV4lx6dUq/PHH390wfGBpxgRTDVZyiMBEvAlgU2bNlUeOnToO0hWUUa1HnffffcPTZo0+Vu13HwyY8bauHj7KnmT4IxZeRP9S+CKFSvqI472TlVt5liWgUfhKXgr9jC+BiyBBEiABIwngGOhJREi8zdVY6WznAYNGqxFsKbyhtRCtWF++umnR3Ip25CmuiYUAdfz4w3wZSTjTlXd4RBpbMfSpUuVOEcYS4HSSYAESMA1AUlQ8cQTT4xVPUaKPByPShw3btzDhvGnYTYMraGC8SYY26JFi6VGdDoclF8kyz+GVoDCSYAESMAgAnDGihg8ePCw0NDQdMcY6eyw5e24iSXs706cOBFtkPr5lC9lc8ZsWFP9SzAChNyB4CMXvO1k2d2Pc3nTEOS9mL7asCQSIAES8J7AmTNnwmGUh4eEhFzdnlVpkEUeMkftWbNmjdKoYf+qteoZc9++fUdxKdv7zuWOBJzLC8VSzadGGGbpzA8++OCXcJgo4o4uvIYESIAEfE1AjPKrr776pvNMWcX46DDuOG6VOGrUqL6G15OG2XDEhhaAYOzV4IQgXoFKnPec5QQEBFw1zpw5G9qEFE4CJKCAAI57Fh04cOD7MJ7KfW8c4+JDDz30xalTpyIUqJuzCNWG+amnnhrNGbPhzXZdAeJJHRERcd4I4yxvihID9tChQ0X11oqlkQAJkIB7BA4ePFj8kUceGR8YGKh8guIYV+vXr78OE6Hq7mnk5VU7d+4sgzCPp1QN6jTMXjZIHm5HtpRAHFMbCSOaIe2oek9F5PXs2XMysrFUyoN6vIUESIAEDCMg8a979OgxRVb4VNmxrHLkSPHUqVNvN6wSWQWrNsx9+vT5hDNmbc13raC9e/fGdejQQVJDGtY5W7VqtXTJkiVN9NeOJZIACZDA9QSSkpLyI1NUe6O28hxjKfark996662XcEw1SFsb0DBrQ214QXPmzGlTtmzZfUYa59q1a2/6+eefuyBCGCPJGd6iLIAESCA7AufPnw8dM2bMExLn38jxTmQjQcWXx44d05uBTwwzMhfFq6ocZ8y+fZDGjx//oFFHqBx9pFixYvFvvvnmK8ePH4/ybW1ZOgmQgN0IbN26tQJOo3yGIB+XHWOS6u07h9wbbrhhEWxkWe2MxTAjFONJVYb5ySefHIO3mRDtFWGBVwlguSXghRdeeCc4ONgwz0TpK/IgyL7OypUr6xM9CZAACRhNAFukIeLoinzKhpxCyWoDa9SosXnZsmWNjK5XtvJpmH2C3dBC4UEd06tXr+9VvWzlJAedd6ukUzt9+rTatGeGEqJwEiABKxGQ00M4CvUeVneV5XXIaVyLi4s7pNXZK2tjqDbMEvCCM2bfd3lp1/bt288zeqlH5GN2nnb77bfPkD1uOv75vu2pAQn4CwGcTS4yevToPrVq1dqkY6IhZcgppa+//vre5OTk/D7jSMPsM/SGF7xq1ap6WPZZo6tDlyhR4nj//v0/RLi62oZXjgWQAAn4LQEE8Sj4008/dcFnJl78DTtpknVslHgQH3zwQX94fPvWuVW1YX788cc/44zZPM+LJAhHxqjtuoyzlFOlSpWdr7/++hCeezZPP6AmJGAFAmfPng1Dbvh24r8SHR19Tue4BWeyS3IsCjoU8DkrMczwsj2hCgANs8+b9F8K/PLLL53LlStn+LGCrJ6ReCHY+corrwxF/ugGFy9e1HcG0HxNQI1IgARyIIDIXcV+/PHHO8UgI5iHoQY5Ow9uhPFM+O9///sfjFPmcFxWbZgfe+yxsZwxm+8Z/OGHH7qXKVPmgKoXME/kyFlDeOt/OmPGjFtwxCrafHSoEQmQgG4CcoJk27ZtFT788MNn27Vrt7BgwYJJnowrqq5FuRffeOONV+VstG4GLsvbtWtX6eLFix9XVUkaZtM07XWKSJScKVOm3A4juVdVW3sqB+erL7Vp02bxsGHDXli6dGlj5EylJ7c5uwu1IgFDCEj44H379pXE/nHXRx999PNKlSrtMTK+dW5jlOwpv/POOy8gU1+YIRXOq1Aa5rySs+Z94lCR1TgbdTg/p4cCL4Mnbrvttl/wULwIb+628rAimpjvvCCt2ZzUmgRMT0AcudavX18Dns73IS3wx3BIXYv9XJ/Mjp3HJNnCFY9vLF8Hmw6iGGZ40x7L7c3C3b/LjFnyBJuuolToGgHZc8bxg43ObeoL4yzlS7kIcHO6adOma5AdZgI8IgcsWLCg1e7du0sjDF4UHDHYl9h3ScAiBGQbE89ttCSWkFnxkCFDXu/atevMihUr7sM+brK7dsTo67Ctt//LL7/srTX+tYs2zHY2Ioa5devWa06cOBGrou1leWLEiBH94VEn4dL4MSmB5cuXNxw0aNAniNzVwmwqImh8mrzNIu73fnlpxO8nZRkcb9mJ+HlRfmJfKAHfS2FhYckS5SzzmxIUFJSGpbF0xxcZZ9LxzZCv1FNeBDJfQq7+Ltc56o/f05x+v/b/znycZbni5iwzJ7ZSfqZellwpyNQ/3cFTVT9KT08PunLlilYmGRkZAU5lyvGcPH2ge2B2N4p8+Wb9m7CTe7Krr/xfdveIDPmbcHJVluMa53o5/+58r6P81NTUYLkmLS0tSP4u/5a/yb8d/5eSkhJy+fLlUPmJc75h8ju+YfI7jFxBvEgXgSNXBfguVUdMg0jc59tjR9kAqlOnzkY5EnXTTTf9ladGVnxTto3oPFApLo/iTEygZcuW6/B5/LXXXnt39uzZXXypKvqgDDTXVMCDHnT48OFS8s1mIMsHwyffKzDCqWIEJd2lk5G7ZnAdfxejLQbQ0dcdxtVhmB2GRQyzw6g65GYpP3/mNQ4D/i/jIbKkXHd4Ol4e5B7dhsgd/XK7Rjhm8rr6sqOqDmIUXBmk3HTK69/FAGUaqzwbZSkbhig4Ow5O8q+qKH1WrhNuWe9x/L/DSLoyvmIss74Uyb3y//Iz03hfNfqO3zONc4DDGMv9DtaZ1117gch8Mbh2v+NFIVNGPsi47rl1h33WZ92de1Re06lTpz+HDh36iox/KuUql4Ulw1KxsbFH5SVMxRcz5nFcylbeTMoFOvZzsbcbixzaH2OWei0gvIp+QBlqnidyJEf2Ac/6QHbbciEhIclim2SLTPlg6qVALedIVb01e1lX3p4LASwHX50ZVKhQ4Tj2hZ7HOef9H3300QsnT54sQXgkQAIkYFUCzqtvUodSpUodloiECBf9OcJtJpqtXloMs9kqTX1yJxAVFZWCYwwj4aCxB5Fv3kLErjq538UrSIAESMDcBMQDXFLUdujQYR58Uq76mZjt49Iwq3Te4IzZbM3unj5wqhJnpxn//PPP1uHDhw+ZNm1aT3HqcO9uXkUCJEAC5iEQGRl5/p577vl+wIABH+IEyh7zaPZvTThjNnPrmES3evXq7cRy9tMNGjT4e9SoUYOPHDliuj0Zk6CiGiRAAiYkIKloBw8ePKxnz55TsRp4WfxpHFt3JlQ3e5XE+atkyZJH8Fclzl8PPfTQBDp/Wab5XSoqnVnSOIoXY+YxIiX9Q1U/oxw1zys5kqO/9AFJQvHAAw98JVn1rDQCa1nKthIQ6uqaQOYb5mLkQ908adKkhz777LNn9+/fX4HMSIAESMBMBOQIVuPGjVeLgxeCmfyCGBoSyMQyH5fnmC1TAyqqnUBcXNwZFPrRX3/9tXzcuHHPzJw5804EEmCMa+0twQJJgASyEsBq71EJanX//fd/gyXs/X5DaM+ePXFwJz+kajnjwQcf/IJL2X7TPa6ryJkzZwpg9tyrefPmKzKDaHB5W9EWkKrnj3K4NG2HPoC947O9e/f+ZvHixU0wUbgabc2qsfbp/OWf9lJbrXAGUALPT8GS9uLp06f3+Oqrr57YtGlTHXjimy7snjYoLIgESEAbAQnJ2759+wUPP/zw+I4dO86Hgb62bG05B69MaloMM49LaeujPisI2akkTegYnHf+/eeff+717bffPozYuNV8phALJgES8GsCiImf1KpVq2WPP/74Z5K7GUvYZ/2lwnT+8peWNEk9cD5QcjsP3759+4/43Iezz72QVaY2YuleF8jf1/FxTYKLapAACXhIAI5cZ5HD/S8sW38Ng/wXktqc81CE6S/XNmPmrNn0fUGpgtWrV98Pgf/DDHry77//fhscxHquWbOmiWSckYKyhshTWjiFkQAJ+B0BpGU8ING6unXr9pPMlJFh7qLfVTKzQlpmzDTK/tp9cq9XZoSd0QcOHJiMs4TNsQ99F5wz2uLIVSn2i9z58QoSsDMBSeGKl/xtXbp0mYHvzJo1a25DBK8Uf2eiZcbs7xBZv9wJICHGCVw1E96Sv2GZu7qklfzzzz+7yDI3PPajc5fAK0iABOxAQFKHSoz+pk2brkR+5NmYJc8vXbp0/Ntvv22H6l+tI2fMtmlqc1QUQeMl/vYW+cKT+2sY5jpLlixpt3Dhwk7izZ2UlFTAHJpSCxIgAZ0EYHwPSVAQeFjPa9269WJkuduXeepDpxqmKEtLgBEuWZqirU2nBDy5ZRYt33kHDx4cvWPHjmow0B2x1H0jPLqrxsfHF2PfMV2zUSESUEIAR5kSEC/jaKNGjVZjVjynSZMmqzAmHLBalC4lMLII0bKUDY9cnmk1ovX8SGbZsmVPojryXXLixIkPZSa9dOnSNitWrGi9fv36hjDSxWmk/ajBrVOV/D5S9WpudH/74MzxpapVq+5s1qzZspYtWy6tX7/+OsyM92eupPlbdfNcHy1L2XnWjjfakgCOP1xAxZfJF05iRXbt2lUF0eiqpKSkhLhIR5rd4Jl1YHPnGlvyZqVJQAcB2TuWcJkwzNtjY2NPODtxWTLbk4HQXBlmpW9rjAJlYAv6uejMuNyrUE358kMCJOCHBKwaocuoptCylC1LkFyGNKoJ7SHXqjFv7dE6rKUKAlY0Trk9l1ask4q29FaGFsPsrZK8nwT4gLMPkID5CPC5NKZNsnXKkn082Q9QVSRny6pIUg4JkAAJkIC/E9BmmGmc/b0rsX4kQAIkQAIqCGg5xkSjrKKpKIMESIAESMAOBFwaZixncynbDj2AdSQBEiABEjAVAZeGmXvMpmonKkMCJEACJGATAjnNmJWdZeZStk16E6tJAiRAAiTgNQGXzl8uIizlqUAa5jxh400kQAIkQAI2JMAZsw0bnVUmARIgARIwLwEtXtmZ1fdVMHjz0qdmJEACJEACJJCFAJey2SVIgARIgARIwEQEtAQYkbSP2Gc2UbWpCgmQAAmQAAmYk4CuPWYph0vZ5uwD1IoESIAESMBEBHTtMXO6bKJGpyokQAIkQALmJZBTgBFlxhRL2YHmRUDNSIAESIAESMA8BLQ4f0kUMZXnos2Dj5qQAAmQAAmQgFoCWvaYobKy2bfa6lMaCZAACZAACZiLgC7DbK5aUxsSIAESIAESMCmBoOz0kmVnlUvPsseML72yTdoJqBYJkIB1CSQlJeW/cOFC5OnTp4ueO3eucHh4eELRokVPR0ZGXoyKikq2bs3sq3m2hllwqDTMmbGyaZjt289YcxIgAcUETpw4EbVx48Z6Q4cO7Tx//vxO+/btq5CSkhISGBiYDoN8rlmzZqu+/PLL2R07dpxTtmzZk4qLpzjdBI4ePRrdpEmTVShX9oa9/nbq1OmPkydPRuiuB8sjARIgAX8jkJycnP/333+/sWvXrjOLFSsWn9MYHRYWliyGedasWR39jYPt6iOGuWnTpitVGGWR0aFDhznHjx+Psh1IVpgESIAEFBKQZetvv/22V+nSpQ94Mj7HxcUdGTt27KMKVaEo3QTEMGMZZIUnDZ/TtTfeeOPcY8eO0TDrbkiWRwIk4FcENmzYUL1mzZpb8jI2Y9/51IwZM272KyB+Whkt55hlj5k5mf20B7FaJEAC2ghgSfr2rVu31sxLgeIc9v777w/ZvXt36bzcz3v0EdByXEq8smmY9TUqSyIBEvA/AvHx8RHz5s3zasa7evXqpnAU436zybuHFsOcOWPWFZfb5MipHgmQAAl4TkBmvNu3b6/m+Z3//47U1NSgVatWtTx//nywN3J4r7EEtBhmSfsoX2OrQukkQAIk4L8EDh8+XAYGtbC3NdyxY0fNxMTEgt7K4f3GEdCSj5l7zMY1ICWTAAnYg4AYZsx4Q72tLU7IlDh16lSMt3J4v3EEcjLMSuNbc4/ZuEakZBIgAf8ngJMtpdLS0rxeecSsOxqGuZj/E7NuDbXMmOn8Zd0OQs1JgATMQQB7zDGY4HitjBhmCd3ptSAKMIyAS8McFBSUqqrU9PR0emWrgkk5JEACtiRw8eJFJdETxQHs0qVLV2Vhr5mhkk3Ym7TMmGUZm85fJmx9qkQCJGAJAkhSEQQjGq5KWVVGXpU+lHM9AW2GmXvM7HokQAIkkDcCSE4RmpCQUChvd//7Li5lqyJpjByXjgQBAQEZqorkjFkVScohARKwIwE4fQWpNMySJlI4IkWk95vWdmwQg+vscsYsqcNUlS3L2Jwxq6JJOSRAAnYjgH3h4MuXL4epqjcMM3MXqIJpgJycDHOaqvLEk5CGWRVNyiEBErAbAXGgVWmYkTpSmZG3W1voqC/3mHVQZhkkQAIk4AUBMczYZw7xQsR1t8rSuCpZlKOegJalbOlU9MpW33iUSAIkYA8Cqg2zLI3bg5w1a6nF+Us6Fb58Q7NmH6HWJEACPiYgM1wsZSudMfMMs48bNYfitSxlZxrmQPNioGYkQAIkYF4C4qOjcpYLWcqMvHmpWVczV4Y5Q6VXNpeyrdtBqDkJkIDvCcg5ZtX7wvnzM+iX71s2ew107TEHiXE2KwTqRQIkQAJmJiBe1JJzQJWOEnJZRdxtVfpQzvUEsjXMhQoVuqIywAiXstntSIAESCDvBMQjW+XkJjg4WFkuhLzXine6IqDF+UuWYFR2KjYnCZAACdiJgJxhVrmUjRlzGqN+mbcHuTTMKveY5agUj0uZtxNQMxIgAXMTgGEOVbmULTPmpKQkbjKbtNldGmY0XIoqnfGmFyxfVfIohwRIgATsREAMs8oxNDQ09HKBAgUYJ9uknUjLjJl7zCZtfapFAiRgCQKylK0yFgT8iC5aouI2VdKlYZY9CFVMeFxKFUnKIQESsCMBLDsXULnHHBkZecGOHK1SZy2GWQ6z0/nLKl2CepIACZiNAFI+FsQ46nK89lRfGObznt7D6/URyGmPWZk7vbzpqYxaow8PSyIBEiAB3xNA+MxwOH8pUyQiIoJL2cpoqhfk0jCHhYUlqYoMIx7ZKlOWqcdAiSRAAiRgXgIq8yfLuI6jUonmrS01y8kwJ6syzIJZlmKImwRIgARIwDMCly5dyn/mzJkint3l+moY5QTMmLnHrAqoAXJcGuaQkJAUnGVW4k4vSzAq3/gM4ECRJEACJGBKArLaePz48ZKqlBOjHB0dfVaVPMpRT8ClYcYZt0SVYTlPnz4do159SiQBEiAB/yTgSMuI1cZC+/fvr6iqljDK54oWLXpKlTzKUU/ApWEuWLBgggQ6V1XkiRMnSqiSRTkkQAIk4O8EHCEz9+zZU/nAgQPlVNUXRvl0VFQUvbJVATVATlBWmfKWJh1CljtUnmVevXp1i59//vl2dIhzEu5TQsLJT5mVZ/mmy/9jf/tqIg35Ov4tuuLfV/8mX/m3/MTfrztznXm9uDDmlzym8nfn2T/uuebeKPfLNQ55Dh65/dtRdm5tklWOq+vduU70RLvk6pqJN+z8eLFSsg2RW/34d3sSkD7mTs2lz+Z2nfR9bHfJdble6448R3nO12Z3nyd/zxpWGPcGOI6AOsYQuUaCgDieZZHvdEw0P06nBMr/SWjNzGuv/sz6zcwtECQ/5fzyqFGj+pw7d65wbhzd/XuFChX2YEU0yd3reZ1+Ai4fhMWLFze98847/8AStLIOIdWDsc8Ho5yOPezLYvgzjbMY16sGOdMQXzWkjn/LzD2zs19nZB0PQNaZvdP1V4lmyknPfBCvynA8TA4D6whBKuXKdfLi4GwsRVdHOfJ3uS63sKVyf1Y52TVx5nW5hkAVZzzhllM3cejsTrmZ7XG1DVR1Pcdg5+AlA5gq2Z7IcTB154Uni9wcjYPUTwZMX8Z+l7JVBptw1F/k5nSs0cFSjI3EJnCnPSQrkjvGVMqV8nNqL5Ej5eYmL7N9rqZIdBhHB6/MlwDhd115jvId40HmfdcmLlmM7FW5WUNkZgZSknKvvhQ72skx1ogOjvuc+1FmZMSrBlp+F7miD9hJKONcX1bcaQfHNTKGvPPOOy+88sorH3hyH6/VS+BfM2ZH8TJjlrBtqg0zOlo+eXPEm2C43qqyNFcEVHrfZw6GspLhc+BG6eCcx1bK8GVeWynb23r6Un+fdxKbKSBOX3Xq1Nlos2pbrro5GuYSJUqcwN5GWRW1yssA5u497l6noh7+KMOIgdkImZ6y16GDjjJyq7cZdMhNR/7dHATq1q27sX79+uvNoQ21cEXA5TJj8eLF42vUqLFZFbq8DB7u3uPudarqQjkkQAL6CXi7MqBbY7Ppiy2rjO7du08uU6ZMvG4WLM8zAi4NM2Kppt5xxx0/i2u9ZyJ5NQmQAAmoJ2C1F3Cz6YvZ8vpu3bpNU98ylKiaQI6OOZ07d/7j7rvv/l51oZRHAiRAAiSgj4DEpejXr9/IcuXKndBXKksyjMDGjRur4E1rAwoQT0N+yYB9gH2AfcBifeC+++6bePLkyUjDDAUF6ycwderUrnAEO07DzBcT9gH2AfYBa/WB2rVrb1y7dm1N/ZaDJRpKAMEEAocNG/Y8ztAm86G01kPJ9mJ7sQ/Ytw/AR+jM999/38NQA0HhviOA7CZhTz755Bh4GkowimtLWZkBAbi0ZbGlLQ7W9h2s2fb+1/bZjcNI3Zs4dOjQly5evOjyWKzvLApLVkbg0KFDRbFX8Q2iXkkITBpjMmAfYB9gHzBhH5DQxXD2+ggTKgZyUmYBTSxo7969sT179vwRKkrMZj6UZMA+wD7APmCyPiATqMOHDzOjn4ltqXLVHMaZM2e+mPDljH2AfcA8fUBi+N9///1fI01krPKBnwLNS8CRIxRvY0Vkz5kOYeZ5KDlAsi3YB+zbBySpTt++fUcdO3ZMaeIh81ojapYtgePHj0cOwQfJLi5wQLDvgMC2Z9uzD/i2DyDN68WXXnrpLZxVjqC5IoF8ly5dCpw4ceLdOCu3iQ+nbx9O8id/9gH79YGaNWtu+eabb+45f/58KE0SCVxHYP369dUffPDBL5Eu8jwHB/sNDmxztjn7gN4+EB4entCrV68fVq1aVY/miAT+RcCx7xwfH1/oxx9/vLNjx45zsd9xmQ+q3geVvMmbfcD/+0BQUFBaq1atln399df3OfaTHWMwzRMJuCSAvedoiTbTtWvXX6KiojiDNtlRCg7e/j94s439r42xj5wgk54JEyY8COfbYjRB/ksgv5FVkxn0okWLbpw8efL9ixcvboe3unBEqJHzz9l9vNHFm3uNREDZJEACuROQc9Bm/ORVL1fjkcfykDoyP06+pLRo0WI5Mv19B8M8Jy4u7ozAklkylrM9lmlG0NTpegJaDJoY6N27d1dFaLjIHAxzXtrGWX920LwQ5D1GEtDyfBlZARPJtuXzLYZZ9pIrV668OzY29hwNsol6JFUhARIgARKwNwHMkAPsTYC1JwESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAESIAES8FMC/w/+ZfEdS/kTvQAAAABJRU5ErkJggg==">
                        </img>
                        <div className='formhead'>Drop file here or click to upload</div>
                        <div className='formsub'>Supported format pdf</div>
                    </div>
                    <h2>or,</h2>
                    <div className='downopt paddingbtn'><h3 className='center'>Use Templates</h3></div>
                    <div className='wd60'>
                        <div className='widthfull formhead smaller w60 rlpad10 bmr5'>Name</div>
                        <input type="text" className='forminput' placeholder="Document name"></input>
                        <br></br><br></br>
                        <div className='widthfull formhead smaller w60 rlpad10 bmr5'>Internal Reference Number</div>
                        <input type="text" className='forminput' placeholder="Internal Reference Numbere"></input>
                        <br></br><br></br>
                        <div className='widthfull formhead smaller w60 rlpad10 bmr5'>Details/About</div>
                        <textarea type="text" className='forminput lbfix' placeholder="Write here..."></textarea>
                    </div>
                </div>

                <div className='mywallet' id='mywalletpageHead'>
                    <div className='heading w6 margin5px white'>MY WALLET</div>
                    <div className='line'></div>
                    <div className='subheadwhite smalltx'>The My Wallet app shows you everything you want to see in order to understand where you've 
been spending your money and where you need to save.
authorized to do so by law.</div>
                </div>
                <div className='mywalletPage' id='mywalletpage'>
                    <div className='leftwalletpage'>
                        <div className='leftwalletnav'>
                            <img src={wallet} className="walletimg"></img>
                            <div className='walletnavright'>
                                <div className='walletnavrighthead'>Wallet Balance</div>
                                <div className='walletnavrightsub'>₹0.00</div>
                            </div>
                        </div>
                        <div className='leftwalletline'></div>
                        <div className='leftwallet2ndhead'>Recharge Wallet</div>
                        <div className='leftwallet2ndsub'>Choose from the available recharge packs.</div>
                        <br></br><br></br>
                        <div className='leftwalletmoneyopts'>
                            <button className='leftwalletmoneyopt'>₹ 50</button><button className='leftwalletmoneyopt'>₹ 100</button><button className='leftwalletmoneyopt'>₹ 200</button><button className='leftwalletmoneyopt'>₹ 500</button><button className='leftwalletmoneyopt'>₹ 1,000</button><button className='leftwalletmoneyopt'>₹ 2,000</button><button className='leftwalletmoneyopt'>₹ 5,000</button><button className='leftwalletmoneyopt'>₹ 10,000</button><button className='leftwalletmoneyopt'>₹ 20,000</button>
                        </div>
                        <br></br><br></br>
                        <div className='leftwalletbox'>
                            <div className='leftwalletboxhead'>
                                GET RS.50 IN
                            </div>
                            <table>
                                <tr>
                                    <td>Amount</td>
                                    <td>₹ 50</td>
                                </tr>
                                <tr>
                                    <td>GST @ 18%</td>
                                    <td>₹ 15</td>
                                </tr>
                                <tr>
                                    <td>Talktime</td>
                                    <td>₹ 10</td>
                                </tr>
                                <tr>
                                    <td>Extra Talktime</td>
                                    <td>₹ 10</td>
                                </tr>
                                <br></br>
                                <tr>
                                    <td><b>Total</b></td>
                                    <td><b>₹ 70</b></td>
                                </tr>
                                <br></br>
                            </table>
                        </div>
                        <br></br>
                        <button className='paybutton'>PROCESS TO PAY</button>
                    </div>
                    <div className='rightwalletpage'>
                        <div className='rightwallethead'>Payment Method</div>
                        <div className='payoptions'>
                            <div className='payoption'><img src={paycard}></img>Credit / Debit Cards</div>
                            <div className='payoption'><img src={payupi}></img>UPI Payments</div>
                            <div className='payoption'><img src={paynet}></img>Net Banking</div>
                            <button className='continue'>CONTINUE</button>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className='footerbx'>
                        <div className='leftlogin'>
                            <img className="logo" src={simple}></img>
                            <button className="footerbtn">LOG IN</button>
                            <div className='xuiso'>
                                <img className="smalllogo" src={fb}></img>
                                <img className="smalllogo" src={insta}></img>
                            </div>
                        </div>
                        <div className='rightlinks'>
                            <div className='lnks'>
                                <div className='overlap'><div className='rlinkshade'>CONTACT US</div></div>
                                <div className='fat'>Phone</div>
                                <div className='fatdown'>509-917-3307</div>
                                <div className='br'></div>
                                <div className='fat'>Fax</div>
                                <div className='fatdown'>403-678-8897</div>
                                <div className='br'></div>
                                <div className='fat'>Email</div>
                                <div className='fatdown'>info@advocate.com</div>
                            </div>
                            <div className='lnks'>
                                <div className='overlap'><div className='rlinkshade'>LOCATIONS</div></div>
                                <div className='fat'>Calgary</div>
                                <div className='fatdown'>13th Street AW</div>
                                <div className='fatdown'>Building, Albert</div>
                                <div className='fatdown'>1034</div>
                                <div className='fat'>Bangalore, India</div>
                            </div>
                            <div className='lnks'>
                                <div className='overlap'><div className='rlinkshade'>LINKS</div></div>
                                <div className='fat'>About</div>
                                <div className='br'></div>
                                <div className='fat'>Lawyers</div>
                                <div className='br'></div>
                                <div className='fat'>Wallet</div>
                                <div className='br'></div>
                                <div className='fat'>Saved</div>
                                <div className='br'></div>
                                <div className='fat'>Practice Areas</div>
                                <div className='br'></div>
                                <div className='fat'>Contact</div>
                                <div className='br'></div>
                                <div className='fat'>My Profile</div>
                            </div>
                        </div>
                    </div>
                    <div className='lastcote'>Copyright © 2021 Advocate Find your Lawyers</div>
                </footer> 
        </div>
    );
}

export default App;
