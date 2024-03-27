import CyberSqueak from "../../components/CyberSqueak/CyberSqueak";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

const PageMain = () => {
  return (
    <>
      <CyberSqueak />
      <Breadcrumbs>
        <Link to="/">Основная</Link>
        <Link to="/settings">Натсройки</Link>
      </Breadcrumbs>
    </>
  );
};

export default PageMain;
