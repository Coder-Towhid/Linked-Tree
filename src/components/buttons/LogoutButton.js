'use client'

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { signOut } from "next-auth/react"

export default function LogoutButton({
    classname = 'flex items-center gap-2 border p-2 px-4 shadow',
    iconLeft = false,
    iconClasses = ''
}) {
    return (
        <button
            className={classname}
            onClick={() => signOut()}
        >

            {iconLeft && (
                <FontAwesomeIcon icon={faRightFromBracket} className={iconClasses} />

            )}
            <span>Logout</span>

            {!iconLeft && (
                <FontAwesomeIcon icon={faRightFromBracket} />

            )}

        </button>
    )
}