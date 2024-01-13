import { motion } from 'framer-motion';

const HtmlElement = ({ tag, children, ...props }) => {
  return (
    <motion.div
      {...props}
      className={
        'flex flex-col' + (tag === 'h1' ? ' leading-none' : ' leading-tight')
      }
    >
      <span className="text-sm lg:text-lg text-base-content opacity-30">
        &lt;{tag}&gt;
      </span>
      <div className="flex flex-col gap-2 ml-8">{children}</div>
      <span className="text-sm lg:text-lg text-base-content opacity-30">
        &lt;/{tag}&gt;
      </span>
    </motion.div>
  );
};

export default HtmlElement;
