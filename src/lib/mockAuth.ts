// Mock authentication store using localStorage — no backend involved.
export type UserRole = "buyer" | "supplier";

export interface MockUser {
  email: string;
  role: UserRole;
  name?: string;
  createdAt: string;
}

const KEY = "supplycarrier_auth";

export const mockAuth = {
  signIn(email: string, role: UserRole = "buyer"): MockUser {
    const user: MockUser = {
      email,
      role,
      name: email.split("@")[0],
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem(KEY, JSON.stringify(user));
    return user;
  },
  signOut() {
    localStorage.removeItem(KEY);
  },
  getUser(): MockUser | null {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? (JSON.parse(raw) as MockUser) : null;
    } catch {
      return null;
    }
  },
};
