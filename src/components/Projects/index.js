import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProjectsList from "../ProjectsList";
import Pagination from "../Pagination";

const projectsList = [
  {
    id: uuidv4(),
    websiteUrl: "https://dinassessapp.ccbp.tech",
    websiteName: "dinassessapp.ccbp.tech",
    imageUrl: "https://res.cloudinary.com/dhwz560kk/image/upload/v1728300833/xwtboqzgfbnhpwfc8phy.png",
    category: "Mini Project",
    projectName: "Quiz Timer Website",
    githubUrl: "https://github.com/DineshRamaraj/React_Assessment_Mini_Project.git"
  },
  {
    id: uuidv4(),
    websiteUrl: "https://dinmovieapp.ccbp.tech/",
    websiteName: "dinassessapp.ccbp.tech",
    imageUrl: "https://res.cloudinary.com/dhwz560kk/image/upload/v1728300833/xwtboqzgfbnhpwfc8phy.png",
    category: "Mini Project",
    projectName: "Movies Website",
    githubUrl: "https://github.com/DineshRamaraj/React_Movie_App_Project.git"
  },
  {
    id: uuidv4(),
    websiteUrl: "https://venkatsnetflix.ccbp.tech/",
    websiteName: "Netflix",
    imageUrl: "https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747898/tigedepwdsf49rqgg4i0.png",
    category: "Mini Project",
    projectName: "Netflix Website",
    githubUrl: "https://github.com/DineshRamaraj/React_Movie_App_Project.git"
  },
  {
    id: uuidv4(),
    websiteUrl: "https://venkatsnetflix.ccbp.tech/",
    websiteName: "Youtube Clone",
    imageUrl: "https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747881/ugj8ip3cqnji63zgncbc.png",
    category: "Clone",
    projectName: "Youtube Clone",
    githubUrl: "https://github.com/DineshRamaraj/React_Movie_App_Project.git"
  },
  
  {
    id: uuidv4(),
    websiteUrl: "https://dineshpedia.ccbp.tech/",
    websiteName: "dineshpedia.ccbp.tech",
    imageUrl: "https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747881/ugj8ip3cqnji63zgncbc.png",
    category: "Clone",
    projectName: "Wikipedia Clone",
    githubUrl: "https://github.com/DineshRamaraj/React_Movie_App_Project.git"
  },
  
  
];

const Projects = () => {
  const totalItems = projectsList.length; // Total number of items you have
  const itemsPerPage = 9; // Number of items you want to display per page

  const [currentPage, setCurrentPage] = useState(1);
  const [currentProjectsList, setCurrentProjectsList] = useState(
    projectsList.slice(0, itemsPerPage)
  );

  useEffect(() => {
    // Logic to display current page items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentProjectsList(
      projectsList.slice(indexOfFirstItem, indexOfLastItem)
    );
  }, [currentPage]);

  // Dummy items (replace this with your actual items)
  // const items = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };

  // console.log("currentPage: ", currentPage);

  return (
    <>
      <div className="project-container bg-slate-700 min-h-[calc(100vh-76px)] px-10 sm:px-14 lg:px-32 py-10 font-[Roboto]">
        <h1 className="text-slate-100 font-normal text-[24px] mb-5">
          Projects:
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentProjectsList.map((project) => (
            <ProjectsList project={project} key={project.id} />
          ))}
        </ul>
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Projects;
