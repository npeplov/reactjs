import React from "react";
import PropTypes from "prop-types";

function ProjectList({projects, category}) {
  return (
    <div>
      {projects.map((item, ind) => {
        return  (
          <img key={ind} src={item.img} alt="" />
        );
      })}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.array,
};

export default ProjectList;
