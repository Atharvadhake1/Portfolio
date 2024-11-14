export const DesignCard = ({ title, description, imgUrl }) => {
  return (
    <div className="design-card">
      <img src={imgUrl} alt={title} />
      <div className="design-details">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};
