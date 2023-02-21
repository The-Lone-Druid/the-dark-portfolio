// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from "@/assets/data/db";
import type { NextApiRequest, NextApiResponse } from "next";

export type Hero = {
  verified_skills: number;
  professional_projects: number;
  personal_projects: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Hero>
) {
  const payload = {
    verified_skills: 12,
    professional_projects: data.projects.length,
    personal_projects: 24
  };

  res.status(200).json(payload);
}
