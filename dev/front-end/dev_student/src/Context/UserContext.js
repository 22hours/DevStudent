import { createContext } from 'react';

const UserContext = 
createContext({ userState: {}, setUserState: () => {} });

export default UserContext;