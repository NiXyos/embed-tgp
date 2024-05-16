import { SparklesIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function HomeHero(): JSX.Element {
  return (
    <div className="bg-blurple md:px-16">
      <div className="flex max-w-7xl mx-auto py-20 flex-col lg:flex-row-reverse items-center">
        <div className="lg:w-1/2 px-6 lg:pr-0 lg:pl-12 xl:pl-20 mb-10 lg:mb-0">
          <img src="/img/example.jpg" alt="" className="rounded-lg shadow-lg" />
        </div>
        <div className="lg:w-1/2 px-12">
          <h1 className="text-gray-100 font-bold text-6xl leading-tight mb-6">
          La meilleure façon de créer des intégrations Discord !
          </h1>
          <h2 className="text-gray-300 font-light text-lg mb-8">
          Créez facilement des messages intégrés pour votre serveur Discord et donnez
            leur votre propre marque à l'aide de webhooks.
          </h2>
          <div className="flex items-center">
            <a
              className="px-5 py-3 text-xl rounded-md border-2 border-solid border-gray-300 flex items-center text-gray-200 space-x-3 hover:text-white hover:border-white hover:bg-white/20 transition-colors hover:no-underline flex-none"
              href="/app"
            >
              <SparklesIcon className="h-5 w-5" />
              <div className="text-white">Ouvrir application</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
