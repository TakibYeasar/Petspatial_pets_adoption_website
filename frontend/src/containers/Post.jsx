import React from 'react';
import { FaComments, FaUser } from 'react-icons/fa';
import b5 from '../../public/assets/images/b5.jpg';
import b6 from '../../public/assets/images/b6.jpg';

const posts = [
  {
    imgSrc: b5,
    date: '12 Mar',
    title: 'Germs Thrive the Office! Your Health Risk?',
    link: '#',
    author: 'Admin',
    comments: 20,
    description: 'Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim sunt in culpa qui officia deserunt.',
  },
  {
    imgSrc: b6,
    date: '14 Mar',
    title: 'Germs Thrive the Office! Your Health Risk?',
    link: '#',
    author: 'Admin',
    comments: 20,
    description: 'Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim sunt in culpa qui officia deserunt.',
  },
];

const Post = () => {
  return (
    <section className="bg-gray-100 py-10" id="blogs">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h6 className="text-lg font-semibold mb-2 text-primary">Our Posts</h6>
          <h3 className="text-3xl font-bold">Recent Blog Posts.</h3>
        </div>
        <div className="flex flex-wrap gap-8">
          {posts.map((post, index) => (
            <div key={index} className="w-full md:w-1/2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <a href={post.link}>
                    <img src={post.imgSrc} alt="Blog Post" className="w-full h-auto object-cover" />
                    <div className="absolute bottom-0 left-2 w-24 bg-primary text-white text-center py-4 font-semibold rounded-t-lg">
                      <h4 className="text-lg">{post.date}</h4>
                    </div>
                  </a>
                </div>
                <div className="p-6">
                  <h5 className="text-2xl font-bold mb-4">
                    <a href={post.link} className="text-gray-800 hover:text-primary">{post.title}</a>
                  </h5>
                  <ul className="flex space-x-4 text-gray-600 mb-4">
                    <li>
                      <a href="#" className="flex items-center font-semibold">
                        <FaUser className="mr-2" /> Posted by {post.author}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center font-semibold">
                        <FaComments className="mr-2" /> Comments ({post.comments})
                      </a>
                    </li>
                  </ul>
                  <p className="text-gray-700 mb-4">{post.description}</p>
                  <a href={post.link} className="bg-white border border-primary text-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition duration-300">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Post;
