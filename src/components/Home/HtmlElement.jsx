import { motion } from 'framer-motion';

const HtmlElement = ({ tag, children, blur, variants, ...props }) => {
  return (
    <motion.div
      {...props}
      className={
        'flex flex-col text-left cursor-default ' +
        (tag === 'h1' ? ' leading-none' : ' leading-tight')
      }
      variants={variants}
    >
      <span
        className={
          'text-sm lg:text-lg text-left ml-0 text-neutral-content w-fit opacity-25 transition-all ease-[cubic-bezier(.03,.98,.52,.99)] ' +
          (blur && ' blur-xs scale-90')
        }
      >
        &lt;{tag}&gt;
      </span>
      <motion.div
        variants={variants}
        className="flex flex-col gap-2 ml-4 md:ml-8"
      >
        {children}
      </motion.div>
      <span
        className={
          'text-sm lg:text-lg text-left text-neutral-content opacity-25 transition-all  w-fit ease-[cubic-bezier(.03,.98,.52,.99)]' +
          (blur && ' blur-xs scale-90')
        }
      >
        &lt;/{tag}&gt;
      </span>
    </motion.div>
  );
};

export default HtmlElement;
