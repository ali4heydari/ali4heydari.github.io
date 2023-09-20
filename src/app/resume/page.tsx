"use client";
import Experiences from "src/features/Experiences";
import React from "react";
import Educations from "src/features/Education";
import { NextPage } from "next";
import { allEducation, allExperiences } from "../../../.contentlayer/generated";

const ResumePage: NextPage = () => {
  return (
    <>
      <Experiences allExperiences={allExperiences} />
      <hr />
      <Educations allEducation={allEducation} />
    </>
  );
};

export default ResumePage;
