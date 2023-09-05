import NBAFunFacts from '../assets/NBA-fun-facts.png';
import PassGenerator from '../assets/password-generator.png';
import CarFix from '../assets/Project 2 - CarFix.png';
import NoteTaker from '../assets/express.js-note-taker.png';
import ReadmeGen from '../assets/Readme-Generator.png';
import Project3 from '../assets/Project3.png';


export default function ProjectList(){
    const projs = [
      {
        id: 1,
        name: "NBA Fun Facts",
        link: "https://yc937.github.io/FunNBAFacts/",
        image: NBAFunFacts
      },
      {
        id: 2,
        name: "Carfix Blog",
        link: "https://app-carfix-blog-4a5a8cc800a2.herokuapp.com/",
        image: CarFix
      },
      {
        id: 3,
        name: "Sports Spotter",
        link: "https://sports-spotter-ebb34b0a9d19.herokuapp.com/",
        image: Project3
      },
      {
        id: 4,
        name: "Password Generator",
        link: "https://mserafin20.github.io/password-generator/",
        image: PassGenerator
      },
      {
        id: 5,
        name: "Express Note Taker",
        link: "https://express-note-taker-1.herokuapp.com/",
        image: NoteTaker
      },
      {
        id: 6,
        name: "README Generator",
        link: "https://github.com/mserafin20/readme-generator",
        image: ReadmeGen
      }
    ]
  
    return (
      <section>
        <h1>Projects</h1>
        <div className='card-container'>
        {
          projs.map((project, i) => (
            <li key = {i}>
              <a className='links' href={project.link}>
                {project.name}
              </a>
            </li>
          ))
        }
        </div>
      </section>
    )
  };