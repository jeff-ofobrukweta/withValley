"use client";

import { useEffect } from "react";
import { useModal } from "../context/modal-context";

export default function AutoOpenModalTrigger() {
  const { openModal } = useModal();

  useEffect(() => {
    openModal();
  }, [openModal]);

  return null; // no UI needed — triggers modal on mount
}
