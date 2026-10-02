export function LeaderboardTableAllPlayersHeader() {
  return (
    <div className="px-4 py-2">
      <div className="text-2xl font-bold tracking-tight">All Players</div>
    </div>
  );
}

// import { useRef } from "react";
// import { ListItem } from "@components/list-item";
// import {
//   IonButton,
//   IonIcon,
//   IonModal,
//   IonRadio,
//   IonRadioGroup,
// } from "@ionic/react";
// import { settingsOutline } from "ionicons/icons";

// export function PgaTourLeaderboardTableAllPlayersHeader() {
//   const modal = useRef<HTMLIonModalElement>(null);

//   return (
//     <>
//       <div className="flex flex-row items-center justify-between py-2 pr-1 ps-4">
//         <div className="text-2xl font-bold tracking-tight">All Players</div>
//         <div className="flex flex-row items-center">
//           <div className="text-sm font-medium text-[#767676]">Time in GMT</div>
//           <IonButton id="open-modal" color="dark" fill="clear" size="small">
//             <IonIcon
//               className="flex h-5 w-5 items-center justify-center rounded-full p-1 ring-1 ring-[#767676]"
//               icon={settingsOutline}
//             />
//           </IonButton>
//         </div>
//       </div>
//       <IonModal
//         ref={modal}
//         trigger="open-modal"
//         initialBreakpoint={1}
//         breakpoints={[0, 1]}
//         style={{ "--height": "auto" }}
//       >
//         <div className="flex flex-col items-center px-4 py-8">
//           <div className="text-lg font-bold leading-snug tracking-tight">
//             Settings
//           </div>
//           <div className="w-full">Time zone</div>
//           <IonRadioGroup value="custom-checked" className="w-full">
//             <ListItem>
//               <IonRadio value="start" justify="start">
//                 Event time
//               </IonRadio>
//             </ListItem>
//             <ListItem>
//               <IonRadio value="end" justify="start">
//                 My time
//               </IonRadio>
//             </ListItem>
//           </IonRadioGroup>
//           <IonButton
//             className="h-10 w-full"
//             color="dark"
//             shape="round"
//             size="small"
//             onClick={() => modal.current?.dismiss()}
//           >
//             Done
//           </IonButton>
//         </div>
//       </IonModal>
//     </>
//   );
// }
