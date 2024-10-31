import { faImage, faPalette, faPallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function RadioTogglers({ options, selected, onChange }) {
    return (
        <div className="radio-togglers shadow ">
            <label className="">
                <input type="radio" name="bg-type" value="color"></input>
                <div >
                    <FontAwesomeIcon icon={faPalette} />
                    <span>Color</span>

                </div>
            </label>
            <label>
                <input type="radio" name="bg-type" value='image'></input>
                <div>
                    <FontAwesomeIcon icon={faImage} />
                    <span>Image</span>


                </div>
            </label>
        </div>
    )
}