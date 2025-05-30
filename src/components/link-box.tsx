import { ExportCsvButton } from "./export-csv-button";
import { NoLinksContainer } from "./no-links-container";
import { CustomLink } from "./custom-link";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getAllLinks, type GetAllLinksResponse } from "../api/get-all-links";
import { deleteLink } from "../api/delete-link";
import { queryClient } from "../libs/react-query";
import type { AxiosError } from "axios";

export function LinkBox(){
    const { data: links } = useQuery({
        queryKey: ['links'],
        queryFn: getAllLinks
    })

    const { mutateAsync: deleteLinkFn } = useMutation({
        mutationFn: deleteLink,
        onSuccess(_, {
            shortURL
        }) {
            const cached = queryClient.getQueryData(['links']) as GetAllLinksResponse

            if (cached){ 
                let updatedLinkList = cached.links.filter((element) => element.shortURL !== shortURL)

                queryClient.setQueryData(['links'], {
                    ...cached,
                    links: [...updatedLinkList]
                })
            }
        }
    })

    async function handleDeleteLink(url: string){
        try {
            await deleteLinkFn({
            shortURL: url
        })
        } catch (err) {
            const error = err as AxiosError

            if(error.status === 409){
                console.log('link não encontrado')
            }
        }
    }

    return (
        <div className="w-[55%] min-h-[234px] max-h-[552px] overflow-y-auto rounded-md bg-white max-md:w-[100%] max-md:min-h-[214px] max-md:max-h-[348px] max-md:p-[24px] p-[32px]">
            <header className="w-[100%] flex items-center justify-between">
                <h1 className="text-gray-600 text-Text-lg font-Text-lg">Meus links</h1>

                <ExportCsvButton />
            </header>

            <div className="w-[100%] h-[1px] bg-gray-200 my-[16px]" />

            {
                links?.links.length === 0 ? <NoLinksContainer /> : links?.links.map((element) => {
                    return (
                        <CustomLink 
                            key={element.id}
                            shortURL={element.shortURL}
                            originalURL={element.originalURL}
                            accessCount={element.accessCount}
                            handleDelete={() => handleDeleteLink(element.shortURL)}
                        />
                    )
                })
            }
        </div>
    )
}