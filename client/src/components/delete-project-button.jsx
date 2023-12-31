import React from 'react';
import { useMutation } from '@apollo/client';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { GET_PROJECTS } from '../queries/project-queries';
import { DELETE_PROJECT } from '../mutations/project-mutations';

export default function DeleteProjectButton({ id }) {

    const navigate = useNavigate();

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: { id },
        onCompleted: () => navigate('/'),
        refetchQueries: [{ query: GET_PROJECTS }]
    })

    return(
        <div className='d-flex mt-5 ms-auto'>
            <button className="btn btn-danger m-2" onClick={deleteProject}>
                <FaTrash className='icon'/> Delete Project
            </button>
        </div>
    )
}