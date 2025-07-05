import React from "react";

const ProjectPage = () => {
  return (
    <div className="container mx-auto p-4 text-white">
      <h1 className="text-4xl font-bold mb-4">Project Name</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src="https://via.placeholder.com/800x600" alt="Project Screenshot" className="w-full rounded-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">About the project</h2>
          <p className="text-zinc-400">
            This is a detailed description of the project. It covers the technologies used, the challenges faced, and the solutions implemented.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
