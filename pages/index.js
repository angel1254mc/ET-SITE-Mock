import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {useState} from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import CountUp, {useCountUp} from "react-countup";
import TabComponent from '../components/TabComponent';
import CardCarousel from '../components/CardCarousel';
import CountUpTool from '../components/tools/CountUpTool';
import {homeData, headerData} from '../src/data.js';
import CardSM from '../components/CardSM';
import Card from '../components/Card';
import Header from '../components/Header';

export default function Home() {

  const tabs = homeData.AboutUs.Tabs ;
  const [animateSection, setAnimateSection] = useState(false);
  const cueAnimation = (inView) => {
    setAnimateSection(true);
    document.getElementById("achievements-content").classList.add('animate__animated','animate__fadeInUp');
  }
  return (
    <div className="epic">
      <Head>
        <title>ET Site Mockup</title>
        <meta name="description" content="Emerging Tech Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center">
          <div id="Hero" className="relative w-full h-[90vh] overflow-hidden">
            <video autoPlay muted loop className = "absolute object-cover w-full h-full">
              <source src="/videos/background.mp4"
              type="video/mp4"/>
            </video>
            <div className="relative flex flex-col h-full overflow-hidden">
              <Header></Header>
              <div className="w-[100vw] mt-[96px] xl:mt-[132px] flex justify-center">
                <div className="animate__delay-1s animate__animated animate__fadeInUp lg:w-5/6 xl:w-3/4">
                  <div className="px-6 text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold text-white w-6/7 md:w-4/5 lg:px-14 lg:w-[584px] mt-[80px]">Next Level IT and End-User Security</div>
                  <div className="px-6 text-md sm:text-xl md:text-3xl lg:text-xl font-normal text-white w-5/6l lg:pl-14 lg:w-[460px] mt-[25px]">We are a client-focused, standards-based, end-to-end IT consulting company providing the services and skills to secure IT infrastructures and networks critical to our nation's security</div>
                  <div className="flex flex-row mt-20 md:mt-16 px-6 space-x-4">
                    <button className="et-button primary md:text-xl md:w-[200px] md:h-[50px] lg:ml-4">START NOW</button>
                    <button className="et-button secondary md:text-xl md:w-[180px] md:h-[50px]">CAREERS</button>
                  </div>
                </div>
                </div>
            </div>
          </div>
          <div className="w-full xl:w-[1280px] flex flex-col justify-center">
            <div id="about-us-content" className= " overflow-y-hidden px-6 mt-20 w-full bg-et-light-gray py-6 overflow-x-hidden flex flex-col lg:flex-row items-center">
              <AnimationOnScroll className="w-full flex justify-center" animateIn="animate__fadeInUp" offset="150" animateOnce="true">
                <div className="w-[320px] sm:w-[440px] lg:w-full">
                  <Image src="/AboutUs.webp" width="320px" height="320px" layout="responsive"></Image>
                </div>
              </AnimationOnScroll>
              <div className=" w-full mt-5 flex flex-col sm:flex-row lg:flex-col sm:px-6">
                <div className="sm:w-1/2 lg:w-full">
                  <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-left">About Us</p>
                  <div className="text-sm lg:text-lg font-medium sm:font-normal text-et-dark-gray mt-4 text-left tracking-tighter lg:tracking-tight">
                    We are proud to be disruptive consultants. We don’t waste our time with traditional corporate politics – we prioritize employee voices, collaboration, and climate. We understand the importance of workplace culture and a sense of belonging and purpose.
                    <br/>
                    <br/>
                    We serve as Solution Experts to ensure our clients’ systems are secure, efficient, and compliant.
                  </div>
                </div>
                <TabComponent Tabs={tabs}></TabComponent>
              </div>
            </div>
            <div id="our-people-content" className="px-6 mt-20 w-full bg-white py-6 overflow-x-hidden flex flex-col items-center justify-center">
              <h4 className="text-et-teal w-full font-bold text-sm sm:text-lg lg:text-xl">OUR PEOPLE</h4>
              <div className="w-full mt-3 flex flex-col sm:flex-row">
                <div className="flex flex-col w-full sm:p-4 sm:w-1/2">
                  <p className="text-2xl sm:text-3xl lg:text-5xl font-bold text-left tracking-wider">Less than 100 employees, over 30 languages spoken.</p>
                  <p className="text-sm sm:pr-4 lg:text-xl font-medium sm:font-normal text-et-dark-gray mt-4 tracking-wider">
                    The Emerging Tech family combines varied industries, degree programs, 
                    universities, and backgrounds into cross-functional and developed teams 
                    with focus and purpose. Our diverse backgrounds, talents, and perspectives 
                    are foundational to our success
                  </p>
                  <div className="w-full hidden mt-3 sm:flex flex-col">
                <h3 className="mt-2 font-bold text-xl lg:text-3xl text-left">Degrees: </h3>
                <div className="mt-6 lg:mt-14 flex flex-row w-full font-bold lg:font-medium">
                  <div className="w-1/2 text-sm lg:text-2xl text-bold text-et-dark-gray ">
                    <ul className="space-y-3 lg:space-y-6">
                      <li className="flex items-center">
                        <div className="w-[12px] lg:w-[18px]">
                          <Image className="" src="/listicon.webp" width="12px" height="12px" layout="responsive"/>
                        </div>
                        <p className="ml-1">Business</p>
                      </li>
                      <li className="flex items-center">
                        <div className="w-[12px] lg:w-[18px]">
                          <Image className="" src="/listicon.webp" width="12px" height="12px" layout="responsive"/>
                        </div>
                        <p className="ml-1">Health Informatics</p>
                      </li>
                      <li className="flex items-center">
                        <div className="w-[12px] lg:w-[18px]">
                          <Image className="" src="/listicon.webp" width="12px" height="12px" layout="responsive"/>
                        </div>
                        <p className="ml-1">Business</p>
                      </li>
                      <li className="flex items-center">
                        <div className="w-[12px] lg:w-[18px]">
                          <Image className="" src="/listicon.webp" width="12px" height="12px" layout="responsive"/>
                        </div>
                        <p className="ml-1">Cybersecurity</p>
                      </li>
                    </ul>
                  </div>
                  <div className="w-1/2 text-sm lg:text-2xl text-bold text-et-dark-gray ">
                    <ul className="space-y-3 lg:space-y-6">
                      <li className="flex items-center">
                        <div className="w-[12px] lg:w-[18px]">
                          <Image className="" src="/listicon.webp" width="12px" height="12px" layout="responsive"/>
                        </div>

                        <p className="ml-1">Engineering</p>
                      </li>
                      <li className="flex items-center">
                        <div className="w-[12px] lg:w-[18px]">
                          <Image className="" src="/listicon.webp" width="12px" height="12px" layout="responsive"/>
                        </div>

                        <p className="ml-1">Communications</p>
                      </li>
                      <li className="flex items-center">
                        <div className="w-[12px] lg:w-[18px]">
                        <Image className="" src="/listicon.webp" width="12px" height="12px" layout="responsive"/>  
                        </div>

                        <p className="ml-1">Mathematics</p>
                      </li>
                      <li className="flex items-center">
                        <div className="w-[12px] lg:w-[18px]">
                        <Image className="" src="/listicon.webp" width="12px" height="12px" layout="responsive"/>
                        </div>
                        <p className="ml-1">Medicine</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
                </div>
                <div id="where-we-work-image" className="w-full sm:w-1/2 justify-center mt-6">
                  <Image src="/WhereWeWork.webp" width="370vw" height="480vw" layout="responsive"></Image>
                </div>
              </div>
              <div className="w-full sm:hidden mt-3 flex flex-col">
                <h3 className="mt-2 font-bold text-xl text-left">Degrees: </h3>
                <div className="mt-6 flex flex-row w-full font-bold">
                  <div className="w-1/2 text-sm text-bold text-et-dark-gray ">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Image className="" src="/listicon.webp" width="12px" height="12px" layout="responsive"/>
                        <p className="ml-1">Business</p>
                      </li>
                      <li className="flex items-center">
                        <Image className="" src="/listicon.webp" width="12px" height="12px" layout="responsive"/>
                        <p className="ml-1">Health Informatics</p>
                      </li>
                      <li className="flex items-center">
                        <Image className="" src="/listicon.webp" width="12px" height="12px" layout="responsive"/>
                        <p className="ml-1">Business</p>
                      </li>
                      <li className="flex items-center">
                        <Image className="" src="/listicon.webp" width="12px" height="12px" layout="responsive"/>
                        <p className="ml-1">Cybersecurity</p>
                      </li>
                    </ul>
                  </div>
                  <div className="w-1/2 text-sm text-bold text-et-dark-gray ">
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Image className="" src="/listicon.webp" width="12px" height="12px" layout="responsive"/>
                        <p className="ml-1">Engineering</p>
                      </li>
                      <li className="flex items-center">
                        <Image className="" src="/listicon.webp" width="12px" height="12px" layout="responsive"/>
                        <p className="ml-1">Communications</p>
                      </li>
                      <li className="flex items-center">
                        <Image className="" src="/listicon.webp" width="12px" height="12px" layout="responsive"/>
                        <p className="ml-1">Mathematics</p>
                      </li>
                      <li className="flex items-center">
                        <Image className="" src="/listicon.webp" width="12px" height="12px" layout="responsive"/>
                        <p className="ml-1">Medicine</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <section id="centers-of-excellence-content" className="px-6 mt-10 w-full bg-white py-6 overflow-x-hidden flex flex-col items-center justify-center">
              <div className="text-sm lg:text-xl text-center text-et-teal font-bold py-2">EMERGING TECH'S CENTERS OF EXCELLENCE</div>
              <div className="text-2xl lg:text-5xl text-center text-black font-bold tracking-wide">Our Capabilities</div>
              <div className="w-full">
                <CardCarousel></CardCarousel>
              </div>
            </section>
          </div>  
          <section id="achievements-content" className="w-full mb-6 space-y-4 lg:space-y-0 lg:space-x-4 flex px-6 flex-col lg:flex-row lg:justify-center h-auto"> 
            <div className="flex flex-col sm:flex-row lg:w-1/2 space-y-4 sm:space-y-0 sm:space-x-4">
                <CardSM className="sm:w-1/2" imgDirection="left" animation="animate__fadeInLeft" imagesrc="/growth.png" description="% Growth Last 3 Years" number={255} uniqueID="growth"></CardSM>
                <CardSM className="sm:w-1/2" imgDirection="right" animation="animate__fadeInRight" imagesrc="/published.png" description="Technical Documents Published" number={1500} uniqueID="published"></CardSM>
            </div>
            <div className="flex flex-col sm:flex-row lg:w-1/2 space-y-4 sm:space-y-0 sm:space-x-4">
              <CardSM className="sm:w-1/2" imgDirection="left" animation="animate__fadeInLeft" imagesrc="/partners.png" description="Federal Partners" number={7} uniqueID="partners"></CardSM>
              <CardSM className="sm:w-1/2"imgDirection="right" animation="animate__fadeInRight" imagesrc="/enterprise.png" description="Enterprise components secured" number={200} uniqueID="enterprise"></CardSM>
            </div>
          </section>
          <section id="get-involved-content" className="w-full flex">
            <div className="absolute w-full overflow-hidden bg-et-clay">
              <Image className="" src="/getInvolved.jpg" width={1980} height={500} layout="fixed"></Image>
            </div>
            <div className="relative h-[500px] w-full px-6 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
              <div className="flex flex-col w-full lg:w-1/4 justify-center text-white items-center ">
                <p className="text-3xl sm:text-4xl text-white font-bold">Get Involved</p>
                <p className="text-sm sm:text-lg text-center w-3/4 md:w-3/5 lg:w-full font-normal text-et-light-gray mt-4">Emerging Tech invites you to join us in our vision to innovate, collaborate, and educate. Reach out and help us continue to develop and deploy standards-based security solutions across the private and public sectors.</p>
              </div>
              <button className="mt-6 et-button primary sm:text-xl xl:text-2xl lg:py-6 sm:py-4 xl:w-1/5 sm:px-8">Collaborate with Us</button>
              <button className="mt-6 et-button primary sm:text-xl xl:text-2xl lg:py-6 sm:py-4 xl:w-1/5 sm:px-8">Join Our Teams</button>
              <button className="mt-6 et-button primary sm:text-xl xl:text-2xl lg:py-6 sm:py-4 xl:w-1/5 sm:px-8">Connect With Us</button>
            </div>
          </section>
          <section className="w-full h-auto bg-et-teal p-6 pt-12">
            <div className="w-full flex items-center justify-center">
            <Image src="/footer.webp" width={384} height={92} layout="intrinsic"></Image>
            </div>
            <div className="flex flex-row justify-center space-x-6 items-center mt-8 mb-2">
              <div className="w-[30px]"><FontAwesomeIcon className="w-full h-full"icon={faFacebook}></FontAwesomeIcon></div>
              <div className="w-[30px]"><FontAwesomeIcon className="w-full h-full" icon={faTwitter}></FontAwesomeIcon></div>
              <div className="w-[30px]"><Image src="/linkedin-brands.svg" width={30} height={30} layout="responsive"></Image></div>
            </div>
            <h1 className="p-1 text-white text-md"><FontAwesomeIcon icon={faLocationDot}/> 106SW 6th Street, Gainesville, Florida</h1>
            <h1 className="p-1 text-white text-md"><FontAwesomeIcon icon={faEnvelope}/> collaborate@emergingtech.co</h1>

            <h3 className="text-white text-xs mt-4 text-center">Copyright &copy; 2022 | Emerging-Tech | All Right Reserved</h3>
          </section>
      </main>

      <footer>
      
      </footer>
    </div>
  )
}//<InView as="div" onChange={(inView, entry) => {inView === true ? cueAnimation(inView) : null}}>
// document.getElementById("achievements-content").classList.add('animate__animated','animate__fadeInUp');
//            </InView>