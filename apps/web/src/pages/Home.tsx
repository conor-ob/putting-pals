import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Home.css";

import { TournamentHeader } from "@pkg/ui/tournament";

const Home: React.FC = () => {
  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>PGA Tour</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              <div className="text-4xl font-bold leading-snug tracking-tight">
                PGA Tour
              </div>
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonItem lines="none" button detail>
            <TournamentHeader
              className="py-4"
              tournamentName="Masters Tournament"
              tournamentLogo="https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r014.png"
              courses={[{ courseName: "Augusta National Golf Club" }]}
              roundDisplay="R2"
              roundStatus="SUSPENDED"
              roundStatusColor="YELLOW"
              roundStatusDisplay="Suspended"
              tournamentStatus="IN_PROGRESS"
            />
          </IonItem>
          <IonItem lines="none" button detail>
            <TournamentHeader
              className="py-4"
              tournamentName="U.S. Open"
              tournamentLogo="https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r026.png"
              courses={[
                {
                  courseName: "Pinehurst Resort & Country Club (Course No. 2)",
                },
              ]}
              roundDisplay="R1"
              roundStatus="GROUPINGS_OFFICIAL"
              roundStatusColor="BLUE"
              roundStatusDisplay="Groupings Official"
              tournamentStatus="NOT_STARTED"
            />
          </IonItem>
          <IonItem lines="none" button detail>
            <TournamentHeader
              className="py-4"
              tournamentName="The Open Championship"
              tournamentLogo="https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r100.png"
              courses={[{ courseName: "Royal Troon" }]}
              roundDisplay="R3"
              roundStatus="IN_PROGRESS"
              roundStatusColor="RED"
              roundStatusDisplay="In Progress"
              tournamentStatus="IN_PROGRESS"
            />
          </IonItem>
          <IonItem lines="none" button detail>
            <TournamentHeader
              className="py-4"
              tournamentName="Arnold Palmer Invitational presented by Mastercard"
              tournamentLogo="https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r009.png"
              courses={[
                { courseName: "Arnold Palmer's Bay Hill Club & Lodge" },
              ]}
              roundDisplay="R4"
              roundStatus="OFFICIAL"
              roundStatusColor="GREEN"
              roundStatusDisplay="Official"
              tournamentStatus="IN_PROGRESS"
            />
          </IonItem>
          <IonItem lines="none" button detail>
            <TournamentHeader
              className="py-4"
              tournamentName="Wells Fargo Championship"
              tournamentLogo="https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r480.png"
              courses={[{ courseName: "Quail Hollow Club" }]}
              roundDisplay="R2"
              roundStatus="COMPLETE"
              roundStatusColor="BLUE"
              roundStatusDisplay="Complete"
              tournamentStatus="IN_PROGRESS"
            />
          </IonItem>
          <IonItem lines="none" button detail>
            <TournamentHeader
              className="py-4"
              tournamentName="the Memorial Tournament presented by Workday"
              tournamentLogo="https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r023.png"
              courses={[{ courseName: "Muirfield Village Golf Club" }]}
              roundDisplay="R1"
              roundStatus="UPCOMING"
              roundStatusColor="GRAY"
              roundStatusDisplay="Upcoming"
              tournamentStatus="NOT_STARTED"
            />
          </IonItem>
          <IonItem lines="none" button detail>
            <TournamentHeader
              className="py-4"
              tournamentName="THE PLAYERS Championship"
              tournamentLogo="https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:r000.png/tournaments/logos/r011.png"
              courses={[
                { courseName: "TPC Sawgrass (THE PLAYERS Stadium Course)" },
              ]}
              roundDisplay="R4"
              roundStatus="OFFICIAL"
              roundStatusColor="GREEN"
              roundStatusDisplay="Official"
              tournamentStatus="COMPLETED"
            />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
