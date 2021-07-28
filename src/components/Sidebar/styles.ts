import styled, { keyframes } from 'styled-components';

const wobble = keyframes`
  from {
    border-radius: 10px;
  }

  to {
    border-radius: 0;
    width: 100%;
  }
`;

const wobbleOut = keyframes`
  from {
    border-radius: 0;
    width: 100%;
  }

  to {
    border-radius: 10px;
  }
`;

export const SidebarContainer = styled.div`
  display: inline-block;
  height: 100vh;
  z-index: 999;

  .pro-menu {
    padding-top: 0;

    a {
      color: var(--white);
      font-size: 1.1em;
      width: 100%;
    }
  }

  .pro-sidebar {
    > .pro-sidebar-inner {
      color: var(--light-purple);
      background: var(--white);
    }

    &.collapsed {
      width: 105px;

      .pro-menu-item {
        width: 100%;
        border-radius: 0;
        margin: 0;
        border-bottom: 1px solid var(--white);
        animation: ${wobble} 0.5s linear;
      }
    }

    .pro-menu-item {
      height: 45px;
      width: 90%;
      margin: 5px auto;
      border-radius: 10px;
      animation: ${wobbleOut} 0.5s linear;
      background: var(--light-purple);

      :hover {
        background-color: var(--purple-lighter);

        .pro-item-content, a {
          color: var(--white);
        }
      }

      > .pro-inner-item {
        padding: 8px 16px;
      }

      > .pro-inner-item:focus {
        color: var(--white);
      }
    }
  }
`;

export const SidebarHeaderContainer = styled.div`
  height: 7vh;
  
  > .pro-sidebar-header {
    height: 7vh;
    background: var(--light-purple);
  }
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

export const MenuItemsContainer = styled.div`
  border-bottom: 1px solid var(--white);
`;

export const MenuSectionTitle = styled.p`
  color: var(--gray);
  text-transform: uppercase;
  border-bottom: 1px solid var(--gray);
  width: 90%;
  margin: 10px auto;
  font-size: 1.3em;
`;

export const IconContainer = styled.span`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  
  svg {
    fill: var(--white);
    height: inherit;
    width: inherit;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

export const LinkText = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
`;

export const ArrowIconContainer = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 15px;

  svg {
    fill: var(--white);
    height: inherit;
    width: inherit;
  }
`;