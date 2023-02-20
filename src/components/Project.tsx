import { ProjectImage } from "@/assets/default.exports";
import { Projects } from "@/pages/api/projects";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Button, Chip, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {
  data: Projects;
};

const Project = ({ data }: Props) => {
  const [expand, setExpand] = React.useState(false);

  const handleExpandMore = () => {
    setExpand(!expand);
  };

  return (
    <div className="rounded-[15px] sm:p-10 p-5 bg-gradient-to-br from-pf-dark-max to to-gray-900 shadow-lg flex lg:flex-row flex-col-reverse gap-4">
      <div>
        <Typography variant="h3" fontWeight={"bold"} gutterBottom>
          {data?.project_name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {data?.project_date}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {data?.project_description}
        </Typography>
        <Typography variant="body1" gutterBottom>
          During the course of this project.
        </Typography>
        <ul className="list-disc pl-5 mb-4">
          {data?.project_tasks.map((task) => (
            <li key={task.id}>{task.task}</li>
          ))}
        </ul>
        <div className="pb-4">
          <Button
            color="inherit"
            endIcon={expand ? <ExpandLess /> : <ExpandMore />}
            onClick={handleExpandMore}
            variant={"outlined"}
          >
            View more
          </Button>
        </div>
        {expand && (
          <>
            <Typography variant="body1">Skills utilized</Typography>
            <div className="flex mt-2 mb-4 gap-2 flex-wrap">
              {data?.skills_utilized.map((skill: any) => (
                <span
                  className="px-3 py-2 rounded-lg bg-white bg-opacity-5 text-sm"
                  key={skill.id}
                >
                  {skill.name}
                </span>
              ))}
            </div>
            <Typography variant="body1">Organization</Typography>
            <div className="flex mt-2 gap-2 flex-wrap">
              {data?.organization.map((organization: any) => (
                <span
                  className="px-3 py-2 rounded-lg bg-white bg-opacity-5 text-sm cursor-pointer"
                  key={organization.id}
                  onClick={() => {
                    window.open(organization?.website);
                  }}
                >
                  {organization.name}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      <div>
        <Image src={ProjectImage} alt={data?.project_name} width={360} />
      </div>
    </div>
  );
};

export default Project;
