import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { FaRobot, FaChartBar, FaCogs, FaCode, FaDatabase, FaCloud, FaMobile, FaBrain } from 'react-icons/fa';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Passionate about leveraging cutting-edge technology to solve complex problems and drive innovation.<br></br> Here are the key areas where I excel and create impactful solutions.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <FaRobot size={60} />
                                <h5>AI Automated Workflows</h5>
                                <p>Building intelligent automation systems that streamline business processes and increase efficiency through machine learning and AI integration.</p>
                            </div>
                            <div className="item">
                                <FaChartBar size={60} />
                                <h5>Power BI Dashboards</h5>
                                <p>Creating dynamic, interactive dashboards that transform raw data into actionable insights for data-driven decision making.</p>
                            </div>
                            <div className="item">
                                <FaCogs size={60} />
                                <h5>Data Pipeline Automation</h5>
                                <p>Designing robust ETL pipelines that automate data processing using Airflow and other python libraries, ensuring reliable and scalable data workflows.</p>
                            </div>
                            <div className="item">
                                <FaDatabase size={60} />
                                <h5>SQL</h5>
                                <p>Expert in writing SQL queries and designing efficient relational data models for scalable applications.</p>
                            </div>
                            <div className="item">
                                <FaCloud size={60} />
                                <h5>Cloud Solutions</h5>
                                <p>Implementing scalable cloud infrastructure using Google Cloud for enterprise-level applications.</p>
                            </div>
                            <div className="item">
                                <FaBrain size={60} />
                                <h5>Machine Learning</h5>
                                <p>Developing predictive models and ML algorithms to extract valuable insights from complex datasets.</p>
                            </div>
                            <div className="item">
                                <FaMobile size={60} />
                                <h5>Mobile Development</h5>
                                <p>Creating responsive mobile applications using React Native, with intuitive user interfaces.</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
