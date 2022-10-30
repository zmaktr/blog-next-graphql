import React, { useContext } from "react";
import Link from "next/link";

const categories = [
  { name: "React", slug: "react" },
  { name: "Python", slug: "python" },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b border-blue-400 inline-block w-full py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              GraphCMS
            </span>
          </Link>
        </div>
        <div className="md:float-right block">
          {categories.map((category) => (
            <Link key={category.slug} href={`/categories/${category.slug}`}>
              <span className="float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
