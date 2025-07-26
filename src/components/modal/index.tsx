"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  showCloseIcon?: boolean;
  showFooter?: boolean;
  showCustomHeader?: boolean;
  clickOutsideToClose?: boolean;
  showLoaderOverlay?: boolean;
  customHeader?: React.ReactNode;
  customFooter?: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  footerClassName?: string;
  children?: React.ReactNode;
}

export default function Modal({
  visible,
  onClose,
  title = "Title",
  showCloseIcon = true,
  showFooter = false,
  showCustomHeader = false,
  clickOutsideToClose = true,
  showLoaderOverlay = false,
  customHeader,
  customFooter,
  className,
  bodyClassName,
  footerClassName,
  children,
}: ModalProps) {
  return (
    <AnimatePresence>
      {visible && (
        <Dialog open={visible} onOpenChange={(open) => !open && clickOutsideToClose && onClose()}>
          <DialogOverlay className="fixed inset-0 bg-black/40 z-50" />

          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <DialogContent
              showCloseButton={false}
              className={cn(
                "bg-white rounded-xl shadow-xl w-full max-w-lg mx-auto z-50",
                "flex flex-col overflow-hidden",
                className
              )}
            >
              {/* Header */}
              <div className="bg-gray-50 p-4 border-b border-gray-200 relative">
                <VisuallyHidden>
                  <DialogTitle>{title}</DialogTitle>
                </VisuallyHidden>
                {showCustomHeader ? (
                  customHeader
                ) : (
                  <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                )}
                {showCloseIcon && (
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Body */}
              <div className={cn("relative p-4 flex-1 overflow-y-auto", bodyClassName)}>
                {showLoaderOverlay && <div className="absolute inset-0 bg-white/60 z-10" />}
                <div className="relative z-20">{children}</div>
              </div>

              {/* Footer */}
              {showFooter && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={cn("bg-gray-50 p-4 border-t border-gray-200", footerClassName)}>
                    {customFooter}
                  </div>
                </motion.div>
              )}
            </DialogContent>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}