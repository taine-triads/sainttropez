import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import heroBuilding from "@/assets/hero-building.jpg";
import floorPlan from "@/assets/floor-plan.jpg";
import sbDuoLogo from "@/assets/sb-duo-logo.avif";
import realSacada from "@/assets/real-sacada.jpg";
import realGaragem1 from "@/assets/real-garagem-1.jpg";
import realGaragem2 from "@/assets/real-garagem-2.jpg";
import realBicicletario from "@/assets/real-bicicletario.jpg";
import realPlayground from "@/assets/real-playground.jpg";
import realGaragem3 from "@/assets/real-garagem-3.jpg";

const WHATSAPP_NUMBER = "5541999999999";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá! Tenho interesse em conhecer o Residencial Saint Tropez em Pinhais. Gostaria de falar com um consultor."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Residencial Saint Tropez Pinhais | Últimas Unidades Alto Padrão" },
      {
        name: "description",
        content:
          "More no Saint Tropez em Pinhais. Apartamentos de luxo com 3 quartos, suíte e acabamento premium. Restam apenas 2 unidades. Entre em contato agora!",
      },
      { property: "og:title", content: "Residencial Saint Tropez Pinhais | Últimas Unidades" },
      {
        property: "og:description",
        content:
          "Apartamentos de luxo com 3 quartos e suíte em Pinhais. Apenas 2 unidades disponíveis. Agende uma visita.",
      },
      { property: "og:image", content: heroBuilding },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBuilding },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Landing,
});

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <div className="h-px w-12 bg-gold/60" />
      <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <div className="h-px w-12 bg-gold/60" />
    </div>
  );
}

