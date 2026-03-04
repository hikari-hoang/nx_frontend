import { Card, Row, Col, Input, Form, Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

export default function AttachmentSection() {
  const { control } = useFormContext();

  return (
    <Card title="Thông tin đính kèm" className="mb-6">
      <Form layout="vertical">

        <Row gutter={[24, 20]}>
          <Col span={6}>
            <Form.Item label="Số tờ khai đính kèm điện tử">
              <Controller
                name="attachments.electronicCount"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập số lượng" />
                )}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[24, 20]}>
          {[1, 2, 3].map((index) => (
            <Col span={8} key={index}>
              <Form.Item label={`Phân loại đính kèm (${index})`}>
                <Controller
                  name={`attachments.items.${index}.type`}
                  control={control}
                  render={({ field }) => (
                    <Select {...field} placeholder="Chọn loại đính kèm" />
                  )}
                />
              </Form.Item>

              <Form.Item label="Số đính kèm">
                <Controller
                  name={`attachments.items.${index}.count`}
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Nhập số lượng" />
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