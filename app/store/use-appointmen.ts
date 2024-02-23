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
  isEditing: false,
  onOpen: () =>
    set(() => ({
      isOpen: true,
      isEditing: false,
    })),
  onClose: () => set(() => ({ isOpen: false, isEditing: false })),
  onEdit: () => set(() => ({ isEditing: true, isOpen: true })),
}));
