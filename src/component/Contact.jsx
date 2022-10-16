
import styles from "../style"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
const Contact = () => {

    useEffect(() => {
        AOS.init();
    })

    return (
        <>
            <div className=" bg-cover overflow-hidden bg-contact min-h-[100vh] w-full">
                <div className="xxs:mt-[100px] md:mt-[150px] lg:mt-[200px]">
                    <div className="sm:px-40 flex md:flex-row justify-between  xxs:flex-col sm:p-0 xxs:p-4">
                        <h1 className="sm:text-[40px] lg:text-[62px] md:max-w-[600px]  drop-shadow-2xl text-dimWhite mt-[100px] xxs:hidden md:flex sm:mb-5">Have a project ?  we would like to help</h1>

                        <div data-aos="fade-up-right" className="card sm:mb-10 sm:w-[500px] md:w-[600px] lg:w-[800px] bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">I'm interest in...</h2>
                                <div className="flex sm:flex-row xxs:flex-col flex-wrap  py-10">

                                    <button className="btn btn-primary mb-5 mr-2">Fontend Web</button>
                                    <button className="btn btn-primary mb-5 mr-2">Backend Web</button>
                                    <button className="btn btn-primary mb-5 mr-2">Design banner</button>
                                    <button className="btn btn-primary mb-5 mr-2">Design UI/UX Website</button>
                                    <button className="btn btn-primary mb-5 mr-2">Full Stack Website</button>
                                    <button className="btn btn-primary mb-5 mr-2">Animation Ads</button>
                                </div>
                                <input type="text" placeholder="Your name...." className="input input-bordered  w-full max-w-[100%] mb-5" />
                                <input type="email" placeholder="Your email..." className="input input-bordered  w-full max-w-[100%] mb-5" />
                                <textarea className="textarea mb-5 w-full max-w-[100%] h-[200px] input-bordered  " placeholder="Tell me about your project"></textarea>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact