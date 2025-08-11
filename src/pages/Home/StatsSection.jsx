import { Globe, Award, Star, Truck } from "lucide-react"

const stats = [
  { icon: Globe, value: "50+", label: "Countries Served" },
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Star, value: "99.9%", label: "Quality Rate" },
  { icon: Truck, value: "24-48h", label: "Response Time" },
]

export default function StatsSection() {
  return (
    <section className="py-20 px-6 bg-green-600">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="stat-card card p-6 text-center bg-white border border-black"
              >
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} color="white" />
                </div>
                <div className="text-3xl font-bold text-black mb-2">
                  {stat.value}
                </div>
                <div className="text-black font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
