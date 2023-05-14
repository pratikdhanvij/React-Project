import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonThumbnail,
  IonToolbar,
} from "@ionic/react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../providers/Firebase/fireStore";
import "./student.css";

const Student: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  const userCollection = collection(db, "students");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollection);
      console.log(data);

      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  return (
    <IonPage>
      <IonHeader className="page">
        <IonToolbar className="toolbar">EC SWIM</IonToolbar>

        <IonToolbar className="toolbar">
          <IonButton className="signout" fill="clear" routerLink="/dashboard">
            Back
          </IonButton>
          Students
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="page">
        {users.map((user) => {
          return (
            <IonCard className="card-data">
              <IonCardHeader>
                <IonItem>
                  <IonThumbnail slot="start">
                    <img
                      alt="Silhouette of mountains"
                      src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                    />
                  </IonThumbnail>
                  <IonList>
                    <IonCardTitle>
                      Name: {`${user.name} ${user.surname}`}
                    </IonCardTitle>
                    <IonCardSubtitle>Email: {user.email}</IonCardSubtitle>
                    <IonCardSubtitle>
                      Year Of Passing: {user.yearOfPassing}
                    </IonCardSubtitle>
                    <IonButton
                      className="signout"
                      fill="clear"
                      routerLink="/dashboard/courses/lessons/lesson"
                    >
                      LESSONS
                    </IonButton>
                    <IonButton
                      className="signout"
                      fill="clear"
                      routerLink="/dashboard/courses/studentcourseeditor"
                    >
                      AWARDS
                    </IonButton>
                    <IonButton
                      className="signout"
                      fill="clear"
                      routerLink="/dashboard/payments/payment"
                    >
                      NEW PAYMENT
                    </IonButton>
                    <IonButton
                      className="signout"
                      fill="clear"
                      routerLink="/dashboard/payments/payment"
                    >
                      PAYMENT
                    </IonButton>
                    <IonButton
                      className="signout"
                      fill="clear"
                      routerLink="/dashboard/students/student-editor"
                    >
                      EDIT
                    </IonButton>
                  </IonList>
                </IonItem>
              </IonCardHeader>
            </IonCard>
          );
        })}
      </IonContent>
    </IonPage>
  );
};

export default Student;
