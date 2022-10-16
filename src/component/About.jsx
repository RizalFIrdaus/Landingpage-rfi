
import { about, indonesia, react, laravel, indofood, petqu } from "../assets"
import styles from "../style"
import Banner from "./Banner"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
const About = () => {

    useEffect(() => {
        AOS.init();
    })

    return (
        <>
            <Banner />
            <div className="md:px-24 sm:ml-10">
                <div data-aos="zoom-in" className="flex items-center justify-start xxs:flex-col sm:flex-row ">
                    <div className="avatar sm:top-[-100px] xxs:top-[-50px]">
                        <div className="sm:w-[200px] rounded-full ring ring-[#33bbcf] ring-offset-[#7de7eb] ring-offset-8 xxs:ring-offset-2  xxs:w-[100px]">
                            <img
                                src={about}
                            />

                        </div>
                    </div>
                    <div className="flex flex-col ml-8 justify-center items-center sm:mb-10 xxs:mb-8">
                        <h1 className={`${styles.heading2
                            } sm:!text-[32px] xxs:text-[20px] text-gradient`}>Muhammad Rizal Firdaus</h1>
                        <p className={`${styles.paragraph
                            } !text-[16px] sm:!leading-4 max-w-[600px] xxs:leading-8`} >Hello, i'm a Frontend Developer based in Jakarta, Indonesia. </p>
                    </div>
                </div>

                <div data-aos="zoom-in" className="flex lg:flex-row sm:flex-col font-poppins xxs:flex-col">
                    <h1 className="font-semibold sm:text-[32px] xxs:text-[24px] lg:mr-10 sm:text-center sm:mb-8 xxs:text-center">About</h1>
                    <div className="flex flex-col sm:px-20">
                        <p className="font-poppins font-light leading-8 max-w-[1200px] sm:text-justify  xxs: text-justify lg:text-left sm:p-0 xxs:px-4">Hello, i'am a frontend developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate repellendus in excepturi culpa voluptas id ipsa ducimus quod, ratione sequi cumque nesciunt tempora reprehenderit! Totam animi beatae voluptate labore nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt provident dicta in ducimus officia magnam accusamus. Architecto saepe expedita ipsam.</p>
                        <div className="py-10 ">
                            <div className="stats bg-[#33bbcf] shadow text-white sm:flex xxs:hidden">
                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <img
                                            src={indonesia}
                                            alt="indonesia"
                                            className="w-[60px]"
                                        />
                                    </div>
                                    <div className="stat-title">Location</div>
                                    <div className="stat-value !text-[30px]">Indonesia</div>
                                    <div className="stat-desc">Cipinang, Jakarta Timur</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <img src={react} alt="react" className="w-[60px]" />

                                    </div>
                                    <div className="stat-title">Frontend</div>
                                    <div className="stat-value !text-[30px]">React JS</div>
                                    <div className="stat-desc">a month experience</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <img src={laravel} alt="" className="w-[60px]" />
                                    </div>
                                    <div className="stat-title">Backend</div>
                                    <div className="stat-value !text-[30px]">Laravel</div>
                                    <div className="stat-desc">2 years experience</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex sm:flex-col lg:flex-row font-poppins sm:my-20 xxs:my-0 flex-wrap xxs:flex-col xxs:text-center sm:text-left">
                    <h1 className="font-semibold text-[32px] sm:text-center sm:mb-10 lg:mr-10 xxs:mb-5 ">Experience</h1>
                    <div className="lg:pr-10 sm:pl-32 sm:pr-32 sm:mb-10 lg:flex lg:mx-0 lg:px-0 lg:flex-wrap xxs:px-4">
                        <div data-aos="fade-up" className="card card-side bg-base-200 shadow-xl text-white mb-10 lg:w-[400px]">
                            <div className="card-body">
                                <h2 className="card-title mb-4">Web Developer</h2>
                                <div className="flex flex-row">
                                    <label>HTML</label>
                                    <img src={react} alt="react" className="w-[20px] mx-2" />
                                </div>
                                <progress className="progress-success w-56 xxs:w-[100%]" value="95" max="100"></progress>
                                <div className="flex flex-row">
                                    <label>CSS</label>
                                    <img src={react} alt="react" className="w-[20px] mx-2 " />
                                </div>
                                <progress className="progress-success  w-56 xxs:w-[100%]" value="90" max="100"></progress>
                                <div className="flex flex-row">
                                    <label>JS</label>
                                    <img src={react} alt="react" className="w-[20px] mx-2" />
                                </div>
                                <progress className="progress-success  w-56 xxs:w-[100%]" value="70" max="100"></progress>
                                <div className="flex flex-row">
                                    <label>PHP</label>
                                    <img src={react} alt="react" className="w-[20px] mx-2" />
                                </div>
                                <progress className="progress-success  w-56 xxs:w-[100%]" value="80" max="100"></progress>
                                <div className="flex flex-row">
                                    <label>REACT</label>
                                    <img src={react} alt="react" className="w-[20px] mx-2" />
                                </div>
                                <progress className="progress-success  w-56 xxs:w-[100%]" value="65" max="100"></progress>
                                <div className="flex flex-row">
                                    <label>LARAVEL</label>
                                    <img src={laravel} alt="react" className="w-[20px] mx-2" />
                                </div>
                                <progress className="progress-success  w-56 xxs:w-[100%]" value="85" max="100"></progress>
                            </div>
                        </div>

                        <div data-aos="fade-up" className="card card-side bg-base-200 shadow-xl text-white mb-10 lg:mx-10 lg:w-[400px]">
                            <div className="card-body">
                                <h2 className="card-title mb-4">Software Skill</h2>
                                <div className="flex flex-row">
                                    <label>Visual Studio Code</label>
                                    <img src={react} alt="react" className="w-[20px] mx-2" />
                                </div>
                                <progress className="progress-info  w-56 xxs:w-[100%]" value="95" max="100"></progress>
                                <div className="flex flex-row">
                                    <label>Adobe XD</label>
                                    <img src={react} alt="react" className="w-[20px] mx-2 " />
                                </div>
                                <progress className="progress-info  w-56 xxs:w-[100%]" value="90" max="100"></progress>
                                <div className="flex flex-row">
                                    <label>Microsoft Office</label>
                                    <img src={react} alt="react" className="w-[20px] mx-2" />
                                </div>
                                <progress className="progress-info  w-56 xxs:w-[100%]" value="70" max="100"></progress>
                                <div className="flex flex-row">
                                    <label>Figma</label>
                                    <img src={react} alt="react" className="w-[20px] mx-2" />
                                </div>
                                <progress className="progress-info  w-56 xxs:w-[100%]" value="80" max="100"></progress>
                                <div className="flex flex-row">
                                    <label>Adobe Illustrator</label>
                                    <img src={react} alt="react" className="w-[20px] mx-2" />
                                </div>
                                <progress className="progress-info  w-56 xxs:w-[100%]" value="65" max="100"></progress>
                                <div className="flex flex-row">
                                    <label>Adobe Premiere</label>
                                    <img src={laravel} alt="react" className="w-[20px] mx-2" />
                                </div>
                                <progress className="progress-info  w-56 xxs:w-[100%]" value="85" max="100"></progress>


                            </div>
                        </div>
                        <div data-aos="fade-up" className="card card-side bg-base-200 shadow-xl text-white mb-10 lg:w-[400px]">
                            <div className="card-body">
                                <h2 className="card-title mb-4">Design</h2>
                                <div className="flex flex-row">
                                    <label>UI/UX Web</label>
                                    <img src={react} alt="react" className="w-[20px] mx-2" />
                                </div>
                                <progress className="progress-warning  w-56 xxs:w-[100%]" value="95" max="100"></progress>
                                <div className="flex flex-row">
                                    <label>UI/UX Mobile</label>
                                    <img src={react} alt="react" className="w-[20px] mx-2 " />
                                </div>
                                <progress className="progress-warning  w-56 xxs:w-[100%]" value="90" max="100"></progress>
                                <div className="flex flex-row">
                                    <label>Responsive Design</label>
                                    <img src={react} alt="react" className="w-[20px] mx-2" />
                                </div>
                                <progress className="progress-warning  w-56 xxs:w-[100%]" value="70" max="100"></progress>
                                <div className="flex flex-row">
                                    <label>Banner Ads</label>
                                    <img src={react} alt="react" className="w-[20px] mx-2" />
                                </div>
                                <progress className="progress-warning  w-56 xxs:w-[100%]" value="80" max="100"></progress>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row font-poppins my-20 xxs:flex-col">
                    <h1 className="font-semibold text-[32px] lg:text-left sm:mb-10 xxs:mb-5 xxs:text-center">Project</h1>
                    <div className="flex flex-col ">
                        <div data-aos="fade-up" className="card md:card-side bg-base-200 shadow-2xl lg:ml-24 sm:mr-10 lg:mr-0 sm:mb-20 xxs:mx-4 xxs:mb-10">
                            <figure><img src={indofood} className="sm:w-[400px] rounded-xl pl-2" alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Redesin Website Indofood</h2>
                                <p className="max-w-[800px] sm:leading-8 xxs:leading-7 py-4 sm:text-left xxs:text-justify ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta impedit ipsum, nobis explicabo cupiditate, doloremque minus similique eaque quibusdam eius reiciendis debitis consectetur est distinctio velit et vel, magni tenetur commodi consequatur unde..</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Detail</button>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="card md:card-side bg-base-200 shadow-2xl lg:ml-24 sm:mr-10 lg:mr-0 sm:mb-20 xxs:mx-4 xxs:mb-10">
                            <figure><img src={petqu} className="sm:w-[400px] rounded-xl pl-2" alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">PetquShop</h2>
                                <p className="max-w-[800px] sm:leading-8 xxs:leading-7 py-4 sm:text-left xxs:text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta impedit ipsum, nobis explicabo cupiditate, doloremque minus similique eaque quibusdam eius reiciendis debitis consectetur est distinctio velit et vel, magni tenetur commodi consequatur unde..</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Detail</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="btn-group">
                        <button className="btn">«</button>
                        <button className="btn">Page 22</button>
                        <button className="btn">»</button>
                    </div>
                </div>
            </div>

            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-32">
                <div className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>



        </>
    )

}

export default About