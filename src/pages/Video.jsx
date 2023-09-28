import { AddTaskOutlined, ReplyOutlined, ThumbDownOffAltOutlined, ThumbUpOutlined } from "@mui/icons-material";
import styled from "styled-components";
import Comments from "../components/Comments";
import Card from "../components/Card";
import logo from '../img/kunal_logo.jpg'

function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <VideoTag
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></VideoTag>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
            <Info>258,535,56 views . Jun 22, 2022</Info>
            <Buttons>
                <Button>
                    <ThumbUpOutlined/> 123
                </Button>
                <Button>
                    <ThumbDownOffAltOutlined/> Dislike
                </Button>
                <Button>
                    <ReplyOutlined/> Share
                </Button>
                <Button>
                    <AddTaskOutlined/> Save
                </Button>
            </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
              <Image src={logo}/>
              <ChannelDetail>
                <ChannelName>Web Maker</ChannelName>
                <ChannelCounter>200K subscribers</ChannelCounter>
                <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, harum dolor libero rerum ratione fugit dicta explicabo, necessitatibus unde ullam sapiente beatae laudantium corrupti. Sit fugit aut ea. Cupiditate, nostrum!</Description>
              </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Comments/>
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;
const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({theme})=>theme.text};
`;
const VideoTag = styled.iframe`
  height: 620px;
`
const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`;
const Info = styled.span`
    color: ${({theme})=>theme.textSoft};
`;
const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({theme})=>theme.text};
`;
const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme})=> theme.soft};
`
const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme})=>theme.text};
`
const ChannelName = styled.span`
  font-weight: 500;
`
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({theme})=>theme.textSoft};
  font-size: 12px;
`
const Description = styled.p`
  font-size: 14px;
`
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

export default Video;
