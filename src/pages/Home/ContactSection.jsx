import { Mail, Phone, MapPin, Check } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    company: "",
    contactPerson: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData({
      company: "",
      contactPerson: "",
      email: "",
      phone: "",
      product: "",
      quantity: "",
      message: "",
    })
    setTimeout(() => setShowSuccess(false), 5000)
  }

  const updateFormData = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }))

  return (
    <section className="py-20 px-6 bg-green-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text- mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-white mb-8">
              Ready to source premium spices? Our export specialists are here to
              help with samples, pricing, and custom requirements.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <Mail size={24} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-black">Email Us</div>
                  <div className="text-black">hello@spicevault.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <Phone size={24} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-black">Call Us</div>
                  <div className="text-black">+91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <MapPin size={24} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-black">Visit Us</div>
                  <div className="text-black">Kochi, Kerala, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="form-container card p-8 border border-black bg-white">
              <h3 className="text-2xl font-bold text-black mb-6">
                Request Quote
              </h3>

              {showSuccess && (
                <div className="p-4 mb-4 border border-black bg-green-200 text-black flex items-center gap-2">
                  <Check size={20} />
                  <span>Thank you! We'll contact you within 24-48 hours.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black mb-2">Company *</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        updateFormData("company", e.target.value)
                      }
                      className="w-full border border-black p-2 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-black mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      value={formData.contactPerson}
                      onChange={(e) =>
                        updateFormData("contactPerson", e.target.value)
                      }
                      className="w-full border border-black p-2 rounded"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        updateFormData("email", e.target.value)
                      }
                      className="w-full border border-black p-2 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-black mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        updateFormData("phone", e.target.value)
                      }
                      className="w-full border border-black p-2 rounded"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-black mb-2">
                      Product Interest
                    </label>
                    <input
                      type="text"
                      value={formData.product}
                      onChange={(e) =>
                        updateFormData("product", e.target.value)
                      }
                      className="w-full border border-black p-2 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-black mb-2">Quantity</label>
                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={(e) =>
                        updateFormData("quantity", e.target.value)
                      }
                      className="w-full border border-black p-2 rounded"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-black mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      updateFormData("message", e.target.value)
                    }
                    className="w-full border border-black p-2 rounded"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white w-full py-4 text-lg rounded-lg"
                >
                  {isSubmitting ? "Sending Request..." : "Send Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
