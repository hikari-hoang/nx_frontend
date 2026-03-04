import { Card, Row, Col, Input, Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";

export default function LicenseSection() {
  const { control } = useFormContext();

  return (
    <Card title="Chứng từ giấy phép" className="mb-6">
      <Form layout="vertical">
        <Row gutter={[24, 20]}>
          {[1, 2, 3, 4, 5].map((index) => (
            <Col span={12} key={index}>
              <Form.Item label={`Giấy phép ${index}`}>
                <Controller
                  name={`licenses.${index}.number`}
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder={`Nhập thông tin giấy phép ${index}`}
                    />
                  )}
                />
              </Form.Item>
            </Col>
          ))}
        </Row>
      </Form>
    </Card>
  );
}