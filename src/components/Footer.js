import React from "react";
import { MailIcon } from "@heroicons/react/solid";

class Footer extends React.Component {
  render() {
    return (
      <div className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 m-10 mt-20">
        <div className="w-full flex items-center justify-between p-6 space-x-6">
          <div className="flex-1 truncate">
            <div className="flex items-center space-x-3">
              <h3 className="text-gray-900 text-sm font-medium truncate">
                Ryan Doyle
              </h3>
              <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                Owner
              </span>
            </div>
          </div>
          <img
            className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
            src="https://pbs.twimg.com/profile_images/1319031880314949634/m5Drf6Ba_400x400.jpg"
            alt="Ryan Doyle"
          />
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="w-0 flex-1 flex hover:bg-blue-100">
              <a
                href={`mailto:ryan@magicsalesbot.com`}
                className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <MailIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
