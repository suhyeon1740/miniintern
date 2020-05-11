import React from 'react'
import ProjectList from './ProjectList'
import ProjectDetail from './ProjectDetail'
import { Route } from 'react-router-dom'

const Projects = ({match}) => {
    return (
        <>
            <Route exact path={match.path} component={ProjectList} />
            <Route path={`${match.path}/:id`} component={ProjectDetail} />
        </>
    )
}

export default Projects
