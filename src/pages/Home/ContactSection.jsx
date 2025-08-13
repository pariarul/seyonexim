import { Mail, Phone, MapPin, Check } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    company: "",
    contactPerson: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbzhyMljSWBa-pyDoxnjmB7Ks93PAKVJEWx8IKb_dgSlcJA25k6JW3BET2qEtMv6SP13Kw/exec";

  const validate = () => {
    const newErrors = {};

    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.contactPerson.trim())
      newErrors.contactPerson = "Contact Person is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = "Invalid email address";
    }

    if (formData.phone) {
      if (!/^\d{10}$/.test(formData.phone.trim())) {
        newErrors.phone = "Phone must be 10 digits";
      }
    }

    if (formData.quantity) {
      if (!/^\d+$/.test(formData.quantity.trim())) {
        newErrors.quantity = "Quantity must be a number";
      }
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(WEB_APP_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.text();
      console.log("Server response:", result);

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          company: "",
          contactPerson: "",
          email: "",
          phone: "",
          product: "",
          quantity: "",
          message: "",
        });
        setTimeout(() => setShowSuccess(false), 5000);
        setErrors({});
      } else {
        alert("Error: " + result);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <section className="py-20 px-6 bg-green-600">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
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
                <div className="text-black">Mumbai, Maharashtra, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="form-container card p-8 border border-black bg-white">
          <h3 className="text-2xl font-bold text-black mb-6">Request Quote</h3>
          {showSuccess && (
            <div className="p-4 mb-4 border border-black bg-green-200 text-black flex items-center gap-2">
              <Check size={20} />
              <span>Thank you! We'll contact you within 12-24 hours.</span>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-black mb-2">Company *</label>
                <input
                  type="text"
                  value={formData.company}
                   placeholder="Enter your company name"
                  onChange={(e) => updateFormData("company", e.target.value)}
                  className={`w-full border p-2 rounded ${
                    errors.company ? "border-red-600" : "border-black"
                  }`}
                  required
                />
                {errors.company && (
                  <p className="text-red-600 mt-1 text-sm">{errors.company}</p>
                )}
              </div>
              <div>
                <label className="block text-black mb-2">Contact Person *</label>
                <input
                  type="text"
                  value={formData.contactPerson}
                   placeholder="Enter your Name"
                  onChange={(e) =>
                    updateFormData("contactPerson", e.target.value)
                  }
                  className={`w-full border p-2 rounded ${
                    errors.contactPerson ? "border-red-600" : "border-black"
                  }`}
                  required
                />
                {errors.contactPerson && (
                  <p className="text-red-600 mt-1 text-sm">
                    {errors.contactPerson}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-black mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                   placeholder="Enter your email address"
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className={`w-full border p-2 rounded ${
                    errors.email ? "border-red-600" : "border-black"
                  }`}
                  required
                />
                {errors.email && (
                  <p className="text-red-600 mt-1 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-black mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  maxLength={10}
                  onChange={(e) => {
                    // Allow only digits
                    const val = e.target.value.replace(/\D/g, "");
                    updateFormData("phone", val);
                  }}
                  className={`w-full border p-2 rounded ${
                    errors.phone ? "border-red-600" : "border-black"
                  }`}
                  placeholder="Enter your mobile number"
                />
                {errors.phone && (
                  <p className="text-red-600 mt-1 text-sm">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
  <label className="block text-black mb-2">Product Interest</label>
  <select
    value={formData.product}
    onChange={(e) => updateFormData("product", e.target.value)}
    className="w-full border border-black p-2 rounded"
  >
    <option value="">Select Product </option>
    <option value="Nutmeg">Nutmeg</option>
    <option value="Nutmace">Nutmace</option>
    <option value="Cardamom">Cardamom</option>
    <option value="Black Pepper">Black Pepper</option>
    <option value="Turmeric">Turmeric</option>
    <option value="Dry Red Chilli">Dry Red Chilli</option>
    <option value="Cloves">Cloves</option>
    <option value="Coriander">Coriander</option>
    <option value="Cinnamon">Cinnamon</option>
    <option value="Star Anise">Star Anise</option>
  </select>
</div>

              <div>
                <label className="block text-black mb-2">Quantity</label>
                <input
                  type="text"
                  value={formData.quantity}
                   placeholder="Enter Quantity"
                  onChange={(e) => {
                    // Allow only digits
                    const val = e.target.value.replace(/\D/g, "");
                    updateFormData("quantity", val);
                  }}
                  className={`w-full border p-2 rounded ${
                    errors.quantity ? "border-red-600" : "border-black"
                  }`}
                />
                {errors.quantity && (
                  <p className="text-red-600 mt-1 text-sm">{errors.quantity}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-black mb-2">Message</label>
              <textarea
                value={formData.message}
                 placeholder="Enter your message"
                onChange={(e) => updateFormData("message", e.target.value)}
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
    </section>
  );
}
