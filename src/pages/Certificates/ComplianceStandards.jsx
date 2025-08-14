import {
  Shield,
  Leaf,
  CheckCircle
} from "lucide-react"


const ComplianceStandards = () => {

    // Compliance Standards
const complianceStandards = [
  {
    name: "FSSAI License",
    description:
      "Licensed by the Food Safety and Standards Authority of India for safe food handling and sales",
    icon: CheckCircle,
  },
  {
    name: "AGMARK Certification",
    description:
      "Certified under AGMARK standards by the Directorate of Marketing & Inspection, Government of India",
    icon: Shield,
  },
  {
    name: "BIS Certification",
    description:
      "Quality certified by the Bureau of Indian Standards for product safety and compliance",
    icon:Leaf,
  },
];

  return (
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-green-600 mb-6">
              Compliance Standards
            </h2>
            <p className="text-xl text-black">
              Additional regulatory compliance and industry standards we
              maintain for global market access.
            </p>
          </div>

          <div
           
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {complianceStandards.map((standard) => {
              const Icon = standard.icon
              return (
                <div
                  key={standard.name}
                  className="compliance-item glass card p-6 card-3d border border-gray-300 bg-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-black rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Icon size={24} color="white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-black mb-2">
                        {standard.name}
                      </h3>
                      <p className="text-black text-sm">
                        {standard.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
  )
}

export default ComplianceStandards