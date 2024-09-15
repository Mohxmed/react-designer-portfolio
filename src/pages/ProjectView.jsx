import { useParams } from "react-router-dom";
import projects from "@data/projects/projects";
import Container from "../layouts/Container";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
export default function ProjectView() {
  const { id } = useParams();
  console.log(id);
  const selected = projects.filter((project) => {
    return project.id == id;
  });
  console.log(selected);
  return (
    <div className="view-project" data-aos="fade-right">
      <Container>
        <div className="back">
          <Link to=".." relative="path">
            <FaArrowLeftLong />
            Back to Projects
          </Link>
        </div>
        <h1>{selected[0].title}</h1>
        <p>{selected[0].body}</p>
        <img src={selected[0].img} alt="" />
      </Container>
    </div>
  );
}
