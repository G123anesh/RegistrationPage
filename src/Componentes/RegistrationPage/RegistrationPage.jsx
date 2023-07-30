import { useState } from "react";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";

const RegistartionPage = () => {
  const [text, setText] = useState("");
  const [pass, setPass] = useState(" ");
  const [user, setUser] = useState(" ");
  const [upass, setUserpass] = useState(" ");
  const [login, setStatus] = useState(" ");

  const [flogin, setFlogin] = useState(true);
//first method
  const first = (str) => {
    setText(str);
  };
//second method
  const second = (nss) => {
    setPass(nss);
  };

  const sixth = (ustr) => {
    setUser(ustr);
  };
  const seventh = (upass) => {
    setUserpass(upass);
  };

  const nine = (e) => {
    e.preventDefault();
    if (user && upass) {
      setStatus("User is Login");
    } else {
      setStatus("User is not Login");
    }
  };
//toggle
  const toggle = () => {
    
    setFlogin(!flogin);//
  };

  return (
    <div>
      {flogin ? (//false hai ye second condition dikhv
        <Registration
          inPutChangeHandler={first}
          passwordChangeHandler={second}
          loginPageToggle={toggle}
        />
      ) : (
        <Login
          handleUsername={sixth}
          handlePassword={seventh}
          buttonClickHandler={nine}
          loginPageToggle={toggle}
        />
      )}
    </div>
  );
};
export default RegistartionPage;
