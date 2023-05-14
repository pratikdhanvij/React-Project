import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonButton,
  IonToolbar,
} from "@ionic/react";
import "./index.css";
import { Link } from "react-router-dom";

import GoogleSignInButton from "../../components/GoogleSignInButton";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/home">Home</IonButton>
        <IonButton routerLink="/dashboard">Dashboard</IonButton>
        <nav>
          <Link to="/home">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <GoogleSignInButton />
      </IonContent>
    </IonPage>
  );
};

export default Login;
