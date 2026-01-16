export function ProjectCardSkeleton() {
  return (
    <div className="bg-[#1a1f26] rounded-lg overflow-hidden shadow-md animate-pulse border border-gray-700">
      {/* Image Skeleton */}
      <div className="w-full h-48 md:h-56 bg-gray-700"></div>

      {/* Content Skeleton */}
      <div className="p-6">
        <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6 mb-4"></div>

        {/* Footer Skeleton */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div className="h-3 bg-gray-700 rounded w-1/4"></div>
          <div className="h-3 bg-gray-700 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
}

export function ProjectDetailSkeleton() {
  return (
    <div className="min-h-screen pt-24 bg-[#0F1419]">
      <div className="container max-w-6xl mx-auto px-6 py-12">
        {/* Back Button Skeleton */}
        <div className="h-4 bg-gray-700 rounded w-32 mb-8 animate-pulse"></div>

        {/* Header Skeleton */}
        <div className="mb-12 animate-pulse">
          <div className="h-10 bg-gray-700 rounded w-2/3 mb-4"></div>
          <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-4/5"></div>
        </div>

        {/* Gallery Skeleton */}
        <div className="bg-black rounded-lg overflow-hidden mb-6 animate-pulse">
          <div className="w-full h-96 md:h-[500px] bg-gray-700"></div>
        </div>

        {/* Thumbnails Skeleton */}
        <div className="flex gap-4 overflow-x-auto pb-4 animate-pulse">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex-shrink-0 w-24 h-24 rounded-lg bg-gray-700"></div>
          ))}
        </div>

        {/* Details Grid Skeleton */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-[#1a1f26] p-6 rounded-lg">
              <div className="h-5 bg-gray-700 rounded w-1/2 mb-3"></div>
              <div className="h-8 bg-gray-700 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PageHeaderSkeleton() {
  return (
    <div className="text-center mb-16 animate-pulse">
      <div className="h-10 bg-gray-700 rounded w-2/3 mx-auto mb-4"></div>
      <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-5/6 mx-auto"></div>
    </div>
  );
}

export function GridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(count)].map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}
