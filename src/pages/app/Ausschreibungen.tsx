import InquirySplitView from "@/components/app/InquirySplitView";
import { AUSSCHREIBUNGEN } from "./inquiriesData";

const Ausschreibungen = () => (
  <InquirySplitView
    variant="ausschreibung"
    items={AUSSCHREIBUNGEN}
    infoText="Hier erstellen Sie Ausschreibungen für längerfristige Bedarfe und vergleichen die Angebote unserer Partner über den gesamten Zeitraum."
    newButtonLabel="NEUE AUSSCHREIBUNG"
    positionsTitle="Ausschreibungspositionen"
  />
);

export default Ausschreibungen;
