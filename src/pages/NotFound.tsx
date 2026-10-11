import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-forest-100 text-forest-800 mx-auto flex items-center justify-center font-serif font-bold text-2xl border border-forest-200">
        404
      </div>

      <div className="space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest-950">
          Page Not Found
        </h1>
        <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
          The portfolio section or document you are looking for has been relocated or does not exist. All primary teaching evidence is accessible via the navigation bar above.
        </p>
      </div>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest-800 text-ivory-50 text-xs font-semibold hover:bg-forest-900 transition-colors shadow-2xs"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          to="/lessons"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-forest-50 text-forest-900 text-xs font-semibold hover:bg-forest-100 border border-forest-200 transition-colors"
        >
          <BookOpen className="w-4 h-4 text-forest-700" />
          <span>Browse Lesson Plans</span>
        </Link>
      </div>
    </div>
  );
};
