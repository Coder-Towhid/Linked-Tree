'use client'

import { faArrowLeft, faChartLine, faFileLines } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import LogoutButton from "../buttons/LogoutButton"
import { usePathname } from "next/navigation"

export default function AppSidebar() {
    const path = usePathname()
    return (
        <nav className="inline-flex mx-auto flex-col text-center mt-12 gap-2 text-gray-500">



            <Link href={'/account'} className={`flex gap-4 p-2     ${path === '/account' ? ' text-blue-500 text-bold' : ''}`}>

                <FontAwesomeIcon
                    fixedWidth={true}
                    icon={faFileLines}
                    className={'w-6 h-6'} />
                <span >My Page</span>

            </Link>
            <Link href={'/analytics'} className={`flex gap-4 p-2  ${path === '/analytics' ? ' text-blue-500 text-bold' : ''}`}>
                <FontAwesomeIcon icon={faChartLine} className={'w-6 h-6'} />
                <span >Analytics</span>
            </Link>



            <LogoutButton iconClasses={'w-6 h-6'} iconLeft={true} classname={'flex gap-4 items-center text-gray-500 p-2'} />
            <Link href={'/'} className="flex items-center gap-2 text-xs text-gray-500 border-t pt-4">
                <FontAwesomeIcon icon={faArrowLeft} className={'w-3 h-3'} />
                <span>Back to website</span>
            </Link>
        </nav >
    )
}