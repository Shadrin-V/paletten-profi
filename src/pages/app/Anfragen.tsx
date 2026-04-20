import InquirySplitView from "@/components/app/InquirySplitView";
import { ANFRAGEN } from "./inquiriesData";

const Anfragen = () => (
  <InquirySplitView
    variant="anfrage"
    items={ANFRAGEN}
    infoText="Hier erstellen Sie schnell und einfach neue Anfragen und vergleichen die Angebote unserer Partner. Wählen Sie eine Anfrage aus, um die Details zu sehen."
    newButtonLabel="NEUE ANFRAGE"
    positionsTitle="Anfragepositionen"
  />
);

export default Anfragen;
