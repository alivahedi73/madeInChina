import "./FlexBoxSlider.scss";
import { LuMoveRight } from "react-icons/lu";
const FlexBoxSlider = () => {
  return (
    <>
      <div className="sl_2">
        <a href="#" className="s_1">
          <img src="../../../public/assets/Images/smart.png" alt="" />
          <p className="s_1_P">SMART EXPO</p>
          <p className="sp_hover">
            Reliable China Suppliers, Recommended at World's Famous Trade Shows.
          </p>
          <p className="s_hover">
            <LuMoveRight />
          </p>
        </a>
        <a href="#" className="s_2">
          <img
            src="../../../public/assets/Images/s2.webp"
            className="s2Img"
            alt=""
          />
          <p className="s2P">Secured Trading Service</p>
          <div className="sp_hover">
            <LuMoveRight />
          </div>
        </a>
        <a href="#" className="s_2">
          <img
            src="../../../public/assets/Images/s3.webp"
            className="s2Img"
            alt=""
          />
          <p className="s2P">STAR suplied</p>
          <div className="sp_hover">
            <LuMoveRight />
          </div>
        </a>
        <a href="#" className="s_2">
          <img
            src="../../../public/assets/Images/s4.webp"
            className="s2Img"
            alt=""
          />
          <p className="s2P">selected supplier</p>
          <div className="sp_hover">
            <LuMoveRight />
          </div>
        </a>
      </div>
    </>
  );
};

export default FlexBoxSlider;
