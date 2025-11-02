import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppContext } from 'Context';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from 'utils/consts';

const NavBar = observer(() => {
  const { user } = useAppContext();
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          UB Store
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant={'outline-light'}
              className="ms-2"
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button
              variant={'outline-light'}
              onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
