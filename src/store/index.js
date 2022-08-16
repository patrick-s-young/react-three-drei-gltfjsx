// zustand
import create from 'zustand';

// state for animation playback
export const useStore = create((set, get) => ({
  actionNames: ['rumba', 'hip_hop', 'joyful_jump'],
  actionName: 'rumba',
  actionNameIndex: 0,
  actionNamesLength: 3,
  prevActionName: undefined,
  playNext: () => {
    const prevActionName = get().actionName;
    const actionNameIndex = (get().actionNameIndex + 1) % get().actionNamesLength;
    const actionName = get().actionNames[actionNameIndex];
    set({ actionName, actionNameIndex, prevActionName });
  }
}))
