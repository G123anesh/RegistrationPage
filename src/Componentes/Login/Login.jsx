// eslint-disable-next-line react/prop-types
const Login = ({ handleUsername, handlePassword, loginPageToggle, buttonClickHandler}) => {

  const fourth = (e) => {
    handleUsername(e.target.value);
  };

  const fifth = (e) => {
    handlePassword(e.target.value);
  };

  const eigth = ()=>{
   buttonClickHandler()
  }
  return (
    <div>
        <form onSubmit={eigth}>
      <h3>Login</h3>
      <label>Name:</label>
      <input type="text" onChange={fourth} />
      <br />
      <br />
      <label>Password:</label>
      <input type="password" onChange={fifth} />
      <br />
      <br />
      <button type="submit">Login</button>
      </form>
      <br /><br />
      <button onClick={loginPageToggle}>Go To Registartion</button>
    </div>
  );
};
export default Login;
