import Card from "../components/Card"
import styled from "styled-components"

function Home() {
  return (
    <Container>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`

export default Home
