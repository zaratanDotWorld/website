import Link from "next/link";
import { Alert, Container, Row, Col, Button } from 'react-bootstrap';

import Headpiece from '../../components/headpiece';
import SlackButton from '../../components/slack';
import YouTube from '../../components/youtube';

import {
  quickstartUrl,
  choresInstallUrl,
  heartsInstallUrl,
  thingsInstallUrl,
  repoUrl,
  docsUrl,
  slackCommunityUrl,
  interestFormUrl,
  contactUrl,
  supportUrl,
  instagramUrl,
  structuresUrl,
  choreWheelUrl,
  bookUrlOstrom,
  bookUrlBeer,
  bookUrlLaloux
} from '../../utils/constants';

export async function getStaticProps() {
  const pageTitle = "Getting Started";

  return { props: { pageTitle } }
}

export default function () {
  return (
    <Container fluid>
      <Row className="pt-5">
        <Col />
        <Col md={8} xl={6}>
          <Headpiece
            mainText="Getting Started"
            subText="To Infinity, and Beyond"
            icon="&#x1F680;"
            color="green"
          />
        </Col>
        <Col />
      </Row>

      <br></br>
      <br></br>

      <Row className="pb-5">
        <Col />
        <Col md={4} xl={3}>
          <Alert variant="success" className="center">
            <i>Not sure yet?</i>
            <br></br>
            <Link href={interestFormUrl} target="_blank"><b>Fill out an interest form</b></Link>
          </Alert>
        </Col>
        <Col />
      </Row>

      <Row className="p-5 accent-green">
        <Col />
        <Col md={8} xl={6}>
          <p>
            <b>Getting started</b> with Chore Wheel is easy, and takes about <b>20 minutes</b>.
          </p>

          <h5><b>Step 1:</b> Set Up Slack</h5>
          <hr></hr>

          <p>
            <i>If your community is already on Slack, you can skip this step.</i>
            <br></br>
            <br></br>
            While household communication <i>can</i> happen through simple group-chats,
            we believe that&nbsp;
            <Link href="https://slackdemo.com/" target="_blank">full-featured platforms like Slack</Link>
            &nbsp;are better foundations for group interactions.
            Slack lets you:
          </p>
          <ul>
            <li><b>Organize conversations</b> in different channels (#projects, #social, etc)</li>
            <li><b>Communicate seamlessly</b> on multiple devices, including desktop and mobile</li>
            <li><b>Integrate apps</b> (like ours!) to super-charge your capabilities</li>
          </ul>

          <p>
            Slack offers <b>free plans with no limit</b> on the number of participants.
          </p>

          <div className="center py-3">
            <Button variant="primary" href="https://slack.com/get-started" target="_blank">
              Create Your Free Workspace
            </Button>
          </div>

          <div className="center">
            <small>
              For now, Chore Wheel is only on Slack.
              If you want to help us expand to other platforms, <Link href={contactUrl}>reach out!</Link>
            </small>
          </div>

          <br></br>

          <h5><b>Step 2:</b> Install Chore Wheel</h5>
          <hr></hr>

          <p>
            Chore Wheel's tools are available as <b>separate Slack apps</b>,
            and can be used together or separately:
          </p>

          <ul>
            <li><Link href="/chorewheel/chores"><b>Chores</b></Link>, to organize individual contributions through a super-charged chores system</li>
            <li><Link href="/chorewheel/hearts"><b>Hearts</b></Link>, to support positive interactions through gaining and losing "hearts"</li>
            <li><Link href="/chorewheel/things"><b>Things</b></Link>, to manage shared resources by letting groups easily approve purchases</li>
          </ul>

          <p>
            You can install the apps by <b>clicking the buttons below</b> (must be a workspace admin).
            You can read the <Link href={quickstartUrl}><b>getting started guide</b></Link> for more details about the apps and how to use them.
          </p>

          <div className="center py-2">
            <SlackButton text="Get Chores" url={choresInstallUrl} />
            <SlackButton text="Get Hearts" url={heartsInstallUrl} />
            <SlackButton text="Get Things" url={thingsInstallUrl} />
          </div>

          <br></br>

          <h5><b>Step 3:</b> Start Thriving!</h5>
          <hr></hr>

          <p>
            Chore Wheel's apps are <b>dynamic</b> and <b>flexible</b>,
            and it can take a few days to fall into a rhythm.
          </p>
          <p>
            Once you do, you'll be amazed at how well everything starts to work.
            If you need any help, the <Link href={docsUrl}><b>project docs</b></Link> have details of how the apps work and examples for how to use them.
            Or, just send us <Link href={supportUrl} target="_blank"><b>an email</b></Link>.
          </p>

          <p>
            We'd love to hear about your experience!
            Share your stories (tag <Link href={instagramUrl} target="_blank">@zaratan.world</Link>),
            or <Link href={contactUrl} target="_blank">contact us</Link>.
          </p>

          <br></br>

          <YouTube videoSrc={choreWheelUrl} videoTitle="Chore Wheel Intro" />
        </Col>
        <Col />
      </Row>

      <Row className="p-5">
        <Col />
        <Col md={8} xl={6}>
          <h5>Frequently Asked Questions</h5>
          <hr></hr>

          <p>
            <b>Isn't using Slack a lot of extra work?</b>
            <br></br>
            Definitely not! The apps are designed to be simple and easy to use, with basic tasks taking no more than a few clicks.
            Compare that to a whiteboard chore chart, which you need to physically go to mark off your task.
            Plus, Slack gives you a lot more flexibility for how you communicate with your group, compared to a group-chat.
          </p>

          <p>
            <b>Won't tracking things add extra stress?</b>
            <br></br>
            Just the opposite!
            Right now, someone in your group is spending a lot of mental energy remembering who's been doing what.
            Chore Wheel takes that burden off of the most generous individuals, while making sure people get recognized for their contributions.
          </p>

          <p>
            <b>Is Chore Wheel only for physical housing?</b>
            <br></br>
            No! While Chore Wheel was initially designed for coliving communities,
            the tools can be used by any group looking to collaborate more effectively.
            Chore Wheel has been used by organizations large and small to help support their operations.
          </p>

          <p>
            <b>Is Chore Wheel open-source?</b>
            <br></br>
            Yes! Chore Wheel is open-source under the <Link href="https://choosealicense.com/licenses/agpl-3.0/">AGPL-3 license</Link>.
            You can see the <Link href={repoUrl}>source code on GitHub</Link>,
            and contributions are welcome!
          </p>

          <p>
            <b>Why are you so confident?</b>
            <br></br>
            Chore Wheel is the result of years of research and development,
            mixing established economic theory with contemporary thinking on design and interaction.
            Chore Wheel has been the subject of a peer-reviewed research paper,
            which you can find <Link href={structuresUrl} target="_blank">here</Link>.
          </p>

          <p>
            <b>What were the influences for Chore Wheel?</b>
            <br></br>
            Chore Wheel was heavily influenced by the work of Nobel Laureate Elinor Ostrom (<Link href={bookUrlOstrom}>Governing the Commons</Link>),
            Stafford Beer (<Link href={bookUrlBeer}>Designing Freedom</Link>),
            and Frederic Laloux (<Link href={bookUrlLaloux}>Reinventing Organizations</Link>).
            While Chore Wheel might seem like a "tech" solution to a human problem,
            it's actually the result of a lot of deep thinking about how people work together.
          </p>

          <br></br>

          <h5>Need More Help?</h5>
          <hr></hr>

          <p>
            We're here to support your journey to a thriving community.
          </p>

          <ul>
            <li>For <b>app details</b>, see the <Link href={docsUrl}>full documentation</Link></li>
            <li>For <b>peer support</b>, join our <Link href={slackCommunityUrl}>Slack community</Link></li>
            <li>For <b>source code</b>, see the <Link href={repoUrl}>GitHub repository</Link></li>
            <li>For <b>general questions</b>, please <Link href={contactUrl}>contact us</Link></li>
          </ul>
        </Col>
        <Col />
      </Row>
    </Container>
  )
}
