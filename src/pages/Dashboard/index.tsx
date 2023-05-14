import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import DashboardCard, { DashboardCardData } from "./components/DashboardCard";
import "./index.css";

const cards: DashboardCardData[] = [
  {
    imgSrc: "../../assets/student.png",
    title: "Students",
    subTitle: "",

    actions: [
      { name: "New Registration", url: "/dashboard/students/student-editor" },
      { name: "Student Search / Profile", url: "/dashboard/students/student" },
    ],
  },
  {
    imgSrc: "../../assets/payment.jpg",
    title: "Payments",
    subTitle: "",

    actions: [{ name: "Payments", url: "/dashboard/payments/payment" }],
  },
  {
    imgSrc: "../../assets/courses.jpg",
    title: "Couses/Levels",
    subTitle: "",

    actions: [
      {
        name: "Students Course",
        url: "/dashboard/courses/studentcourseeditor",
      },
      {
        name: "Instructor Course",
        url: "/dashboard/courses/instructorcourseeditor",
      },
    ],
  },
  {
    imgSrc: "../../assets/instructor.png",
    title: "Instructors",
    subTitle: "Manage Instructors",

    actions: [
      {
        name: "New Staff Registration",
        url: "/dashboard/instructors/newstaffeditor",
      },
      { name: "Staff", url: "/dashboard/instructors/staffeditor" },
    ],
  },
  {
    imgSrc: "../../assets/lessons.png",
    title: "Lessons",
    subTitle: "Manage Lessons - Assign Ratings",
    actions: [
      {
        name: "Lessons",
        url: "/dashboard/courses/lessons/lesson",
      },
    ],
  },
  {
    imgSrc: "../../assets/messages.png",
    title: "Messages",
    subTitle: "Mesasge From Instructors & Students",
    actions: [
      {
        name: "Messages",
        url: "/dashboard/courses/messages/message",
      },
    ],
  },
];

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="page">
        <IonToolbar className="toolbar">
          EC SWIM
          <IonButton className="signout" fill="clear" routerLink="/home">
            Sign Out
          </IonButton>
        </IonToolbar>

        <IonToolbar className="toolbar">Dashboard</IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="card-wrapper">
          {cards.map((card, index) => (
            <DashboardCard data={card} key={index} />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;