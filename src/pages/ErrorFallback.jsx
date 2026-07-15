import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function ErrorFallback({ error, reload }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7f7f7] px-6">
      <div className="bg-white rounded-3xl shadow-xl max-w-lg w-full p-10 text-center">

        {/* Icon */}
        <div className="w-20 h-20 mx-auto rounded-full bg-red-100 flex items-center justify-center mb-6">
          <AlertTriangle
            size={42}
            className="text-red-500"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Oops!
        </h1>

        <p className="text-gray-600 mb-6">
          Something went wrong while loading this page.
        </p>

        {/* Error Details */}
        {error && (
          <div className="bg-gray-100 rounded-xl text-left p-4 mb-8 overflow-auto">
            <p className="text-xs font-mono text-red-600 break-all">
              {error.toString()}
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">

          <button
            onClick={reload}
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-2
              bg-[#ff385c]
              hover:bg-[#e31c5f]
              text-white
              rounded-xl
              py-3
              transition
            "
          >
            <RefreshCw size={18} />
            Try Again
          </button>

          <button
            onClick={() => {
              window.location.href="/";
            }}
            className="
              flex-1
              flex
              items-center
              justify-center
              gap-2
              border
              rounded-xl
              py-3
              hover:bg-gray-100
              transition
            "
          >
            <Home size={18} />
            Home
          </button>

        </div>

      </div>
    </div>
  );
}