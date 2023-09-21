import React from 'react';
import Navbar from './components/Navbar';

import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Chat from './components/Chat';

const style ={
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `bg-[#dbdfea] flex rounded-md overflow-auto flex-col h-[90vh] mt-10 shadow-xl border-none relative`
}

function App() {
  const [user] = useAuthState(auth)
 // console.log(user);
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
