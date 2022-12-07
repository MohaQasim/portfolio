import React, { useEffect, useState } from 'react'
import { IRepo } from './githubData'



type ProjectProps = {

}

const githubEndpoint = "https://api.github.com/users/MohaQasim/repos"

const Project: React.FC<ProjectProps> = () => {
    
    const [githubData, setGithubData] = useState<IRepo[]>([])

    useEffect(() => {
      fetch(githubEndpoint)
        .then(x => x.json())
        .then(x => setGithubData(x))
    },[])

    return (
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          {
            githubData && githubData.map(x => (
              <div key={x.id} style={{
                display: 'flex',
                height: 120,
                width: 200,
                background: 'grey',
                padding: '10px',
                margin: '10px'
                
              }}>
                <p>{x.name}</p>
                <p>{x.description}</p>
                {/* <a href={x.html_url}></a> */}
              </div>
            ))
          }
        </div>
      )
}

export default Project
