'use client'
import { faImage, faPalette, faSave } from "@fortawesome/free-solid-svg-icons";
import RadioTogglers from "../FormItems/RadioTogglers";
import Image from "next/image";
import SubmitButton from "../buttons/SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import savePageSettings from "@/actions/pageActions";

export default function PageSettingsForm({ page, user }) {

    async function saveBaseSettings(formData) {

        const result = await savePageSettings(formData)
        console.log("Database update" + result);

    }

    return (
        <div className="-m-4">
            <form action={saveBaseSettings}>
                <div className="bg-gray-300 py-16 flex justify-center items-center">

                    <RadioTogglers

                        options={
                            [
                                { value: 'color', icon: faPalette, label: "Color" },
                                { value: 'image', icon: faImage, label: "Image" },
                            ]
                        } onChange={() => { }} />


                </div>
                <div className="flex justify-center relative -top-8 -mb-12 ">
                    <Image className="rounded-full border-4 border-white shadow-lg shadow-black/50" src={user?.image} alt={'avatar'} width={128} height={128} />
                </div>
                <div className="p-4">
                    <label className="input-label" htmlFor="nameIn">Display name</label>
                    <input name="displayName" defaultValue={page.displayName} type="text" id="nameIn" placeholder="Smith" />
                    <label className="input-label" htmlFor="locationIn">Location</label>
                    <input name="location" defaultValue={page.location} type="text" id="locationIn" placeholder="Sweden" />
                    <label className="input-label" htmlFor="bioIn">Bio</label>
                    <textarea name="bio" defaultValue={page.bio} id="bioIn" placeholder="Bio goes here ......" />
                    <div className="max-w-[200px] mx-auto">
                        <SubmitButton >
                            <FontAwesomeIcon icon={faSave} />
                            <span>Save</span>
                        </SubmitButton>
                    </div>

                </div>
            </form>
        </div>
    );
}