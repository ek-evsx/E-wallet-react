import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: inline-block;
  height: 95vh;
  z-index: 999;

  .pro-sidebar {
    > .pro-sidebar-inner {
      color: var(--white);
      background: linear-gradient(var(--light-purple), #e5e1fc);
    }

    &.collapsed {
      width: 138px;
    }
  }
`;

export const SidebarHeaderContainer = styled.div`
  height: 8vh;
  
  > .pro-sidebar-header {
    height: 8vh;
  }
`;

export const LogoContainer = styled.div`
  width: 138px;
  height: 8vh;

  > svg {
    fill: var(--light-purple);
    height: inherit;
    width: inherit;
  }
`;