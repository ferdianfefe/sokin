// Create a layout with navbar
import Navbar from "components/elements/Navbar";

const DriverLayout: React.FC<{ children: any, location: string }> = ({
  children,
  location,
}): JSX.Element => {
  return (
    <div className="relative min-h-screen">
      {children}
      <Navbar location={location} role='driver'/>
    </div>
  );
};

export default DriverLayout;
