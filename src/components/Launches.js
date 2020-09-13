import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_LAUNCHES = gql`
  {
    launchesPast {
      mission_name
      details
      links {
        flickr_images
      }
    }
  }
`;


const Launches = () => {
         const { loading, data } = useQuery(GET_LAUNCHES);
         
         

return (<div>{loading ? <small>loading...</small> : data.launchesPast.map((launch) => (<p>{launch.mission_name}</p>)) }</div>)
}
export default Launches;