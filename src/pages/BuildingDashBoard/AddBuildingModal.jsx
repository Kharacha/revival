import React, {useState} from 'react';
import {Button} from 'flowbite-react';
import {BsBuildingFillAdd} from 'react-icons/bs';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import {ModalDialog} from "@mui/joy";
import BuildingFilter from "./BuildingFilter.jsx";
import BuildingTabs from "./BuildingTabs.jsx";

function AddBuildingModal() {

    const [openModal, setOpenModal] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [clientName, setClientName] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setProjectName('');
        setClientName('');
    }

    function onCreateProject() {

        if (projectName.trim() === '' || clientName.trim() === '') {
            alert('Please fill out both project name and client name.');
            return;
        }

        const newProject = {
            projectName,
            clientName,
        };

        onCloseModal();
    }

    return (
        <>
            <Button className={"bg-logoBlue"} onClick={() => setOpenModal(true)}>
                <BsBuildingFillAdd size={20} className={'mr-2'}/>
                Add Building
            </Button>

            <Modal open={openModal} onClose={onCloseModal} popup>
                <ModalDialog layout={'fullscreen'}>

                    <ModalClose variant="plain"/>

                    <div className={'flex gap-3 mt-0'}>
                        <input className={"border rounded-md pl-4 w-1/2 h-12"} placeholder={'Search for a property'}/>
                        <BuildingFilter />
                        <button className={"bg-logoHover text-white rounded p-3 text-md"}>Search</button>
                    </div>

                    <BuildingTabs />
                </ModalDialog>
            </Modal>
        </>
    );
}

export default AddBuildingModal;