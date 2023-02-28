// Create a layout with navbar
import Navbar from "components/elements/Navbar";

const DefaultLayout: React.FC<{ children: any }> = ({
  children,
}): JSX.Element => {
  return (
    <div className="relative h-screen">
      {children}
      <Navbar />
    </div>
  );
};

export default DefaultLayout;
