
const validate = (Email,password) => {
  const isEmailvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email);
  const ispasswordvalid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  
  if(!isEmailvalid){
    return "Invalid email or password. Please try again"
  }
  if(!ispasswordvalid){
    return "Invalid Password"
  }
  return null;
}

export default validate