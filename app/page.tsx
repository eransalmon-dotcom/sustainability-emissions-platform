export default function HomePage() {
  return (
    <main style={{ maxWidth: 960, margin: "40px auto", fontFamily: "sans-serif", padding: "0 20px" }}>
      <h1>Sustainability Emissions Reporting</h1>
      <p>Factory-level annual reporting and group emissions consolidation.</p>

      <section style={{ marginTop: 32 }}>
        <h2>MVP Status</h2>
        <ul>
          <li>Reporting year configuration</li>
          <li>Factory and country structure</li>
          <li>Energy input and unit conversion</li>
          <li>kCO2e factory and tCO2e group reporting</li>
          <li>Submission and approval workflow</li>
        </ul>
      </section>
    </main>
  );
}
