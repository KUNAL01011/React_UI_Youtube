import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { SearchOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Container>
      <Wrpper>
        <Serarch>
          <Input placeholder="Search"></Input>
          <SearchOutlined />
        </Serarch>
        <Link to = "/signin" style={{textDecoration: "none"}}>
        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
        </Link>
      </Wrpper>
    </Container>
  );
}

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
  
`;
const Wrpper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`;
const Serarch = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;

`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({theme})=> theme.text};

`;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
