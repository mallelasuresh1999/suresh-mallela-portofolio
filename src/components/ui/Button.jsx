export function Button({ children, href }) {
    return (
      <a
        href={href}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  