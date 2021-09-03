import styled from 'styled-components';

export const Header = styled.header`
  width: 100vw;
  height: 7vh;
  position: fixed;
  top: 0;
  
  display: flex;
  background-color: var(--purple);
`;

export const LogoutButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px;
`;

export const SidebarButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
`;

export const LogoContainer = styled.div`
  width: 105px;
  height: 7vh;

  > svg {
    fill: var(--white);
    height: inherit;
    width: inherit;
  }
`;
