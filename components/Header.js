import "@/styling/App.css";
import Image from "next/image.js";
import Background from "@/assets/images/tech-people.jpg"
const Header = () => {


  return (
    <>
      <Image src={Background} className="background-image"></Image>
    </>
  );
};


export default Header;
