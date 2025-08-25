import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-white border-t py-2 font-mono flex flex-wrap-reverse items-center justify-center gap-2 px-6 md:justify-between">
            <p className="text-center">Design & Developed by ❤️ Swapnil Sahare</p>

            <div className="flex items-center justify-center gap-4">
                <a href="mailto:swapnilsahare430@gmail.com">
                    <FaEnvelope fill="#E12AFB" className="text-3xl"/>
                </a>
                <a href="https://www.linkedin.com/in/swapnil-sahare-06a803318" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin fill="#E12AFB" className="text-3xl"/>
                </a>
                <a href="https://github.com/SwapnilSahare45" target="_blank" rel="noopener noreferrer">
                    <FaSquareGithub fill="#E12AFB" className="text-3xl"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer