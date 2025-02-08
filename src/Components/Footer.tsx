import Image from "next/image"

export default function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-gray-950 mt-10">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src="/logo.jpg"
              alt="logo"
              width={200}
              height={200}
              className="w-14 h-14 text-white p-2 rounded-full"
            />
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2025 All right Reserved —
            <a
              href="https://www.linkedin.com/in/daniyal-pervaiz-2530741a1/"
              className="text-gray-600 ml-1 hover:text-red-800"
              rel="noopener noreferrer"
              target="_blank">
              @DaniyalPervaiz
            </a>
          </p>

        </div>
      </footer>

    </div>
  );
}