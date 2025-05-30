import { Notification } from "../components/notification";
import Logo from '../assets/icon.svg'
import { Link } from "react-router-dom";



export function Redirect() {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <Notification
                imageSrc={Logo}
                imageWidth={48}
                imageHeight={48}
                title={"Redirecionando..."}
                message={
                    <>
                        O link será aberto automaticamente em alguns instantes.<br />
                        Não foi redirecionado? <span className='text-blue-base'><Link to="/">Acesse aqui</Link></span>
                    </>
                }
            />
        </div>
    )
}