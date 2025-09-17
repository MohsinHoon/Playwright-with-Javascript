const generateRandomEmail = () => {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000);
  return `test${timestamp}${randomNum}@gmail.com`;
};
const email = 'mohsiIn.ali@gmail.com'
export const AuthData = {
  signUpDetails:{
    gender:"Male",
    firstName:"Mohsin",
    lastName:"Khan",
    email:email,
    password:"123456",
    confirmPassword:"12345"
  },
  login:{
    email:email,
    password:"123456"
  }
}
