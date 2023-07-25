import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import tokenMutation from "src/hooks/mutation/tokenMutation";
import { tokenHandler } from "src/redux/reducers/authReducer";
import { useAppDispatch } from "src/redux/utils/types";
import { errorToast, successToast } from "src/utils/toast";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const responceError = () => {
    errorToast("error");
  };

  const { mutate } = tokenMutation();

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse, "tokenResponse");
      mutate(
        { code: tokenResponse.access_token },
        {
          onSuccess: () => {
            dispatch(tokenHandler(tokenResponse.access_token));
            successToast("token saved");
            navigate("/");
          },
        },
      );
    },
  });
  return (
    <div>
      <GoogleLogin onSuccess={() => null} onError={responceError} useOneTap auto_select />
      <button onClick={() => login()}>Sign in with Google 🚀 </button>
    </div>
  );
};

export default Login;
