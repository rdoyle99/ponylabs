import React from "react";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

class App extends React.Component {
  render() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 m-10">
        <div className="max-w-3xl mx-auto m-10">
          <div className="pb-5 border-b border-gray-200 m-10">
            <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
              <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                Pony Labs
              </h3>
              <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
                building cool shit in cool ways.
              </p>
            </div>
          </div>
          <Projects />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
