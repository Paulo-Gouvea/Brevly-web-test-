import { ExportCsvButton } from "./export-csv-button";
import { NoLinksContainer } from "./no-links-container";
import { Link } from "./link";
import { useQuery } from "@tanstack/react-query";
import { getAllLinks } from "../api/get-all-links";

export function LinkBox(){
    const { data: links } = useQuery({
        queryKey: ['links'],
        queryFn: getAllLinks
    })

    console.log('data ===> ', links)

    return (
        <div className="w-[55%] min-h-[234px] max-h-[552px] overflow-y-auto rounded-md bg-white max-md:w-[100%] max-md:min-h-[214px] max-md:max-h-[348px] max-md:p-[24px] p-[32px]">
            <header className="w-[100%] flex items-center justify-between">
                <h1 className="text-gray-600 text-Text-lg font-Text-lg">Meus links</h1>

                <ExportCsvButton />
            </header>

            <div className="w-[100%] h-[1px] bg-gray-200 my-[16px]" />

            {/* <NoLinksContainer /> */}

            {
                links?.links.length === 0 ? <NoLinksContainer /> : links?.links.map((element) => {
                    return (
                        <Link 
                            key={element.id}
                            shortURL={element.shortURL}
                            originalURL={element.originalURL}
                            accessCount={element.accessCount}
                        />
                    )
                })
            }
        </div>
    )
}