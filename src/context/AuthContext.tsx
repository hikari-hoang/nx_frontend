import React, { createContext, useContext, useEffect, useState } from "react";
import { authService, type AuthResponse } from "../service/authService";
import { triggeringService } from "../service/triggeringService";

interface AuthContextType {
  user: AuthResponse | null;
  isAuthenticated: boolean;
  loading: boolean;

  triggeringStatus: boolean;
  startTriggering: () => Promise<void>;
  stopTriggering: () => Promise<void>;

  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthResponse | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem("access_token") ? true : false,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [triggeringStatus, setTriggeringStatus] = useState<boolean>(JSON.parse(
  localStorage.getItem("triggerStatus") || "false"
));

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("access_token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        await loadTriggeringStatus();
        const res = await authService.getMe();
        setUser(res);
        setIsAuthenticated(true);
      } catch (error) {
        logout();
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await authService.login({ email, password });

    if (res) {
      setIsAuthenticated(true);
      const { token, refreshToken, tokenExpires } = res;

      localStorage.setItem("access_token", token);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("tokenExpires", tokenExpires.toString());

      // gọi me
      const meRes = await authService.getMe();

      setUser(meRes);
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("tokenExpires");
    setIsAuthenticated(false);
    setUser(null);
  };

  const loadTriggeringStatus = async () => {
    try {
      const res = await triggeringService.getStatusTrigger();
      if(res) {
        setTriggeringStatus(res.status);
       
        localStorage.setItem("triggerStatus", JSON.stringify(res.status) );
      }
      
    } catch (error) {
      console.error("Load triggering status error", error);
    }
  };

  const startTriggering = async () => {
    await triggeringService.start_trigger();
    setTriggeringStatus(true);
  };

  const stopTriggering = async () => {
    await triggeringService.stop_trigger();
    setTriggeringStatus(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        triggeringStatus,
        startTriggering,
        stopTriggering,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
