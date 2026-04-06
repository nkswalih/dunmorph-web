import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, preventDefault }) => {
  const location = useLocation();

  useEffect(() => {
    if (preventDefault) return;

    const baseTitle = 'Dunmorph';
    
    // Automatically generate title from pathname if not provided
    let dynamicTitle = title;
    if (!dynamicTitle) {
       const path = location.pathname.split('/').pop();
       if (path) {
          // Capitalize first letter and format
          dynamicTitle = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' ');
       } else {
          dynamicTitle = 'Premium Apparel';
       }
    }

    document.title = `${dynamicTitle} | ${baseTitle}`;
    
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
    }
  }, [title, description, location.pathname, preventDefault]);

  return null;
};

export default SEO;
