import { useAppContext } from 'Context';
import { observer } from 'mobx-react-lite';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
  const { device } = useAppContext();

  return (
    <div className="d-flex flex-wrap">
      {device.devices.map((device) => (
        <DeviceItem device={device} key={device.id} />
      ))}
    </div>
  );
});

export default DeviceList;
