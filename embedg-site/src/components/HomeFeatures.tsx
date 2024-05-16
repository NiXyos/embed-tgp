import React from "react";

import {
  CloudIcon,
  CommandLineIcon,
  CursorArrowRippleIcon,
  EyeDropperIcon,
  SparklesIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";

const features = [
  {
    name: "Enregistrer les messages",
    description:
      "Enregistrez vos messages dans notre cloud et ayez-les disponibles sur tous vos appareils. Vous pouvez également les partager avec vos amis!",
    href: "/docs/save-messages",
    icon: CloudIcon,
  },
  {
    name: "Image de marque personnalisée",
    description:
      "Personnalisez vos intégrations avec votre propre marque. Vous pouvez même modifier le nom d'utilisateur et l'avatar du message à votre guise!",
    href: "/docs/custom-branding",
    icon: EyeDropperIcon,
  },
  {
    name: "Composants interactifs",
    description:
      "Ajoutez de l'interactivité à vos messages avec des boutons et des menus sélectionnés. Vous pouvez attribuer des rôles ou envoyer des réponses personnalisées à vos utilisateurs !",
    href: "/docs/interactive-components",
    icon: CursorArrowRippleIcon,
  },
  {
    name: "Marque blanche",
    description:
      "Intégrez votre propre bot dans TGP Embed pour modifier le nom d'utilisateur et l'avatar des réponses aux boutons, et sélectionnez les menus !",
    href: "/docs/white-label",
    icon: TagIcon,
    premium: true,
  },
  {
    name: "Commandes personnalisées",
    description:
      "Ajoutez vos propres commandes avec une logique et des réponses personnalisées au générateur intégré que les membres de votre serveur peuvent utiliser !",
    href: "/docs/custom-commands",
    icon: CommandLineIcon,
    premium: true,
  },
  {
    name: "Assistant IA",
    description:
      "Utilisez notre puissant assistant IA pour rédiger rapidement de nouveaux messages et booster votre créativité !",
    href: "/docs/ai-assistant",
    icon: SparklesIcon,
    premium: true,
  },
];

export default function HomeFeatures(): JSX.Element {
  return (
    <div className="bg-dark-2 px-16">
      <div className="max-w-7xl mx-auto text-white py-20 lg:py-32">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-32 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <div className="text-base font-semibold leading-7 text-white">
                  <div
                    className={clsx(
                      "mb-6 flex h-10 w-10 items-center justify-center rounded-lg",
                      feature.premium ? "bg-orange-400" : "bg-blurple"
                    )}
                  >
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-base mb-1">{feature.name}</h3>
                </div>
                <div className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto ml-0">{feature.description}</p>
                  <p>
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-400"
                    >
                      Apprendre encore plus <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
