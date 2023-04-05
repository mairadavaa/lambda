import { createContext, useState } from "react";
export const Login_data = createContext(null);
function Context({ children }) {
    const [data, setData] = useState();
  
    return (
      <Login_data.Provider value={{ data, setData }}>
        {children}
      </Login_data.Provider>
    );
  }
  export default Context