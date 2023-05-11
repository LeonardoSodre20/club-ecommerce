import { ReactNode } from "react";
import { ModalComponent, ModalForegroundComponent } from "./styles";
import { motion, AnimatePresence } from "framer-motion";

const ModalBase = ({
  children,
  isVisible,
  width,
}: {
  children: ReactNode;
  isVisible: boolean;
  width?: string;
}) => {
  return (
    <AnimatePresence>
      {isVisible ? (
        <ModalForegroundComponent
          as={motion.div}
          key="modal"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: "linear" }}
          exit={{ scale: 0 }}
        >
          <ModalComponent
            style={{
              width: `${width} || '800px`,
            }}
          >
            {children}
          </ModalComponent>
        </ModalForegroundComponent>
      ) : null}
    </AnimatePresence>
  );
};

export default ModalBase;
