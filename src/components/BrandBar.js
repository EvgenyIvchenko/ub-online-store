import { useAppContext } from 'Context';
import { observer } from 'mobx-react-lite';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
  const { device } = useAppContext();

  return (
    <div className="d-flex flex-wrap">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: 'pointer' }}
          className="p-3"
          border={brand.id === device.selectedBrand?.id ? 'danger' : 'light'}
          onClick={() => device.setSelectedBrand(brand)}
          key={brand.id}
        >
          {brand.name}
        </Card>
      ))}
    </div>
  );
});

export default BrandBar;
