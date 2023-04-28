function ProfileCard(props) {
  return (
    <div className="card">
      {/* CARD IMAGE */}
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={props.image} alt="profile" className="image" width={200} />
        </figure>
      </div>

      {/* CARD CONTENT */}
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{props.name}</p>
          <p className="subtitle is-6">{props.username}</p>
        </div>
        <hr/>
        <div className="content">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
