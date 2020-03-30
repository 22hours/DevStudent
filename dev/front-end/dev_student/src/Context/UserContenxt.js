import { createContext } from 'react';

const UserContext = createContext({ user: {}, setUser: () => {} });

export default UserContext;