import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  agreeToPrivacyPolicy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  agreeToPrivacyPolicy?: string;
}

const ContactFormImage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreeToPrivacyPolicy: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    
    // Handle checkbox separately
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
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
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
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
    
    if (!formData.agreeToPrivacyPolicy) {
      newErrors.agreeToPrivacyPolicy = 'You must agree to the Privacy Policy';
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
          name: '',
          email: '',
          phone: '',
          message: '',
          agreeToPrivacyPolicy: false
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
    <section>
      <div className="relative w-full h-64 sm:h-80 md:h-96">
        <img 
          className="absolute h-full w-full object-cover object-center" 
          src="https://bucket.material-tailwind.com/magic-ai/bbe71871de8b4d6f23bb0f17a6d5aa342f3dea72677ba7238b18defa3741244d.jpg" 
          alt="nature image" 
        />
        <div className="absolute inset-0 h-full w-full bg-black/50"></div>
        <div className="relative pt-16 sm:pt-24 md:pt-28 text-center px-2 sm:px-6">
          <h2 className="tracking-normal font-semibold leading-tight text-white mb-2 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl">
            Contact Information
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-white mb-4 sm:mb-9 opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi nec, ultricies metus.
          </p>
        </div>
      </div>
      
      <div className="-mt-10 sm:-mt-16 mb-8 px-2 sm:px-4 md:px-8">
        <div className="container mx-auto">
          <div className="py-8 sm:py-12 flex flex-col md:flex-row md:justify-center rounded-xl border border-gray-200 bg-white shadow-md gap-8 md:gap-0">
            {/* Contact Information */}
            <div className="my-4 md:my-8 grid gap-6 px-2 sm:px-4 md:w-1/2">
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                </svg>
                <p className="text-base leading-relaxed text-gray-800 font-bold">123 Main Street, Los Angeles, CA</p>
              </div>
              
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"></path>
                </svg>
                <p className="text-base leading-relaxed text-gray-800 font-bold">+1 123 456 7890</p>
              </div>
              
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                </svg>
                <p className="text-base leading-relaxed text-gray-800 font-bold">info@lahospital.com</p>
              </div>
              
              <div className="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
                  <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd"></path>
                </svg>
                <p className="text-base leading-relaxed text-gray-800 font-bold">Open Support Ticket</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="py-4 md:py-8 md:w-1/2 flex flex-col justify-center">
              {submitSuccess === true && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md mx-auto max-w-md">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              
              {submitSuccess === false && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md mx-auto max-w-md">
                  There was an error submitting your message. Please try again.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
                <div className="mb-4">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-3 text-sm text-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none box-border`} 
                    placeholder="Enter your name" 
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500 text-xs">{errors.name}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-3 text-sm text-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none box-border`} 
                    placeholder="Enter your email" 
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-3 text-sm text-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none box-border`} 
                    placeholder="Enter your phone number" 
                  />
                  {errors.phone && (
                    <p className="mt-1 text-red-500 text-xs">{errors.phone}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md px-3 py-3 text-sm text-gray-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none box-border`} 
                    placeholder="Enter your message" 
                    rows={4}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-xs">{errors.message}</p>
                  )}
                </div>
                
                <div className="flex items-center mb-4">
                  <input 
                    type="checkbox" 
                    id="privacy-policy" 
                    name="agreeToPrivacyPolicy"
                    checked={formData.agreeToPrivacyPolicy}
                    onChange={handleChange}
                    className={`mr-2 rounded border-gray-300 text-primary-600 focus:ring-primary-500 ${
                      errors.agreeToPrivacyPolicy ? 'border-red-500' : ''
                    }`} 
                  />
                  <label htmlFor="privacy-policy" className="text-gray-500 text-sm">
                    You agree to <a href="#" className="font-medium text-gray-700 hover:text-gray-900">Privacy Policy</a>.
                  </label>
                </div>
                {errors.agreeToPrivacyPolicy && (
                  <p className="mt-1 mb-4 text-red-500 text-xs">{errors.agreeToPrivacyPolicy}</p>
                )}
                
                <button 
                  className="w-full mt-6 py-3 px-6 rounded-lg bg-gray-900 text-white font-bold text-xs uppercase shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Contact Us'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormImage;