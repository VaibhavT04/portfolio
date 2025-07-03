import React from 'react'
import { Github, Linkedin, FileTextIcon} from "lucide-react";

const Footer = () => {
    return (
        <div className="w-full h-20 bg-gray-600/20 flex items-center justify-center">
            <div className="flex flex-row justify-center items-center opacity-100">
                <div>
                    <h1 className="text-lg font-bold">My Socials : </h1>
                </div>
                <div className="space-x-4 flex flex-row ml-5">
                    <a href="https://github.com/VaibhavT04" aria-label="GitHub Profile">
                        <div className="border-2 border-gray-600 hover:border-gray-300 hover:scale-115 hover:bg-gray-600/30 rounded-full p-2">
                            <Github className="w-5 h-5"/>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/vaibhav-tatkare-code/" aria-label="LinkedIn Profile">
                        <div className="border-2 border-gray-600 hover:border-gray-300 hover:scale-115 hover:bg-gray-600/30 rounded-full p-2">
                            <Linkedin className="w-5 h-5"/>
                        </div>
                    </a>
                    <a href="https://medium.com/@vaibhavtatkare2004" aria-label="Medium Blogs">
                        <div className="border-2 border-gray-600 hover:border-gray-300 hover:scale-115 hover:bg-gray-600/30 rounded-full p-2">
                            <FileTextIcon className="w-5 h-5"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Footer
