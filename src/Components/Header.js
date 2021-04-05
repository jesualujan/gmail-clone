import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {
  return (
    <Wrapper>
      {/* FIRST COMPONENT */}
      <LogoWrapper>
        <Menu>
          <MenuIcon />
        </Menu>
        <Logo>
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
            alt="gmail logo"
          />
        </Logo>
      </LogoWrapper>

      {/* SECOND COMPONENT */}
      <SearchWrapper>
        <SearchBarWrapper>
          <SearchIcon
            style={{
              cursor: "pointer",
              color: "#5f6368",
              opacity: "1",
            }}
          />
          <input
            type="text"
            placeholder="Search Mail"
            method="get"
            role="search"
          ></input>
          <ExpandMoreIcon
            style={{
              cursor: "pointer",
              color: "#5f6368",
              opacity: "1",
            }}
          />
        </SearchBarWrapper>
      </SearchWrapper>

      <IconsWrapper>
        <HelpOutlineIcon />
        <SettingsIcon />
        <AppsIcon />
        <AccountCircleIcon />
      </IconsWrapper>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 170px;
  border-bottom: 1.5px solid lightgray;
  height: 62px;
  align-items: center;
  box-shadow: 0px 0.5px 0.5px -7px rgba(0, 0, 0, 0.1);
  background-color: #efefef;
`;
/*box-shadow: 0 .5px .5px 1px rgb(0 0 0 / 10%); */

const LogoWrapper = styled.div`
  display: grid;
  height: 40px;
  grid-template-columns: 23% auto;
`;

const Menu = styled.div`
  display: grid;
  place-items: center;
  color: #202124;
  position: relative;
  margin-left: 10px;
  cursor: pointer;
`;

const Logo = styled.div`
  display: flex;
  height: 40px;
  margin-left: 3px;
  cursor: pointer;
`;

const SearchWrapper = styled.div``;

const SearchBarWrapper = styled.div`
  background-color: #f1f2f3;
  width: 100%;
  max-width: 720px;
  position: relative;
  display: grid;
  grid-template-columns: 10% auto 7%;
  place-items: center;
  height: 45px;
  border-radius: 8px;
  border: 1px solid transparent;

  input {
    width: 100%;
    height: 30px;
    background: none;
    border: none;
    font-size: 17px;
    transition: background 0.5s linear 0s;
  }

  input:focus {
    outline: none;
  }

  :hover {
    cursor: auto;
    background-color: white;
  }
`;

const IconsWrapper = styled.div`
  display: grid;
  margin-left: 8px;
  grid-template-columns: repeat(4, auto);

  .MuiSvgIcon-root {
    color: #5f6368;
    cursor: pointer;
  }
`;
