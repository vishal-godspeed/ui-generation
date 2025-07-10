import React from 'react';

interface Testimonial {
  id: string;
  question: string;
  answer: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  rating: number;
}

interface TestimonialsProps {
  title?: string;
  testimonials?: Testimonial[];
  onCardClick?: (testimonial: Testimonial) => void;
}

const StarIcon: React.FC = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <polygon points="10,1.5 12.59,7.36 18.9,7.97 14,12.26 15.18,18.45 10,15.27 4.82,18.45 6,12.26 1.1,7.97 7.41,7.36"/>
  </svg>
);

const Testimonials: React.FC<TestimonialsProps> = ({
  title = 'Frequently Asked Questions',
  testimonials = [
    {
      id: '1',
      question: 'What is Xultions?',
      answer: 'Xultions is a platform designed to help you build beautiful landing pages with ease, using modern UI components and best practices.',
      author: {
        name: 'Alex Carter',
        role: 'Product Designer, Xultions',
        avatar: '/images/image4.jpeg'
      },
      rating: 5
    },
    {
      id: '2',
      question: 'How do I get started?',
      answer: 'Simply sign up for a free trial, choose a template, and start customizing your landing page. No coding skills required!',
      author: {
        name: 'Sara Lee',
        role: 'UI Engineer, Xultions',
        avatar: '/images/image5.jpeg'
      },
      rating: 5
    },
    {
      id: '3',
      question: 'Is there a free plan?',
      answer: 'Yes, we offer a free plan with basic features so you can try out Xultions before upgrading to a premium plan.',
      author: {
        name: 'John Doe',
        role: 'Frontend Dev, Xultions',
        avatar: '/images/image6.avif'
      },
      rating: 5
    },
    {
      id: '4',
      question: 'Can I use my own domain?',
      answer: 'Absolutely! You can connect your custom domain to your landing page in just a few clicks from your dashboard.',
      author: {
        name: 'Emily Stone',
        role: 'Support Lead, Xultions',
        avatar: '/images/image7.jpeg'
      },
      rating: 5
    },
    {
      id: '5',
      question: 'Is my data secure?',
      answer: 'We take security seriously. All your data is encrypted and stored securely using industry best practices.',
      author: {
        name: 'Michael Fox',
        role: 'Security Lead, Xultions',
        avatar: '/images/image8.jpeg'
      },
      rating: 5
    },
    {
      id: '6',
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time from your account settings. No questions asked.',
      author: {
        name: 'Linda May',
        role: 'Customer Success, Xultions',
        avatar: '/images/image4.jpeg'
      },
      rating: 5
    }
  ],
  onCardClick = (testimonial) => console.log('Card clicked:', testimonial)
}) => {
  return (
    <div className="bg-gradient-to-br from-indigo-400/40 via-blue-300/40 to-purple-300/40 min-h-screen flex flex-col">
      <section className="w-full max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-10">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <button 
              key={testimonial.id}
              className="w-full text-left rounded-2xl shadow-lg p-6 border border-white/20 bg-gradient-to-br from-indigo-400/60 via-blue-300/60 to-purple-300/60 backdrop-blur-md transition hover:shadow-xl hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 group"
              onClick={() => onCardClick(testimonial)}
            >
              <div className="flex items-center mb-3">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-700 transition">
                {testimonial.question}
              </h3>
              <p className="text-gray-800 text-base leading-relaxed mb-6">
                {testimonial.answer}
              </p>
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.author.avatar} 
                  alt={testimonial.author.name} 
                  className="w-10 h-10 rounded-full border-2 border-white shadow mr-3"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://via.placeholder.com/40';
                  }}
                />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.author.name}</div>
                  <div className="text-gray-700 text-xs">{testimonial.author.role}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;