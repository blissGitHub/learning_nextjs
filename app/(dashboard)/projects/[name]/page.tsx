import React from "react";

type Props = PageProps<"/projects/[name]">;

const ProjectDetails = ({ params }: Props) => {
  const { name } = React.use(params);
  return <div>Project Name {name} dfd</div>;
};

export default ProjectDetails;
