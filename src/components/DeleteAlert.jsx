"use client";
import { authClient } from "@/app/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function DeleteAlert({ car }) {
  const { _id } = car;
  const router = useRouter();

  const handleDelete = async () => {


    const {data:tokenData} = await authClient.token()


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization :`Bearer ${tokenData?.token}`
      },
    });
    const data = await res.json();

      if(res.ok){
      toast.success("Car deleted successfully!");
      router.refresh();
    }else {
      toast.error("Failed to delete car.");
    }
    
   
  };

  return (
    <AlertDialog>
      <Button className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-red-400 bg-red-950/20 border border-red-500/30 hover:bg-red-950/60 hover:border-red-500/50 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.05)] hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]">
        <Trash2 size={14} className="text-red-400" />
        <span>Delete</span>
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px] bg-[#0b1119] border border-gray-800 text-zinc-100 rounded-2xl overflow-hidden shadow-2xl">
            <AlertDialog.CloseTrigger className="text-zinc-500 hover:text-zinc-300" />
            <AlertDialog.Header className="px-6 pt-6">
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading className="text-base font-black text-zinc-100 uppercase tracking-wide">
                Delete car permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body className="px-6 py-4 bg-[#0b1119]">
              <p className="text-sm text-zinc-400 leading-relaxed">
                This will permanently delete this vehicle and all of its data.
                This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="border-t border-gray-800/50 pt-4 px-6 pb-6 bg-[#0b1119] flex justify-end gap-3">
              <Button
                slot="close"
                variant="tertiary"
                className="bg-zinc-900 text-zinc-400 hover:bg-zinc-800 font-bold text-xs uppercase tracking-wider rounded-xl px-5 py-2.5 transition-colors"
              >
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                slot="close"
                variant="danger"
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl px-5 py-2.5 shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-colors"
              >
                Delete Car
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
