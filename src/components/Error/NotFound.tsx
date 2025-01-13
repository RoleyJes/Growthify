export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-red-600">
          Something went wrong
        </h1>
        <p className="text-gray-700 mt-4">
          We searched the ends of the earth, but couldn't find what you're
          looking for :(
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="bg-blue mt-10 px-6 py-2 rounded-[0.375rem] text-[rgba(255,255,255,0.9)] text-[1.1875rem] hover:outline hover:bg-[#001940] transition-all duration-300 mx-auto lg:mx-0">
          Go to Home
        </button>
      </div>
    </div>
  );
}
