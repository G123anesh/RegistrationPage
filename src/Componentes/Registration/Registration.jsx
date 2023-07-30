
// eslint-disable-next-line react/prop-types
const Registration = ({ inPutChangeHandler, passwordChangeHandler, loginPageToggle}) => {
 
  const first = (e) => {
    inPutChangeHandler(e.target.value);
  };

  const second = (e) => {
    passwordChangeHandler(e.target.value);
  };

  const third = (e)=>{
   e.preventDefault()//submit honyasathi vachvel
   loginPageToggle()
  }
  
  return (
    <div>
     <form onSubmit={third}>
      <h3>Registration Of User</h3>
      <label>Name:</label>
      <input type="text" onChange={first} />
      <br />
      <br />
      <label>Create Password:</label>
      <input type="password" onChange={second} />
      <br />
      <br />
      <button type="submit">Submit</button>
      </form>
    </div>
   
  );
};
export default Registration;
