import { create } from 'zustand';

interface ApprointmentStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  isEditing: boolean;
  onEdit: () => void;
}

export const useAppointment = create<ApprointmentStore>((set) => ({
  isOpen: false,
  isEditing: true,
  onOpen: () =>
    set(() => ({
      isOpen: true,
    })),
  onClose: () => set(() => ({ isOpen: false })),
  onEdit: () => set(() => ({ isEditing: true })),
}));
