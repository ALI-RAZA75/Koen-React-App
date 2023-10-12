import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import Logo from '@assets/svgs/Logo';
import ArrowDown from '@assets/svgs/ArrowDown';
import Search from '@assets/svgs/Search';
import Dropdown from 'react-bootstrap/Dropdown';
import './style.scss';
import CloseSvg from '@assets/svgs/Close';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledNavbar = styled(Navbar)`
  padding: 10px 30px;
  z-index: 50;

  svg {
    cursor: pointer;
    filter: drop-shadow(0px 1px rgba(0, 0, 0, 0.2));
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -ms-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
  }
`;

const StyledNavLink = styled(Nav.Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  $sm: boolean;
};

const StyledNavContent = styled.span<Props>`
  color: white !important;
  font-size: ${(props) => (props.$sm ? '14px' : '16px')};
  line-height: ${(props) => (props.$sm ? '21px' : '24px')};
  font-weight: ${(props) => (props.$sm ? '400' : '500')};
  text-shadow: 0px 1px rgba(0, 0, 0, 0.2);
`;

const StyledNavButton = styled.button`
  height: 30px;
  margin: auto;
  text-shadow: 0px 1px rgba(0, 0, 0, 0.2);
  padding: 0px 20px !important;

  font-size: 15px;
  line-height: 18px;
  border: 1px solid white;
`;

const SearchContainer = styled(Container)`
  justify-content: start;
  min-width: 70px;
  max-width: 150px;
`;

const StyledNavDropDown = styled(Dropdown)`
  :after {
    display: none;
  }
`;

const StyledNavDropDownToggle = styled(Dropdown.Toggle)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const subMenu = [
  {
    title: 'Buyer',
    url: '/',
  },
  {
    title: 'Seller',
    url: '/',
  },
  {
    title: 'Investors',
    url: '/',
  },
  {
    title: 'Contact',
    url: '/',
  },
];

type NavbarItemProps = {
  title: string;
  url?: string;
  dropDown?: boolean;
  sm?: boolean;
  subItems?: Array<{
    title: string;
    url: string;
  }>;
};

const NavbarItem = ({
  title,
  url = '/',
  dropDown = false,
  sm = false,
  subItems = [],
}: NavbarItemProps) => {
  return (
    <>
      {dropDown ? (
        <StyledNavDropDown>
          <StyledNavDropDownToggle className='bg-transparent border-0 p-0'>
            <StyledNavContent $sm={sm}>{title}</StyledNavContent>
            <ArrowDown />
          </StyledNavDropDownToggle>

          <Dropdown.Menu>
            {subItems.map((item, index) => (
              <Dropdown.Item href={item.url} key={index}>
                {item.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </StyledNavDropDown>
      ) : (
        <StyledNavLink href={url}>
          <StyledNavContent $sm={sm}>{title}</StyledNavContent>
        </StyledNavLink>
      )}
    </>
  );
};

const NavbarComponent = () => {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  return (
    <StyledNavbar
      expanded={expanded}
      expand='xl'
      className='bg-body-tertiary position-absolute w-100 '
    >
      <Navbar.Brand href='#'>
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id='navbarScroll'>
        <Nav className='me-auto my-2 my-lg-0' navbarScroll>
          <Navbar.Toggle
            onClick={() => setExpanded(!expanded)}
            className='text-white ml-auto'
          >
            <CloseSvg />
          </Navbar.Toggle>
          <NavbarItem title='Buyer' dropDown subItems={subMenu} />
          <NavbarItem title='Seller' dropDown subItems={subMenu} />
          <NavbarItem title='Investors' dropDown subItems={subMenu} />
          <NavbarItem title='Property Management' dropDown subItems={subMenu} />
          <SearchContainer className='search'>
            <Search />
          </SearchContainer>
          <NavbarItem title='About' dropDown subItems={subMenu} sm={true} />
          <NavbarItem title='Agents' sm={true} />
          <StyledNavButton
            type='button'
            className='contact btn btn-primary rounded-pill bg-transparent'
          >
            Contact
          </StyledNavButton>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default NavbarComponent;
