import styles from "../style";
import { profile, stroke, facebook, instagram, github, dribbble, linkedin } from "../assets";
const Hero = () => {
    return (
        <>
            <div className="hero min-h-screen bg-[#151c2e]  ">
                <div className="hero-content flex md:flex-row xxxs:mt-5 xs:flex-col md:mx-0 xs:mx-10 xxs:flex-col xxs:mb-20  ">
                    <div className="flex flex-col ">
                        <div className="flex flex-row">
                            <img
                                src={stroke}
                                alt="stroke"
                                className="w-[30px] "
                            />
                            <p className={`${styles.paragraph} font-bold mx-4 text-[26px] xxxs:text-base`}> Hello, </p>
                        </div>
                        <p className={`${styles.heading2} my-4 xxxs:text-xl xxs:text-xl`}> I'am Muh. <span className="text-gradient">Rizal</span> Firdaus</p>
                        <p className={`${styles.paragraph} max-w-[700px] xxxs:text-sm xxs:text-base lg:max-w-[600px] !leading-8`}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ut molestiae tenetur praesentium voluptatibus sunt obcaecati commodi corrupti voluptate aspernatur!</p>
                    </div>
                    <div className="flex flex-col ">
                        <img
                            src={profile}
                            alt="profile"
                            className="rounded-full lg:w-[500px] object-contain z-20 xs:w-[300px] xxs:hidden sm:flex"
                        />
                        <span className="w-[300px] h-[300px] rounded-full absolute lg:right-[400px] md:right-[100px]  xs:right-[100px] xxs:right-[50px] top-[400px] xxs:top-[20px]  pink__gradient z-0 "></span>
                        <span className="w-[300px] h-[300px] rounded-full absolute lg:right-[600px] md:right-[300px] xs:right-[100px] top-[500px] xxs:top-[20px] blue__gradient z-10"></span>
                        <span className="w-[300px] h-[300px] rounded-full absolute lg:right-[900px] xs:right-[100px] md:right-[500px] top-[200px] xxs:top-[20px]white__gradient z-10"></span>
                    </div>
                </div>
                <div className="hero-content">
                    <div className="flex flex-row absolute bottom-[80px]">
                        <button type="button" class="bg-gradient-to-r hover:from-pink-500 hover:rounded-full hover:to-yellow-500 hover:animate-bounce"><img src={instagram} alt="instagram" className=" md:w-[50px] cursor-pointer mx-2  xs:w-[30px] xxs:w-[40px] " /></button>
                        <button type="button" class="bg-gradient-to-r hover:from-blue-500 hover:rounded-full hover:to-white-500 hover:animate-bounce"><img src={facebook} alt="facebook" className="md:w-[50px] cursor-pointer mx-2  xs:w-[30px] xxs:w-[40px]" /></button>
                        <button type="button" class="bg-gradient-to-r hover:from-slate-700 hover:rounded-full hover:to-slate-400 hover:animate-bounce"><img src={github} alt="github" className="md:w-[50px] cursor-pointer mx-2  xs:w-[30px] xxs:w-[40px] " /></button>
                        <button type="button" class="bg-gradient-to-r hover:from-pink-500 hover:rounded-full hover:to-blue-900 hover:animate-bounce"><img src={dribbble} alt="dribbble" className="md:w-[50px] cursor-pointer mx-2  xs:w-[30px] xxs:w-[40px] " /></button>
                        <button type="button" class="bg-gradient-to-r hover:from-blue-700 hover:rounded-full hover:to-blue-900 hover:animate-bounce"><img src={linkedin} alt="instagram" className="md:w-[50px] cursor-pointer mx-2  xs:w-[30px] xxs:w-[40px]" /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;