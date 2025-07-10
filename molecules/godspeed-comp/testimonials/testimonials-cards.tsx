import React from 'react';

interface Testimonial {
  id: string;
  text: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  rating: number;
}

interface TestimonialsCardsProps {
  title?: string;
  testimonials?: Testimonial[];
}

const TestimonialsCards: React.FC<TestimonialsCardsProps> = ({
  title = 'What Our Users Say',
  testimonials = [
    {
      id: '1',
      text: 'Xultions is a platform designed to help you build beautiful landing pages with ease, using modern UI components and best practices.',
      author: {
        name: 'Alex Carter',
        role: 'Product Designer, Xultions',
        avatar: '/images/image4.jpeg'
      },
      rating: 5
    },
    {
      id: '2',
      text: 'Simply sign up for a free trial, choose a template, and start customizing your landing page. No coding skills required!',
      author: {
        name: 'Sara Lee',
        role: 'UI Engineer, Xultions',
        avatar: '/images/image5.jpeg'
      },
      rating: 5
    },
    {
      id: '3',
      text: 'Yes, we offer a free plan with basic features so you can try out Xultions before upgrading to a premium plan.',
      author: {
        name: 'John Doe',
        role: 'Frontend Dev, Xultions',
        avatar: '/images/image6.avif'
      },
      rating: 5
    }
  ]
}) => {
  const renderStars = (rating: number) => {
    return '★'.repeat(rating);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-400/40 via-blue-300/40 to-purple-300/40">
      <section className="w-full max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-10">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="rounded-2xl shadow-lg p-6 border border-white/20 bg-gradient-to-br from-indigo-400/60 via-blue-300/60 to-purple-300/60 backdrop-blur-md"
            >
              <div className="flex items-center mb-3">
                <span className="flex text-yellow-400">{renderStars(testimonial.rating)}</span>
              </div>
              <p className="text-gray-800 text-base leading-relaxed mb-6">
                {testimonial.text}
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TestimonialsCards;