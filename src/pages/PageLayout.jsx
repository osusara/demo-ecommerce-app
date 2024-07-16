import { Column } from "../components/common";
import NavigationBar from "../components/navigation/NavigationBar";

function PageLayout({ children }) {
  return (
    <Column>
      <header>
        <NavigationBar />
      </header>
      <main>{children}</main>
    </Column>
  );
}

export default PageLayout;
