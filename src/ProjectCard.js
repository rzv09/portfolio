import MyNavBar from "./MyNavBar";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap"

export default function ProjectCard({ Title, SubTitle, Text, ProjectLink, ImgSrc}) {
    return (
        <Card className="projcard"
        style={{
          width: '18rem'
        }}
      >
        <img
          alt="Sample"
          src={ImgSrc}
        />
        <CardBody>
          <CardTitle tag="h5">
            {Title}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {SubTitle}
          </CardSubtitle>
          <CardText>
            {Text}
          </CardText>
          <Button href={ProjectLink}>
            Github
          </Button>
        </CardBody>
      </Card>
    );
}