function Landing() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Highlights />
      <FloorPlanSection />
      <Gallery />
      <Scarcity />
      <Location />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <div className="flex flex-col leading-none">
          <span className="font-serif text-xl text-white md:text-2xl">Saint Tropez</span>
          <span className="text-[10px] uppercase tracking-luxury text-gold/90">Residencial</span>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 border border-gold/60 px-5 py-2 text-xs uppercase tracking-luxury text-white transition hover:bg-gold hover:text-navy-deep"
        >
          Falar com Consultor
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroBuilding}
        alt="Fachada do Residencial Saint Tropez em Pinhais ao entardecer"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy-deep/55 to-navy-deep/95" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-32 text-center text-white">
        <span className="animate-fade-up text-[11px] uppercase tracking-luxury text-gold">
          SB Duo • Pinhais — Paraná
        </span>
        <GoldDivider />
        <h1 className="animate-fade-up font-serif text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
          Residencial Saint Tropez:
          <span className="mt-2 block italic text-gold/95">
            A Exclusividade do Alto Padrão em Pinhais.
          </span>
        </h1>
        <p className="mt-8 max-w-2xl animate-fade-up text-base font-light leading-relaxed text-white/80 md:text-lg">
          Sua última oportunidade de morar em um ícone de sofisticação.
          <br className="hidden md:block" /> Apenas{" "}
          <span className="text-gold">2 unidades disponíveis</span>.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-luxury text-navy-deep shadow-luxury transition hover:bg-gold-soft"
        >
          <span>Falar com Consultor Especialista</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
        <a
          href="#agendar"
          className="mt-12 text-[11px] uppercase tracking-luxury text-white/60 hover:text-gold"
        >
          Agendar Visita ↓
        </a>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    {
      n: "01",
      title: "Apartamentos Tipo",
      desc: "3 quartos espaçosos com suíte master, projetados para o conforto absoluto da família.",
    },
    {
      n: "02",
      title: "Living Integrado",
      desc: "Ampla área social integrando sala de jantar e estar para receber com elegância.",
    },
    {
      n: "03",
      title: "Layout Inteligente",
      desc: "Planta mobiliada que demonstra excelente circulação e aproveitamento de cada metro.",
    },
    {
      n: "04",
      title: "Privacidade Absoluta",
      desc: "Apenas três unidades por pavimento tipo, garantindo silêncio e exclusividade total.",
    },
  ];
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] uppercase tracking-luxury text-gold">
            O Empreendimento
          </span>
          <h2 className="mt-4 font-serif text-3xl text-navy-deep md:text-5xl">
            Detalhes que <em className="text-gold">definem</em> um endereço único.
          </h2>
          <GoldDivider />
        </div>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
          {items.map((it) => (
            <div
              key={it.n}
              className="group flex flex-col gap-4 bg-background p-10 transition hover:bg-secondary"
            >
              <span className="font-serif text-xl text-gold">{it.n}</span>
              <h3 className="font-serif text-2xl text-navy-deep">{it.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloorPlanSection() {
  return (
    <section className="gradient-navy py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center md:px-12">
        <div>
          <span className="text-[11px] uppercase tracking-luxury text-gold">
            Living & Interiores
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
            Espaços que respiram <em className="text-gold">sofisticação</em>.
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-white/75">
            Cada ambiente foi pensado para receber, contemplar e viver. Materiais nobres,
            iluminação natural abundante e acabamentos premium compõem uma experiência
            residencial digna de um ícone.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/80">
            {[
              "Sacada gourmet com churrasqueira",
              "Acabamentos em porcelanato e detalhes em azul cobalto",
              "Vista aberta para a vizinhança arborizada",
              "Excelente ventilação e iluminação natural",
            ].map((i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="h-1 w-1 rotate-45 bg-gold" />
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img
            src={realSacada}
            alt="Sacada gourmet do apartamento Residencial Saint Tropez"
            width={1600}
            height={1100}
            loading="lazy"
            className="relative z-10 w-full object-cover shadow-luxury"
          />
          <div className="absolute -inset-3 border border-gold/40" />
        </div>
      </div>

      <div className="mx-auto mt-24 grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center md:px-12">
        <div className="order-2 md:order-1 relative">
          <div className="bg-white p-4 md:p-6 shadow-luxury">
            <img
              src={floorPlan}
              alt="Planta mobiliada do apartamento de 3 quartos do Residencial Saint Tropez"
              width={1920}
              height={1200}
              loading="lazy"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="text-[11px] uppercase tracking-luxury text-gold">
            Pavimento Tipo
          </span>
          <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
            Uma planta <em className="text-gold">inteligente</em>, pensada para a sua rotina.
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-white/75">
            A configuração de apenas três unidades por andar garante a privacidade que poucos
            empreendimentos no Paraná oferecem. Cada apartamento foi desenhado para maximizar
            luz, fluidez e o aproveitamento de cada metro quadrado.
          </p>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: realGaragem1, alt: "Garagem coberta ampla", span: "md:col-span-2 md:row-span-2" },
    { src: realBicicletario, alt: "Bicicletário exclusivo dos moradores", span: "" },
    { src: realPlayground, alt: "Playground infantil ao ar livre", span: "" },
    { src: realGaragem2, alt: "Vagas de garagem demarcadas", span: "" },
    { src: realGaragem3, alt: "Acesso interno da garagem", span: "" },
  ];
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] uppercase tracking-luxury text-gold">
            Áreas Comuns
          </span>
          <h2 className="mt-4 font-serif text-3xl text-navy-deep md:text-5xl">
            Estrutura completa para o <em className="text-gold">seu dia a dia</em>.
          </h2>
          <GoldDivider />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Garagem coberta, bicicletário, playground e áreas pensadas para o
            conforto de toda a família.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {images.map((img) => (
            <div
              key={img.alt}
              className={`group relative overflow-hidden bg-secondary ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-navy-deep/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scarcity() {
  return (
    <section id="agendar" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-[11px] uppercase tracking-luxury text-gold animate-shimmer">
              Oportunidade Final
            </span>
            <div className="mt-6 flex items-baseline gap-6">
              <span className="font-serif text-[8rem] leading-none text-navy-deep md:text-[12rem]">
                02
              </span>
              <div className="pb-4">
                <p className="font-serif text-xl text-navy-deep md:text-2xl">
                  últimas unidades
                </p>
                <p className="text-xs uppercase tracking-luxury text-muted-foreground">
                  disponíveis
                </p>
              </div>
            </div>
            <GoldDivider />
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              O Saint Tropez está prestes a esgotar. Apenas duas famílias terão o privilégio
              de chamar este endereço de lar. Reserve agora a sua visita exclusiva.
            </p>
            <LiveCounter />
          </div>
          <ScheduleForm />
        </div>
      </div>
    </section>
  );
}

function ScheduleForm() {
  return <ScheduleFormImpl />;
}

function LiveCounter() {
  // Countdown to a fixed deadline (7 days from first visit, persisted)
  const [now, setNow] = useState<number>(() => Date.now());
  const [deadline] = useState<number>(() => {
    if (typeof window === "undefined") return Date.now() + 7 * 86400_000;
    const KEY = "st_deadline";
    const stored = window.localStorage.getItem(KEY);
    if (stored) {
      const n = Number(stored);
      if (!Number.isNaN(n) && n > Date.now()) return n;
    }
    const d = Date.now() + 7 * 86400_000;
    window.localStorage.setItem(KEY, String(d));
    return d;
  });

  const [viewers, setViewers] = useState<number>(() => 8 + Math.floor(Math.random() * 6));

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    const v = setInterval(() => {
      setViewers((prev) => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const next = prev + delta;
        return Math.min(17, Math.max(6, next));
      });
    }, 4000);
    return () => {
      clearInterval(t);
      clearInterval(v);
    };
  }, []);

  const diff = Math.max(0, deadline - now);
  const days = Math.floor(diff / 86400_000);
  const hours = Math.floor((diff % 86400_000) / 3600_000);
  const minutes = Math.floor((diff % 3600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");

  const blocks = [
    { label: "Dias", value: pad(days) },
    { label: "Horas", value: pad(hours) },
    { label: "Min", value: pad(minutes) },
    { label: "Seg", value: pad(seconds) },
  ];

  return (
    <div className="mt-10 border border-gold/40 bg-secondary/40 p-6">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
        </span>
        <span className="text-[10px] uppercase tracking-luxury text-navy-deep">
          Oferta encerra em
        </span>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 md:gap-3">
        {blocks.map((b) => (
          <div
            key={b.label}
            className="flex flex-col items-center bg-navy-deep py-3 text-white md:py-4"
          >
            <span className="font-serif text-2xl leading-none tabular-nums md:text-4xl">
              {b.value}
            </span>
            <span className="mt-1 text-[9px] uppercase tracking-luxury text-gold/80">
              {b.label}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-gold/20 pt-4 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
          <span className="tabular-nums">{viewers}</span> pessoas vendo agora
        </span>
        <span className="uppercase tracking-luxury text-gold">2 de 18 restantes</span>
      </div>
    </div>
  );
}

function ScheduleFormImpl() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim().slice(0, 100);
    const phone = String(fd.get("phone") ?? "").trim().slice(0, 30);
    const time = String(fd.get("time") ?? "").trim().slice(0, 60);
    if (!name || !phone) return;
    const msg = encodeURIComponent(
      `Olá! Sou ${name}. Gostaria de agendar uma visita ao Residencial Saint Tropez.\nTelefone (WhatsApp): ${phone}\nMelhor horário: ${time || "a combinar"}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 shadow-luxury md:p-10 border border-border"
    >
      <h3 className="font-serif text-2xl text-navy-deep md:text-3xl">Agende sua visita</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Receba atendimento exclusivo do nosso consultor especialista.
      </p>
      <div className="mt-8 space-y-5">
        <Field label="Nome completo" name="name" type="text" required maxLength={100} />
        <Field label="Telefone (WhatsApp)" name="phone" type="tel" required maxLength={30} />
        <Field
          label="Melhor horário para contato"
          name="time"
          type="text"
          placeholder="Ex: manhã, após 18h..."
          maxLength={60}
        />
      </div>
      <button
        type="submit"
        className="mt-8 w-full bg-navy-deep py-4 text-xs uppercase tracking-luxury text-white transition hover:bg-navy"
      >
        {submitted ? "Enviado — abrindo WhatsApp" : "Agendar Visita Exclusiva"}
      </button>
      <p className="mt-4 text-center text-[10px] uppercase tracking-luxury text-muted-foreground">
        Resposta em até 1 hora útil
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
  maxLength,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  maxLength?: number;
}) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-luxury text-navy-deep">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength}
        className="mt-2 w-full border-b border-border bg-transparent py-3 font-light text-navy-deep outline-none transition focus:border-gold"
      />
    </label>
  );
}

function Location() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-12">
        <span className="text-[11px] uppercase tracking-luxury text-gold">
          Pinhais — Paraná
        </span>
        <h2 className="mt-4 font-serif text-3xl text-navy-deep md:text-5xl">
          Uma região em <em className="text-gold">plena valorização</em>.
        </h2>
        <GoldDivider />
        <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-muted-foreground">
          Pinhais consolida-se como um dos endereços mais valorizados da região metropolitana
          de Curitiba. Infraestrutura completa, fácil acesso e qualidade de vida em um polo
          que continua crescendo — um investimento sólido para as próximas décadas.
        </p>
        <div className="mt-12 inline-flex flex-col items-center gap-3 border border-gold/40 px-10 py-6">
          <span className="text-[10px] uppercase tracking-luxury text-muted-foreground">
            Realização
          </span>
          <img
            src={sbDuoLogo}
            alt="SB Duo - Construtora"
            width={200}
            height={80}
            loading="lazy"
            className="h-16 w-auto object-contain"
          />
          <span className="text-[10px] uppercase tracking-luxury text-gold">
            Construindo Patrimônio
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep py-16 text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3 md:px-12">
        <div>
          <span className="font-serif text-2xl text-white">Saint Tropez</span>
          <img
            src={sbDuoLogo}
            alt="SB Duo"
            width={140}
            height={56}
            loading="lazy"
            className="mt-4 h-10 w-auto object-contain brightness-0 invert opacity-80"
          />
          <p className="mt-4 text-sm font-light leading-relaxed text-white/60">
            Residencial de alto padrão em Pinhais — PR. Realização SB Duo.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-luxury text-gold">Contato</h4>
          <ul className="mt-4 space-y-2 text-sm font-light text-white/70">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                WhatsApp: (41) 99999-9999
              </a>
            </li>
            <li>contato@sbduo.com.br</li>
            <li>Pinhais — Paraná</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-luxury text-gold">Institucional</h4>
          <ul className="mt-4 space-y-2 text-sm font-light text-white/70">
            <li>
              <a
                href="https://sbduo.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                sbduo.com.br
              </a>
            </li>
            <li>CRECI/PR — XXXXX-J</li>
            <li>Imagens meramente ilustrativas</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-6 text-center text-[10px] uppercase tracking-luxury text-white/40 md:px-12">
        © {new Date().getFullYear()} SB Duo · Residencial Saint Tropez
      </div>
    </footer>
  );
}

function StickyWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxury transition hover:scale-110 md:h-16 md:w-16"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 md:h-8 md:w-8">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
}
