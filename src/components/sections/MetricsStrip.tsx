export default function MetricsStrip() {
  return (
    <section className="py-24 grid grid-cols-1 md:grid-cols-3 text-center border-y border-white/10">
      <div className="py-6">
        <h3 className="text-4xl font-serif">$250M+</h3>
        <p className="text-gray-400 mt-2">Transactions</p>
      </div>

      <div className="py-6 md:border-l md:border-r border-white/10">
        <h3 className="text-4xl font-serif">40+</h3>
        <p className="text-gray-400 mt-2">Redeveloped Properties</p>
      </div>

      <div className="py-6">
        <h3 className="text-4xl font-serif">4.2MW+</h3>
        <p className="text-gray-400 mt-2">Clean Energy Delivered</p>
      </div>
    </section>
  );
}