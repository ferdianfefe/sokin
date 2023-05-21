// Create a layout with navbar
import Navbar from "components/elements/Navbar";
import Image from "next/image";
//import loading spinner
import {Spinner} from "react-loading-spinner";

const DriverLayout: React.FC<{ children: any; location: string; className: string}> = ({
  children,
  location,
  className,
}): JSX.Element => {

  const onAddMenu = () => {
    
  }

  return (
    <div className={`${className} relative min-h-screen`}>
      {children}
      
      <Navbar location={location} role="customer" />
    </div>
  );
};

export default DriverLayout;
