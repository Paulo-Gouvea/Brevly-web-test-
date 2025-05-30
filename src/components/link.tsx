import { Link as LinkIcon } from "react-router-dom";
import { IconButton } from "./icon-button";
import { CopyIcon, TrashIcon } from "@phosphor-icons/react";

export function Link(){
    return(
        <>
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <LinkIcon to='#' className="text-blue-base text-Text-md font-Text-md">brev.ly/Linkedin-profile</LinkIcon>
                        <p className="text-gray-500 text-Text-sm font-Text-sm">linkedin.com/in/myprofile</p>
                    </div>

                    <div className="text-gray-500 text-Text-sm font-Text-sm flex">
                        <p className="flex items-center mr-[15px]">30 acessos</p>

                        <div className="w-[67px] flex justify-between">
                            <IconButton
                                icon={CopyIcon}
                            />

                            <IconButton
                                icon={TrashIcon}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[100%] h-[1px] bg-gray-200 my-[16px]" />
        </>
    )
}