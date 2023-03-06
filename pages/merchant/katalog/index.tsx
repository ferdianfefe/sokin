import Button from "components/elements/Button";
import MerchantLayout from "components/layout/MerchantLayout";

const Katalog: React.FC = (): JSX.Element => {
  return (
    <MerchantLayout location="katalog">
      <div className="flex flex-col gap-4 min-h-screen">
        <h1>Preksu: Ayam Geprek Susu</h1>
        <Button text="+ Tambahkan" href="/merchant/katalog/add"/>
      </div>
    </MerchantLayout>
  );
};

export default Katalog;
