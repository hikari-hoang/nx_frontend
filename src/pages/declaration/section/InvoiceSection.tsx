import { Card, Row, Col, Input, Form, DatePicker, Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";

export default function InvoiceSection() {
  const { control } = useFormContext();

  return (
    <Card title="Thông tin hóa đơn" className="mb-6">
      <Form layout="vertical">

        <Row gutter={[24, 20]}>
          <Col span={6}>
            <Form.Item label="Phân loại hình thức hóa đơn">
              <Controller
                name="invoice.type"
                control={control}
                render={({ field }) => (
                  <Select {...field} placeholder="Chọn loại hóa đơn" />
                )}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Số hóa đơn">
              <Controller
                name="invoice.number"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập số hóa đơn" />
                )}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Ngày phát hành">
              <Controller
                name="invoice.issueDate"
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
            <Form.Item label="Phương thức thanh toán">
              <Controller
                name="invoice.paymentMethod"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Nhập phương thức thanh toán"
                  />
                )}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[24, 20]}>
          <Col span={6}>
            <Form.Item label="Điều kiện giá hóa đơn">
              <Controller
                name="invoice.priceCondition"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Ví dụ: DAP, CIF..." />
                )}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Tổng trị giá hóa đơn">
              <Controller
                name="invoice.totalAmount"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Nhập tổng trị giá" />
                )}
              />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Mã đồng tiền hóa đơn">
              <Controller
                name="invoice.currency"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="USD, VND..." />
                )}
              />
            </Form.Item>
          </Col>
        </Row>

      </Form>
    </Card>
  );
}