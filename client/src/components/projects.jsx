import Spinner from './spinner'
import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../queries/project-queries'
import ProjectCard from './project-card';

export default function Projects() {
    const { loading, data } = useQuery(GET_PROJECTS);

    if(loading) return <Spinner/>

    return(
        <>
            {data.projects.length > 0 ? (
                <div className='row mt-4'>
                    {data.projects.map((project)=>(
                        <ProjectCard key={project.id} project={project}/>
                    ))}
                </div>
            ) : (
                <div>
                    No projects
                </div>
            )}
        </>
    )
}