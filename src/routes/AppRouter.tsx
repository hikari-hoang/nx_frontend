import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import { Spin } from "antd";

// Lazy load
const LoginPage = lazy(() => import("../pages/login/LoginPage"));
// const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const AdminLayout = lazy(() => import("../layout/AdminLayout"));
// const DocumentsPage = lazy(() => import("../pages/DocumentsPage"));
const DeclarationsListPage = lazy(() => import("../pages/declaration/DeclarationsListPage"));
// const CompaniesPage = lazy(() => import("../pages/CompaniesPage"));

const DeclarationsPage = lazy(() => import("../pages/declaration/DeclarationPage"));


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin size="large" />
          </div>
        }
      >
        <Routes>
          {/* Public */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />

          {/* Protected */}
          <Route element={<ProtectedRoute />}>
            <Route element={<AdminLayout />}>
              {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
              {/* Future routes */}
               <Route path="/declarations" element={<DeclarationsListPage />} />
               <Route path="/declarations/:id" element={<DeclarationsPage />} />
              {/* <Route path="/documents" element={<DocumentsPage />} /> */}
              {/* <Route path="/companies" element={<CompaniesPage />} /> */}
            </Route>
          </Route>

          {/* Default redirect */}
          <Route path="*" element={<Navigate to="/declarations" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
