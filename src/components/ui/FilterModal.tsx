"use client";

import { ReactNode } from "react";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

interface FilterProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Filter({ isOpen, onClose, children }: FilterProps) {
  const auth = useContext(AuthContext);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[656px] h-[752px] p-6 relative">
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

export function FilterTrigger({
  children,
  onOpen,
}: {
  children: ReactNode;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="flex gap-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
    >
      {children}
    </button>
  );
}

export function FilterContent({ children }: { children: ReactNode }) {
  return <div className="mt-10">{children}</div>;
}

export function FilterHeader({
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
