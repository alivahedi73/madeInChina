import "./Right.scss";
import { TbTargetArrow } from "react-icons/tb";
const Right = () => {
  return (
    <>
      <div className="main_right">
        <div className="mr_1">you may like</div>
        <a href="#" className="mr_2">
          <div className="main_mr">
            <img src="../../../public/assets/Images/w1.webp" alt="" />
            <div className="m_mr_2">
              <p className="mr_3">Hydrolic pump</p>
              <p className="mr_4">70.000+Products</p>
            </div>
          </div>
        </a>
        <a href="#" className="mr_2">
          <div className="main_mr">
            <img src="../../../public/assets/Images/w2.webp" alt="" />
            <div className="m_mr_2">
              <p className="mr_3">coffee table</p>
              <p className="mr_4">50.000+Products</p>
            </div>
          </div>
        </a>
        <a href="#" className="mr_2">
          <div className="main_mr">
            <img src="../../../public/assets/Images/w3.webp" alt="" />
            <div className="m_mr_2">
              <p className="mr_3">water purifier</p>
              <p className="mr_4">144.000+Products</p>
            </div>
          </div>
        </a>
        <a href="#" className="mr_2">
          <div className="main_mr">
            <img src="../../../public/assets/Images/w4.webp" alt="" />
            <div className="m_mr_2">
              <p className="mr_3">home furniture</p>
              <p className="mr_4">52.000+Products</p>
            </div>
          </div>
        </a>
        <a href="#" className="mr_2">
          <div className="main_mr">
            <img src="../../../public/assets/Images/w5.webp" alt="" />
            <div className="m_mr_2">
              <p className="mr_3">mobility scooter</p>
              <p className="mr_4">40.000+Products</p>
            </div>
          </div>
        </a>
        <p className="mr_5">No desirable products?</p>
        <a href="#" className="req_mr">
          <div className="req_1">
            <p className="muy">
              <TbTargetArrow />
            </p>
            <p>post your request now</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Right;
