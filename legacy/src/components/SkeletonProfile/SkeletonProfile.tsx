export function SkeletonProfile() {
  return (
    <div className="max-w-[750px] mx-auto p-4 space-y-8 animate-pulse">
      {/* Imitación Header (Círculo y Texto) */}
      <div className="flex flex-col items-center space-y-4">
        <div className="w-32 h-32 bg-gray-700 rounded-full"></div>
        <div className="h-6 bg-gray-700 rounded w-48"></div>
        <div className="h-4 bg-gray-700 rounded w-64"></div>
      </div>

      {/* Imitación Socials */}
      <div className="flex justify-center space-x-4">
        <div className="w-10 h-10 bg-gray-700 rounded-md"></div>
        <div className="w-10 h-10 bg-gray-700 rounded-md"></div>
        <div className="w-10 h-10 bg-gray-700 rounded-md"></div>
      </div>

      {/* Imitación Bloque de Texto */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto"></div>
      </div>

      {/* Imitación Video/Imagen Grande */}
      <div className="w-full h-64 bg-gray-700 rounded-xl"></div>
    </div>
  );
}
