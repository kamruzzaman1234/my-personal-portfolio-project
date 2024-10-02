const About = () => {
    return (
      <div className="py-20 mb-10">
        <div className="text-center">
          <h1 className="text-6xl font-bold">About Me</h1>
        </div>
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center justify-center bg-gray-200 p-4 rounded-lg">
              one
            </div>
            <div className="flex items-center justify-center bg-gray-200 p-4 rounded-lg">
              two
            </div>
            <div className="flex items-center justify-center bg-gray-200 p-4 rounded-lg">
              three
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  