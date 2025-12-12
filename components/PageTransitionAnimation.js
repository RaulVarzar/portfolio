import { AnimatePresence } from "framer-motion";
import { useTransitionNavigation } from "../hooks/useTransitionNavigation";

// This component is used to exit animate the elements of a page when going to another page. Just wrap the entire page in PageTransitionAnimation and make sure every child is a motion component. needs useTransitionNavigation hook to work

const PageTransitionAnimation = ({ children }) => {
  const { shouldExit, handleExitComplete } = useTransitionNavigation();

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!shouldExit && <>{children}</>}
    </AnimatePresence>
  );
};

export default PageTransitionAnimation;
