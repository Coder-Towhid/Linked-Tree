

import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation";
import { faArrowRight, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import handleFormSubmit from "@/actions/grabUsername";

export default async function AccountPage({ searchParams }) {
    const session = await getServerSession(authOptions)
    const desiredUsername = searchParams.desiredUsername;




    if (!session) {
        redirect('/')
    }
    return (
        <div>


            <form action={handleFormSubmit}>

                <h1 className="text-4xl font-bold text-center mb-6">Grab your username</h1>
                <p className='text-center mb-6 text-gray-500'>
                    Choose your username
                </p>
                <div className="max-w-xs mx-auto">
                    <input name="username" type="text" placeholder="username" className="block p-2 mx-auto border w-full mb-2 text-center" defaultValue={desiredUsername} />
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 block mx-auto w-full flex gap-2 items-center justify-center">
                        <span> Claim your username</span>
                        <FontAwesomeIcon icon={faArrowRight} className='h-5' />
                    </button>
                </div>

            </form>
        </div >
    )
}