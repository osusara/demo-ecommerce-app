import styled from "styled-components";
import { Column } from "../components/common";
import HeaderBar from "../components/navigation/HeaderBar";

const Container = styled(Column)`
  margin: 0 64px;
`;

function PageLayout({ children }) {
  return (
    <Container>
      <header>
        <HeaderBar />
      </header>
      <main>{children}</main>
    </Container>
  );
}

export default PageLayout;
