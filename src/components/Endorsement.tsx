export default function Endorsement() {
  return (
    <div>
      {/* Endorsement Section */}
      <section className="py-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Endorsements</h2>
        <ul className="list-disc space-y-4 text-lg text-center max-w-3xl mx-auto">
          <li>
            <a
              href="https://example.com"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Endorsement 1
            </a>
          </li>
          <li>
            <a
              href="https://example.com"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Endorsement 2
            </a>
          </li>
          <li>
            <a
              href="https://example.com"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Endorsement 3
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
