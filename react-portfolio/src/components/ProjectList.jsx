export default function ProjectList(){
    const projs = [
      {
        name: "Proj 1",
        link: "https://www.google.com/"
      },
      {
        name: "Proj 2",
        link: "https://www.google.com/"
      },
      {
        name: "Proj 3",
        link: "https://www.google.com/"
      },
      {
        name: "Proj 4",
        link: "https://www.google.com/"
      },
      {
        name: "Proj 5",
        link: "https://www.google.com/"
      },
      {
        name: "Proj 6",
        link: "https://www.google.com/"
      }
    ]
  
    return (
      <section>
        <h2>Projects</h2>
        <ul>
        {
          projs.map((project, i) => (
            <li key = {i}>
              <a href={project.link}>
                {project.name}
              </a>
            </li>
          ))
        }
        </ul>
      </section>
    )
  };