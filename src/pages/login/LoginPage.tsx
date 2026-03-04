import { ProForm, ProFormText } from "@ant-design/pro-components";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./login.css";
import bgImage from "../../assets/img_visual_01.webp";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || "/declarations";

  return (
    <div className="login-container">
      {/* LEFT SIDE */}
      <div
        className="login-left"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="logo">
          <img
            src="https://www.nipponexpress.com/assets/img/logo_nittsu_we_find_the_way.svg"
            alt="Nippon Express Logo"
            className="logo-img"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <div className="login-card">
          <div className="login-header">
            <span className="badge">HỆ THỐNG QUẢN TRỊ</span>
            <h2>Chào mừng quay trở lại</h2>
            <p>Vui lòng nhập thông tin để đăng nhập vào tài khoản của bạn.</p>
          </div>

          <ProForm
            submitter={false}
            onFinish={async (values: any) => {
              await login(values.email, values.password);
              navigate(from, { replace: true });
            }}
          >
            <ProFormText
              name="email"
              placeholder="Nhập email của bạn"
              fieldProps={{
                size: "large",
                prefix: <UserOutlined />,
              }}
              rules={[{ required: true, message: "Vui lòng nhập email" }]}
            />

            <ProFormText.Password
              name="password"
              placeholder="Mật khẩu"
              fieldProps={{
                size: "large",
                prefix: <LockOutlined />,
              }}
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
            />

            <div className="login-options">
              <Checkbox>Ghi nhớ đăng nhập</Checkbox>
              <a>Quên mật khẩu?</a>
            </div>

            <Button
              type="primary"
              size="large"
              htmlType="submit"
              block
              className="login-button"
            >
              ĐĂNG NHẬP →
            </Button>
          </ProForm>

          <div className="login-footer">
            Chưa có tài khoản? <a>Liên hệ quản trị viên</a>
          </div>
        </div>
      </div>
    </div>
  );
}
