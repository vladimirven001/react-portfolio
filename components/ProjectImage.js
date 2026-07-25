export default function ProjectImage({
  className = "",
  placeholderClassName,
  project,
}) {
  if (!project.image) {
    return (
      <div className={placeholderClassName}>
        <span>{project.title}</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={project.image}
      alt={project.imageAlt || `${project.title} screenshot`}
    />
  );
}
