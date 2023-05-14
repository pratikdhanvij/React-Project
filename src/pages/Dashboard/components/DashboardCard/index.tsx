import {
  IonTitle,
  IonCardSubtitle,
  IonItem,
  IonList,
  IonCard,
  IonCardHeader,
} from "@ionic/react";

import "./index.css";

interface DashboardCardAction {
  name: string;
  url: string;
}
export interface DashboardCardData {
  imgSrc: string;
  title: string;
  subTitle?: string;
  actions: DashboardCardAction[];
}
interface DashboardCardProps {
  data: DashboardCardData;
}
const DashboardCard = ({ data }: DashboardCardProps) => {
  return (
    <IonCard className="card-containt">
      <IonCardHeader>
        <img src={data.imgSrc} alt=""></img>
        <IonTitle> {data.title}</IonTitle>
        <IonCardSubtitle className="subtitle">{data.subTitle}</IonCardSubtitle>
      </IonCardHeader>

      <IonList>
        {data.actions?.map((action) => (
          <IonItem routerLink={action.url} key={action.name}>
            {action.name}
          </IonItem>
        ))}
      </IonList>
    </IonCard>
  );
};

export default DashboardCard;
