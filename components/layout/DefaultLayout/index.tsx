// Create a layout with navbar
import Navbar from "components/elements/Navbar";
import Image from "next/image";

const DriverLayout: React.FC<{ children: any; location: string }> = ({
  children,
  location,
}): JSX.Element => {

  const onAddMenu = () => {
    
  }

  return (
    <div className="relative min-h-screen">
      {children}
      
      <Navbar location={location} role="customer" />
    </div>
  );
};

export default DriverLayout;
