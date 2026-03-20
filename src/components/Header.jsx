import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';

const Header = ({isLoggedIn, setIsLoggedIn, signInButton}) => {
    const [user, setUser] = useContext(UserContext);
  const handleLogOut = () =>{
    setIsLoggedIn(false);
    setUser({});
  }
  return (
    <>

      {
        isLoggedIn ? (
          <>
            <div
                className='bg-amber-50 flex flex-row
                items-center justify-end gap-2 pr-8
                py-4'
            >
                <img src={user.picture}
                    alt='user profile photo'
                    className='rounded-full w-10'
                />
                <button
                className="border py-1 px-3
                    rounded-lg my-2 bg-blue-500 text-white"
                onClick={handleLogOut}
                >
                Log Out
                </button>
            </div>
            <h1 className='text-3xl text-center'>Welcome back, {user.given_name}</h1>
          </>
        ):(
          <>
          <div
            className='flex flex-row items-center
            justify-end gap-2 pr-8 py-4'
          >
            <div ref={signInButton}></div>
          </div>
            <p className='text-right text-xs mr-2'>** Note: only test users can login using google account</p>
          </>
        )
      }
      <h2 className="text-3xl mt-5 py-2 text-center">MP3 - Podcasts</h2>
    </>
  )
}

export default Header;