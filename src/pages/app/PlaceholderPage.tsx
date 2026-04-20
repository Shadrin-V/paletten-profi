import { Construction } from "lucide-react";

interface Props {
  title: string;
  description?: string;
}

const PlaceholderPage = ({ title, description = "Dieser Bereich befindet sich im Aufbau." }: Props) => (
  <div className="bg-card rounded-lg border border-[#E8EEE9] shadow-sm p-12 lg:p-20 text-center">
    <div className="inline-flex h-14 w-14 rounded-2xl bg-[#F0F7F3] items-center justify-center mb-5">
      <Construction className="h-6 w-6 text-forest" strokeWidth={1.75} />
    </div>
    <h1 className="text-2xl font-extrabold text-ink mb-2">{title}</h1>
    <p className="text-muted-foreground max-w-md mx-auto">{description}</p>
  </div>
);

export default PlaceholderPage;
