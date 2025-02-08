// import React from 'react'
// import Image from 'next/image'

// const page = () => {
//   return (
//     <div>
//       <section className="text-gray-600 body-font">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
//       <p className="flex-grow sm:pr-16 text-2xl font-serif text-gray-500">
//       I am passionate web developer with a strong foundation in front-end technologies like HTML, CSS, and JavaScript, along with expertise in modern frameworks such as React, and Next JS my goal is to create dynamic, user friendly and visual appealing websites that provide seamless user experience. I believe in continuous learning and growth; I enjoy tackling new challenges that push me to improve my skills.
//       </p>
//       <Image src="/profile picture.jpg"
//       alt="profile"
//       width={550}
//       height={500}
//       className="flex-shrink-0 text-white border-0 py-2 px-8 focus:outline-none mt-10 sm:mt-0"
//       />
//     </div>
//   </div>
// </section>

//     </div>
//   )
// }

// export default page


import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <p className="flex sm:pr-16 text-2xl font-serif text-gray-500 mb-6 sm:mb-0">
              I am a passionate web developer with a strong foundation in front-end technologies like HTML, CSS, and JavaScript, along with expertise in modern frameworks such as React and Next.js. My goal is to create dynamic, user-friendly, and visually appealing websites that provide a seamless user experience. I believe in continuous learning and growth; I enjoy tackling new challenges that push me to improve my skills.
            </p>
            <div className="flex-shrink-0 text-white border-0 py-2 px-8 focus:outline-none mt-10 sm:mt-0">
              <Image
                src="/profile picture.jpg"
                alt="Profile picture of the developer"
                width={500}
                height={500}
                layout="intrinsic" // Ensures better responsiveness
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;

