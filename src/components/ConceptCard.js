export default function ConceptCard({ title, children, icon, color = "blue" }) {
  const colorClasses = {
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-pink-500",
    green: "from-green-500 to-emerald-500",
    orange: "from-orange-500 to-red-500",
    yellow: "from-yellow-500 to-orange-500",
  };

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-all">
      <div className="flex items-start gap-4">
        {icon && (
          <div
            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center flex-shrink-0`}
          >
            <span className="text-xl">{icon}</span>
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
          <div className="text-gray-300 space-y-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
