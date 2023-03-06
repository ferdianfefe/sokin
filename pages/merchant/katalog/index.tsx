import MerchantLayout from "components/layout/MerchantLayout";

const Katalog: React.FC = (): JSX.Element => {
  return (
    <MerchantLayout location="katalog">
      <div className="flex flex-col gap-4 min-h-screen">Katalog</div>
    </MerchantLayout>
  );
};

export default Katalog;
