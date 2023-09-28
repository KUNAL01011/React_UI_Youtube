import styled from "styled-components"
import logo from '../img/kunal_logo.jpg'
import Comment from "./Comment"
function Comments() {
  return (
    <Container>
      <NewComment>
        <Avatar src={logo}/>
        <Input placeholder="Add a comment"/>
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </Container>
  )
}


const Container = styled.div`

`
const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

`
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`
const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({theme})=> theme.soft};
    color: ${({theme})=>theme.text};
    background-color: transparent;
    outline: none;
    width: 100%;
    padding: 5px;
`
export default Comments
