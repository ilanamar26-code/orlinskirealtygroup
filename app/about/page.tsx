export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1200px] space-y-24 px-4 py-10 sm:px-6 lg:px-8">
      <section className="space-y-6 max-w-3xl">
        <h1 className="font-heading text-5xl md:text-6xl font-bold text-black">About</h1>
        <p className="text-graphite text-lg">
          Orlinski Realty Group curates branded residences and hospitality partnerships,
          bringing together the artistic vision of Richard Orlinski with visionary real estate
          developers.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="font-heading text-4xl font-bold text-black">Our Mission</h2>
        <div className="space-y-4 text-graphite">
          <p>
            We believe that real estate can be elevated to art. Through strategic brand licensing
            and design integration, we help developers create unique, differentiated properties that
            resonate with high-net-worth buyers and collectors.
          </p>
          <p>
            Our approach is selective, confidential, and focused on long-term brand protection. We
            work with a limited number of partners each year to ensure each project receives the
            attention and quality it deserves.
          </p>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="font-heading text-4xl font-bold text-black">The Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-semibold text-black">Richard Orlinski</h3>
            <p className="text-graphite">
              French contemporary artist known for his monumental sculptures and faceted geometry
              aesthetic. His work is collected globally and has been exhibited in major cities
              worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
