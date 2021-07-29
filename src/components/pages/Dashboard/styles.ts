import styled from 'styled-components';

export const DashboardContainer = styled.main`
  padding: 10px;
  width: 100%;
`;

export const RefreshButtonText = styled.span`
  margin-left: 10px;
`;

export const RefreshButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: var(--white);
    width: 15px;
    height: 15px;
  }
`;

export const RefreshButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  margin: 0 25px 5px 0;
`;
