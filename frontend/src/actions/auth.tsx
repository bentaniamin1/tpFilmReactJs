import axios from "axios";





export function  Logout() {
    return {
        type: 'Logout'
    }

}
export function  Login() {
    return {
        type: 'Login'
    }

}

export function  Register(payload: any) {
    return {
        type: 'Register',
        payload: payload
    }

}

// interface LoginFormPropsInterface {
//     username: any,
//     password: any,
// }




// export const Register = () => {
//     return (username: any, password: any) => {
//         return axios({
//             url: 'http://localhost:2345/register.php',
//             method: 'post',
//             withCredentials: true,
//             data: new URLSearchParams({
//                 username: username,
//                 password: password
//             })
//         })
//             .then(res => res.data)
//     }
      
// };

// export const startLogin = (email, password) => {
//   return async dispatch => {
//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_URL}/users/login`,
//         {
//           email,
//           password
//         }
//       );

//       const user = {
//         displayName: response.data.displayName,
//         id: response.data._id,
//         token: response.headers["x-auth"],
//         role: response.data.role
//       };
//       localStorage.setItem("auth", JSON.stringify(user));

//       dispatch(
//         login(response.data.displayName, response.data._id, response.data.role)
//       );
//     } catch (e) {
//       throw new Error(e.response.data.error);
//     }
//   };
// };

// export const startLogout = () => {
//   return async dispatch => {
//     try {
//       const { token } = JSON.parse(localStorage.getItem("auth"));
//       localStorage.removeItem("auth");
//       await axios.delete(
//         `${process.env.REACT_APP_API_URL}/users/me/token`,
//         {
//           headers: {
//             "x-auth": token
//           }
//         }
//       );
//       dispatch(logout());
//     } catch (e) {
//       localStorage.removeItem("auth");
//       dispatch(logout());
//     }
//   };
// };

// export const logout = () => ({
//   type: "LOGOUT"
// });