import { makeAutoObservable } from 'mobx';

const createDeviceStore = () => {
  return makeAutoObservable({
    types: [
      { id: 1, name: 'Холодильники' },
      { id: 2, name: 'Смартфоны' },
    ],
    brands: [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
    ],
    devices: [
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',
      },
      {
        id: 2,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',
      },
      {
        id: 3,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',
      },
    ],

    setTypes(types) {
      this.types = types;
    },
    setBrands(brands) {
      this.brands = brands;
    },
    setDevices(devices) {
      this.devices = devices;
    },
  });
};

export const deviceStore = createDeviceStore();
