// Create a layout with navbar
import Navbar from "components/elements/Navbar";

const MerchantLayout: React.FC<{ children: any; location: string }> = ({
  children,
  location,
}): JSX.Element => {
  return (
    <div className="relative h-screen">
      {children}
      <Navbar location={location} role="merchant" className="z-[100]" />
    </div>
  );
};

export default MerchantLayout;
