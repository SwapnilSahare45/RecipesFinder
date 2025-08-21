import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-white border-t py-2 font-mono flex flex-wrap-reverse items-center justify-center gap-2 px-6 md:justify-between">
            <p className="text-center">Design & Developed by ❤️ Swapnil Sahare</p>

            <div className="flex items-center justify-center gap-4">
                <a href="">
                    <FaEnvelope fill="#E12AFB" className="text-3xl"/>
                </a>
                <a href="">
                    <FaLinkedin fill="#E12AFB" className="text-3xl"/>
                </a>
                <a href="">
                    <FaSquareGithub fill="#E12AFB" className="text-3xl"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer