import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-()]{8,}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
        
        setSubmitSuccess(true);
        console.log('Form submitted successfully:', formData);
      } catch (error) {
        setSubmitSuccess(false);
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(null);
        }, 5000);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-400/40 via-blue-300/40 to-purple-300/40">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/60 via-blue-300/60 to-purple-300/60 opacity-80 blur-md -z-10"></div>
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 px-4 py-12 md:py-20">
        {/* Left: Contact Form */}
        <div className="flex-1 flex items-center">
          <div className="w-full bg-white/30 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-lg border border-white/20">
            <h2 className="text-gray-900 text-3xl sm:text-4xl font-bold mb-2">Just say Hello !</h2>
            <p className="text-gray-800 text-base sm:text-lg mb-8">Let us know more about you !</p>
            
            {submitSuccess === true && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            {submitSuccess === false && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                There was an error submitting your message. Please try again.
              </div>
            )}
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name" 
                    className={`w-full bg-white/80 text-gray-800 placeholder-gray-400 font-semibold rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition border ${
                      errors.firstName ? 'border-red-500' : 'border-gray-200'
                    }`} 
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name" 
                    className={`w-full bg-white/80 text-gray-800 placeholder-gray-400 font-semibold rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition border ${
                      errors.lastName ? 'border-red-500' : 'border-gray-200'
                    }`} 
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Mail" 
                    className={`w-full bg-white/80 text-gray-800 placeholder-gray-400 font-semibold rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition border ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    }`} 
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="flex-1">
                  <input 
                    type="text" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone" 
                    className={`w-full bg-white/80 text-gray-800 placeholder-gray-400 font-semibold rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition border ${
                      errors.phone ? 'border-red-500' : 'border-gray-200'
                    }`} 
                  />
                  {errors.phone && (
                    <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
              </div>
              
              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message" 
                  rows={4} 
                  className={`w-full bg-white/80 text-gray-800 placeholder-gray-400 font-semibold rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition resize-none border ${
                    errors.message ? 'border-red-500' : 'border-gray-200'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-pink-400 text-white font-bold px-10 py-3 rounded-lg mt-2 hover:bg-pink-500 transition disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
              </button>
            </form>
          </div>
        </div>
        
        {/* Right: Contact Info */}
        <div className="flex-1 flex flex-col justify-center items-center text-center mt-12 lg:mt-0 lg:items-start lg:text-left">
          <h2 className="text-gray-900 text-3xl sm:text-4xl font-bold mb-3">
            Contact<br className="hidden sm:block" />Information
          </h2>
          <div className="text-gray-800 text-base sm:text-lg mb-8">
            <p>77 Baker Street<br />Bondowoso. 87655<br />Indonesia</p>
            <p className="mt-4">Call Us : <span className="font-semibold">+62 81 334 61 00</span></p>
            <p className="mt-4">We are open from Monday - Friday<br />08.00 am - 05.00 pm</p>
          </div>
          <h3 className="text-gray-900 text-2xl font-bold mb-2 mt-4">Follow Us</h3>
          <div className="flex gap-6 text-gray-800 font-bold text-lg justify-center lg:justify-start">
            <a href="#" className="hover:text-pink-400 transition">facebook</a>
            <a href="#" className="hover:text-pink-400 transition">instagram</a>
            <a href="#" className="hover:text-pink-400 transition">vimeo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;