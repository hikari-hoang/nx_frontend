import { Card, Row, Col, Input, Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";

export default function AdditionalInfoSection() {
  const { control } = useFormContext();

  return (
    <Card title="Thông tin khác" className="mb-6">
      <Form layout="vertical">

        <Row gutter={[24, 20]}>
          <Col span={24}>
            <Form.Item label="Phần ghi chú">
              <Controller
                name="additional.note"
                control={control}
                render={({ field }) => (
                  <Input.TextArea
                    {...field}
                    rows={3}
                    placeholder="Nhập ghi chú"
                  />
                )}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[24, 20]}>
          <Col span={12}>
            <Form.Item label="Số quản lý của nội bộ doanh nghiệp">
              <Controller
                name="additional.internalManagementNumber"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Nhập số quản lý nội bộ"
                  />
                )}
              />
            </Form.Item>
          </Col>
        </Row>

      </Form>
    </Card>
  );
}