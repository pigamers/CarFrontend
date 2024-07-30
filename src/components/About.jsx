import React from 'react'

export default function About() {
    return (
        <div className='py-16 font-graduate bg-one dark:bg-five dark:text-one'>
            <div class="mx-auto max-w-7xl px-4">
                <div class="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
                    <p class="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
                        Made with love, right here in India
                    </p>
                    <p class="max-w-4xl text-base text-gray-600 md:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                        veritatis voluptates neque itaque repudiandae sint, explicabo assumenda
                        quam ratione placeat?
                    </p>
                </div>
                <div class="w-full space-y-4">
                    <img
                        class="h-[200px] w-full rounded-xl object-cover md:h-full"
                        src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
                        alt=""
                    />
                </div>
                <div class="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
                    <div class="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-5 w-5"
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <p class="w-full text-xl font-semibold  text-gray-900">
                            Bengaluru office
                        </p>
                        <p class="w-full text-base text-gray-700">Mon-Sat 9am to 5pm.</p>
                        <p class="text-sm font-medium">
                            100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN
                        </p>
                    </div>
                    <div class="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-5 w-5"
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <p class="w-full text-xl font-semibold  text-gray-900">Head office</p>
                        <p class="w-full text-base text-gray-700">Mon-Sat 9am to 5pm.</p>
                        <p class="text-sm font-medium">
                            12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN
                        </p>
                    </div>
                    <div class="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-5 w-5"
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <p class="w-full text-xl font-semibold  text-gray-900">
                            Karnataka office
                        </p>
                        <p class="w-full text-base text-gray-700">Mon-Sat 9am to 5pm.</p>
                        <p class="text-sm font-medium">
                            42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka
                            560025 IN
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
