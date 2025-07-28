import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({
  image,
  name,
  shortDescription,
}: {
  image: string;
  name: string;
  shortDescription: string;
}) => {
  return (
    <div className="group relative max-w-4xl w-full mx-auto shadow-lg rounded-2xl overflow-hidden flex flex-row items-center gap-10 p-6 transition-all duration-300 hover:shadow-2xl max-sm:flex-col max-sm:text-center">
      <div className="relative w-[300px] h-[200px] overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={`${name} image`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-center justify-between max-sm:justify-center max-sm:flex-col max-sm:gap-3">
          <h2 className="text-2xl font-semibold text-gray-600">{name}</h2>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-yellow-400 text-black text-sm font-medium px-4 py-2 rounded-full transition-colors hover:bg-yellow-500"
          >
            Explore
            <i className="fa-solid fa-arrow-right transform transition-transform duration-300 group-hover:translate-x-1"></i>
          </Link>
        </div>
        <p className="text-gray-600 text-sm">{shortDescription}</p>
      </div>
    </div>
  );
};

export default Card;
