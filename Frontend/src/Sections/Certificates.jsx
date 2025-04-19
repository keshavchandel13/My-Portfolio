import React from "react";

const certificateData = [
  {
    title: "Responsive Web Design",
    issuer: "FreeCodecamp",
    date: "Sep 2024",
    image: "/freecodecamp.jpg",
    link: "https://www.freecodecamp.org/certification/KeshavChandel/responsive-web-design",
  },
  {
    title: "Introduction to Programming Using Python",
    issuer: "Infosys Springboard",
    date: "Oct 2024",
    image: "/pythonInfo.jpg",
    link: "https://www.linkedin.com/in/keshav-chandel-9ba2a7186/details/certifications/",
  },
  {
    title: "React JS Course",
    issuer: "Scaler",
    date: "Nov 2024",
    image: "/reactScaler.jpg",
    link: "https://www.linkedin.com/in/keshav-chandel-9ba2a7186/details/certifications/",
  },
  {
    title: "Python Pandas",
    issuer: "Simplilearn",
    date: "Feb 2025",
    image: "/pandas.jpg",
    link: "https://www.linkedin.com/in/keshav-chandel-9ba2a7186/details/certifications/",
  },
];

const Certificates = () => {
  return (
    <div className="text-white min-h-screen p-4 pb-8 ">
      <h1 className="text-center font-extrabold text-4xl mb-12">CERTIFICATES</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {certificateData.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col h-full"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />
            <div className="flex flex-col justify-between flex-grow p-4">
              <div>
                <h2 className="text-xl font-semibold">{cert.title}</h2>
                <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                <p className="text-xs text-gray-500 italic">{cert.date}</p>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-indigo-400 hover:text-indigo-300 text-sm font-medium"
              >
                View Certificate →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
