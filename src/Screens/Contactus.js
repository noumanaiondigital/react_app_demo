import React from 'react'

function Contactus() {
    return (
        <div class="container mx-auto p-4">
        <div class="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 class="text-2xl md:text-4xl font-bold text-center mb-6">Contact Us</h1>
          <div class="flex flex-col md:flex-row md:space-x-8">
            <div class="md:w-1/2">
              <h2 class="text-lg font-semibold mb-4">Get in touch with us</h2>
              <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id velit ut quam blandit malesuada. Donec euismod, sapien vel aliquet sodales, ipsum elit rhoncus elit, vel rutrum ex ante eu ante.</p>
              <ul class="list-disc list-inside mb-4">
                <li>123 Main Street</li>
                <li>New York, NY 10001</li>
                <li>Phone: (555) 555-5555</li>
                <li>Email: info@company.com</li>
              </ul>
            </div>
            <div class="md:w-1/2">
              <h2 class="text-lg font-semibold mb-4">Send us a message</h2>
              <form class="flex flex-col space-y-4">
                <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <label for="name" class="sr-only">Name</label>
                  <input type="text" id="name" name="name" placeholder="Name" class="rounded-lg border-gray-300 px-4 py-2 w-full" required />
                  <label for="email" class="sr-only">Email</label>
                  <input type="email" id="email" name="email" placeholder="Email" class="rounded-lg border-gray-300 px-4 py-2 w-full" required />
                </div>
                <div class="flex flex-col">
                  <label for="subject" class="sr-only">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="Subject" class="rounded-lg border-gray-300 px-4 py-2 w-full" required />
                </div>
                <div class="flex flex-col">
                  <label for="message" class="sr-only">Message</label>
                  <textarea id="message" name="message" placeholder="Message" class="rounded-lg border-gray-300 px-4 py-2 w-full" required></textarea>
                </div>
                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition-colors duration-300">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Contactus