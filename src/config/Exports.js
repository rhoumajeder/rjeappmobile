import axios from "axios";
// BASE URL
export const baseUrl = "https://rjeapptest.herokuapp.com/";

export const getToken = async (email, pass) => {
  return await axios({
    method: "POST",
    url: baseUrl + "api/auth/token",
    data: {
      email: email,
      password: pass,
    },
  });
};
