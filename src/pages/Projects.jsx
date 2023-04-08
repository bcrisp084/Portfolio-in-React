import CardExample from "../components/Card";

const Projects = () => {
  const projects = [
    {
      title: "Digital Diary",
      description:
        "Digital Diary is an online memory storage app that allows users to create and store memories in the form of text, images, and videos. Users have the ability to take precious moments from their journey through life and share them with others.",
      image: "",
      github: "",
      url: "https://quiet-forest-25305.herokuapp.com/",
    },

  ];

  return (
    <div>
      <h1>Projects I've Built</h1>

      <CardExample />
    </div>
  );
};

export default Projects;
