import { DownloadSimpleIcon } from "@phosphor-icons/react"

export function ExportCsvButton(){
    return (
        <button className="w-[92px] h-[32px] p-[8px] bg-gray-200 rounded-md flex items-center justify-between disabled:opacity-50 hover:border-[1px] hover:border-solid hover:border-blue-base">
            <DownloadSimpleIcon />

            <p className="text-gray-500 text-Text-sm font-Text-sm">Baixar CSV</p>
        </button>
    )
}