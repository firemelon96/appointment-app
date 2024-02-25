import { create } from 'zustand';

interface ApprointmentStore {
  isOpen: boolean;
  isEditing: boolean;
  isShow: boolean;
  onOpen: () => void;
  onClose: () => void;
  showForm: () => void;
  onEdit: () => void;
}

export const useAppointment = create<ApprointmentStore>((set) => ({
  isOpen: false,
  isShow: false,
  isEditing: false,
  onOpen: () =>
    set(() => ({
      isOpen: true,
      isEditing: false,
      isShow: true,
    })),
  onClose: () =>
    set(() => ({ isOpen: false, isEditing: false, isShow: false })),
  showForm: () => set(() => ({ isEditing: false, isOpen: true, isShow: true })),
  onEdit: () => set(() => ({ isOpen: true, isEditing: true, isShow: true })),
}));
