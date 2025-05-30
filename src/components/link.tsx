import { Link as LinkIcon } from "react-router-dom";
import { IconButton } from "./icon-button";
import { CopyIcon, TrashIcon } from "@phosphor-icons/react";

export interface LinkProps {
    shortURL: string
    originalURL: string
    accessCount: number
    handleDelete: (url: string) => void
}

export function Link({
    shortURL,
    originalURL,
    accessCount,
    handleDelete
}: LinkProps){
    return(
        <>
            <div>
                <div className="flex items-center justify-between">
                    <div>
                        <LinkIcon to={originalURL} className="text-blue-base text-Text-md font-Text-md">{`brev.ly/${shortURL}`}</LinkIcon>
                        <p className="text-gray-500 text-Text-sm font-Text-sm">{originalURL?.slice(8)}</p>
                    </div>

                    <div className="text-gray-500 text-Text-sm font-Text-sm flex">
                        <p className="flex items-center mr-[15px]">{`${accessCount} acessos`}</p>

                        <div className="w-[67px] flex justify-between">
                            <IconButton
                                icon={CopyIcon}
                            />

                            <IconButton
                                icon={TrashIcon}
                                onClick={() => handleDelete(shortURL)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[100%] h-[1px] bg-gray-200 my-[16px]" />
        </>
    )
}