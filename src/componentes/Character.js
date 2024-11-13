import { Link } from "react-router-dom";

const Character = ({id, name, status, species, gender, origin,location, image}) => {
  let badgeColor= '';
  if(status === 'Alive') {
    badgeColor = 'bg-green';
  } else if (status === 'Dead'){
    badgeColor = 'bg-red';
  } else{
    badgeColor = 'bg-gray';
  }
    return ( 
      <div className="col">
        <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt={name}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"><Link to={`characters/${id}`}>{name}</Link></h5>
              <h6><span className={`status-dot ${badgeColor}`}></span>{status}</h6>
              <p>{species}</p>
              <p>{gender}</p>
              <p>{origin} - {location}</p>

              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
      </div>    
    );
}

export default Character;