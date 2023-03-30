import React from 'react'

function Aboutus() {
    return (
        <div class="bg-white">
        <div class="container mx-auto py-16 px-4">
          <div class="flex flex-col md:flex-row md:justify-between">
            <div class="md:w-1/2">
              <h1 class="text-4xl font-bold mb-8">About Us</h1>
              <p class="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada vulputate nunc a eleifend. Fusce sed efficitur eros. Duis ut ornare nulla, eget malesuada neque.</p>
              <p class="text-lg mb-8">Donec maximus, lorem a consectetur ullamcorper, mi augue porttitor libero, non ultricies elit quam eu nulla. Maecenas suscipit vitae nisi in ultricies. Praesent hendrerit ipsum et dolor consectetur, sit amet malesuada magna egestas.</p>
              <p class="text-lg mb-8">Suspendisse finibus, lectus quis malesuada suscipit, turpis felis ullamcorper odio, at molestie nisi ipsum sed turpis. In lacinia, nulla id hendrerit gravida, eros ipsum bibendum libero, quis consectetur eros enim non tellus.</p>
            </div>
            <div class="md:w-1/2">
              <img  src="/assets/images/1.jpg" alt="Company image" class="rounded-lg shadow-md" />
            </div>
          </div>
        </div>
        <div class="bg-gray-900 text-white py-16 px-4">
          <div class="container mx-auto">
            <div class="flex flex-col md:flex-row md:justify-between">
              <div class="md:w-1/2">
                <h2 class="text-2xl font-bold mb-8">Our Mission</h2>
                <p class="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada vulputate nunc a eleifend. Fusce sed efficitur eros. Duis ut ornare nulla, eget malesuada neque.</p>
                <p class="text-lg mb-8">Donec maximus, lorem a consectetur ullamcorper, mi augue porttitor libero, non ultricies elit quam eu nulla. Maecenas suscipit vitae nisi in ultricies. Praesent hendrerit ipsum et dolor consectetur, sit amet malesuada magna egestas.</p>
              </div>
              <div class="md:w-1/2">
                <h2 class="text-2xl font-bold mb-8">Our Values</h2>
                <ul class="list-disc list-inside">
                  <li class="text-lg mb-4">Lorem ipsum dolor sit amet</li>
                  <li class="text-lg mb-4">Consectetur adipiscing elit</li>
                  <li class="text-lg mb-4">Suspendisse malesuada vulputate</li>
                  <li class="text-lg mb-4">Fusce sed efficitur eros</li>
                  <li class="text-lg mb-4">Duis ut ornare nulla</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Aboutus