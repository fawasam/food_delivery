import "./breadcrumb.css";
import { Link } from "react-router-dom";

const Breadcrumb = ({ path }: { path: string }) => {
  const parts = path.split("/").filter(Boolean);
  console.log(parts);

  // Always start with Home
  const breadcrumbItems = [
    <li key="/" className="breadcrumb-item">
      <Link to="/">Home</Link>
    </li>,
  ];

  // Generate breadcrumb items
  parts.map((part, index) => {
    const to = "/" + parts.slice(0, index + 1).join("/");
    const label = part.charAt(0).toUpperCase() + part.slice(1);
    breadcrumbItems.push(
      <li key={to} className="breadcrumb-item">
        <Link to={to}>{label}</Link>
      </li>
    );
  });

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">{breadcrumbItems}</ol>
    </nav>
  );
};

export default Breadcrumb;
