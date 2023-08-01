import React from "react";
import AddClientModal from "../components/add-client-modal.jsx";
import AddProjectModal from "../components/add-project-modal.jsx";
import Projects from "../components/projects.jsx";
import Clients from "../components/clients.jsx";

export default function Home() {

    return(
        <>
            <div className="d-flex gap-3 mb-4">
                <AddClientModal/>
                <AddProjectModal/>
            </div>
                <Projects/>
                <hr/>
                <Clients/>
        </>
    )
}