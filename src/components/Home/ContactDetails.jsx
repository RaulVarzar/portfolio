import { motion } from 'framer-motion';

const ContactDetails = ({ closeDetails, ...props }) => {
  return (
    <motion.div {...props} className="flex flex-col">
      <span className="flex flex-row items-center gap-3 text-lg text-base-content">
        <i className="fa-solid fa-envelope"></i>
        raul_varzar@yahoo.com
      </span>
      <i className="fa-solid fa-chevron-down" onClick={closeDetails}></i>
    </motion.div>
  );
};

export default ContactDetails;
