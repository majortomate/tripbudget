import { useEffect } from 'react';
import reactDom from 'react-dom';

const Portal = ({ children }) => {
  const portalNode = document.createElement('div');
  useEffect(() => {
    document.querySelector('.mainPanel').appendChild(portalNode);
    return () => {
      portalNode.remove();
    };
  }, [portalNode]);

  return reactDom.createPortal(children, portalNode);
};
export default Portal;
