"use client";

import React from "react";
import Card from "./Card";
import ProjectData from "./data.json";

const Project = () => {
    return (
        <>
            <div id="projects" className="text-center space-y-1">
                <h1 className="text-center text-5xl md:text-6xl sm:text-6xl font-semibold capitalize mb-20 md:mt-0 ">
                    Projects based Learnings
                </h1>
            </div>
            <div className="mb-30">
                {ProjectData.map((proj) => (
                    <Card
                        key={proj.id}
                        description={proj.description}
                        title={proj.title}
                        color={proj.color}
                        image={proj.ImageUrl}
                        githubURL={proj.github}
                        websiteURL={proj.websiteUrl}
                    />
                ))}
            </div>
        </>
    );
};

export default Project;