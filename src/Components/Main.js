import React from 'react'
import styled from 'styled-components';
import Sidebar from '../Components/Sidebar';
import SideIcons from '../Components/SideIcons';
import EmailsViews from '../Components/EmailsViews';


function Main() {
    return (
        <Wrapper>
            <Sidebar>
                <SideIcons/>
                <EmailsViews/>

            </Sidebar>
          
        </Wrapper>
    )
}

export default Main

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 270px auto 50px;
`;