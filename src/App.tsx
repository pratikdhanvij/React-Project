import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Student from "./pages/Dashboard/Students/student";


/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import StudentEditor from "./pages/Dashboard/Students/student-editor";
import Payment from "./pages/Dashboard/Payments/payment";
import NewStaffEditor from "./pages/Dashboard/Instructors/newStaffEditor";
import StaffEditor from "./pages/Dashboard/Instructors/StaffEditor";
import InstructorCourseEditor from "./pages/Dashboard/Courses/instructorCourseEditor";
import StudentCourseEditor from "./pages/Dashboard/Courses/studentCourseEditor";
import Messages from "./pages/Dashboard/Messages/message";
import Lessons from "./pages/Dashboard/Lessons/lesson";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>

        <Route exact path="/dashboard/students/student">
          <Student />
        </Route>

        <Route exact path="/dashboard/students/student-editor">
          <StudentEditor />
        </Route>
        <Route exact path="/dashboard/payments/payment">
          <Payment />
        </Route>
        <Route exact path="/dashboard/instructors/newstaffeditor">
          <NewStaffEditor />
        </Route>
        <Route exact path="/dashboard/instructors/staffeditor">
          <StaffEditor />
        </Route>
        <Route exact path="/dashboard/courses/instructorcourseeditor">
          <InstructorCourseEditor />
        </Route>
        <Route exact path="/dashboard/courses/studentcourseeditor">
          <StudentCourseEditor />
        </Route>
        <Route exact path="/dashboard/courses/messages/message">
          <Messages />
        </Route>
        <Route exact path="/dashboard/courses/lessons/lesson">
          <Lessons />
        </Route>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
