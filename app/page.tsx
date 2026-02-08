import Image from "next/image";

const PHONE_DISPLAY = "(832) 622-4916";
const PHONE_TEL = "8326224916";
const EMAIL = "info@instacleanllc.net";

const services = [
  { title: "Move-in / Move-out", desc: "Perfect for renters, homeowners, and realtors on a deadline." },
  { title: "Deep Cleaning", desc: "Detailed clean of kitchens, baths, floors, baseboards, and more." },
  { title: "Garage Cleaning", desc: "Sweep-out, trash removal, wipe-downs, and organization-ready results." },
  { title: "Post-Construction", desc: "Dust, debris, and polish after renovations or new builds." },
  { title: "Residential & Commercial", desc: "Recurring or one-time cleaning for homes and small businesses." },
  { title: "Airbnb Turnovers", desc: "Fast resets that keep reviews high and guests happy." },
];

const specials = [
  { title: "$100 Cleaning", desc: "1 Bedroom / 1 Bath Apartment (Standard Cleaning)" },
  { title: "Same-Day Deep Clean", desc: "Limited availability — call/text to confirm today's openings." },
  { title: "Landlord / Inspection Clean", desc: "Show-ready results before walkthroughs and tenant move-outs." },
];

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const primary =
    "bg-[color:var(--brand-blue)] text-white hover:bg-[color:var(--brand-blue2)] focus:ring-[color:var(--brand-blue2)] shadow-lg shadow-blue-200";
  const secondary =
    "bg-white/85 text-slate-900 hover:bg-white focus:ring-slate-300 ring-1 ring-slate-200 shadow-sm";
  return (
    <a className={`${base} ${variant === "primary" ? primary : secondary}`} href={href}>
      {children}
    </a>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
      <span className="h-2 w-2 rounded-full bg-(--brand-green)" />
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <div className="bubble-bg">
      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white ring-1 ring-slate-200">
              <Image
                src="/Instaclean.PNG"
                alt="Instaclean logo"
                fill
                className="object-cover"
                sizes="40px"
                priority
              />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-extrabold tracking-tight text-slate-900">
                Instaclean LLC
              </p>
              <p className="text-xs text-slate-600">Houston • Residential & Commercial</p>
            </div>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <Button href={`tel:${PHONE_TEL}`} variant="secondary">
              Call {PHONE_DISPLAY}
            </Button>
            <Button href="#contact">Get a Quote</Button>
          </div>

          <div className="sm:hidden">
            <Button href={`tel:${PHONE_TEL}`}>Call</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 sparkle-dots" />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-14 md:grid-cols-2 md:py-20">
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-2">
              <Chip>Same-day service available</Chip>
              <Chip>Move-out / inspection ready</Chip>
              <Chip>Fast replies</Chip>
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
              You relax. <span className="text-(--brand-blue)">We clean.</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
              Trusted, family-owned cleaning serving Houston. From deep cleans to
              move-outs, we make homes and spaces feel fresh, bright, and show-ready.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={`tel:${PHONE_TEL}`}>Call Now</Button>
              <Button href={`sms:${PHONE_TEL}`} variant="secondary">
                Text Us
              </Button>
              <Button href="#services" variant="secondary">
                View Services
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-slate-200">
                <p className="text-xs font-semibold text-slate-600">Phone</p>
                <a className="mt-1 block text-lg font-extrabold text-slate-900" href={`tel:${PHONE_TEL}`}>
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-slate-200">
                <p className="text-xs font-semibold text-slate-600">Email</p>
                <a className="mt-1 block text-lg font-extrabold text-slate-900" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-56 w-56 rounded-full bg-(--brand-green)/20 blur-2xl" />
            <div className="absolute -left-10 -bottom-10 h-56 w-56 rounded-full bg-(--brand-blue2)/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl bg-white/70 p-3 ring-1 ring-slate-200 shadow-xl shadow-blue-100">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-44 overflow-hidden rounded-2xl">
                  <Image
                    src="/brand/flyer-1.jpg"
                    alt="Instaclean flyer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>
                <div className="relative h-44 overflow-hidden rounded-2xl">
                  <Image
                    src="/brand/flyer-4.jpg"
                    alt="Instaclean flyer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>
                <div className="relative col-span-2 h-52 overflow-hidden rounded-2xl">
                  <Image
                    src="/brand/flyer-3.jpg"
                    alt="Instaclean flyer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-white/80 p-4 ring-1 ring-slate-200">
                <p className="text-sm font-semibold text-slate-700">
                  Need it cleaned fast? We can often handle same-day requests.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full bg-(--brand-gold) px-4 py-2 text-sm font-extrabold text-slate-900 hover:brightness-95"
                >
                  Book Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 pb-6">
        <div className="rounded-3xl bg-white/70 ring-1 ring-slate-200 p-6 md:p-10">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-black tracking-tight text-slate-900">
                Our Services
              </h2>
              <p className="mt-1 text-slate-700">
                Residential and commercial cleaning built for speed, quality, and peace of mind.
              </p>
            </div>
            <div className="flex gap-2">
              <Button href={`tel:${PHONE_TEL}`} variant="secondary">Call</Button>
              <Button href={`sms:${PHONE_TEL}`}>Text</Button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white/85 p-5 ring-1 ring-slate-200">
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-(--brand-green)/15 ring-1 ring-(--brand-green)/30">
                    <span className="h-3 w-3 rounded-sm bg-(--brand-green)" />
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">{s.title}</h3>
                    <p className="mt-1 text-sm text-slate-700">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-linear-to-r from-(--brand-blue) to-(--brand-blue2) p-6 text-white">
            <p className="text-sm font-semibold opacity-95">Popular request</p>
            <p className="mt-1 text-xl font-black">Move-out & inspection cleans</p>
            <p className="mt-2 text-sm opacity-95">
              Landlord showing? Final walkthrough? We’ll get it looking show-ready.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-900 hover:brightness-95"
              >
                Get a Quote
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center rounded-full bg-white/15 px-5 py-3 text-sm font-extrabold text-white ring-1 ring-white/30 hover:bg-white/20"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Specials */}
      <section className="mx-auto max-w-6xl px-4 pb-6">
        <div className="rounded-3xl bg-white/70 ring-1 ring-slate-200 p-6 md:p-10">
          <h2 className="text-2xl font-black tracking-tight text-slate-900">Special Offers</h2>
          <p className="mt-1 text-slate-700">Quick pricing promos that people actually respond to.</p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {specials.map((x) => (
              <div key={x.title} className="rounded-2xl bg-white/85 p-5 ring-1 ring-slate-200">
                <p className="text-sm font-extrabold text-(--brand-blue)">{x.title}</p>
                <p className="mt-2 text-sm text-slate-700">{x.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={`sms:${PHONE_TEL}`}>Text to Book</Button>
            <Button href="#contact" variant="secondary">Ask a Question</Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-white/80 ring-1 ring-slate-200 p-6 md:p-10">
          <h2 className="text-2xl font-black tracking-tight text-slate-900">Contact</h2>
          <p className="mt-1 text-slate-700">
            Fastest way: call or text. You can also email details/photos.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <a
              className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 hover:shadow-md transition"
              href={`tel:${PHONE_TEL}`}
            >
              <p className="text-xs font-semibold text-slate-600">Call</p>
              <p className="mt-1 text-lg font-extrabold text-slate-900">{PHONE_DISPLAY}</p>
              <p className="mt-2 text-sm text-slate-700">Tap to call instantly.</p>
            </a>

            <a
              className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 hover:shadow-md transition"
              href={`sms:${PHONE_TEL}`}
            >
              <p className="text-xs font-semibold text-slate-600">Text</p>
              <p className="mt-1 text-lg font-extrabold text-slate-900">{PHONE_DISPLAY}</p>
              <p className="mt-2 text-sm text-slate-700">Tap to message. Send photos if needed.</p>
            </a>

            <a
              className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 hover:shadow-md transition"
              href={`mailto:${EMAIL}`}
            >
              <p className="text-xs font-semibold text-slate-600">Email</p>
              <p className="mt-1 text-lg font-extrabold text-slate-900">{EMAIL}</p>
              <p className="mt-2 text-sm text-slate-700">Tap to email details.</p>
            </a>
          </div>

          {/* Optional ultra-simple “form” without backend: mailto */}
          <div className="mt-8 rounded-2xl bg-linear-to-r from-white to-white/60 p-5 ring-1 ring-slate-200">
            <p className="text-sm font-extrabold text-slate-900">Quick message template</p>
            <p className="mt-1 text-sm text-slate-700">
              Tap this and it will open an email with a pre-filled subject/body:
            </p>
            <div className="mt-4">
              <Button
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                  "Cleaning Quote Request"
                )}&body=${encodeURIComponent(
                  "Hi Instaclean,\n\nI’d like a quote for:\n- Type of cleaning (move-out/deep/garage/etc):\n- Address/area:\n- Bedrooms/Bathrooms:\n- Preferred date/time:\n- Notes:\n\nThank you!"
                )}`}
              >
                Email for a Quote
              </Button>
            </div>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            “Colossians 3:23” can be included in the footer if you want it visible on the site.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/40 bg-white/50">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Instaclean LLC. All rights reserved.</p>
          <p className="text-slate-500">Colossians 3:23</p>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-3 left-0 right-0 z-50 sm:hidden">
        <div className="mx-auto max-w-md px-4">
          <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white/80 p-3 ring-1 ring-slate-200 backdrop-blur-md">
            <a
              className="rounded-xl bg-(--brand-blue) py-3 text-center text-sm font-extrabold text-white"
              href={`tel:${PHONE_TEL}`}
            >
              Call
            </a>
            <a
              className="rounded-xl bg-white py-3 text-center text-sm font-extrabold text-slate-900 ring-1 ring-slate-200"
              href={`sms:${PHONE_TEL}`}
            >
              Text
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
