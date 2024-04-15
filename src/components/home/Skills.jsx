import React from "react";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = React.forwardRef(({ heading, hardSkills, softSkills }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
    <Container className="p-5">
      <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
        {heading}
      </h2>
      <Row>
        <Col md={6} className="pb-4">
          <h3>Technical Skills</h3>
          <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
        </Col>
        <Col md={6} className="pb-4">
          <h3>Language Skills</h3>
          <SkillsTab skills={softSkills} isScrolled={isScrolled} />
        </Col>
      </Row>
    </Container>
    </Jumbotron>
  );
});

export default Skills;
