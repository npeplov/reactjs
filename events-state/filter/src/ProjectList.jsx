import React from "react";
import PropTypes from "prop-types";

function ProjectList(props) {
  const { projects } = props;
  return (
    <div>
      {projects.map((item, ind) => (
        <img key={ind} src={item.img} alt="" />
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.array,
};

export default ProjectList;
