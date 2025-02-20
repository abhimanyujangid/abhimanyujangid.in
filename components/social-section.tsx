import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import linkedInLogo from "@/public/svg/linkedin.svg";
import github from "@/public/svg/github.svg";
import discord from "@/public/svg/discord.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type SocialVariant = "twitter" | "linkedin" | "instagram" | "discord";

type SocialButton = {
  id: number;
  name: string;
  handle: string;
  link: string;
  logo: StaticImageData;
  variant: SocialVariant;
  label: string;
};

const SocialSection = () => {
  const socials: SocialButton[] = [
    {
      id: 1,
      name: "Github",
      handle: "abhimanyujangid",
      link: "https://github.com/abhimanyujangid",
      logo: github,
      variant: "twitter",
      label: "Follow",
    },
    {
      id: 2,
      name: "LinkedIn",
      handle: "abhimanyujangid",
      link: "https://github.com/abhimanyujangid",
      logo: linkedInLogo,
      variant: "linkedin",
      label: "Connect",
    },
    {
      id: 3,
      name: "Discord",
      handle: "abhimanyujangid",
      link: "",
      logo: discord,
      variant: "discord",
      label: "Join",
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold text-left mb-3 font-[family-name:var(--font-departure-mono)]">
        Socials
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-none lg:flex lg:flex-wrap mb-8">
        {socials.map((social) => (
          <Card key={social.id} className="rounded-2xl w-full lg:w-48">
            <CardHeader className="pb-0 text-sm">
              <Image
                src={social.logo}
                alt={social.name}
                width={40}
                height={40}
                className="rounded-[10px] mb-2"
              />
              {social.name}
            </CardHeader>
            <CardContent>
              <CardDescription className="pb-3 text-sm font-[family-name:var(--font-departure-mono)]">
                {social.handle}
              </CardDescription>
              <Link href={social.link} target="_blank">
                <Button
                  className="rounded-full text-xs font-semibold"
                  variant={social.variant}
                >
                  {social.label}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SocialSection;
