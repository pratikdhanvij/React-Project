import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./index.css";
import GoogleSignInButton from "../../components/GoogleSignInButton";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen className="pageHome">
        <div className="container">
          <img
            className="img"
            src="../../assets/ecswimlogo.png"
            alt="logo"
          ></img>
          <h1 className="text">WELCOME TO EC SWIM</h1>
          <GoogleSignInButton />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
