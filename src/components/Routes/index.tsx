import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import tokenMutation from "src/hooks/mutation/tokenMutation";
import { tokenHandler } from "src/redux/reducers/authReducer";
import { useAppDispatch } from "src/redux/utils/types";
import { successToast } from "src/utils/toast";

const Routes = () => {
  const dispatch = useAppDispatch();
  const responceError = () => {
    console.log("error");
  };

  const { mutate } = tokenMutation();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      mutate(
        { code: tokenResponse.access_token },
        {
          onSuccess: () => {
            dispatch(tokenHandler(tokenResponse.access_token)); //todo
            successToast("token saved");
          },
        }
      );
    },
  });
  return (
    <div className="App">
      <h1>Google calendar api</h1>

      <div>
        <GoogleLogin
          onSuccess={() => null}
          onError={responceError}
          useOneTap
          auto_select
        />
        <button onClick={() => login()}>Sign in with Google 🚀 </button>;
      </div>
    </div>
  );
};

export default Routes;
