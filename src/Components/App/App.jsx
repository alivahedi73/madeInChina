import Slider from "../Slider/Slider";
import FlexBoxSlider from "../FlexboxSlider/FlexBoxSlider";
import Menu from "../Menu/Menu";
import Right from "../Right/Right";
import "./App.scss";

const App = () => {
  return (
    <>
      {/* start of project */}
      <div className="main_cat">
        <div className="cat">
          {/* start Menu in project */}
          <Menu />
          {/* End of Menu in project */}
          {/* start of slider */}
          <div className="slider">
            {/* start of slider */}
            <div className="sl_1">
              <Slider />
            </div>
            {/* end of slider */}
            {/* start of flexbox */}
            <FlexBoxSlider />
            {/* end of flexbox */}
          </div>
          {/* end of slider */}
          {/* start of right of menu */}
          <Right />
          {/* end of right of menu */}
        </div>
      </div>
      {/* end of project */}
    </>
  );
};

export default App;
