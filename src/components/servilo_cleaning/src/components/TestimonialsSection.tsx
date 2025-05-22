import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-8 bg-[#1a1a1a]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-b from-[#F9F37A] to-[#D2A95E] bg-clip-text text-transparent inline-block">What Our Users Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. See what our users have to say about their experience.
          </p>
        </div>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {/* Testimonial 1 */}
            <CarouselItem className="md:basis-1/2">
              <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md h-full border border-[#D2A95E]/20">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-[#D2A95E]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 mb-4">
                  "I was skeptical at first, but the app exceeded my expectations. The plumber arrived on time and fixed my issue quickly. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-[#D2A95E]"></div>
                  <div className="ml-3">
                    <p className="font-medium text-white">Sarah Johnson</p>
                    <p className="text-sm text-gray-400">Homeowner</p>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Testimonial 2 */}
            <CarouselItem className="md:basis-1/2">
              <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md h-full border border-[#D2A95E]/20">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-[#D2A95E]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 mb-4">
                  "The app made it so easy to find a reliable cleaner for my home. The tracking feature was particularly useful as I could see exactly when they would arrive."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-[#D2A95E]"></div>
                  <div className="ml-3">
                    <p className="font-medium text-white">Michael Brown</p>
                    <p className="text-sm text-gray-400">Apartment Resident</p>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Testimonial 3 */}
            <CarouselItem className="md:basis-1/2">
              <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md h-full border border-[#D2A95E]/20">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-[#D2A95E]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-400 mb-4">
                  "As someone who's always busy, this app has been a lifesaver. I can quickly book services without having to make multiple phone calls or search online."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-[#D2A95E]"></div>
                  <div className="ml-3">
                    <p className="font-medium text-white">Jennifer Lee</p>
                    <p className="text-sm text-gray-400">Business Owner</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;