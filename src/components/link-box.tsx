import { ExportCsvButton } from "./export-csv-button";
import { NoLinksContainer } from "./no-links-container";
import { Link } from "./link";

export function LinkBox(){
    return (
        <div className="w-[55%] min-h-[234px] max-h-[552px] overflow-y-auto rounded-md bg-white max-md:w-[100%] max-md:min-h-[214px] max-md:max-h-[348px] max-md:p-[24px] p-[32px]">
            <header className="w-[100%] flex items-center justify-between">
                <h1 className="text-gray-600 text-Text-lg font-Text-lg">Meus links</h1>

                <ExportCsvButton />
            </header>

            <div className="w-[100%] h-[1px] bg-gray-200 my-[16px]" />

            {/* <NoLinksContainer /> */}

            <Link />
            <Link />
            <Link />
            <Link />
            <Link />
            <Link />
            <Link />
            <Link />
        </div>
    )
}