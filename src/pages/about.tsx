import { useState, useContext } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/Dialog";
import { AuthContext } from "@/context/AuthContext";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const auth = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <DialogTrigger onOpen={() => setIsModalOpen(true)}>
        Open Modal
      </DialogTrigger>

      <Dialog isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogHeader
          title="확인"
          description="Lorem ipsum dolor sit amet consectetur."
        />
        <DialogContent>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-sm mt-4 px-4 py-2 bg-orange-500 text-white rounded-md"
            >
              Confirm
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-sm mt-4 px-4 py-2 bg-orange-200 text-black rounded-md"
            >
              Cancel
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
