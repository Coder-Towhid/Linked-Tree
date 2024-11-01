import { faImage, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function RadioTogglers({ options, onChange }) {
    return (


        <div className="radio-togglers shadow ">
            {options.map(option => (
                <label className="">
                    <input type="radio" name="bg-type" value={option.color}></input>
                    <div >
                        <FontAwesomeIcon icon={option.icon} />
                        <span>{option.label}</span>

                    </div>
                </label>
            ))}


        </div>
    )
}