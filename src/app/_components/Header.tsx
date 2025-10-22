import React from 'react';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-primary-beige text-primary-brown ">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-6 py-12 text-center lg:gap-16 lg:py-16">
        {/* <div className="flex justify-center">
          <div className="w-48 sm:w-60 md:w-72 lg:w-80 xl:w-96"> */}
        <Logo />
        {/* </div>
        </div> */}
        <div className="flex flex-col items-center gap-8 lg:gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-brown/55 sm:text-sm">
              kézműves sütemények · hódmezővásárhely
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-primary-brown sm:text-4xl lg:text-[2.6rem]">
              Egyedi süteményválogatás minden fontos alkalomra – házias ízekkel,
              figyelmes tálalással.
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-primary-brown/85 sm:text-lg">
              Esküvők, céges rendezvények, kávézók vagy akár egy meghitt családi
              ünnep – a Barátfüle csapata gondoskodik róla, hogy a vendégeid
              emlékezetes falatokkal távozzanak.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold uppercase tracking-[0.28em] text-primary-brown/75">
            <span className="rounded-full border border-primary-brown/30 px-6 py-3">
              Esküvők & ünnepek
            </span>
            <span className="rounded-full border border-primary-brown/30 px-6 py-3">
              Céges események
            </span>
            <span className="rounded-full border border-primary-brown/30 px-6 py-3">
              Kávézók mindennapjai
            </span>
          </div>
          <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.35em] text-primary-brown/60 md:flex-row md:gap-6 md:text-sm">
            <span>Sütve szeretettel</span>
            <span className="hidden md:inline">·</span>
            <span className="md:ml-0 md:inline">Hazai alapanyagokból</span>
            <span className="hidden md:inline">·</span>
            <span className="md:ml-0 md:inline">Egyedi igényeidre szabva</span>
          </div>
        </div>
      </div>
    </header>
  );
}
