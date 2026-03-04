import { Card } from "antd";

const FormSection = ({ title, children }: any) => (
  <Card
    title={title}
    style={{
      border: "1px solid #e5e7eb",
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      marginBottom: 10, 
    }}
  >
    {children}
  </Card>
);

export default FormSection
