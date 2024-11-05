const Character = ({name, status, species, gender, type, origin,location, image}) => {
    return ( 
      <div className="col">
        <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt={name}/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <span>{status} - {species}</span>
              <p>{type} - {gender}</p>
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