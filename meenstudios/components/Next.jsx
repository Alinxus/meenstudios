import React from 'react';

const Next = () => {
  return (
    <div className="bg-[#F9F7F4] py-16 px-8 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="flex flex-col justify-center bg-white border-3  px-4 ">
          <blockquote className="text-2xl font-semibold text-black mb-4">
            “Design is everything, and these guys have nailed it.”
          </blockquote>
          <div className="flex items-center mt-4 ">
            <img
              src="/image.jpg"
              alt="Kevin O'Leary"
              className="w-16 h-16 object-cover rounded-full"
            />
            <div className="ml-4 text-sm">
              <p className="font-bold text-black">Kevin O'Leary</p>
              <p className="text-gray-500">Shark Tank</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid grid-cols-1 gap-6">
          <div>
            <h3 className="text-xl font-bold text-black mb-2">Totally async</h3>
            <p className="text-gray-700">
              Don’t like meetings? We don’t either; so much so that we’ve outlawed them completely.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black mb-2">Manage with Trello</h3>
            <p className="text-gray-700">
              Manage your design board using Trello. View active, queued and completed tasks with ease.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black mb-2">Invite your team</h3>
            <p className="text-gray-700">
              Invite your entire team, so anyone can submit requests and track their progress.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Next;
