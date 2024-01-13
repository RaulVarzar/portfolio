import { useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Contact = ({ makeActive }) => {
  const ref = useRef();

  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      makeActive('contact');
    }
  }, [isInView]);

  return <div ref={ref}>CONTACT SECTION</div>;
};

export default Contact;
