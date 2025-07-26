// app/about/page.tsx
"use client";

import { useModal } from "@/components/modal/context/modal-context";
import CustomModal from "@/components/modal/index";
import ModalDialogueDahboardLayout from "../layout/modal-dahboard";

export default function ModalTestPage() {
  const { openModal } = useModal();
  return (
    <>
      <CustomModal
        title="Example Modal"
        showFooter={false}
      >
        <ModalDialogueDahboardLayout/>
      </CustomModal>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Test Modal Page....</h1>
        <p className="mt-2 text-muted-foreground">
          This is the test page for the modal.
        </p>
        <button onClick={openModal} className="btn btn-primary">
          Open Modal
        </button>
      </div>
    </>
  );
}
