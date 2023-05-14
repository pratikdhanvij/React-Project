import { IonButton } from "@ionic/react";
import { useHistory } from "react-router";
import SignInWithGoogle from "../../providers/Firebase/googleSignin";
import "./index.css";

const GoogleSignInButton = () => {
  const history = useHistory();

  const signInWithGoogleHandler = () => {
    SignInWithGoogle()
      .then((result) => {
        console.log("Dashboard");
        history.push("/dashboard");
      })
      .catch((err) => {
        console.log("login");
        history.push("/login");
      });
  };


  return (
    <IonButton className="btn" fill="clear" onClick={signInWithGoogleHandler}>
      <img className="googleImg"  src={"../../assets/google.png"} alt=""></img> Sign In With Google
    </IonButton>
  );
};

export default GoogleSignInButton;
