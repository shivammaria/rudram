
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import content from "@/app/content/partners.json";
import Image from "next/image";

const AwsLogo = () => (
    <svg viewBox="-5 -5 87 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto md:h-10">
      <path d="M14.053 25.464c-2.34 0-3.9-.38-5.316-1.012l.822-3.225c1.139.632 2.784 1.011 4.493 1.011 2.214 0 3.353-.948 3.353-2.15 0-1.138-.759-1.77-3.226-2.402-3.1-.758-5.123-1.834-5.123-4.806 0-2.846 2.34-4.806 6.134-4.806 1.96 0 3.479.316 4.807.948l-.759 3.099c-.948-.506-2.403-.822-3.795-.822-1.833 0-2.846.822-2.846 1.77 0 1.012.949 1.518 3.415 2.214 3.226.885 4.933 2.15 4.933 4.932 0 3.352-2.53 5.249-6.892 5.249zM30.435 25.02h-4.048l-4.11-12.394h4.301l2.023 7.146 1.96-7.146h4.048l2.024 7.146 1.897-7.146h4.11l-4.174 12.395h-4.048l-2.023-7.02-1.96 7.02zM56.68 19.329c0 3.605-2.34 6.134-6.26 6.134-3.605 0-6.07-2.34-6.07-6.07 0-3.92 2.72-6.26 6.45-6.26.632 0 1.265.063 1.897.19v-4.616h4.048v10.622h-.065zm-4.047-2.403c-.443-.126-1.012-.19-1.518-.19-1.518 0-2.403.949-2.403 2.53 0 1.454.759 2.34 2.214 2.34.822 0 1.518-.443 1.707-1.012v-3.668z" fill="#232F3E"/>
      <path d="M38.165 35.532c7.716 0 14.166-3.731 16.254-8.916l3.224 1.391c-2.529 7.59-10.181 12.016-19.478 12.016-9.044 0-16.633-4.427-19.478-11.13l3.225-1.392c2.15 5.249 8.537 9.031 16.253 9.031z" fill="#FF9900"/>
      <path d="M59.48 27.429l1.897 3.541-3.1 2.53 1.203-6.071zM15.12 27.429l-3.1-2.53 1.897-3.541 1.203 6.071z" fill="#FF9900"/>
    </svg>
);

const MicrosoftLogo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" className="h-8 w-auto md:h-10">
        <path fill="#f25022" d="M1 1h9v9H1z"/>
        <path fill="#7fba00" d="M11 1h9v9h-9z"/>
        <path fill="#00a4ef" d="M1 11h9v9H1z"/>
        <path fill="#ffb900" d="M11 11h9v9h-9z"/>
    </svg>
);

const XeroLogo = () => (
    <Image src="/images/xero.png" alt="Xero Logo" width={80} height={40} className="h-8 w-auto md:h-10 object-contain" />
);

const logos: { [key: string]: React.ReactNode } = {
  aws: <AwsLogo />,
  microsoft: <MicrosoftLogo />,
  xero: <XeroLogo />,
};

const PartnerCard = ({ partner }: { partner: typeof content.partners[0] }) => (
    <Card className="glass-morphic card-glow border-primary/20 flex flex-col items-center p-6 text-center h-full transition-all duration-300 ease-in-out hover:-translate-y-2">
        <CardHeader className="p-0 mb-6 items-center w-full">
            <div className="h-16 w-full flex items-center justify-center">
                {logos[partner.logo]}
            </div>
        </CardHeader>
        <CardContent className="p-0 flex-grow">
            <p className="text-muted-foreground text-sm md:text-base">{partner.description}</p>
        </CardContent>
    </Card>
);

export default function CloudPartners() {
  return (
    <section id="partners" className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-foreground/90 to-foreground/60">
            {content.headline}
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            {content.subheadline}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {content.partners.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
