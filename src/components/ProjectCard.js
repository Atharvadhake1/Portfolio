export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="project-card">
      <img src={imgUrl} alt={title} />
      <div className="project-details">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};
