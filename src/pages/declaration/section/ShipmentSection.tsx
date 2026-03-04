import { Card, Row, Col, Input, DatePicker, Form } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";

export default function ShipmentSection() {
  const { control } = useFormContext();

  return (
    <Card title="Vận đơn" className="mb-6">
      <Form layout="vertical">

        {/* ===== HÀNG 1 ===== */}
        <Row gutter={[24, 20]}>
          <Col span={8}>
            <Form.Item label="Số vận đơn">
              <Controller
                name="shipment.billOfLadingNumber"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Số lượng kiện">
              <Controller
                name="shipment.totalPackages"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label="Tổng trọng lượng (Gross)">
              <Controller
                name="shipment.grossWeight"
                control={control}
                render={({ field }) => <Input {...field} addonAfter="KG" />}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* ===== HÀNG 2 ===== */}
        <Row gutter={[24, 20]}>
          <Col span={12}>
            <Form.Item label="Mã địa điểm lưu kho hàng chờ thông quan dự kiến">
              <Controller
                name="shipment.expectedWarehouseCode"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Địa điểm xếp hàng cuối cùng">
              <Controller
                name="shipment.finalLoadingPlace"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* ===== HÀNG 3 ===== */}
        <Row gutter={[24, 20]}>
          <Col span={12}>
            <Form.Item label="Địa điểm dỡ hàng">
              <Controller
                name="shipment.unloadingPlace"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Phương tiện vận chuyển">
              <Controller
                name="shipment.transportMeans"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* ===== HÀNG 4 ===== */}
        <Row gutter={[24, 20]}>
          <Col span={8}>
            <Form.Item label="Ngày hàng đi dự kiến">
              <Controller
                name="shipment.estimatedDepartureDate"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    style={{ width: "100%" }}
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(date) =>
                      field.onChange(date ? date.toISOString() : null)
                    }
                  />
                )}
              />
            </Form.Item>
          </Col>

          <Col span={16}>
            <Form.Item label="Ký hiệu và số hiệu">
              <Controller
                name="shipment.marksAndNumbers"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
          </Col>
        </Row>

      </Form>
    </Card>
  );
}