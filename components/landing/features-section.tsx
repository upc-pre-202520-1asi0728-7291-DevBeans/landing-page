export function FeaturesSection() {
  return (
      <section id="product" className="py-20 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">
              About our <span className="text-[#1DD1A1]">product</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Learn about some of the features that we offer you on our platform.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-5xl mb-4">👛</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Reduces loss</h3>
              <p className="text-gray-600 leading-relaxed">Reduce losses due to rejections in international standards.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Improve rankings</h3>
              <p className="text-gray-600 leading-relaxed">Eliminates subjectivity in manual classification.</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Products</h3>
              <p className="text-gray-600 leading-relaxed">Increases producer profitability by optimizing quality.</p>
            </div>
          </div>

          <div className="mt-12 max-w-5xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4"></h3>
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                  src="https://www.youtube.com/embed/ewp0oIa4cMU"
                  title="Video del producto"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
  )
}