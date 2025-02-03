import React, { useState } from 'react';
import { MessageSquarePlus } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  message: string;
  avatar: string;
}

const TestimonialForm = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      name: "Sarah Chen",
      role: "Tech Lead",
      message: "Eugene's blockchain expertise and teaching ability are outstanding. His contributions to our project were invaluable.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      name: "James Kimani",
      role: "Student Developer",
      message: "The ICP bootcamp changed my career trajectory. Eugene's mentorship was instrumental in my growth.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTestimonial = {
      ...formData,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`
    };
    setTestimonials([...testimonials, newTestimonial]);
    setFormData({ name: '', role: '', message: '' });
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="flex items-start space-x-4">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-blue-400"
              />
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-blue-400">{testimonial.role}</p>
                <p className="text-gray-300 mt-2">{testimonial.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
          <MessageSquarePlus className="w-6 h-6 mr-2 text-blue-400" />
          Add Your Testimonial
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Role</label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none h-32"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-300"
          >
            Submit Testimonial
          </button>
        </div>
      </form>
    </div>
  );
};

export default TestimonialForm;