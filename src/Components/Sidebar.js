import React from 'react';
import styled from 'styled-components';
import Compose from './buttons/Compose';
// import VideocamIcon from '@mui/icons-material/Videocam';
// import KeyboardIcon from '@mui/icons-material/Keyboard';
import { sidebarButtonItems }  from '../Components/data/SidebarButtonItems';

const Sidebar = () => {
    return (
        <Wrapper>
            
            <ComposeWrapper>
                <Compose/>
            </ComposeWrapper>

            <SideButtonsWrapper>
             {  
             sidebarButtonItems.map(item => (
                <SidebarButtonItems>
                    {item.icon} 
                    {item.text}
                </SidebarButtonItems>
                )) 
             }
            </SideButtonsWrapper>

            <MeetWrapper>
             <Title>Meet</Title>
               {/* <VideocamIcon/> 
               <KeyboardIcon/>  */}
               <p>ICON</p>
               <p>ICON</p>
            </MeetWrapper>

            <HangoutsWrapper>
                {/* Hangouts stuff */}
            </HangoutsWrapper>

            <BottonIconsWrapper>
                
            </BottonIconsWrapper>


        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    background-color:   #f1f2f3;
    border-right: 1px solid lightgray;
    height: 100vh;
`;

const ComposeWrapper = styled.div`
    display:grid;
    place-items: start;
    padding: 10px 20px
`;
   
const SideButtonsWrapper = styled.div`
    
`;

const SidebarButtonItems = styled.div`
    display: grid;
    grid-template-columns: 14% auto;
    color: gray;
    padding: 5px 25px;
    border-radius: 0 100px 100px 0;
    cursor: pointer;
    margin-left: 10px;

    :hover{
        background-color: #f5f7f7;
    }
`
   
const MeetWrapper = styled.div`
    position: relative;
    top: 300px;
    border-top: 1px solid lightgray;

    p{
        display: grid;
        color: gray;
        grid-template-columns:  14% auto;
        height: 30px;
        align-items: center;
        padding-left: 25px;
    }
`;

const Title = styled.h4`
    padding-left: 25px;
    margin-bottom: 3px;
    margin-top: 8px;
`
         
const HangoutsWrapper = styled.div``;
     
const BottonIconsWrapper = styled.div``;