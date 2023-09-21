import React from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from './SignIn';
import LogOut from './LogOut';

const style={
  nav: `bg-[#424874] sticky top-0 z-50 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`
}

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>ChatterBox</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
