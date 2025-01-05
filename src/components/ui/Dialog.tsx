"use client";

import { ReactNode } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Dialog({ isOpen, onClose, children }: DialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 left-3 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogTrigger({
  children,
  onOpen,
}: {
  children: ReactNode;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600"
    >
      {children}
    </button>
  );
}

export function DialogContent({ children }: { children: ReactNode }) {
  return <div className="mt-4">{children}</div>;
}

export function DialogHeader({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-lg font-bold">{title}</h2>
      {description && <p className="text-orange-600">{description}</p>}
    </div>
  );
}
