import PinDetailsModal from "../../modals/PinDetailsModal";
import { useState } from "react";

const Pin = ({ key, URL,  description, authorFirstName, authorSecondName}) => {
    const [pinDetailsModalOpen, setPinDetailsModalOpen] = useState(false);
    return (
        <div className="break-inside-avoid overflow-hidden">
            {pinDetailsModalOpen && <PinDetailsModal id={key} URL={URL}  description={description} authorFirstName={authorFirstName} authorSecondName={authorSecondName} closeModal={() => { setPinDetailsModalOpen(false) }} />}
            <img className="rounded-2xl hover:opacity-70" src={URL} onClick={() => setPinDetailsModalOpen(true)}></img>

        </div>
    );
}

export default Pin;