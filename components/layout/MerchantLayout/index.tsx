// Create a layout with navbar
import NavbarMerchant from "components/elements/NavbarMerchant";

const MerchantLayout: React.FC<{ children: any, location: string }> = ({
  children,
  location,
}): JSX.Element => {
  return (
    <div className="relative h-screen">
      {children}
      <NavbarMerchant location={location} />
    </div>
  );
};

export default MerchantLayout;
