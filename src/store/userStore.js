import { makeAutoObservable } from 'mobx';

const createUserStore = () => {
  return makeAutoObservable({
    isAuth: true,
    user: {},

    setIsAuth(bool) {
      this.isAuth = bool;
    },
    setUser(user) {
      this.user = user;
    },
  });
};

export const userStore = createUserStore();
