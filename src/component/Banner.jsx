import { about_banner } from "../assets"
const Banner = () => {
    return (
        <>
            <div className=" w-full h-[40vh] overflow-hidden">
                <img src={about_banner} />
            </div>
        </>
    );
}

export default Banner;