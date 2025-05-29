import { Button } from "./button";
import { Input } from "./input";

export function InputBox(){
    return (
        <div className="w-[40%] h-[380px] rounded-md bg-white max-md:w-[100%] max-md:h-[316px] max-md:mb-[12px] max-md:p-[24px] p-[32px]">
            <h1 className="text-gray-600 text-Text-lg font-Text-lg">Novo link</h1>

            <div className="max-md:w-[100%] max-md:h-[156px] max-md:my-[20px] my-[32px] flex flex-col justify-between">
                <div>
                    <Input
                        title="LINK ORIGINAL"
                        placeholder="www.exemplo.com.br"
                    />
                </div>

                <div className="mt-[8px]">
                    <Input
                        title="LINK ENCURTADO"
                        placeholder="brev.ly/"
                    />
                </div>
            </div>

            <Button
                title="Salvar link"
            />
        </div>
    )
}