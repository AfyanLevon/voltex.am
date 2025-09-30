// src/App.jsx
import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-12">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Որակ՝ նախագծից մինչև բանալի
          <span className="block text-black/60 text-2xl md:text-3xl mt-2">
            Quality from Blueprint to Keys
          </span>
        </h1>
        <p className="mt-4 text-black/70 max-w-2xl">
          Voltex LLC — շինարարական ամբողջական փաթեթ՝ նախագծումից և կազմակերպումից մինչև ավարտուն հանձնում։
          Հստակ ժամկետներ, թափանցիկ բյուջե, վերահսկելի որակ։
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="mailto:info@voltex.am?subject=Գնահատման%20խնդրանք%20Voltex%20LLC" className="inline-flex items-center rounded-xl bg-black text-white px-5 py-3 text-sm hover:opacity-90">
            Ստանալ գնահատում
          </a>
          <a href="#portfolio" className="inline-flex items-center rounded-xl border px-5 py-3 text-sm hover:bg-black hover:text-white transition">
            Կատարված աշխատանքներ
          </a>
        </div>
      </div>
    </section>
  );
}

function InnovationStrip() {
  return (
    <section className="py-12 bg-gray-50 border-y border-black/5">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        <div className="flex justify-center">
          <img src="/img/man-blueprint.png" alt="Engineer with blueprint" className="max-h-64 object-contain" loading="lazy" />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold leading-snug">
            Վոլտեքս ընկերության հետ կարող եք ստանալ ժամանակակից և նորարարական լուծումներ ցանկացած բարդության նախագծերում
          </h2>
          <p className="text-black/70 mt-3">
            With Voltex, you can get modern and innovative solutions for projects of any complexity.
          </p>
        </div>
        <div className="flex justify-center">
          <img src="/img/man-key.png" alt="Handover keys" className="max-h-64 object-contain" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <InnovationStrip />
      </main>
      <Footer />
    </div>
  );
}
