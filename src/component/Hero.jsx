import styles from "../style";
import { profile, stroke, facebook, instagram, github, dribbble, linkedin } from "../assets";
import { Transition, CSSTransition, SwitchTransition, TransitionGroup } from "react-transition-group";
import { useEffect, useState } from "react";


const Hero = () => {
    const [hello, setHello] = useState(false)
    const [sosmed, setSosmed] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setHello(true)
        }, 300)
    })
    useEffect(() => {
        setTimeout(() => {
            setSosmed(true)
        }, 500)
    })

    return (
        <>
            <div className="hero min-h-screen bg-[#151c2e]  ">
                <div className="hero-content flex md:flex-row xxxs:mt-20 sm:mt-0 xs:flex-col md:mx-0 xs:mx-10 xxs:flex-col xxs:mb-20  ">
                    <CSSTransition in={hello} timeout={1000} classNames="animate" unmountOnExit>
                        <div className="flex flex-col ">
                            <div className="flex flex-row">
                                <img
                                    src={stroke}
                                    alt="stroke"
                                    className="w-[30px] sm:w-[40px]"
                                />
                                <p className={`${styles.paragraph} font-bold mx-4 text-[26px] xxxs:text-base sm:text-[24px]`}> Hello, </p>
                            </div>
                            <p className={`${styles.heading2} my-4 xxxs:text-xl xxs:text-[32px] xxs:!leading-10 sm:!leading-[80px] `}> I'am Muh. <span className="text-gradient">Rizal</span> Firdaus</p>
                            <p className={`${styles.paragraph} max-w-[700px] xxxs:!text-[12px] sm:!text-[20px] xxs:text-base lg:max-w-[600px] xxxs:!leading-1 xs:!leading-8`}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ut molestiae tenetur praesentium voluptatibus sunt obcaecati commodi corrupti voluptate aspernatur!</p>
                        </div>
                    </CSSTransition>
                    <div className="flex flex-col ">
                        <CSSTransition in={hello} timeout={1000} classNames="animate" unmountOnExit>
                            <img
                                src={profile}
                                alt="profile"
                                className="rounded-full lg:w-[500px] object-contain z-20 xs:w-[300px] xxs:hidden sm:flex sm:w-[400px]"
                            />
                        </CSSTransition>
                        <span className="w-[300px] h-[300px] rounded-full absolute lg:right-[200px] md:right-[100px] sm:right-[140px] sm:top-[500px]  xs:right-[100px] xxs:right-[50px] lg:top-[400px] xxs:top-[20px] pink__gradient z-0 xxxs:right-[50px] xxxs:top-[50px]"></span>
                        <span className="w-[300px] h-[300px] rounded-full absolute lg:right-[400px] md:right-[300px] xs:right-[100px] lg:top-[400px] xxs:top-[20px] blue__gradient z-30 xxxs:right-[25px] xxxs:top-[25px] sm:right-[140px] sm:top-[500px]"></span>
                        <span className="w-[300px] h-[300px] rounded-full absolute lg:right-[500px] xs:right-[100px] md:right-[500px] xxxs:right-[50px] xxxs:top-[50px] lg:top-[200px] xxs:top-[20px]white__gradient z-10 sm:right-[140px] sm:top-[500px] "></span>
                    </div>
                    <div className="flex flex-row absolute md:bottom-[80px] xxxs:bottom-[25px] ">
                        <CSSTransition in={sosmed} timeout={800} classNames="sosmed" unmountOnExit>
                            <button type="button" class="bg-gradient-to-r hover:from-pink-500 hover:rounded-full hover:to-yellow-500 hover:animate-bounce"><img src={instagram} alt="instagram" className=" md:w-[50px] cursor-pointer mx-2  xs:w-[30px] xxs:w-[40px]  sm:w-[60px]" /></button>
                        </CSSTransition>
                        <CSSTransition in={sosmed} timeout={800} classNames="sosmed" unmountOnExit>
                            <button type="button" class="bg-gradient-to-r hover:from-blue-500 hover:rounded-full hover:to-white-500 hover:animate-bounce"><img src={facebook} alt="facebook" className="md:w-[50px] cursor-pointer mx-2  xs:w-[30px] xxs:w-[40px] sm:w-[60px]" /></button>
                        </CSSTransition>
                        <CSSTransition in={sosmed} timeout={800} classNames="sosmed" unmountOnExit>
                            <button type="button" class="bg-gradient-to-r hover:from-slate-700 hover:rounded-full hover:to-slate-400 hover:animate-bounce"><img src={github} alt="github" className="md:w-[50px] cursor-pointer mx-2  xs:w-[30px] xxs:w-[40px]  sm:w-[60px]" /></button>
                        </CSSTransition>
                        <CSSTransition in={sosmed} timeout={800} classNames="sosmed" unmountOnExit>
                            <button type="button" class="bg-gradient-to-r hover:from-pink-500 hover:rounded-full hover:to-blue-900 hover:animate-bounce"><img src={dribbble} alt="dribbble" className="md:w-[50px] cursor-pointer mx-2  xs:w-[30px] xxs:w-[40px]  sm:w-[60px]" /></button>
                        </CSSTransition>
                        <CSSTransition in={sosmed} timeout={800} classNames="sosmed" unmountOnExit>
                            <button type="button" class="bg-gradient-to-r hover:from-blue-700 hover:rounded-full hover:to-blue-900 hover:animate-bounce"><img src={linkedin} alt="instagram" className="md:w-[50px] cursor-pointer mx-2  xs:w-[30px] xxs:w-[40px] sm:w-[60px]" /></button>
                        </CSSTransition>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;