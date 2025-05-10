export const LoadingSection = () => (
  <div className="min-h-screen bg-gray-900 text-white p-4">
    <div className="max-w-7xl mx-auto space-y-8">
      {[...Array(5)].map((_, sectionIndex) => (
        <div key={sectionIndex} className="animate-pulse">
          <div className="flex items-center justify-between mb-4">
            <div className="h-6 w-32 bg-gray-700 rounded"></div>
            <div className="h-4 w-16 bg-gray-700 rounded"></div>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex-none w-48">
                <div className="aspect-[2/3] bg-gray-700 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
); 