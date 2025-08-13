
import {
  Award,
  Leaf,
  Star,
  
} from "lucide-react"
export default function QualityPromise(){
    return(
       <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-green-700 mb-6">
            Our Quality Promise
          </h2>
          <p className="text-xl text-black mb-16 max-w-4xl mx-auto">
            Every spice in our collection meets the highest international standards for
            quality, purity, and safety.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass card p-8 text-center border border-gray-400">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Leaf size={32} color="white" />
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-3">Sustainable Sourcing</h3>
              <p className="text-black">
                Direct partnerships with certified organic farms and fair trade cooperatives.
              </p>
            </div>

            <div className="glass card p-8 text-center border border-gray-400">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Award size={32} color="white" />
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-3">Quality Certified</h3>
              <p className="text-black">
                 HACCP, and organic certifications ensure premium quality standards.
              </p>
            </div>

            <div className="glass card p-8 text-center border border-gray-400">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Star size={32} color="white" />
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-3">Premium Grade</h3>
              <p className="text-black">
                Hand-selected, carefully processed, and rigorously tested for export quality.
              </p>
            </div>
          </div>
        </div>
      </section> 
    )
}