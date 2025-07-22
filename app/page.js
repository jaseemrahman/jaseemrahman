import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c7da?q=80&w=2070&auto=format&fit=crop"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20">
          <h1 className="text-5xl font-bold">Your Company Name</h1>
          <p className="mt-4 text-xl">We build amazing things</p>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            We are a team of passionate developers, designers, and strategists who are dedicated to helping our clients achieve their goals. We specialize in creating custom solutions that are tailored to the unique needs of each of our clients.
          </p>
        </div>
      </section>

      {/* Our Works Section */}
      <section id="works" className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Work 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop"
                alt="Work 1"
                width={500}
                height={300}
                objectFit="cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <p className="text-gray-700">A brief description of the project.</p>
              </div>
            </div>
            {/* Sample Work 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                alt="Work 2"
                width={500}
                height={300}
                objectFit="cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 2</h3>
                <p className="text-gray-700">A brief description of the project.</p>
              </div>
            </div>
            {/* Sample Work 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop"
                alt="Work 3"
                width={500}
                height={300}
                objectFit="cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 3</h3>
                <p className="text-gray-700">A brief description of the project.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">App & Web Development</h3>
              <p className="text-gray-700">We build high-quality, scalable, and maintainable applications for web and mobile platforms.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Odoo & ERP</h3>
              <p className="text-gray-700">We provide Odoo implementation, customization, and support services to streamline your business processes.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Designing & Branding</h3>
              <p className="text-gray-700">We create beautiful and effective designs that help you stand out from the competition.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">SEO</h3>
              <p className="text-gray-700">We help you rank higher in search results and drive more traffic to your website.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-20 px-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full px-3 py-2 border rounded-lg"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
