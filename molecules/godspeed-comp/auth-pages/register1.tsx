import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

const Register1: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      // TODO: Submit form data to server
      console.log('Form submitted:', formData);
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });
    }
  };

  const handleSocialLogin = (provider: 'google' | 'github') => {
    // TODO: Implement social login
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="w-full max-w-5xl mx-auto flex rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-900">
        {/* Left: Gradient panel */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-b from-purple-400/80 via-purple-700/80 to-black/90 p-12 relative">
          <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{ boxShadow: '0 0 80px 10px #a78bfa44' }}></div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-6">
              <span className="inline-block w-3 h-3 bg-white rounded-full mr-2 align-middle"></span>
              <span className="text-lg font-semibold tracking-wide text-white/90">OnlyPipe</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">Get Started with Us</h2>
            <p className="text-zinc-200/80 mb-10 max-w-xs">Complete these easy steps to register your account.</p>
            <div className="space-y-3 w-full max-w-xs">
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black font-bold mr-4">1</div>
                <span className="text-white font-medium">Sign up your account</span>
              </div>
              <div className="flex items-center opacity-60">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-700 text-white font-bold mr-4">2</div>
                <span className="text-white">Set up your workspace</span>
              </div>
              <div className="flex items-center opacity-60">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-700 text-white font-bold mr-4">3</div>
                <span className="text-white">Set up your profile</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right: Form panel */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-14 bg-zinc-950">
          <h2 className="text-2xl font-heading font-bold text-white mb-2">Sign Up Account</h2>
          <p className="text-zinc-400 mb-6">Enter your personal data to create your account.</p>
          
          <div className="flex space-x-4 mb-6">
            <button 
              type="button"
              onClick={() => handleSocialLogin('google')}
              className="flex-1 btn bg-white text-black flex items-center justify-center gap-2 shadow hover:bg-zinc-100"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.805 10.023h-9.765v3.954h5.617c-.242 1.242-1.484 3.648-5.617 3.648-3.375 0-6.125-2.789-6.125-6.125s2.75-6.125 6.125-6.125c1.922 0 3.211.82 3.953 1.523l2.703-2.633c-1.703-1.57-3.891-2.539-6.656-2.539-5.523 0-10 4.477-10 10s4.477 10 10 10c5.773 0 9.594-4.055 9.594-9.773 0-.656-.07-1.156-.156-1.563z"/>
              </svg>
              Google
            </button>
            <button 
              type="button"
              onClick={() => handleSocialLogin('github')}
              className="flex-1 btn bg-zinc-800 text-white flex items-center justify-center gap-2 shadow hover:bg-zinc-700"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              Github
            </button>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="flex-1 h-px bg-zinc-700"></div>
            <span className="px-3 text-zinc-500 text-sm">Or</span>
            <div className="flex-1 h-px bg-zinc-700"></div>
          </div>
          
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
              <div className="flex-1">
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="eg. John" 
                  className={`w-full rounded-md p-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.firstName ? 'border border-red-500' : ''
                  }`}
                />
                {errors.firstName && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.firstName}</span>
                )}
              </div>
              <div className="flex-1">
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="eg. Francisco" 
                  className={`w-full rounded-md p-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                    errors.lastName ? 'border border-red-500' : ''
                  }`}
                />
                {errors.lastName && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.lastName}</span>
                )}
              </div>
            </div>
            
            <div>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="eg. johnfrans@gmail.com" 
                className={`w-full rounded-md p-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  errors.email ? 'border border-red-500' : ''
                }`}
              />
              {errors.email && (
                <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>
              )}
            </div>
            
            <div>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password" 
                  className={`w-full rounded-md p-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary-500 pr-12 ${
                    errors.password ? 'border border-red-500' : ''
                  }`}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password ? (
                <span className="text-xs text-red-500 mt-1 block">{errors.password}</span>
              ) : (
                <span className="block text-xs text-zinc-500 mt-1">Must be at least 8 characters.</span>
              )}
            </div>
            
            <button type="submit" className="btn w-full mt-2">Sign Up</button>
          </form>
          
          <p className="text-zinc-400 text-center mt-6">
            Already have an account? <a href="#" className="text-white underline">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register1;