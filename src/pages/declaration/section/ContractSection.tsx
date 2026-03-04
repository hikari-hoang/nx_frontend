import { Card, Row, Col, Input, Form, DatePicker } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";

export default function ContractSection() {
  const { control } = useFormContext();

  return (
    <Card title="Thông tin hợp đồng" className="mb-6">
      <Form layout="vertical">
        <Row gutter={[24, 20]}>
          <Col span={12}>
            <Form.Item label="Địa điểm xếp hàng">
              <Controller
                name="contract.loadingPlace"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập địa điểm xếp hàng" />
                )}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Ngày hợp đồng">
              <Controller
                name="contract.contractDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    style={{ width: "100%" }}
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(d) =>
                      field.onChange(d ? d.toISOString() : null)
                    }
                  />
                )}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Ngày hết hạn">
              <Controller
                name="contract.expiryDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    style={{ width: "100%" }}
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(d) =>
                      field.onChange(d ? d.toISOString() : null)
                    }
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