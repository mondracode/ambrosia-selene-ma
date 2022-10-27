import React, {useState} from 'react';

interface IAuth {
  token?: string;
  username?: string;
  name?: string;
}

export type AuthContextType = {
  auth: IAuth;
  saveAuth: (auth: IAuth) => void;
  getAuth: () => void;
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

// @ts-ignore
const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState<IAuth>({
    token: '',
    username: '',
    name: '',
  });

  const saveAuth = (newAuth: IAuth) => {
    setAuth(newAuth);
  };

  const getAuth = (): IAuth => {
    return auth;
  };

  return (
    <AuthContext.Provider value={{auth, saveAuth, getAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

///////////////

// @ts-ignore
// const AAuthProvider = ({children}) => {
//   const [auth, setAuthState] = useState(getEmptyAuthObject());
//
//   // Get current auth state from AsyncStorage
//   const getAuthState = async () => {
//     try {
//       const authDataString = (await AsyncStorage.getItem('auth')) || '';
//       const authData: Auth = JSON.parse(authDataString) || {};
//       // Configure axios headers
//       configureAxiosHeaders(authData.token);
//       setAuthState(authData);
//     } catch (err) {
//       setAuthState(getEmptyAuthObject());
//     }
//   };
//
//   // Update AsyncStorage & context state
//   const setAuth = async (newAuth: Auth) => {
//     try {
//       await AsyncStorage.setItem('auth', JSON.stringify(auth));
//       // Configure axios headers
//       configureAxiosHeaders(newAuth.token);
//       setAuthState(auth);
//     } catch (error) {
//       await Promise.reject(error);
//     }
//   };
//
//   useEffect(() => {
//     getAuthState();
//   }, []);
//
//   return (
//     <AuthContext.Provider value={{auth, setAuth}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
//
// const getEmptyAuthObject = (): Auth => {
//   return {name: '', token: '', username: ''};
// };
//
// const configureAxiosHeaders = (token: string | undefined) => {
//   if (!token) token = '';
//   axios.defaults.headers['X-Auth-Token'] = token;
// };
//
