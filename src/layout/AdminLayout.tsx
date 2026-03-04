import ProLayout from "@ant-design/pro-layout";
import { Dropdown, Input, Badge } from "antd";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Layout.css"

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();

  return (
    <ProLayout
      location={{ pathname: location.pathname }}
      layout="top"
      fixedHeader
      style={{ minHeight: "100vh" }}
      token={{
        header: {
          // colorBgHeader: "#554777",
          colorTextMenu: "#1a005d",
          colorTextMenuActive: "#8ec300",
          colorTextMenuSelected: "#8ec300",
        },
      }}
      route={{
        routes: [{ path: "/declarations", name: "Danh sách tờ khai" }],
      }}
      menuItemRender={(item, dom) => (
        <div
          onClick={() => navigate(item.path || "/")}
          style={{ cursor: "pointer" }}
        >
          {dom}
        </div>
      )}
      headerTitleRender={() => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            cursor: "pointer",
          }}
          onClick={() => navigate("/declarations")}
        >
          <img
            src="https://www.nipponexpress.com/assets/img/logo_nittsu_we_find_the_way.svg"
            alt="logo"
            style={{
              height: 32,
            }}
          />
          
        </div>
      )}
      actionsRender={() => [
        // SEARCH BOX
        <Input
          key="search"
          placeholder="Tìm kiếm..."
          prefix={<SearchOutlined />}
          style={{
            width: 220,
            borderRadius: 20,
          }}
          className="custom-search"
        />,

        // NOTIFICATION
        <Badge key="notification" count={3} size="small">
          <BellOutlined
            style={{
              fontSize: 18,
              // color: "#ffffff",
              marginLeft: 16,
              cursor: "pointer",
            }}
          />
        </Badge>,
      ]}
      avatarProps={{
        src: "https://i.pravatar.cc/40",
        title: user?.email,
        render: (_, dom) => (
          <Dropdown
            menu={{
              items: [
                { key: "profile", label: "Profile" },
                {
                  key: "logout",
                  label: "Logout",
                  onClick: () => {
                    logout();
                    navigate("/login");
                  },
                },
              ],
            }}
          >
            {dom}
          </Dropdown>
        ),
      }}
    >
      <div
        style={{
          // padding: 12,
          minHeight: "calc(100vh - 64px)",
          background: "#f5f7fa",
        }}
      >
        <Outlet />
      </div>
    </ProLayout>
  );
}