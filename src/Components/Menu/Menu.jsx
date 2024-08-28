import SubMenu from "../SubMenu/SubMenu";
import "./Menu.scss";
import { TfiMenuAlt } from "react-icons/tfi";
const Menu = () => {
  return (
    <>
      {/* start menu */}
      <div className="menu_cat">
        <div className="titleCat">
          <p className="pCat">
            <TfiMenuAlt />
          </p>
          <a href="#" className="linkCat">
            Categories
          </a>
        </div>
        <SubMenu />
      </div>
      {/* end of menu */}
    </>
  );
};

export default Menu;
